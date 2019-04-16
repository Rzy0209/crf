package com.wn.sjpt.crf.web;

import com.winning.framework.ums.dto.AppUser;
import com.winning.framework.ums.filter.util.UserUtil;
import com.wn.sjpt.crf.domain.CrfSubjectForm;
import com.wn.sjpt.crf.dto.TreeDto;
import com.wn.sjpt.crf.service.CrfSubjectFormService;
import com.wn.sjpt.crf.util.CommonUtils;
import com.wn.sjpt.crf.util.PowerAnnotation;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;

/**
 * @author wzy
 * 表单
 */
@RestController
@RequestMapping(value = "/api/subjectform")
public class CrfSubjectFormController {
    @Autowired
    private CrfSubjectFormService subjectFormService;

    /**
     * 获取分组信息
     * @return
     */
    @RequestMapping(value = "/getall", method = RequestMethod.POST)
    public List<CrfSubjectForm> getPs(@RequestParam("param") String param) {
        try {
            List<CrfSubjectForm> allInfo = subjectFormService.getInfo(param);
            return allInfo;
        } catch (Exception e) {
            e.printStackTrace();
            return null;
        }
    }

    /**
     * 获取分组信息
     * @return
     */
    @RequestMapping(value = "/gettree", method = RequestMethod.POST)
    public List<TreeDto> getTreeData(@RequestParam("param") String param) {
        try {
            List<TreeDto> allInfo = subjectFormService.getData(param);
            return allInfo;
        } catch (Exception e) {
            e.printStackTrace();
            return null;
        }
    }

    /**
     * 获取分组信息
     * @return
     */
    @RequestMapping(value = "/del", method = RequestMethod.POST)
    public String del(@RequestParam("id") Integer id) {
        try {
            String result = subjectFormService.del(id);
            return result;
        } catch (Exception e) {
            e.printStackTrace();
            return "删除失败";
        }
    }
    /**
     * 保存
     * @return
     */
    @RequestMapping(value = "/save", method = RequestMethod.POST)
    public String save(CrfSubjectForm crfSubjectForm) {
        try {
            subjectFormService.save(crfSubjectForm);
            return "保存成功";
        } catch (Exception e) {
            e.printStackTrace();
            return "保存失败";
        }
    }

}
