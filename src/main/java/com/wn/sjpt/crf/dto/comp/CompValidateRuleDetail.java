package com.wn.sjpt.crf.dto.comp;

import lombok.Getter;
import lombok.Setter;

/**
 * @author yzj
 * 校验规则详情
 */
@Getter
@Setter
public class CompValidateRuleDetail {
    private String expression;
    private String message;
    private String type;
    private String key;
}
