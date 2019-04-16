package com.wn.sjpt.crf.dto.es;

import lombok.Getter;
import lombok.Setter;

import java.sql.Timestamp;
import java.util.Date;

/**
 * @author ghr
 *
 * @date 2018-11-30
 * 无症状性脑卒中
 */
@Getter
@Setter
public class CrfFormAsymptomaticStroke extends BaseForm {

    /**
     * id
     */
    private Integer id;

    /**
     * 文档类型
     */
   
    private Integer type;
    /**
     * 腔隙性梗死或缺血灶（直径≤2cm）
     */
    private Boolean lacunarInfarction;
    /**
     * 脑白质高信号
     */
   
    private Boolean whiteMatterHyperintensity;
    /**
     * 微出血
     */
   
    /**
     * 其他
     */
   
    private Boolean asymptomaticStrokeOther;
    /**
     * 无症状性脑卒中其他描述
     */
    private String asymptomaticStrokeOtherDescribe;
    /**
     * 部位 左
     */
   
    private Boolean asymptomaticStrokePositionLeft;
    /**
     * 部位 右
     */
   
    private Boolean asymptomaticStrokePositionRight;
    /**
     * 部位 双侧
     */
   
    private Boolean asymptomaticStrokePositionBilateal;
    /**
     * 部位 额叶
     */
   
    private Boolean asymptomaticStrokePositionFrontalLobe;
    /**
     * 部位 顶叶
     */
   
    private Boolean asymptomaticStrokePositionParietalLobe;
    /**
     * 部位 颞叶
     */
   
    private Boolean asymptomaticStrokePositionTemporalLobe;
    /**
     * 部位 枕叶
     */
   
    private Boolean asymptomaticStrokePositionOccipitalLobe;
    /**
     * 部位 脑干
     */
   
    private Boolean asymptomaticStrokePositionBrainstem;
    /**
     * 部位 小脑
     */
   
    private Boolean asymptomaticStrokePositionCerebellum;
    /**
     * 部位 基底节
     */
   
    private Boolean asymptomaticStrokePositionBasalGanglia;
    /**
     * 部位 丘脑
     */
   
    private Boolean asymptomaticStrokePositionThalamus;
    /**
     * 部位 其他
     */
   
    private Boolean asymptomaticStrokePositionOther;
    /**
     * 部位 其他描述
     */
    private String asymptomaticStrokePositionOtherDescribe;
    /**
     * 治疗方法 药物
     */
   
    private Boolean asymptomaticStrokeTherapeuticDrugs;
    /**
     * 治疗方法 药物描述
     */
    private String asymptomaticStrokeTherapeuticDrugsDescribe;
    /**
     * 报表ID
     */
    private String crfId;
   
    private Timestamp createDate;

}
