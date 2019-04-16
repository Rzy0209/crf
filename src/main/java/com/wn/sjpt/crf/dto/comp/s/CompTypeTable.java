package com.wn.sjpt.crf.dto.comp.s;

import com.wn.sjpt.crf.dto.comp.BaseComp;
import lombok.Getter;
import lombok.Setter;

/**
 * @author ghr
 * 组件类型：表格
 */
@Getter
@Setter
public class CompTypeTable extends BaseComp {
    /**
     * 标题
     */
    private String tableTitle;
    /**
     * 行数
     */
    private Integer row;
    /**
     * 列数
     */
    private Integer col;
}
