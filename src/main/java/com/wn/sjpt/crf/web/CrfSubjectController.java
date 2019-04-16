package com.wn.sjpt.crf.web;

import com.winning.framework.ums.dto.AppUser;
import com.winning.framework.ums.filter.util.UserUtil;
import com.wn.sjpt.crf.domain.CrfDict;
import com.wn.sjpt.crf.domain.CrfSubject;
import com.wn.sjpt.crf.dto.PageDto;
import com.wn.sjpt.crf.service.CrfSubjectService;
import net.sf.json.JSONObject;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.Page;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;


/**
 * @author wzy
 * 课题
 */
@RestController
@RequestMapping(value = "/api/subject")
public class CrfSubjectController {
    @Autowired
    private CrfSubjectService subjectService;

    /**
     * 查询所有课题
     *
     * @return
     */
    @RequestMapping(value = "", method = RequestMethod.GET)
    public List<CrfSubject> findAll() {
        List<CrfSubject> subjectList = null;
        try {
            subjectList = subjectService.findAll();
        } catch (Exception e) {
            e.printStackTrace();
        }
        return subjectList;
    }

    /**
     * 分页查询课题，获取列表
     *
     * @param subject
     * @param pageDto
     * @return
     */
    @RequestMapping(value = "/page", method = RequestMethod.GET)
    public String findPageList(CrfSubject subject, PageDto pageDto) {
        JSONObject json = new JSONObject();
        try {
            Page<CrfSubject> page = subjectService.findPageBySubject( subject, pageDto );
            json.put( "rows", page.getContent() );//JSONArray
            json.put( "total", page.getTotalElements() );//总记录数
        } catch (Exception e) {
            e.printStackTrace();
        }
        return JSONObject.fromObject( json ).toString();
    }

    /**
     * 根据ID查询课题，用于查看或编辑
     *
     * @param id
     * @return
     */
    @RequestMapping(value = "/id/{id}", method = RequestMethod.GET)
    public CrfSubject findById(@PathVariable String id) {
        CrfSubject subject = null;
        try {
            subject = subjectService.findById( id );
        } catch (Exception e) {
            e.printStackTrace();
        }
        return subject;
    }

    /**
     * 保存课题
     *
     * @param subject
     * @return
     */
    @RequestMapping(value = "/save", method = RequestMethod.POST)
    public String save(CrfSubject subject) {
        try {
            subject.init();
            subjectService.save( subject );
            return "保存成功";
        } catch (Exception e) {
            e.printStackTrace();
            return "保存失败";
        }
    }

    /**
     * 删除课题
     *
     * @param id
     * @return
     */
    @RequestMapping(value = "/delete/{id}", method = RequestMethod.GET)
    public String delete(@PathVariable String id) {
        try {
            subjectService.deleteById( id );
            return "删除成功";
        } catch (Exception e) {
            e.printStackTrace();
            return "删除失败";
        }
    }
}
