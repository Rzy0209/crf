package com.wn.sjpt.crf.es.service;

import com.alibaba.fastjson.JSONArray;
import com.alibaba.fastjson.JSONObject;
import com.wn.sjpt.crf.domain.CrfEsData;
import com.wn.sjpt.crf.es.dto.Analyzer;
import com.wn.sjpt.crf.es.dto.EsCons;
import com.wn.sjpt.crf.service.CrfEsDataService;
import com.wn.sjpt.crf.util.CommonUtils;
import org.apache.lucene.search.join.ScoreMode;
import org.elasticsearch.action.admin.indices.close.CloseIndexRequest;
import org.elasticsearch.action.admin.indices.close.CloseIndexResponse;
import org.elasticsearch.action.admin.indices.create.CreateIndexRequest;
import org.elasticsearch.action.admin.indices.create.CreateIndexRequestBuilder;
import org.elasticsearch.action.admin.indices.create.CreateIndexResponse;
import org.elasticsearch.action.admin.indices.delete.DeleteIndexRequest;
import org.elasticsearch.action.admin.indices.delete.DeleteIndexResponse;
import org.elasticsearch.action.admin.indices.exists.indices.IndicesExistsRequest;
import org.elasticsearch.action.admin.indices.open.OpenIndexRequest;
import org.elasticsearch.action.admin.indices.open.OpenIndexResponse;
import org.elasticsearch.action.search.SearchResponse;
import org.elasticsearch.client.Client;
import org.elasticsearch.client.IndicesAdminClient;
import org.elasticsearch.common.xcontent.XContentBuilder;
import org.elasticsearch.common.xcontent.XContentFactory;
import org.elasticsearch.common.xcontent.XContentType;
import org.elasticsearch.index.query.ExistsQueryBuilder;
import org.elasticsearch.index.query.NestedQueryBuilder;
import org.elasticsearch.index.query.QueryBuilders;
import org.elasticsearch.search.SearchHits;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.HashMap;
import java.util.List;
import java.util.Map;

import static com.wn.sjpt.crf.es.dto.EsCons.Field.*;
import static com.wn.sjpt.crf.es.dto.EsCons.DataType.*;
import static com.wn.sjpt.crf.util.Cons.DataType.*;
import static com.wn.sjpt.crf.util.Cons.DataType.DATE;

/**
 * @author pingtai
 */


@Service
public class EsIndexService {
    private final String defaultType = "default";
    /**
     * es客户端
     */
    private final Client client;
    /**
     * cdr配置
     */
    private final EsCrfProperties prop;

    private final String propKey = "properties";

    private final CrfEsDataService dataService;

    @Autowired
    public EsIndexService(Client client, EsCrfProperties prop, CrfEsDataService dataService) {
        this.client = client;
        this.prop = prop;
        this.dataService = dataService;
    }

    /**
     * 关闭索引
     *
     * @param index
     * @return
     */
    public JSONObject closeIndex(final String index) {
        String closeIndex = CommonUtils.isEmpty(index) ? prop.getIndex() : index;
        IndicesAdminClient iac = client.admin().indices();
        IndicesExistsRequest ier = new IndicesExistsRequest(closeIndex);
        if (iac.exists(ier).actionGet().isExists()) {
            try {
                CloseIndexRequest request = new CloseIndexRequest(closeIndex);
                CloseIndexResponse resp = iac.close(request).actionGet();
                return result("200", "索引关闭成功！", resp);
            } catch (Exception e) {
                e.printStackTrace();
                return result("505", e.getLocalizedMessage());
            }
        } else {
            return result("404", "索引[" + closeIndex + "]不存在");
        }
    }

    /**
     * 打开索引
     *
     * @param index
     * @return
     */
    public JSONObject openIndex(final String index) {
        String openIndex = CommonUtils.isEmpty(index) ? prop.getIndex() : index;
        IndicesAdminClient iac = client.admin().indices();
        IndicesExistsRequest ier = new IndicesExistsRequest(openIndex);
        if (iac.exists(ier).actionGet().isExists()) {
            try {
                OpenIndexRequest request = new OpenIndexRequest(openIndex);
                OpenIndexResponse resp = iac.open(request).actionGet();
                return result("200", "索引打开成功！", resp);
            } catch (Exception e) {
                e.printStackTrace();
                return result("505", e.getLocalizedMessage());
            }
        } else {
            return result("404", "索引[" + openIndex + "]不存在");
        }
    }

    /**
     * 判断路径是否存在
     *
     * @param path
     * @param pid
     * @param nested
     * @return
     */
    public boolean isPathExists(String path, String pid, Boolean nested) {
        SearchResponse resp;
        if (nested) {
            ExistsQueryBuilder eq = QueryBuilders.existsQuery(path);
            NestedQueryBuilder nq = QueryBuilders.nestedQuery(pid, eq, ScoreMode.None);
            //执行查询
            resp = client.prepareSearch(prop.getIndex()).setTypes(prop.getTypes().get(defaultType)).setPostFilter(nq).setSize(0).execute().actionGet();
        } else {
            ExistsQueryBuilder eq = QueryBuilders.existsQuery(path);
            //执行查询
            resp = client.prepareSearch(prop.getIndex()).setTypes(prop.getTypes().get(defaultType)).setPostFilter(eq).setSize(0).execute().actionGet();
        }
        SearchHits hits = resp.getHits();
        long total = hits.totalHits;
        return total > 0;
    }

    public JSONObject fieldSort(final String index, final JSONObject json, final String typeName) {
        String sortIndex = CommonUtils.isEmpty(index) ? prop.getIndex() : index;
        IndicesAdminClient iac = client.admin().indices();
        IndicesExistsRequest ier = new IndicesExistsRequest(sortIndex);
        if (iac.exists(ier).actionGet().isExists()) {
            try {
                CreateIndexRequest request = new CreateIndexRequest(sortIndex);
                //设置之定义字段
                XContentBuilder mapping = XContentFactory.jsonBuilder()
                        .startObject()
                        .startObject("properties");
                mapping.value(json);
                mapping.endObject()
                        .endObject();
                CreateIndexRequestBuilder cib = iac.prepareCreate(sortIndex);
                cib.addMapping(typeName, mapping);
                CreateIndexResponse resp = cib.execute().actionGet();
                return result("200", "索引排序成功！", resp);
            } catch (Exception e) {
                e.printStackTrace();
                return result("505", e.getLocalizedMessage());
            }
        } else {
            return result("404", "索引[" + sortIndex + "]不存在");
        }
    }

    /**
     * 自动索引创建
     *
     * @param index
     * @param type
     * @return
     */
    public JSONObject autoIndex(final String index, final String type) {
        //      ------------自动索引-------------------
        String createIndex = CommonUtils.isEmpty(index) ? prop.getIndex() : index;
        String indexType = CommonUtils.isEmpty(type) ? prop.getTypes().get(defaultType) : type;
        IndicesAdminClient iac = client.admin().indices();
        IndicesExistsRequest ier = new IndicesExistsRequest(createIndex);
        //判断是否存在索引，如果存在返回错误信息
        if (iac.exists(ier).actionGet().isExists()) {
            return result("401", "索引[" + createIndex + "]已经存在，请先删除原有索引再重新创建");
        } else {
            try {
                CreateIndexRequest request = new CreateIndexRequest(createIndex);
                //设置
//                mapping nested设置,mapping 排序设置
                String settings = settings().toJSONString();
                String mapping = mapping().toJSONString();
                request.settings(settings, XContentType.JSON);
                request.mapping(indexType, mapping, XContentType.JSON);
                //提交请求
                CreateIndexResponse resp = iac.create(request).actionGet();
                return result("200", "创建索引[" + createIndex + "]完成！", resp);
            } catch (Exception e) {
                e.printStackTrace();
                return result("505", e.getLocalizedMessage());
            }
        }
    }

    /**
     * 删除索引
     *
     * @param index
     * @return
     */
    public JSONObject deleteIndex(String index) {
        String deleteIndex = CommonUtils.isEmpty(index) ? prop.getIndex() : index;
        IndicesAdminClient iac = client.admin().indices();
        IndicesExistsRequest ier = new IndicesExistsRequest(deleteIndex);
        if (iac.exists(ier).actionGet().isExists()) {
            try {
                DeleteIndexRequest request = new DeleteIndexRequest(deleteIndex);
                DeleteIndexResponse resp = iac.delete(request).actionGet();
                return result("200", "删除索引成功！", resp);
            } catch (Exception e) {
                e.printStackTrace();
                return result("505", e.getLocalizedMessage());
            }
        } else {
            return result("404", "索引[" + deleteIndex + "]不存在");
        }

    }

    /**
     * nested动态排序
     *
     * @return
     */
    private JSONObject mapping() {
        JSONObject mapping = new JSONObject();
        JSONArray dateFormats = JSONArray.parseArray("[\"yyyy-MM-dd\", \"yyyy-MM-dd HH:mm:ss\", \"yyyy-MM-dd HH:mm:ss SSS\", \"yyyy-MM-dd HH:mm:ss.SSS\"]");
        //动态日期转换
        mapping.put("dynamic_date_formats", dateFormats);
        //属性配置
        mapping.put(PROP,dataMappings());
        return mapping;
    }

    /**
     * jsonschema转换为mapping
     *
     * @param jsonSchema
     * @return
     */
    private JSONObject convertJsonSchema(final JSONObject jsonSchema) {
        JSONObject result = new JSONObject();
        final String propKey = "properties", typeKey = "type", itemKey = "items";
        String type = jsonSchema.getString(typeKey);
        switch (type) {
            case "object":
                result.put(propKey, convertProperties(jsonSchema.getJSONObject(propKey)));
                break;
            case "array":
                result.put(typeKey, "nested");
                result.put(propKey, convertProperties(jsonSchema.getJSONObject(itemKey).getJSONObject(propKey)));
                break;
            default:
                return null;
        }
        return result;
    }

    /**
     * 属性转换mapping
     *
     * @param schemaProperties
     * @return
     */
    private JSONObject convertProperties(final JSONObject schemaProperties) {
        JSONObject properties = new JSONObject();
        schemaProperties.keySet().forEach(key -> {
            JSONObject schema = schemaProperties.getJSONObject(key);
            JSONObject mapping = convertJsonSchema(schema);
            if (null != mapping) {
                properties.put(CommonUtils.str2Camel(key.toLowerCase()), mapping);
            }
        });
        return properties;
    }

    /**
     * 设置
     *
     * @return
     */
    private JSONObject settings() {
        JSONObject settings = new JSONObject();
        JSONObject index = indexSetting();
        settings.put("number_of_shards", 5);
        settings.put("number_of_replicas", 1);
        settings.put("index", index);
        return settings;
    }

    private JSONObject analysisSetting() {
        JSONObject analysis = new JSONObject();
        JSONObject analyzer = JSONObject.parseObject("{\"ik_syno\":{\"filter\":[\"my_synonym_filter\"],\"type\":\"custom\",\"tokenizer\":\"ik_smart\"},\"default\":{\"type\":\"ik_max_word\"},\"synonym\":{\"filter\":[\"remote_synonym\"],\"tokenizer\":\"whitespace\"},\"ik_syno_max\":{\"filter\":[\"my_synonym_filter\"],\"type\":\"custom\",\"tokenizer\":\"ik_max_word\"}}");
        analysis.put("analyzer", analyzer);
        return analysis;
    }

    /**
     * 索引设置
     *
     * @return
     */
    private JSONObject indexSetting() {
        JSONObject index = new JSONObject();
        index.put("refresh_interval", "10m");
        index.put("translog.durability", "request");
        index.put("translog.sync_interval", "1m");
        index.put("translog.flush_threshold_size", "512m");
        index.put("max_result_window", 100000000);
        index.put("number_of_replicas", 0);
        index.put("mapping.total_fields.limit", 3000);
        //IK 分詞
        index.put("analysis.analyzer.default.type", "ik_max_word");
        //动态同义词
        index.put("analysis.analyzer.synonym.tokenizer", "whitespace");
        String[] filters = new String[]{"remote_synonym"};
        index.put("analysis.analyzer.synonym.filter", filters);
        index.put("analysis.filter.remote_synonym.type", "dynamic_synonym");
        index.put("analysis.filter.remote_synonym.synonyms_path", "synonyms.txt");
        index.put("analysis.filter.remote_synonym.interval", 30);
        index.put("analysis.filter.local_synonym.type", "dynamic_synonym");
        index.put("analysis.filter.local_synonym.synonyms_path", "synonyms.txt");
        return index;
    }

    public JSONObject result(String code, String msg) {
        return result(code, msg, null);
    }

    /**
     * 返回结果定义
     *
     * @param code
     * @param msg
     * @param info
     * @return
     */
    private JSONObject result(String code, String msg, Object info) {
        JSONObject result = new JSONObject();
        result.put("code", code);
        result.put("msg", msg);
        result.put("info", info);
        return result;
    }

    /**
     * 排序json格式
     *
     * @return
     */
    private JSONObject sortJson() {
        JSONObject sortProp = new JSONObject();
        sortProp.put("type", "text");
        sortProp.put("fielddata", true);
        sortProp.put("fields", JSONObject.parse("{\"keyword\":{\"type\":\"keyword\",\"ignore_above\":256}}"));
        //同义词
        sortProp.put("analyzer", "ik_syno_max");
        sortProp.put("search_analyzer", "ik_syno_max");
        return sortProp;
    }

    private JSONObject doubleJson() {
        JSONObject doubleProp = new JSONObject();
        doubleProp.put("type", "double");
        return doubleProp;
    }

    private JSONObject textJson() {
        JSONObject sortProp = new JSONObject();
        sortProp.put("type", "text");
        sortProp.put("fields", JSONObject.parse("{\"keyword\":{\"type\":\"keyword\",\"ignore_above\":256}}"));
        //同义词
        sortProp.put("analyzer", "ik_syno_max");
        sortProp.put("search_analyzer", "ik_syno_max");
        return sortProp;
    }

    private JSONObject dataMappings() {
        List<CrfEsData> dataList = dataService.findAll();
        Map<Integer, JSONObject> map = new HashMap<>(64);
        JSONObject mapping = new JSONObject();
        for (CrfEsData data : dataList) {
            Integer id = data.getId(), pid = data.getPid();
            JSONObject prop = mapProp(data);
            //数据放入map
            map.put(id, prop);
            //顶层数据加入列表
            if (1 == data.getLevel()) {
                mapping.put(data.getCode(), prop);
            }
            //拼接树结构
            if (0 < pid) {
                JSONObject parPropNode = map.get(pid).getJSONObject(PROP);
                parPropNode.put(data.getCode(), prop);
            }
        }
        return mapping;
    }

    private JSONObject mapProp(final CrfEsData data) {
        JSONObject prop = new JSONObject();
        int dataType = data.getDataType();
        switch (dataType) {
            case OBJ:
                prop.put(PROP, new JSONObject());
                break;
            case ARR:
                prop.put(TYPE, NESTED);
                prop.put(propKey, new JSONObject());
                break;
            case STR:
                prop.put(TYPE, TEXT);
                prop.put(FIELD, JSONObject.parse(TEXT_FIELD));
                //支持排序
                if (1 == data.getIsSort()) {
                    prop.put(FIELDDATA, true);
                }
                //支持分词
                if (0 < data.getIsIk()) {
                    Analyzer analyzer = Analyzer.analyzer(data.getIsIk());
                    prop.put(ANALYZER, analyzer.getCode());
                }
                break;
            case INT:
                prop.put(TYPE, INTEGER);
                break;
            case FLT:
                prop.put(TYPE, FLOAT);
                break;
            case DATE:
                prop.put(TYPE, EsCons.DataType.DATE);
                //支持日期格式设置
                if (CommonUtils.isNotEmpty(data.getFmt())) {
                    prop.put(FORMAT, data.getFmt());
                }
                break;
            case BOOL:
                prop.put(TYPE, BOOLEAN);
                break;
            default:
                break;
        }
        return prop;
    }

}
