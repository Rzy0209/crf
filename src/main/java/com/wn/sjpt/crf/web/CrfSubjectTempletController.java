package com.wn.sjpt.crf.web;

import com.alibaba.fastjson.JSONObject;
import com.wn.sjpt.crf.domain.CrfSubjectTemplet;
import com.wn.sjpt.crf.dto.PageDto;
import com.wn.sjpt.crf.service.CrfSubjectTempletService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping("/api/crfSubjectTemplet")
public class CrfSubjectTempletController {
    @Autowired
    private CrfSubjectTempletService crfSubjectTempletService;
    @PostMapping("/save")
    public CrfSubjectTemplet save(@RequestBody CrfSubjectTemplet crfSubjectTemplet){
        CrfSubjectTemplet result = crfSubjectTempletService.save(crfSubjectTemplet);
        return result;
    }
    @GetMapping("/page")
    public String getList(PageDto pageDto){
        Page<CrfSubjectTemplet> crfSubjectTempletPage = crfSubjectTempletService.findAll(pageDto);
        JSONObject jsonObject = new JSONObject();
        jsonObject.put("rows",crfSubjectTempletPage.getContent());
        jsonObject.put("total",crfSubjectTempletPage.getTotalElements());
        return jsonObject.toString();
    }
    @DeleteMapping("/{id}")
    public Boolean delete(@PathVariable("id")Integer id){
        try {
            crfSubjectTempletService.deleteById(id);
            return true;
        } catch (Exception e) {
            e.printStackTrace();
            return false;
        }
    }
}
