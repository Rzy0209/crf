package com.wn.sjpt.crf.web;

import com.wn.sjpt.crf.domain.CrfSubjectResField;
import com.wn.sjpt.crf.dto.CrfFieldTempDto;
import com.wn.sjpt.crf.service.CrfSubjectResFieldService;
import com.wn.sjpt.crf.util.exception.BussinessException;
import org.springframework.web.bind.annotation.*;

import java.util.List;

/**
 * @author yzj
 * 填报领域
 */
@RestController
@RequestMapping("/api/subjectresfield")
public class CrfSubjectResFieldController {
    private final CrfSubjectResFieldService crfSubjectResFieldService;

    public CrfSubjectResFieldController(CrfSubjectResFieldService crfSubjectResFieldService) {
        this.crfSubjectResFieldService = crfSubjectResFieldService;
    }

    /**
     * 根据subjectID查询对应领域
     * @param sid
     * @return
     */
    @GetMapping("/sid/{sid}")
    public List<CrfSubjectResField> findBySid(@PathVariable String sid){
        return crfSubjectResFieldService.findBySid(sid);
    }

    /**
     * 保存领域
     * @param field
     */
    @PostMapping("")
    public void save(CrfSubjectResField field){
        crfSubjectResFieldService.save(field);
    }
    @DeleteMapping("/{id}")
    public void delete(@PathVariable String id) throws BussinessException {
        crfSubjectResFieldService.delete(id);
    }

    /**
     * 通过subjectID获取表单分类关系及表单详细内容
     *
     * @param sid
     * @return
     */
    @GetMapping("/temp/{sid}")
    public CrfFieldTempDto findTempIdBySubId(@PathVariable String sid) {
        return crfSubjectResFieldService.findTempIdBySubId( sid );
    }
}

