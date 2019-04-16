package com.wn.sjpt.crf.dto.es;

import lombok.Getter;
import lombok.Setter;

/**
 * @author ghr
 * 患者接受非计划治疗记录
 */
@Getter
@Setter
public class CrfFormRecordsOfUnplannedTreatmentChangeDetail extends BaseForm{
    /**
     * ID
     */
    private Integer id;
    /**
     * 非计划治疗主表ID
     */
    private Integer treatmentId;
    /**
     * 表单id
     */
    private String crfId;
    /**
     * 治疗后不适
     */
    private Boolean discomfort;
    /**
     * 治疗后不适描述
     */
    private String discomfortDescribe;
    /**
     * 是否改动
     */
   
    private Boolean changes;
    /**
     * 改动原因
     */
    private String changeReason;
}
