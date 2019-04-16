package com.wn.sjpt.crf.dto;

import lombok.Getter;
import lombok.Setter;

/**
 * 统计数量
 * @author wzy
 */
@Getter
@Setter
public class AcountInfoDto {
    /**
     * 机构编码
     */
    private String orgCode;
    /**
     *患者数量
     */
    private Integer personAcount;
    /**
     * 表单数量
     */
    private Integer formAcount;
}
