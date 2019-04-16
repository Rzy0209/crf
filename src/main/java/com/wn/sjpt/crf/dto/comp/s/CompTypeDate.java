package com.wn.sjpt.crf.dto.comp.s;

import com.wn.sjpt.crf.dto.comp.BaseComp;
import lombok.Getter;
import lombok.Setter;

import java.util.Date;

/**
 * @author yzj
 * 组件类型：日期
 */
@Getter
@Setter
public class CompTypeDate extends BaseComp {
    /**
     * 日期格式化类型
     */
    private String format;
    /**
     * 最小值
     */
    private String min;
    /**
     * 最大值
     */
    private String max;
    private String newIndex;
    private boolean uk;
}
