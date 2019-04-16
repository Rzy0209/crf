package com.wn.sjpt.crf.dto.comp.s;
/**
 * @author yghr
 *
 * 组件类型：标签
 */

import com.wn.sjpt.crf.dto.comp.BaseComp;
import lombok.Getter;
import lombok.Setter;

@Getter
@Setter
public class CompTypeLabel extends BaseComp {
    /**
     * 标签类型
     */
    private String labelType;
}

