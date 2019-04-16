package com.wn.sjpt.crf.dto.comp.s;

import com.wn.sjpt.crf.dto.comp.BaseComp;
import lombok.Getter;
import lombok.Setter;

/**
 * @author yzj
 * 组件类型-数值
 */
@Getter
@Setter
public class CompTypeNumber extends BaseComp {
    /**
     * 最小值
     */
    private Integer min;
    /**
     * 最大值
     */
    private Integer max;
    /**
     * 默认值
     */
    private String defaultValue;
    /**
     * 是否为整数
     */
    private boolean integer;

    private String newIndex;
    private boolean uk;
}
