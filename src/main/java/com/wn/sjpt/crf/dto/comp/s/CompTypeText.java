package com.wn.sjpt.crf.dto.comp.s;

import com.wn.sjpt.crf.dto.comp.BaseComp;
import lombok.Getter;
import lombok.Setter;

/**
 * @author yzj
 *
 */
@Getter
@Setter
public class CompTypeText  extends BaseComp {
    /**
     * 默认文本
     */
    private String defaultText;
    /**
     * 最短长度
     */
    private Integer min;
    /**
     * 最长长度
     */
    private Integer max;
    /**
     * 显示方式：1 单行 2 多行
     */
    private String displayType;

    private String newIndex;

    private Integer defFlag;

    private String dictionary;

    private boolean cryptoStore;
}
