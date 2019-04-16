package com.wn.sjpt.crf.dto.es;

import lombok.Getter;
import lombok.Setter;

import java.sql.Timestamp;
import java.util.Date;

/**
 * @author ghr
 *
 * @date 2018-11-30
 * 既往症状性出血性脑卒中
 */
@Getter
@Setter
public class CrfFormSymptomaticHemorrhagicStroke extends BaseForm {

    /**
     * id
     */
    private Integer id;

    /**
     * 文档类型
     */
   
    private Integer type;
    /**
     * 高血压脑出血
     */
    private Boolean hypertensiveCerebralHemorrhage;
    /**
     * 脑淀粉样血管病
     */
   
    private Boolean cerebralAmyloidAngiopathy;
    /**
     * 动静脉畸形
     */
   
    private Boolean arteriovenousMalformation;
    /**
     * moyamoya病
     */
   
    private Boolean moyamoya;
    /**
     * 动脉瘤破裂
     */
   
    private Boolean ruptureOfAneurysm;
    /**
     * 颅内静脉系统血栓形成
     */
   
    private Boolean intracranialVenousThrombosis;
    /**
     * 血液系统异常
     */
   
    private Boolean hematologicalAbnormalities;
    /**
     * 药物（溶栓、抗凝、抗血小板治疗）
     */
   
    private Boolean drugs;
    /**
     * 其他
     */
   
    private Boolean pathNerveHistoryOther;
    /**
     * 既往症状性缺血性脑卒中其他描述
     */
    private String pathNerveHistoryOtherDescribe;
    /**
     * 部位 左
     */
   
    private Boolean hemorrhagicStrokePositionLeft;
    /**
     * 部位 右
     */
   
    private Boolean hemorrhagicStrokePositionRight;
    /**
     * 部位 双侧
     */
   
    private Boolean hemorrhagicStrokePositionBilateal;
    /**
     * 部位 额叶
     */
   
    private Boolean hemorrhagicStrokePositionFrontalLobe;
    /**
     * 部位 顶叶
     */
   
    private Boolean hemorrhagicStrokePositionParietalLobe;
    /**
     * 部位 颞叶
     */
   
    private Boolean hemorrhagicStrokePositionTemporalLobe;
    /**
     * 部位 枕叶
     */
   
    private Boolean hemorrhagicStrokePositionOccipitalLobe;
    /**
     * 部位 脑干
     */
   
    private Boolean hemorrhagicStrokePositionBrainstem;
    /**
     * 部位 小脑
     */
   
    private Boolean hemorrhagicStrokePositionCerebellum;
    /**
     * 部位 脑室
     */
   
    private Boolean hemorrhagicStrokeVentricle;
    /**
     * 部位 蛛网膜下腔
     */
   
    private Boolean hemorrhagicStrokeSubarachnoidSpace;
    /**
     * 部位 其他
     */
   
    private Boolean hemorrhagicStrokePositionOther;
    /**
     * 部位 其他描述
     */
    private String hemorrhagicStrokePositionOtherDescribe;
    /**
     * 起病时间（年月日）
     */
   
    private Date hemorrhagicStrokeStartDate;
    /**
     * 治疗方法 药物
     */
   
    private Boolean hemorrhagicStrokeTherapeuticDrugs;
    /**
     * 治疗方法 药物描述
     */
    private String hemorrhagicStrokeTherapeuticDrugsDescribe;
    /**
     * 遗留后遗症
     */
   
    private Boolean hemorrhagicStrokeLegacySequela;
    /**
     * 遗留后遗症描述
     */
   
    private String hemorrhagicStrokeLegacySequelaDescribe;
    /**
     * 报表ID
     */
    private String crfId;
   
    private Timestamp createDate;

}
