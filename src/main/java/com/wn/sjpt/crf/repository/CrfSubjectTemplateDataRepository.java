package com.wn.sjpt.crf.repository;

import com.wn.sjpt.crf.domain.CrfSubjectTemplateData;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.List;

/**
 * @author yzj
 */
public interface CrfSubjectTemplateDataRepository extends JpaRepository<CrfSubjectTemplateData,String> {
    List<CrfSubjectTemplateData> findAllByTemplateIdAndDisabledFalse(String templateId);
}
