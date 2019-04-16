package com.wn.sjpt.crf.es.web;

import com.alibaba.fastjson.JSONObject;
import com.wn.sjpt.crf.es.service.EsIndexService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.client.RestTemplate;

import javax.servlet.http.HttpServletRequest;
import java.util.List;

/**
 * @author pingtai
 */

@RestController
    @RequestMapping(value = "/api/es/index")
public class EsIndexController {

    private static Integer NUMBER200 = 200;
    /**
     * 索引名称
     */
    @Value("${spring.data.elasticsearch.indices.crf.index:wn-crf}")
    public String indexName;
    /**
     * ip port
     */
    @Value("${spring.data.elasticsearch.cluster-http-node:172.20.10.11:9200}")
    public String ip;
    /**
     * 类型名称
     */
    @Value("${spring.data.elasticsearch.indices.crf.types.default:data}")
    public String typeName;
    /**
     * ES 索引服务
     */
    private final EsIndexService esIndexService;
    @Autowired
    public EsIndexController(EsIndexService esIndexService) {
        this.esIndexService = esIndexService;
    }

    /**
     * 关闭索引
     * @return
     */
    @RequestMapping(value = "/closeindex", method = RequestMethod.POST)
    public String closeindex()  {
        JSONObject json = esIndexService.closeIndex(indexName);
        int status = json.getInteger("code");
        int result = 200;
        if(status == result){
            return "success";
        }else{
            return "error";
        }
    }

    /**
     * 开启索引
     * @return
     */
    @RequestMapping(value = "/openindex", method = RequestMethod.POST)
    public String openindex()  {
        JSONObject json = esIndexService.openIndex(indexName);
        int status = json.getInteger("code");
        int result = 200;
        if(status == result){
            return "success";
        }else{
            return "error";
        }
    }

    /**
     * 创建索引
     * @param index
     * @param type
     * @return
     */
    @GetMapping("/create/auto")
    public JSONObject autoIndex(@RequestParam(required = false) String index
        , @RequestParam(required=false)String type){
        return esIndexService.autoIndex(index,type);
    }

    /**
     * 删除索引
     * @param index
     * @param req
     * @return
     */
    @GetMapping("/delete")
    public JSONObject deleteIndex(@RequestParam(required = false) String index,
                                   HttpServletRequest req){
        Boolean confirm= (Boolean) req.getSession().getAttribute("confirm");
        if(null==confirm||!confirm){
            req.getSession().setAttribute("confirm", true);
            return esIndexService.result("401", "请再次调用接口确认删除（注意，此操作不可逆）！");
        }else {
            req.getSession().removeAttribute("confirm");
            return esIndexService.deleteIndex(index);
        }
    }

}
