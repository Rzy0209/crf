package com.wn.sjpt.crf.repository;

import com.wn.sjpt.crf.domain.CrfDict;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.JpaSpecificationExecutor;

import java.util.List;

/**
 * CrfDictRepository
 *
 * @author mengpengwei
 */
public interface CrfDictRepository extends JpaRepository<CrfDict, Integer>, JpaSpecificationExecutor<CrfDict> {
    List<CrfDict> findByTypeAndStatus(int type, int status);
}
