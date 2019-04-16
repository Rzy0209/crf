package com.wn.sjpt.crf.service;

import com.wn.sjpt.crf.domain.CrfDict;
import com.wn.sjpt.crf.domain.CrfSubject;
import com.wn.sjpt.crf.dto.PageDto;
import com.wn.sjpt.crf.repository.CrfDictRepository;
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
 * 字典Service
 *
 * @author mengpengwei
 */
@Service
public class CrfDictService {
    @Autowired
    private CrfDictRepository dictRepository;

    public List<CrfDict> findByType(int type) {
        return dictRepository.findByTypeAndStatus( type, 1 );
    }

}
