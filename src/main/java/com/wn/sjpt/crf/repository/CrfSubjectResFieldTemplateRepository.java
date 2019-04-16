package com.wn.sjpt.crf.repository;

import com.wn.sjpt.crf.domain.CrfSubjectResFieldTemplate;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;

import java.util.List;
import java.util.Map;

/**
 * @author yzj
 */
public interface CrfSubjectResFieldTemplateRepository  extends JpaRepository<CrfSubjectResFieldTemplate,Integer> {
    List<CrfSubjectResFieldTemplate> findAllByResFieldId(String resFieldId);

    @Query(" from CrfSubjectResFieldTemplate where resField.id in ?1")
    List<CrfSubjectResFieldTemplate> findAllByResFieldIdIn(List<String> rfId);
}
