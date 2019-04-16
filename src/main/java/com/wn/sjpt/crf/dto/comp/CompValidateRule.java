package com.wn.sjpt.crf.dto.comp;

import lombok.Getter;
import lombok.Setter;

import java.util.List;

/**
 * @author yzj
 * 组件校验规则
 */
@Getter
@Setter
public class CompValidateRule {
    private boolean enabled;
    private List<CompValidateRuleDetail> rules;
}
