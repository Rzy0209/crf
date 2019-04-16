package com.wn.sjpt.crf.web;

import com.alibaba.fastjson.JSONObject;
import com.wn.sjpt.crf.es.service.ElasticSearchService;
import com.wn.sjpt.crf.util.exception.BussinessException;
import com.wn.sjpt.crf.util.exception.ErrorCode;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.HashSet;
import java.util.Set;

/**
 * @author yzj
 * 数据对接
 */
@RestController
@RequestMapping("/api/chip")
public class ChipController {
    private final ElasticSearchService esService;

    @Autowired
    public ChipController(ElasticSearchService esService) {
        this.esService = esService;
    }

    @GetMapping("/crf/{crfId}")
    public JSONObject getCrf(@PathVariable String crfId) {
        JSONObject obj = esService.findOne(crfId);
        if(null==obj){
            throw new BussinessException(ErrorCode.EMPTY_LIST,"无此表单，请验证！");
        }
        JSONObject data = new JSONObject();
        //ID
        data.put("id",crfId);
        data.put("base",base(obj));
        if(!ndht(obj,data)){
            throw new BussinessException(ErrorCode.EMPTY_LIST,"未填写神经系统疾病史信息！");
        }
        data.put("hisOther",other(obj));
        return data;
    }

    @PostMapping("/crf")
    public boolean fillData(@RequestBody JSONObject data) {
        String[] nodes={"ai_grade","doctor_grade"};

        String idKey="id";
        String id=data.getString(idKey);
        JSONObject obj = esService.findOne(id);
        if(null==obj){
            throw new BussinessException(ErrorCode.EMPTY_LIST,"无此表单，请验证！");
        }
        //循环信息录入
        for(String node:nodes){
            if(data.containsKey(node)){
                obj.put(node,data.getJSONObject(node));
            }
        }
        esService.update(obj,id);
        return true;
    }

    /**
     * 基础信息
     * @param root
     * @return
     */
    private JSONObject base(JSONObject root) {
        String node="base";
        if(!root.containsKey(node)){
            throw new BussinessException(ErrorCode.NOT_FIND,"未填写基本信息！");
        }
        JSONObject nodeBase = root.getJSONObject(node);
        JSONObject base = new JSONObject();
        //测试号
        base.put("number", root.getString("id").substring((root.getString("subjectId") + root.getString("orgCode")).length()));
        //身份证
        base.put("identifier", nodeBase.getString("identifier"));
        //姓名
        base.put("name", nodeBase.getString("name"));
        //年龄
        base.put("age", nodeBase.getInteger("age"));
        //性别
        Integer gender= nodeBase.getInteger("gender");
        base.put("gender",null==gender?1:2==gender?0:gender);
        // 利手
        base.put("handedness", nodeBase.getInteger("handedness"));
        // 职业
        base.put("profession", nodeBase.getInteger("profession"));
        //最高教育程度
        base.put("eductionDegree", nodeBase.getInteger("eductionDegree"));
        //身高
        base.put("height", nodeBase.getFloat("height"));
        //体重
        base.put("weight", nodeBase.getFloat("weight"));
        //bmi
        base.put("bmi", nodeBase.getFloat("bmi"));
        return base;
    }

    private boolean ndht(final JSONObject root,JSONObject data){
        String[] keys={"nczqx","nczcx","nczwzz"};
        String[] paths={"symptomaticIschemicStroke","symptomaticHemorrhagicStroke","asymptomatIcstroke"};
        for(int i=0;i<keys.length;i++){
            JSONObject obj=ncz(root,paths[i]);
            if(null!=obj){
                data.put("ndht",i+1);
                data.put(keys[i],obj);
                return true;
            }
        }
        return false;
    }

    /**
     * 脑卒中信息
     * @param root 根JSON
     * @param key  路径节点key
     * @return 标准脑卒中节点
     */
    private JSONObject ncz(final JSONObject root,String key){
        if(!root.containsKey(key)){
            return null;
        }
        JSONObject nczNode=root.getJSONObject(key);
        JSONObject ncz=new JSONObject();

        //类型
        ncz.put("type",nczNode.getInteger("type"));
        //其他类型
        ncz.put("typeOther",nczNode.getString("typeOther"));
        //定侧
        ncz.put("side",nczNode.getInteger("side"));
        //部位
        ncz.put("part",nczNode.getInteger("part"));
        //部位其他
        ncz.put("partOther",nczNode.getString("partOther"));
        //药物治疗
        ncz.put("drugs",nczNode.getInteger("therapeuticDrugs"));
        //具体药物治疗
        ncz.put("drugsDetail",nczNode.getString("therapeuticDrugsDescribe"));
        //病程-月 后遗症 后遗症详情
        String[] parms={"startDate","legacySequela","legacySequelaDescribe"};
        String[] keys={"month","sequela","sequelaDetail"};
        for(int i=0;i<parms.length;i++){
            nczFill(nczNode,ncz,keys[i],parms[i]);
        }
        return ncz;
    }

    private void nczFill(JSONObject nczNode,JSONObject ncz,String key,String path) {
        if(ncz.containsKey(path)){
            ncz.put(key,nczNode.getString(path));
        }
    }

    private JSONObject other(final JSONObject root){
        String key="pastsystem";
        String p1="trauma",p2="fracture",p3="malformation",p4="pain",p5="other",p6="otherDescribe";
        if(!root.containsKey(key)){
            throw new BussinessException(ErrorCode.NOT_FIND,"未填写全身疾病史信息！");
        }
        JSONObject node=root.getJSONObject(key);
        JSONObject other=new JSONObject();
        otherFill(p1, node, other);
        otherFill(p2, node, other);
        otherFill(p3, node, other);
        otherFill(p4, node, other);
        if(node.containsKey(p5)&&1==node.getInteger(p5)){
            other.put(p5,node.getString(p6));
        }else{
            other.put(p5,null);
        }
        return other;
    }

    private void otherFill(String key, JSONObject node, JSONObject other) {
        if(node.containsKey(key)){
            other.put(key,node.getInteger(key));
        }else {
            other.put(key,0);
        }
    }
}
