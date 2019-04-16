package com.wn.sjpt.crf.repository;

import com.wn.sjpt.crf.domain.CrfSubjectCode;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.JpaSpecificationExecutor;

/**
 * @author mengpengwei
 * 编号
 */
public interface CrfSubjectCodeRepository extends JpaRepository<CrfSubjectCode, String>, JpaSpecificationExecutor<CrfSubjectCode> {

}
