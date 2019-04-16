package com.wn.sjpt.crf.dto.es;

import lombok.Getter;
import lombok.Setter;

import java.util.Date;

/**
 * @author ghr
 * 患者接受非计划治疗记录
 */
@Getter
@Setter
public class CrfFormRecordsOfUnplannedTreatmentMedicalDetail extends BaseForm{
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
     * 治疗时间
     */
    private Date treatmentDate;
    /**
     * 药物名称
     */
    private String drugName;
    /**
     *
     * 剂量
     * */
    private String dose;
}
