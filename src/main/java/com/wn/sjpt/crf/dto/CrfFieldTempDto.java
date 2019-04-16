package com.wn.sjpt.crf.dto;

import com.wn.sjpt.crf.domain.CrfSubjectTemplate;
import lombok.Getter;
import lombok.Setter;

import java.util.List;
import java.util.Map;

/**
 * @author mengpengwei
 */
@Getter
@Setter
public class CrfFieldTempDto {
    /**
     * 以ID为key整理，便于通过ID调取详细内容
     */
    private Map<String, CrfSubjectTemplate> subTempMap;

    /**
     * 表单分类关联关系,分类为key
     */
    private Map<String, List<String>> rftMap;
}
