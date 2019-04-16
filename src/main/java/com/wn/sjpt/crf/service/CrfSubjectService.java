package com.wn.sjpt.crf.service;

import com.wn.sjpt.crf.domain.CrfSubject;
import com.wn.sjpt.crf.dto.PageDto;
import com.wn.sjpt.crf.repository.CrfSubjectRepository;
import com.wn.sjpt.crf.repository.specification.CrfSubjectSpecification;
import com.wn.sjpt.crf.util.CommonUtils;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.PageRequest;
import org.springframework.data.domain.Pageable;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;

/**
 * 课题
 *
 * @author wzy
 */
@Service
public class CrfSubjectService {
    @Autowired
    private CrfSubjectRepository subjectRepository;

    public CrfSubject save(CrfSubject subject) {
        if (CommonUtils.isEmpty( subject.getId() )) {
            subject.setId( CommonUtils.nextu() );
        }
        return subjectRepository.save( subject );
    }

    public CrfSubject findById(String id) {
        CrfSubject subjectTemp = null;
        Optional<CrfSubject> subjectOptional = subjectRepository.findById( id );
        if (subjectOptional.isPresent()) {
            subjectTemp = subjectOptional.get();
        }
        return subjectTemp;
    }

    public void deleteById(String id) {
        subjectRepository.deleteById( id );
    }

    public Page<CrfSubject> findPageBySubject(CrfSubject subject, PageDto page) {
        Pageable pageable = PageRequest.of( page.getOffset(), page.getLimit() );
        return subjectRepository.findAll( CrfSubjectSpecification.queryAllBySubject( subject ), pageable );
    }

    public List<CrfSubject> findAll() {
        return subjectRepository.findAll();
    }

}
