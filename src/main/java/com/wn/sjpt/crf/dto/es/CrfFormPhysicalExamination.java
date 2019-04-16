package com.wn.sjpt.crf.dto.es;

import lombok.Getter;
import lombok.Setter;

import java.sql.Timestamp;

/**
 * @author li_jing
 * @date 2018-11-30
 * 患者体格检查
 */
@Getter
@Setter
public class CrfFormPhysicalExamination extends BaseForm {

    /**
     * id
     */
    private Integer id;

    /**
     * 文档类型
     */
   
    private Integer type;
    /**
     * 颅神经
     */
   
    private Boolean cranialNerves;
    /**
     * 颅神经描述
     */
    private String cranialNervesDescribe;
    /**
     * 运动
     */
   
    private Boolean motion;
    /**
     * 运动描述
     */
    private String motionDescribe;
    /**
     * 感觉
     */
   
    private Boolean feel;
    /**
     * 感觉描述
     */
    private String feelDescribe;
    /**
     * 共济
     */
   
    private Boolean mutualAid;
    /**
     * 共济描述
     */
    private String mutualAidDescribe;
    /**
     * 心
     */
   
    private Boolean heart;
    /**
     * 心描述
     */
    private String heartDescribe;
    /**
     * 肺
     */
   
    private Boolean lung;
    /**
     * 肺描述
     */
    private String lungDescribe;
    /**
     * 腹部
     */
   
    private Boolean abdomen;
    /**
     * 腹部描述
     */
    private String abdomenDescribe;
    /**
     * 其他
     */
   
    private Boolean other;
    /**
     * 其他描述
     */
    private String otherDescribe;
    /**
     * 报表ID
     */
    private String crfId;
    /**
     * 阳性体征
     */
   private String positiveSigns;
    private Timestamp createDate;


}
