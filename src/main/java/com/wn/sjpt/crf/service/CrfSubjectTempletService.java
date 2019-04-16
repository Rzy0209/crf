package com.wn.sjpt.crf.service;

import com.winning.framework.ums.filter.util.UserUtil;
import com.wn.sjpt.crf.domain.CrfSubjectTemplet;
import com.wn.sjpt.crf.dto.PageDto;
import com.wn.sjpt.crf.repository.CrfSubjectTempletRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.PageRequest;
import org.springframework.data.domain.Pageable;
import org.springframework.stereotype.Service;

import javax.persistence.Id;
import java.util.Date;
import java.util.Optional;

@Service
public class CrfSubjectTempletService {
    @Autowired
    private CrfSubjectTempletRepository crfSubjectTempletRepository;
    public CrfSubjectTemplet save(CrfSubjectTemplet crfSubjectTemplet) {
        /*if (crfSubjectTemplet.getId()!=0){
            crfSubjectTemplet.setUpdateTime(new Date());
        }else{
            crfSubjectTemplet.setCreateTime(new Date());
            crfSubjectTemplet.setUserAccount(UserUtil.getUserLocal().getAccount());
        }*/
        return crfSubjectTempletRepository.save(crfSubjectTemplet);
    }

    public Page<CrfSubjectTemplet> findAll(PageDto pageDto) {
        PageRequest pageRequest = PageRequest.of(pageDto.getOffset()/pageDto.getLimit(), pageDto.getLimit());
        return crfSubjectTempletRepository.findAll(pageRequest);
    }

    public void deleteById(Integer id) {
        crfSubjectTempletRepository.deleteById(id);
    }
}
