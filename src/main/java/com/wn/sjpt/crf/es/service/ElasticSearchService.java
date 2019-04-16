package com.wn.sjpt.crf.es.service;

import com.alibaba.fastjson.JSONArray;
import com.alibaba.fastjson.JSONObject;
import com.winning.framework.ums.dto.AppUser;
import com.winning.framework.ums.filter.util.UserUtil;
import com.wn.sjpt.crf.domain.*;
import com.wn.sjpt.crf.dto.PageDto;
import com.wn.sjpt.crf.dto.es.CrfForm;
import com.wn.sjpt.crf.es.dto.CrfEsDto;
import com.wn.sjpt.crf.es.dto.ExcelConf;
import com.wn.sjpt.crf.service.CrfEsDataService;
import com.wn.sjpt.crf.service.CrfSubjectResFieldService;
import com.wn.sjpt.crf.util.CommonUtils;
import com.wn.sjpt.crf.util.exception.BussinessException;
import com.wn.sjpt.crf.util.exception.ErrorCode;
import lombok.extern.slf4j.Slf4j;
import org.apache.poi.ss.usermodel.*;
import org.apache.poi.ss.util.CellRangeAddress;
import org.elasticsearch.action.admin.indices.flush.FlushRequest;
import org.elasticsearch.action.delete.DeleteRequestBuilder;
import org.elasticsearch.action.delete.DeleteResponse;
import org.elasticsearch.action.index.IndexRequestBuilder;
import org.elasticsearch.action.index.IndexResponse;
import org.elasticsearch.action.search.SearchResponse;
import org.elasticsearch.action.update.UpdateRequestBuilder;
import org.elasticsearch.action.update.UpdateResponse;
import org.elasticsearch.client.Client;
import org.elasticsearch.common.unit.TimeValue;
import org.elasticsearch.common.xcontent.XContentType;
import org.elasticsearch.index.query.BoolQueryBuilder;
import org.elasticsearch.index.query.QueryBuilder;
import org.elasticsearch.index.query.QueryBuilders;
import org.elasticsearch.search.SearchHit;
import org.elasticsearch.search.SearchHits;
import org.elasticsearch.search.aggregations.AggregationBuilders;
import org.elasticsearch.search.aggregations.metrics.max.Max;
import org.elasticsearch.search.sort.SortBuilders;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.stereotype.Service;

import java.io.IOException;
import java.sql.Timestamp;
import java.util.*;

import static com.wn.sjpt.crf.es.dto.EsCons.*;
import static com.wn.sjpt.crf.util.Cons.DataType.*;
import static com.wn.sjpt.crf.util.EsUtil.CONSTANT_ES_JZJL_INDEX_NAME;

/**
 * @author li_jing
 * @data 2018/12/19 14:46
 **/
@Service
@Slf4j
public class ElasticSearchService {
    /**
     * 客户端
     */
    private final Client client;
    /**
     * cdr配置
     */
    private final EsCrfProperties prop;
    private final String index, type;
    private final CrfSubjectResFieldService crfSubjectResFieldService;
    private final CrfEsDataService dataService;
    /**
     * 课题ID
     */
    private static final String FILED_SUBJECT_ID = "subjectId";
    /**
     * 表单id
     */
    private static final String FILED_CRF_ID = "crfId";

    private final int numSize;

    @Autowired
    public ElasticSearchService(Client client, EsCrfProperties prop, CrfSubjectResFieldService crfSubjectResFieldService,
                                CrfEsDataService dataService, @Value("${spring.data.elasticsearch.numSize:4}")
                                        int numSize) {
        this.client = client;
        this.prop = prop;
        this.crfSubjectResFieldService = crfSubjectResFieldService;
        this.dataService = dataService;
        this.numSize = numSize;
        this.index = this.prop.getIndex();
        this.type = this.prop.getTypes().getOrDefault("default", "data");
    }

    public String num(String sid, String orgCode) {
        int uid = uid(sid, orgCode), tmp = 10;
        StringBuilder numBuilder = new StringBuilder();
        numBuilder.append(sid).append(orgCode);
        for (int i = numSize; i > 0; i--) {
            if (uid > (Math.pow(tmp, i - 1) - 1)) {
                numBuilder.append(uid);
                break;
            } else {
                numBuilder.append(0);
            }
        }
        return numBuilder.toString();
    }

    private int uid(String sid, String orgCode) {
        BoolQueryBuilder bool = new BoolQueryBuilder();
        bool.must(QueryBuilders.termQuery(FIELD_SUBJECT_ID, sid));
        bool.must(QueryBuilders.termQuery(FIELD_ORG_CODE, orgCode));
        SearchResponse resp = client.prepareSearch(index).setTypes(type).setQuery(bool).setExplain(true).
                addAggregation(AggregationBuilders.max(AGG).field(FIELD_NUM)).get();
        Max max = resp.getAggregations().get(AGG);
        int val = 0;
        if (null != max) {
            val = (int) max.getValue();
        }
        return val + 1;
    }

    /**
     * table 查询
     *
     * @param pageDto
     * @param testNumber
     * @param fieldTypeId
     * @return
     * @throws Exception
     */
    public JSONObject searchUtil(PageDto pageDto, String subjectId, String fieldTypeId, String testNumber, String startDate, String endDate) {
        if (null != pageDto && !"".equals(pageDto)) {
            Integer pageSize = pageDto.getLimit();
            Integer start = pageDto.getOffset();
            BoolQueryBuilder boolQueryBuilder = new BoolQueryBuilder();
            if (CommonUtils.isNotEmpty(subjectId)) {
                boolQueryBuilder.must(QueryBuilders.termQuery(FIELD_SUBJECT_ID, subjectId));
            }
            if (CommonUtils.isNotEmpty(testNumber)) {
                boolQueryBuilder.must(QueryBuilders.matchPhraseQuery(FILED_FORM_TEST_NUM, testNumber));
            }
            if (CommonUtils.isNotEmpty(fieldTypeId)) {
                boolQueryBuilder.must(QueryBuilders.termQuery(FIELD_FIELD_TYPE_ID, fieldTypeId));
            }
            if (CommonUtils.isNotEmpty(startDate)) {
                long startdate = CommonUtils.getDate(startDate).getTime();
                boolQueryBuilder.must(QueryBuilders.rangeQuery(RESEARCH_DATE).gte(startdate));
            }
            if (CommonUtils.isNotEmpty(endDate)) {
                long enddate = CommonUtils.getDate(endDate).getTime();
                boolQueryBuilder.must(QueryBuilders.rangeQuery(RESEARCH_DATE).lte(enddate));
            }
            AppUser user= (AppUser) UserUtil.getUserLocal();
            if(null!=user){
                if(!user.getAccount().equalsIgnoreCase("admin")){
                    boolQueryBuilder.must(QueryBuilders.termQuery(FIELD_ORG_CODE, user.getOrgCode()));
                }
            }
            SearchResponse esgroupResponse = client.prepareSearch(index).setQuery(boolQueryBuilder).setFrom(start).setSize(pageSize).setExplain(true).get();
            SearchHits hits = esgroupResponse.getHits();
            log.info(esgroupResponse.getHits().getTotalHits() + "_____");
            JSONArray array = new JSONArray();
            for (SearchHit hit : hits) {
                String sourceAsString = hit.getSourceAsString();
                String id = hit.getId();
                JSONObject jsonObject1 = JSONObject.parseObject(sourceAsString);
                jsonObject1.put("id", id);
                array.add(jsonObject1);
            }
            long total = hits.getTotalHits();
            JSONObject json = new JSONObject();
            json.put("list", array);
            json.put("total", total);
            return json;
        } else {
            return null;
        }
    }

    public Workbook export(String subjectId) throws IOException {
        Workbook workbook = WorkbookFactory.create(true);
        Map<String, Sheet> sheetMap = new HashMap<>();
        Map<String, Map<String, Map<String, ExcelConf>>> posMap = new HashMap<>();
        workbookInit(workbook, subjectId, sheetMap, posMap);
        SearchResponse resp = client.prepareSearch(index).setTypes(type).setQuery(QueryBuilders.matchAllQuery()).setPostFilter(filter(subjectId)).
                addSort(SortBuilders.fieldSort(SORT_DOC)).setSize(PAGE_SIZE_DEFAULT)
                //游标持续时间
                .setScroll(TimeValue.timeValueMinutes(LAST_MIN_DEFAULT)).execute().actionGet();
        SearchHits hits = resp.getHits();
        long total = hits.getTotalHits(), needDeal = total;
        String scrollId = resp.getScrollId();
        JSONObject temp;
        while (needDeal > 0) {
            //解析响应
            for (SearchHit hit : resp.getHits()) {
                temp = JSONObject.parseObject(hit.getSourceAsString());
                String typeId = temp.getString(FIELD_FIELD_TYPE_ID);
                Sheet sheet = sheetMap.get(typeId);
                Row newRow = sheet.createRow(sheet.getLastRowNum() + 1);
                Map<String, Map<String, ExcelConf>> pmap = posMap.get(typeId);
                for (String key : temp.keySet()) {
                    if (pmap.containsKey(key)) {
                        JSONObject json = temp.getJSONObject(key);
                        Map<String, ExcelConf> pimap = pmap.get(key);
                        for (String ckey : json.keySet()) {
                            if (pimap.containsKey(ckey)) {
                                ExcelConf conf = pimap.get(ckey);
                                String type = conf.getType();
                                if (CommonUtils.isNotEmpty(type) && TYPE_ARRAY.equalsIgnoreCase(conf.getType())) {
                                    JSONArray array = json.getJSONArray(ckey);
                                    for (int i = 0; i < array.size(); i++) {
                                        JSONObject obj = array.getJSONObject(i);
                                        for (String akey : obj.keySet()) {
                                            String rkey = ckey + BRACKET_LEFT + i + BRACKET_RIGHT + PATH_SPLIT_STR + akey;
                                            if (pimap.containsKey(rkey)) {
                                                ExcelConf rconf = pimap.get(rkey);
                                                Cell cell = newRow.createCell(rconf.getPos());
                                                setCellVal(rconf, cell, obj, akey);
                                            }
                                        }
                                    }
                                } else {
                                    Cell cell = newRow.createCell(conf.getPos());
                                    setCellVal(conf, cell, json, ckey);
                                }
                            }
                        }
                    }
                }
            }
            resp = client.prepareSearchScroll(scrollId).execute().actionGet();
            needDeal -= PAGE_SIZE_DEFAULT;
        }
        return workbook;
    }

    private void setCellVal(ExcelConf conf, Cell cell, JSONObject json, String key) {
        if (null != conf.getFmt()) {
            Long val = json.getLong(key);
            if (null == val || val == 0) {
                return;
            }
            cell.setCellValue(conf.getFmt().format(new Date(val)));
        } else {
            cell.setCellValue(json.getString(key));
        }
    }

    /**
     * workbook初始化
     *
     * @param workbook
     * @param subjectId
     */
    private void workbookInit(Workbook workbook, String subjectId, Map<String, Sheet> sheetMap, Map<String, Map<String, Map<String, ExcelConf>>> posMap) {
        //根据subjectID获取fieldTypeId
        List<CrfSubjectResField> types = crfSubjectResFieldService.findBySid(subjectId);
        for (CrfSubjectResField type : types) {
            Sheet sheet = workbook.createSheet(type.getName());
            sheetMap.put(type.getId(), sheet);
            posMap.put(type.getId(), new HashMap<>());
            List<CrfSubjectTemplate> templates = crfSubjectResFieldService.findTemplateByFieldType(type.getId());
            Row firstRow = sheet.createRow(0), secondRow = sheet.createRow(1);
            int startCellIndex = 0;
            for (CrfSubjectTemplate template : templates) {
                //第一行:显示分组 第二行：显示字段
                List<CrfSubjectTemplateData> dataList = template.getDataList();
                posMap.get(type.getId()).put(template.getCode(), new HashMap<>());
                int size = dataList.size();
                if (size == 0) {
                    continue;
                }
                int startRem = startCellIndex;
                for (int i = 0; i < dataList.size(); i++) {
                    CrfSubjectTemplateData data = dataList.get(i);
                    String dataType = data.getType();
                    //类型判断
                    if (CommonUtils.isNotEmpty(dataType) && TYPE_ARRAY.equalsIgnoreCase(dataType)) {
                        posMap.get(type.getId()).get(template.getCode()).put(data.getCode(), new ExcelConf(-1, TYPE_ARRAY, null));
                        //获取下属属性
                        List<CrfSubjectTemplateData> cdata = cdata(dataList, i + 1, data.getCode());
                        for (int j = 0; j < ARRAY_EXPORT_SIZE; j++) {
                            for (CrfSubjectTemplateData c : cdata) {
                                Cell cell = secondRow.createCell(startCellIndex);
                                String title = j == 0 ? c.getTitle() : c.getTitle() + (j + 1);
                                cell.setCellValue(title);
                                posMap.get(type.getId()).get(template.getCode()).put(c.getCode().replace(PATH_SPLIT_STR, BRACKET_LEFT + j + BRACKET_RIGHT + PATH_SPLIT_STR), new ExcelConf(startCellIndex, c.getType(), c.getFmt()));
                                startCellIndex++;
                            }
                        }
                        //调整位置
                        i += cdata.size();
                    } else {
                        Cell cell = secondRow.createCell(startCellIndex);
                        cell.setCellValue(dataList.get(i).getTitle());
                        posMap.get(type.getId()).get(template.getCode()).put(data.getCode(), new ExcelConf(startCellIndex, dataType, data.getFmt()));
                        startCellIndex++;
                    }
                }
                //合并单元格
                CellRangeAddress tempTitleRange = new CellRangeAddress(0, 0, startRem, startCellIndex - 1);
                sheet.addMergedRegion(tempTitleRange);
                Cell tempTitleCell = firstRow.createCell(startRem);
                tempTitleCell.setCellValue(template.getTitle());
            }
            //创建冻结区域--前两行冻结
            sheet.createFreezePane(0, 2);
        }
    }

    private List<CrfSubjectTemplateData> cdata(List<CrfSubjectTemplateData> dataList, int index, String start) {
        List<CrfSubjectTemplateData> cdata = new ArrayList<>();
        for (int i = index; i < dataList.size(); i++) {
            CrfSubjectTemplateData data = dataList.get(i);
            String code = data.getCode();
            if (code.startsWith(start + PATH_SPLIT_STR)) {
                cdata.add(data);
            }
        }
        return cdata;
    }


    /**
     * 根据subjectID过滤数据
     *
     * @param subjectId
     * @return
     */
    public QueryBuilder filter(String subjectId) {
        return new BoolQueryBuilder().must(QueryBuilders.termQuery(FILED_SUBJECT_ID, subjectId));
    }

    public JSONObject getByNameOrCrfId(String key, String subjectId) {
        AppUser user = (AppUser) UserUtil.getUserLocal();
        if (CommonUtils.isEmpty(key) || null == user) {
            return null;
        }
        BoolQueryBuilder bool = new BoolQueryBuilder();
        bool.must(QueryBuilders.termQuery("subjectId", subjectId));
        bool.must(QueryBuilders.termQuery("orgCode", user.getOrgCode()));
        BoolQueryBuilder keyBool = new BoolQueryBuilder();
        if (4 == key.length()) {
            key = subjectId + user.getOrgCode() + key;
        }
        keyBool.should(QueryBuilders.matchPhraseQuery("id", key));
        keyBool.should(QueryBuilders.matchPhraseQuery("base.name", key));
        bool.must(keyBool);
        SearchResponse resp = client.prepareSearch(CONSTANT_ES_JZJL_INDEX_NAME).setQuery(bool).setExplain(true).get();
        SearchHits hits = resp.getHits();
        if (hits.totalHits > 0) {
            return JSONObject.parseObject(hits.getHits()[0].getSourceAsString());
        }
        return null;
    }

    /**
     * 查询一条数据
     *
     * @param crfId
     * @return
     * @throws Exception
     */
    public JSONObject findOne(String crfId) {
        try {
            JSONObject json = null;
            if (CommonUtils.isEmpty(crfId)) {
                return null;
            }
            BoolQueryBuilder boolQueryBuilder = new BoolQueryBuilder();
            boolQueryBuilder.must(QueryBuilders.matchPhraseQuery("id", crfId));
            SearchResponse esgroupResponse = client.prepareSearch(CONSTANT_ES_JZJL_INDEX_NAME).setQuery(boolQueryBuilder).setExplain(true).get();
            SearchHits hits = esgroupResponse.getHits();
            JSONArray array = new JSONArray();
            for (SearchHit hit : hits) {
                String sourceAsString = hit.getSourceAsString();
                JSONObject jsonObject1 = JSONObject.parseObject(sourceAsString);
                array.add(jsonObject1);
            }
            if (CommonUtils.isNotEmpty(array)) {
                json = (JSONObject) array.get(0);
            }
            return json;
        } catch (Exception e) {
            e.printStackTrace();
        }
        return null;
    }

    /**
     * 保存修改处理
     *
     * @param data
     * @param tableName
     * @return
     */
    public String saveEdit(String data, String tableName, String subjectId, String fieldTypeId) {
        if (CommonUtils.isEmpty(data)) {
            throw new BussinessException(ErrorCode.NOT_FIND, "录入信息不正确，请检查。");
        }
        JSONObject json = (JSONObject) JSONObject.parse(data);
        String crfId = json.getString(FILED_CRF_ID);
        //查找是否存在
        JSONObject obj = findOne(crfId);
        if (null == obj || obj.isEmpty()) {
            save(json, subjectId, fieldTypeId);
            obj = findOne(crfId);
            update(tableName, json, subjectId, fieldTypeId,obj);
        } else {
            update(tableName, json, subjectId, fieldTypeId,obj);
            updateFinishForm(crfId);
        }
        return crfId;
    }

    /**
     * 保存修改处理
     *
     * @param data
     * @param tableName
     * @return
     */
    public String deal(String data, String tableName, String subjectId, String fieldTypeId) {
        if (CommonUtils.isEmpty(data)) {
            throw new BussinessException(ErrorCode.NOT_FIND, "录入信息不正确，请检查。");
        }
        JSONObject json = (JSONObject) JSONObject.parse(data);
        String crfId;
        switch (tableName) {
            //病历报告表
            case "crfForm":
                crfId = dealCrfform(json, subjectId, fieldTypeId);
                break;
            default:
                crfId = update(tableName, json, subjectId, fieldTypeId,new JSONObject());
                updateFinishForm(crfId);
                break;

        }
        return crfId;
    }

    private void updateFinishForm(String crfId) {
        JSONObject json = findOne(crfId);
        Integer num = 0;
        for (Map.Entry<String, Object> entry : json.entrySet()) {
            if (entry.getValue() instanceof JSONObject || entry.getValue() instanceof JSONArray) {
                num++;
            }
        }
        CrfEsDto dto = JSONObject.toJavaObject(json, CrfEsDto.class);
        CrfForm crfForm = dto.getCrfForm();
        crfForm.setFinishForm(num);
        JSONObject result = (JSONObject) JSONObject.toJSON(dto);
        update(result, crfId);
    }

    /**
     * 更新操作
     * @param  tableName 更新节点
     * @param json 更新数据
     * @param subjectId 课题ID
     * @param fieldTypeId 类型ID
     * @param oriData 原始数据
     */
    private String update(final String tableName, final JSONObject json, final String subjectId, final String fieldTypeId,final JSONObject oriData) {
        //初始化登录人员信息
        initUserInfo(json);
        String crfId = json.getString(FILED_CRF_ID);
        if (CommonUtils.isNotEmpty(crfId)) {
            Map<String, CrfEsData> map = dataService.dataMap();
            CrfEsDto sendDto = new CrfEsDto(crfId, subjectId, fieldTypeId);
            JSONObject result = (JSONObject) JSONObject.toJSON(sendDto);
            JSONObject object=correctData(tableName,json,map);
            if(isNestedArr(map,tableName)){
                JSONArray arr=oriData.containsKey(tableName)?oriData.getJSONArray(tableName):new JSONArray();
                arr.add(object);
                result.put(tableName, arr);
            }else {
                result.put(tableName, object);
            }
            update(result, crfId);
        } else {
            throw new BussinessException(ErrorCode.PARAM_NOT_FOUND, "参数缺失，保存失败！");
        }
        return crfId;
    }
    private boolean isNestedArr(final Map<String, CrfEsData> map, final String tableName){
        if(map.containsKey(tableName)){
            CrfEsData data=map.get(tableName);
            return data.getDataType()==ARR;
        }
        return false;
    }
    private JSONObject correctData(final String tableName, final JSONObject json,final Map<String, CrfEsData> map ) {
        JSONObject object = new JSONObject();
        //循环json
        Set<String> keys = json.keySet();
        keys.forEach(key -> {
            String path = tableName + PATH_SPLIT_STR + key;
            if (map.containsKey(path)) {
                CrfEsData data = map.get(path);
                String val = json.getString(key);
                Object realVal;
                switch (data.getDataType()) {
                    case INT:
                        realVal=CommonUtils.toInt(val);
                        break;
                    case FLT:
                        realVal=CommonUtils.toDouble(val);
                        break;
                    default:
                        realVal=val;
                        break;
                }
                object.put(key,realVal);
            } else {
                object.put(key, json.get(key));
            }
        });
        return object;
    }

    private void initUserInfo(JSONObject json) {
        BaseUser user = new BaseUser();
        user.init();
        json.putAll((JSONObject) JSONObject.toJSON(user));
    }

    public void update(JSONObject object, String id) {
        UpdateRequestBuilder updateRequestBuilder = client.prepareUpdate(index, type, id).setDoc(object.toJSONString(), XContentType.JSON);
        UpdateResponse resp = updateRequestBuilder.execute().actionGet();
        log.debug("保存响应结果" + resp.toString());
        flush();
    }

    public void delete(String id) {
        DeleteRequestBuilder deleteRequestBuilder = client.prepareDelete(index, type, id);
        DeleteResponse resp = deleteRequestBuilder.execute().actionGet();
        log.debug("删除响应结果" + resp.toString());
        flush();
    }

    private void index(JSONObject object, String id) {
        IndexRequestBuilder indexRequestBuilder = client.prepareIndex(index, type, id).setSource(object.toJSONString(), XContentType.JSON);
        IndexResponse resp = indexRequestBuilder.execute().actionGet();
        log.debug("保存响应结果" + resp.toString());
        flush();
    }

    private void flush() {
        client.admin().indices().flush(new FlushRequest(index)).actionGet();
    }

    /**
     * 病历报告表
     *
     * @return
     */
    private String dealCrfform(JSONObject json, String subjectId, String fieldTypeId) {
        CrfForm crf = JSONObject.toJavaObject(json, CrfForm.class);
        //初始化操作人员信息
        crf.init();
        crf.setFieldTypeId(fieldTypeId);
        crf.setSubjectId(subjectId);
        boolean isCreate = CommonUtils.isEmpty(crf.getCrfId());
        JSONObject js = findOne(crf.getCrfId());
        CrfEsDto crfEsDto = JSONObject.toJavaObject(js, CrfEsDto.class);
        if (CommonUtils.isNotEmpty(crf.getCrfId())) {
            CrfForm crfOld = crfEsDto.getCrfForm();
            if (CommonUtils.isNotEmpty(crfOld)) {
                crf.setId(crfOld.getId());
                crf.setCreateDate(crfOld.getCreateDate());
                crf.setFinishForm(crfOld.getFinishForm());
            } else {
                crf.setCreateDate(new Timestamp(System.currentTimeMillis()));
            }
        } else {
            crf.setCrfId(subjectId + crf.getOrgCode() + crf.getTestNumber());
            crf.setFinishForm(1);
            crf.setSubjectId(subjectId);
            crf.setCreateDate(new Timestamp(System.currentTimeMillis()));
        }
        //es保存
        if (CommonUtils.isEmpty(crfEsDto)) {
            crfEsDto = new CrfEsDto();
            crfEsDto.setId(crf.getCrfId());
            crfEsDto.setCrfId(crf.getCrfId());
        }
        crfEsDto.init();
        crfEsDto.setSubjectId(subjectId);
        crfEsDto.setFieldTypeId(fieldTypeId);
        crfEsDto.setCrfForm(crf);
        JSONObject result = (JSONObject) JSONObject.toJSON(crfEsDto);
        if (isCreate) {
            index(result, crf.getCrfId());
        } else {
            update(result, crf.getCrfId());
        }
        return crf.getCrfId();
    }

    private String save(JSONObject json, String subjectId, String fieldTypeId) {
        AppUser user = (AppUser) UserUtil.getUserLocal();
        CrfForm crf = JSONObject.toJavaObject(json, CrfForm.class);
        String crfId = crf.getCrfId();
        //初始化操作人员信息
        crf.init();
        crf.setFieldTypeId(fieldTypeId);
        crf.setSubjectId(subjectId);
        crf.setFinishForm(1);
        crf.setCreateDate(new Timestamp(System.currentTimeMillis()));
        crf.setTestNumber(crfId);
        crf.setActuatorName(user.getOrgName());
        crf.setResearcher(user.getName());
        crf.setResearchDate(new Date());
        crf.setResearchUnit(user.getOrgName());
        CrfEsDto crfEsDto = new CrfEsDto();
        crfEsDto.setId(crfId);
        crfEsDto.setCrfId(crfId);
        crfEsDto.init();
        crfEsDto.setSubjectId(subjectId);
        crfEsDto.setFieldTypeId(fieldTypeId);
        crfEsDto.setNum(CommonUtils.toInt(crfId.substring(crfId.length() - numSize)));
        crfEsDto.setCrfForm(crf);
        JSONObject result = (JSONObject) JSONObject.toJSON(crfEsDto);
        index(result, crf.getCrfId());
        return crf.getCrfId();
    }
}
