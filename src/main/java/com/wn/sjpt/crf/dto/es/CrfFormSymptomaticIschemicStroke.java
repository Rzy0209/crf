package com.wn.sjpt.crf.dto.es;

import lombok.Getter;
import lombok.Setter;

import java.sql.Timestamp;
import java.util.Date;

/**
 * @author ghr
 *
 * @date 2018-11-30
 * 既往症状性缺血性脑卒中
 */
@Getter
@Setter
public class CrfFormSymptomaticIschemicStroke extends BaseForm {

    /**
     * id
     */
    private Integer id;

    /**
     * 文档类型
     */
   
    private Integer type;
    /**
     * 大动脉粥样硬化性脑梗死
     */
    private Boolean atherosclerotIccerebralInfarction;
    /**
     * 是否有既往神经系统疾病史
     */
   
    private Boolean disease;
    /**
     * 脑栓塞
     */
   
    private Boolean cerebral;
    /**
     * 小动脉闭塞性脑梗死
     */
   
    private Boolean arterioleBstructionInfarction;
    /**
     * 分水岭梗死
     */
   
    private Boolean watershedInfarction;
    /**
     * 出血性梗死
     */
   
    private Boolean hemorrhagicInfarction;
    /**
     * moyamoya病
     */
   
    private Boolean moyamoya;
    /**
     * 动脉夹层
     */
   
    private Boolean arterialDissection;
    /**
     * 其他
     */
   
    private Boolean ischemicStrokeOther;
    /**
     * 既往症状性缺血性脑卒中其他描述
     */
    private String ischemicStrokeOtherDescribe;
    /**
     * 部位 左
     */
   
    private Boolean ischemicStrokePositionLeft;
    /**
     * 部位 右
     */
   
    private Boolean ischemicStrokePositionRight;
    /**
     * 部位 双侧
     */
   
    private Boolean ischemicStrokePositionBilateal;
    /**
     * 部位 额叶
     */
   
    private Boolean ischemicStrokePositionFrontalLobe;
    /**
     * 部位 顶叶
     */
   
    private Boolean ischemicStrokePositionParietalLobe;
    /**
     * 部位 颞叶
     */
   
    private Boolean ischemicStrokePositionTemporalLobe;
    /**
     * 部位 枕叶
     */
   
    private Boolean ischemicStrokePositionOccipitalLobe;
    /**
     * 部位 脑干
     */
   
    private Boolean ischemicStrokePositionBrainstem;
    /**
     * 部位 小脑
     */
   
    private Boolean ischemicStrokePositionCerebellum;
    /**
     * 部位 基底节
     */
   
    private Boolean ischemicStrokePositionBasalGanglia;
    /**
     * 部位 丘脑
     */
   
    private Boolean ischemicStrokePositionThalamus;
    /**
     * 部位 脊髓
     */

    private Boolean ischemicStrokePositionSpinalCord;
    /**
     * 胼胝体
     */
    private Boolean ischemicStrokeCorpusCallosum;
    /**
     * 部位 其他
     */
   
    private Boolean ischemicStrokePositionOther;
    /**
     * 部位 其他描述
     */
    private String ischemicStrokePositionOtherDescribe;
    /**
     * 起病时间（年月日）
     */
   
    private Date ischemicStrokeStartDate;
    /**
     * 治疗方法 药物
     */
   
    private Boolean ischemicStrokeTherapeuticDrugs;
    /**
     * 治疗方法 药物描述
     */
    private String ischemicStrokeTherapeuticDrugsDescribe;
    /**
     * 遗留后遗症
     */
   
    private Boolean ischemicStrokeLegacySequela;
    /**
     * 遗留后遗症描述
     */
   
    private String ischemicStrokeLegacySequelaDescribe;
    /**
     * 报表ID
     */
    private String crfId;
   
    private Timestamp createDate;

}
