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
public class CrfFormExclusionCriteria  extends BaseForm {
    /**
     * ID
     */
    private Integer id;

    /**
     * 报表ID
     */
    private String crfId;

    /**
     * 颅脑外伤、脑肿瘤、中枢神经系统感染、脱髓鞘疾病、癫痫、脊髓病等严重神经系统疾病。
     */
    private Boolean severeNeurologicalDiseases;
    /**
     * 有下肢溃疡、疼痛或截肢者。
     */
    private Boolean lowerLimbs;
    /**
     * 严重的认知障碍或失语等不能配合认知评估者。
     */
    private Boolean notCognitiveAssessment;
    /**
     * 严重的步态障碍或平衡障碍等不能配合步态评估者。
     */
    private Boolean notGaitAssessment;
    /**
     * 拒绝参加该研究的患者。
     */
    private Boolean refuseToParticipate;
    /**
     * 存在本排除标准未能列入、但研究者认为不宜入组本研究的其他异常情况。
     */
    private Boolean otherAbnormal;
    /**
     * 创建时间
     */
    private Timestamp createDate;
    /**
     * 既往≤6个月出现急性出血性或缺血性卒中
     */
    private Boolean ischemicStrokeLessThanSixMonths;
    /**
     *既往＞6个月出现致残性出血性或缺血性卒中（mRS≥3分）
     */
    private Boolean ischemicStrokeOccurredMoreThanSixMonths;
    /**
     * 其他原因引起的步态异常，如帕金森病、正常颅压性脑积水、耳源性疾病、亚急性联合变性、周围神经病变等
     */
    private Boolean gaitAbnormality;
    /**
     * 其它原因引起的认知功能异常，如阿尔兹海默病、额颞叶痴呆、路易体痴呆等
     */
    private Boolean cognitiveDysfunction;
}
