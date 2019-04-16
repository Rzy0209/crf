package com.wn.sjpt.crf.service;

import com.wn.sjpt.crf.domain.CrfSubjectForm;
import com.wn.sjpt.crf.dto.TreeDto;
import com.wn.sjpt.crf.repository.CrfSubjectFormRepository;
import com.wn.sjpt.crf.util.CommonUtils;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.ArrayList;
import java.util.List;

/**
 * 表单
 * @author wzy
 */
@Service
public class CrfSubjectFormService {
    @Autowired
    private CrfSubjectFormRepository subjectFormRepository;

    public List<CrfSubjectForm> getInfo(String param) {
        List<CrfSubjectForm> all = new ArrayList<>();
        if(CommonUtils.isNotEmpty(param)){

        }else{
           all = subjectFormRepository.findAll();
        }
        return all;
    }

    public void save(CrfSubjectForm crfSubjectForm) {
        subjectFormRepository.save(crfSubjectForm);
    }

    public String del(Integer id) {
        subjectFormRepository.deleteById(id);
        return "删除成功";
    }

    public List<TreeDto> getData(String param) {
        List<TreeDto> all = new ArrayList<>();
        if(CommonUtils.isNotEmpty(param)){

        }else{
            List<CrfSubjectForm> all1 = subjectFormRepository.findAll();
            for(CrfSubjectForm c:all1){
                TreeDto td = new TreeDto();
                td.setId(c.getId());
                td.setName(c.getTitle());
                if(CommonUtils.isNotEmpty(c.getPid())){
                    td.setpId(c.getPid());
                }else{
                    td.setpId(0);
                }
                all.add(td);
            }
        }
        return all;
    }
}
