package com.wn.sjpt.crf.repository;

import com.wn.sjpt.crf.domain.CrfComp;
import com.wn.sjpt.crf.domain.CrfCompOption;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.JpaSpecificationExecutor;

import java.util.List;

/**
 * CrfCompOptionRepository
 *
 * @author ghr
 *
 */
public interface CrfCompOptionRepository extends JpaRepository<CrfCompOption, String>, JpaSpecificationExecutor<CrfCompOption> {
    List<CrfCompOption> findByCompIdOrderBySort(String id);

    CrfCompOption findOneById(String id);
}
