package com.wn.sjpt.crf.dto.es;

import lombok.Getter;
import lombok.Setter;

import java.sql.Timestamp;
import java.util.Date;

/**
 * @author li_jing
 * @date 2018-11-30
 * 既往辅助检查
 */
@Getter
@Setter
public class CrfFormSupplementaryExamination extends BaseForm {

    /**
     * id
     */
    private Integer id;

    /**
     * 文档类型
     */
   
    private Integer type;
    /**
     * 头颅CT
     */
   
    private Boolean headCT;
    /**
     * 头颅CT 本院
     */
   
    private Boolean headCtOurHospital;
    /**
     * 头颅CT 外院
     */
   
    private Boolean headCtOuterHospital;
    /**
     * 头颅CT 检查日期
     */
   
    private Date headCtInspectDate;
    /**
     * 头颅CT 异常
     */
   
    private Boolean headCtAbnormal;
    /**
     * 头颅CT 异常描述
     */
    private String headCtAbnormalDescribe;
    /**
     * 头颅MRI
     */
   
    private Boolean headMri;
    /**
     * 头颅MRI 本院
     */
   
    private Boolean headMriOurHospital;
    /**
     * 头颅MRI 外院
     */
   
    private Boolean headMriOuterHospital;
    /**
     * 头颅MRI 检查日期
     */
   
    private Date headMriInspectDate;
    /**
     * 头颅MRI 异常
     */
   
    private Boolean headMriAbnormal;
    /**
     * 头颅MRI 异常描述
     */
    private String headMriAbnormalDescribe;
    /**
     * 报表ID
     */
    private String crfId;
   
    private Timestamp createDate;

}
