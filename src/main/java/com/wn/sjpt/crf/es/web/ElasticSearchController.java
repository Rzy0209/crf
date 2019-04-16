package com.wn.sjpt.crf.es.web;

import com.alibaba.fastjson.JSONArray;
import com.alibaba.fastjson.JSONObject;
import com.winning.framework.ums.dto.AppUser;
import com.winning.framework.ums.filter.util.UserUtil;
import com.wn.sjpt.crf.dto.CrfFormDto;
import com.wn.sjpt.crf.dto.PageDto;
import com.wn.sjpt.crf.dto.Resp;
import com.wn.sjpt.crf.dto.es.CrfForm;
import com.wn.sjpt.crf.es.service.ElasticSearchService;
import com.wn.sjpt.crf.util.CommonUtils;
import com.wn.sjpt.crf.util.PowerAnnotation;
import com.wn.sjpt.crf.util.RespUtil;
import lombok.extern.slf4j.Slf4j;
import org.apache.poi.ss.usermodel.Workbook;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;
import java.io.IOException;
import java.io.OutputStream;
import java.text.SimpleDateFormat;
import java.util.ArrayList;
import java.util.Date;
import java.util.List;

/**
 * @author li_jing
 * @data 2018/12/19 10:17
 **/
@RestController
@RequestMapping(value = "/api/es")
@Slf4j
public class ElasticSearchController {

    @Autowired
    private ElasticSearchService esService;

    @PowerAnnotation(behaviorDes = "课题新建权限验证", resourceType = "topic_create")
    @RequestMapping(value = "/save", method = RequestMethod.POST)
    public String crfSave(String data, String tableName, String subjectId, String fieldTypeId) {
        return esService.deal(data, tableName, subjectId, fieldTypeId);
    }

    @PowerAnnotation(behaviorDes = "24小时之后可编辑权限验证", resourceType = "after24H_is_edit")
    @RequestMapping(value = "/edit")
    public String crfEdit(String data, String tableName, String subjectId, String fieldTypeId) {
        return esService.deal(data, tableName, subjectId, fieldTypeId);
    }
    @GetMapping("/export/excel")
    public void exportExcel(String subjectId,HttpServletResponse resp){
        Workbook book=null;
        OutputStream os=null;
        try {
            RespUtil.setResponseHeader(resp, "CRF_"+System.currentTimeMillis()+".xlsx");
            book=esService.export(subjectId);
            os=resp.getOutputStream();
            book.write(os);
        } catch (IOException e) {
            e.printStackTrace();
        }finally {
            if(null!=book){
                try {
                    book.close();
                } catch (IOException e) {
                    e.printStackTrace();
                }
            }
            if(null!=os){
                try {
                    os.flush();
                    os.close();
                } catch (IOException e) {
                    e.printStackTrace();
                }
            }
        }
    }

    @RequestMapping(value = "/getValue")
    public JSONObject getValue(String key , String subjectId) {

        try {
            JSONObject obj = esService.getByNameOrCrfId(key ,  subjectId);
            return obj;
        } catch (Exception e) {
            e.printStackTrace();
            return null;
        }
    }

    /**
     * 获取UID
     * @return
     */
    @GetMapping("/uid/{subId}")
    public String uid(@PathVariable String subId){
        AppUser user=(AppUser)UserUtil.getUserLocal();
        return esService.num(subId,user.getOrgCode());
    }
    @PostMapping(value = "/saveEdit")
    public String saveEdit(String data, String tableName, String subjectId, String fieldTypeId){
        return esService.saveEdit(data, tableName, subjectId, fieldTypeId);
    }

    /**
     * 列表查询
     *
     * @param request
     * @param response
     * @param pageDto
     * @param testNumber
     * @param fieldTypeId
     * @return
     * @throws Exception
     */
    @RequestMapping(value = "/page")
    public String commonSearch(HttpServletRequest request, HttpServletResponse response, PageDto pageDto, String testNumber,String subjectId,String fieldTypeId,String startDate,String endDate) throws Exception {
        log.debug("新的查询请求");
        //es查询结果
        JSONObject js = esService.searchUtil( pageDto, subjectId, fieldTypeId, testNumber, startDate, endDate );
        JSONArray jsonArray = js.getJSONArray("list");
        Integer total = js.getInteger("total");
        log.debug("请求查询完成");
        //循环处理结果（多层结构JSON）成返回结果（单层结构JSON）
        List<CrfFormDto> newList = new ArrayList<>();
        JSONObject jsonObject = new JSONObject();
        if (CommonUtils.isNotEmpty(jsonArray)) {
            for (int i = 0; i < jsonArray.size(); i++) {
                JSONObject jsonObject1 = (JSONObject) jsonArray.get(i);
                JSONObject json = (JSONObject) jsonObject1.get("crfForm");
                CrfForm cf = JSONObject.toJavaObject(json, CrfForm.class);
                CrfFormDto dto = dealDto(cf);
                newList.add(dto);
            }
            log.debug("数据解析完成");
            //JSONArray
            jsonObject.put("rows", newList);
            //总记录数
            jsonObject.put("total", total);
            log.debug("查询请求结束");
        } else {
            total=0;
        }
        jsonObject.put("rows", newList);
        jsonObject.put("total", total);
        return jsonObject.toString();
    }

    public CrfFormDto dealDto(CrfForm cf) {
        CrfFormDto cfdto = new CrfFormDto();
        Date researchDate = cf.getResearchDate();
        SimpleDateFormat sdf = new SimpleDateFormat("yyyy-MM-dd");
        if (CommonUtils.isNotEmpty(researchDate)) {
            String format = sdf.format(researchDate);
            cfdto.setResearchDate(format);
        }
        cfdto.setTj(cf.getTj());
        cfdto.setActuatorName(cf.getActuatorName());
        cfdto.setCrfId(cf.getCrfId());
        cfdto.setDepCode(cf.getDepCode());
        cfdto.setUploadPath(cf.getUploadPath());
        cfdto.setSubjectId(cf.getSubjectId());
        cfdto.setFinishForm(cf.getFinishForm());
        cfdto.setId(cf.getId());
        cfdto.setFinishResearch(cf.getFinishResearch());
        cfdto.setResearcher(cf.getResearcher());
        cfdto.setResearchUnit(cf.getResearchUnit());
        cfdto.setSubjectsShortName(cf.getSubjectsShortName());
        cfdto.setOrgCode(cf.getOrgCode());
        cfdto.setTestNumber(cf.getTestNumber());
        cfdto.setType(cf.getType());
        cfdto.setUserName(cf.getUserName());
        cfdto.setCreateDate(cf.getCreateDate());
        return cfdto;
    }


}
