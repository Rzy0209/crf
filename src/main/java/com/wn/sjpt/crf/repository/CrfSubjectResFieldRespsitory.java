package com.wn.sjpt.crf.repository;

import com.wn.sjpt.crf.domain.CrfSubjectResField;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;

import java.util.List;

/**
 * @author yzj
 */
public interface CrfSubjectResFieldRespsitory extends JpaRepository<CrfSubjectResField, String> {
    /**
     * 根据报表ID查询列表
     *
     * @param subId
     * @return
     */
    List<CrfSubjectResField> findAllBySubIdAndDisabledFalse(String subId);

    /**
     * 根据id查询
     *
     * @param id
     * @return 未删除的结果
     */
    CrfSubjectResField getByIdAndDisabledFalse(String id);

    /**
     * 根据subid和id查询分类
     */
    CrfSubjectResField findBySubIdAndIdAndDisabledFalse(String subId, String id);

    @Query("select id from CrfSubjectResField where subId = ?1 and disabled = false")
    List<String> findIdBySubIdAndDisabledFalse(String subId);
}
