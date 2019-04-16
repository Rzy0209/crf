package com.wn.sjpt.crf.repository;

import com.wn.sjpt.crf.domain.CrfSubjectForm;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.JpaSpecificationExecutor;

/**
 * @author wzy
 * 表单分组
 */
public interface CrfSubjectFormRepository extends JpaRepository<CrfSubjectForm,Integer>, JpaSpecificationExecutor<CrfSubjectForm> {


}
