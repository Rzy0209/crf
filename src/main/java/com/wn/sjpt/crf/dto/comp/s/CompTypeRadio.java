package com.wn.sjpt.crf.dto.comp.s;

import com.wn.sjpt.crf.domain.CrfCompOption;
import com.wn.sjpt.crf.dto.comp.BaseComp;
import lombok.Getter;
import lombok.Setter;

import java.util.List;

/**
 * @author ghr
 * 组件类型：单选
 */
@Getter
@Setter
public class CompTypeRadio extends BaseComp {
    /**
     * 随机选项
     */
    private boolean random;
    /**
     * 排列方式
     */
    private String optionLayout;
    /**
     * 选项
     */
    private String options;
}

