package com.wn.sjpt.crf.dto.comp;

import com.wn.sjpt.crf.domain.CrfCompOption;
import lombok.Getter;
import lombok.Setter;

import java.util.List;

/**
 * @author ghr
 * 组件校验规则
 */
@Getter
@Setter
public class CompOptionGroup {
    private String optionLayout;
    private boolean random;
    private List<CrfCompOption> options;
}
