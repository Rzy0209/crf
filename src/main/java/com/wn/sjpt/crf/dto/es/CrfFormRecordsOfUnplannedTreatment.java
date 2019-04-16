package com.wn.sjpt.crf.dto.es;

import lombok.Getter;
import lombok.Setter;

import java.sql.Timestamp;

/**
 * @author ghr
 * 患者接受非计划治疗记录
 */
@Getter
@Setter
public class CrfFormRecordsOfUnplannedTreatment extends BaseForm {
    /**
     * ID
     */
    private Integer id;

    /**
     * 表单id
     */
    private String crfId;
    /**
     * 文档类型
     */
   
    private Integer type;
    /**
     * 备注
     */
    private String remark;
    /**
     * 创建时间
     */
   
    private Timestamp createDate;
}
