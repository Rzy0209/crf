package com.wn.sjpt.crf.dto.es;

import lombok.Getter;
import lombok.Setter;

import java.sql.Timestamp;

/**
 * @author Wzy
 * 入选标准
 */
@Getter
@Setter
public class CrfFormInclusionCriteria  extends BaseForm {
    /**
     * ID
     */
    private Integer id;
    
    /**
     * 报表ID
     */
    private String crfId;

    /**
     * 年龄≥60周岁
     */
   
    private Boolean oldGteSixty;
    /**
     *符合2015年《中国脑血管疾病分类》标准，诊断为非急性非致残性脑血管病
     */
   
    private Boolean nonAcuteAndNonDisabledDisease;
    /**
     * 意识清醒，无严重视觉、听觉或精神障碍，能配合完成认知评估。
     */
   
    private Boolean conscious;
    /**
     * 能独立站立及行走，不需要他人帮助或使用辅助器，能配合完成步态评估
     */
   
    private Boolean canBeIndependent;
   
    private Timestamp createDate;
}
