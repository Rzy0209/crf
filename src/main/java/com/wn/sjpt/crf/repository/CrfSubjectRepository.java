package com.wn.sjpt.crf.repository;

import com.wn.sjpt.crf.domain.CrfSubject;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.JpaSpecificationExecutor;

/**
 * @author wzy
 * 课题仓库
 */
public interface CrfSubjectRepository extends JpaRepository<CrfSubject, String>, JpaSpecificationExecutor<CrfSubject> {

}
