package com.wn.sjpt.crf.web;

import com.wn.sjpt.crf.service.CrfSubjectCodeService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RestController;


/**
 * @author mengpengwei
 * 编号
 */
@RestController
@RequestMapping(value = "/api/subject/code")
public class CrfSubjectCodeController {
    @Autowired
    private CrfSubjectCodeService subjectCodeService;

    /**
     * 根据ID获取试验编码
     *
     * @param id
     * @return
     */
    @RequestMapping(value = "/id/{id}", method = RequestMethod.GET)
    public String findTestNumber(@PathVariable String id) {
        String testNumber = "";
        try {
            testNumber = subjectCodeService.findTestNumber( id );
        } catch (Exception e) {
            e.printStackTrace();
        }
        return testNumber;
    }
}
