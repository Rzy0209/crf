package com.wn.sjpt.crf.repository;

import com.wn.sjpt.crf.domain.CrfComp;
import com.wn.sjpt.crf.domain.CrfDict;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.JpaSpecificationExecutor;

import java.util.List;

/**
 * CrfCompRepository
 *
 * @author ghr
 */
public interface CrfCompRepository extends JpaRepository<CrfComp, String>, JpaSpecificationExecutor<CrfComp> {
    /**
     * 查询
     *
     * @param crfId
     * @return
     */
    List<CrfComp> findByFormIdOrderBySort(String crfId);

    /**
     * 查询
     *
     * @return
     */
    CrfComp findTopByOrderBySortDesc();

    /**
     * 查询
     *
     * @param id
     * @return
     */
    CrfComp findOneById(String id);

    CrfComp findBySort(Integer oldIndex);

    List<CrfComp> findBySortLessThan(Integer oldIndex);

    List<CrfComp> findBySortLessThanAndSortGreaterThanAndSortNotInAndSortNotIn(Integer oldIndex,Integer newIndex, int i,int j);

    List<CrfComp> findBySortGreaterThanAndSortLessThanEqualAndSortNot(Integer oldIndex,Integer newIndex,int i);
}
