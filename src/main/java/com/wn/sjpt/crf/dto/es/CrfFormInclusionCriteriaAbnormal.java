package com.wn.sjpt.crf.dto.es;

import lombok.Getter;
import lombok.Setter;

import java.sql.Timestamp;

/**
 * @author mengpengwei
 * 异常受试者入选标准
 */
@Getter
@Setter
public class CrfFormInclusionCriteriaAbnormal extends BaseForm {
    /**
     * ID
     */
    private Integer id;

    /**
     * 报表ID
     */
    private String crfId;

    /**
     * 年龄标准：18～80周岁周岁
     */
    private Boolean ageStandard;
    /**
     * 在复旦大学附属中山医院神经内科门诊就诊，神经内科专家组医生评估其步态和认知功能异常，诊断为患病的受试者
     */
    private Boolean sick;
    /**
     * 意识清醒，无严重视觉、听觉或精神障碍，能配合完成认知评估。
     */
    private Boolean cognitiveAssessment;
    /**
     * 能独立站立及行走，不需要他人帮助或使用辅助器，能配合完成步态评估。
     */
    private Boolean gaitAssessment;
   
    private Timestamp createDate;

}
