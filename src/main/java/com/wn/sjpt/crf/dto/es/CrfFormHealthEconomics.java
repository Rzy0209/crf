package com.wn.sjpt.crf.dto.es;

import com.wn.sjpt.crf.domain.BaseUser;
import lombok.Getter;
import lombok.Setter;

import java.sql.Timestamp;

/**
 * @author ghr
 * 卫生经济学信息
 */
@Getter
@Setter
public class CrfFormHealthEconomics extends BaseUser {
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
     * 医疗保险类型 字典表 自费、医保。。。
     */
   
    private Integer insuranceType;
    /**
     * 医疗保险类型 其他详情
     */
   
    private String insuranceDetail;
    /**
     * 报销百分比
     */
   
    private String reimbursementPercent;
    /**
     * 本次就医诊疗费
     */
   
    private String treatmentFee;
    /**
     * 本次就医交通费
     */
   
    private String trafficFee;
    /**
     * 本次就医误工费
     */
   
    private String loseWorkingTimeFee;
    /**
     * 人均月家庭收入
     */
   
    private String perCapitaMonthlyIncome;
    /**
     * 常住地区
     */
    private String  permanentArea;
   
    private Timestamp createDate;
}
