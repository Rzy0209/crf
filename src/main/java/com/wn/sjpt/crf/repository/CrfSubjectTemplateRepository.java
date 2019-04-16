package com.wn.sjpt.crf.repository;

import com.wn.sjpt.crf.domain.CrfSubjectTemplate;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.List;

/**
 * @author mengpengwei
 */
public interface CrfSubjectTemplateRepository extends JpaRepository<CrfSubjectTemplate, String> {
    List<CrfSubjectTemplate> findByIdIn(List<String> id);
}
