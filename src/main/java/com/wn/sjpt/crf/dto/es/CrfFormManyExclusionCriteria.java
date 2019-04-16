package com.wn.sjpt.crf.dto.es;

import lombok.Getter;
import lombok.Setter;

import java.sql.Timestamp;

/**
 * @author mengpengwei
 * 排除标准
 */
@Getter
@Setter
public class CrfFormManyExclusionCriteria extends BaseForm {
    /**
     * ID
     */
    private Integer id;
    
    /**
     * 报表ID
     */
    private String crfId;

    /**
     * 急性出血性或缺血性卒中。
     */
   
    private Boolean hemorrhagicAndIschemicStroke;
    /**
     * 既往致残性出血性或缺血性卒中（NIHSS评分≥3分）。
     */
   
    private Boolean nihss;
    /**
     * 其他原因引起的步态异常，如帕金森综合征、脑积水、小脑疾病、前庭系统疾病、深感觉异常、周围神经病变、肌肉骨骼病变等。
     */
   
    private Boolean gaitAbnormality;
    /**
     * 其它原因引起的认知功能异常，如阿尔兹海默病、额颞叶痴呆、路易体痴呆、脑积水、精神疾病等。
     */
   
    private Boolean cognitiveDysfunction;
    /**
     * 既往颅脑外伤、脑肿瘤、中枢神经系统感染、脱髓鞘疾病、癫痫、脊髓病等严重神经系统疾病。
     */
   
    private Boolean nervousSystemDisease;
    /**
     * 严重的认知障碍或失语等不能配合认知评估者
     */
   
    private Boolean cognitiveImpairment;
    /**
     * 严重的步态障碍或平衡障碍等不能配合步态评估者
     */
   
    private Boolean gaitDisorder;
    /**
     * 拒绝参加该研究的患者
     */
   
    private Boolean refuseResearch;
    /**
     * 存在本排除标准未能列入、但研究者认为不宜入组本研究的其他异常情况
     */
   
    private Boolean abnormalSituation;
   
    private Timestamp createDate;

}
