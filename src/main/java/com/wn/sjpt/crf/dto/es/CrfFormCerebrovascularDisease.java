package com.wn.sjpt.crf.dto.es;

import lombok.Getter;
import lombok.Setter;

import java.sql.Timestamp;
import java.util.Date;

/**
 * @author li_jing
 * @date 2018-11-30
 * 脑血管病发病情况
 */
@Getter
@Setter
public class CrfFormCerebrovascularDisease extends BaseForm{

    /**
     * id
     */
    private Integer id;

    /**
     * 文档类型
     */
    private Integer type;

    /**
     * 脑血管病发病情况
     */
    private Boolean disease;
    /**
     * 脑血栓形成
     */
    private Boolean cerebralThrombosis;
    /**
     * 脑栓塞
     */
    private Boolean cerebral;
    /**
     * 脑出血
     */
    private Boolean cerebralHemorrhage;
    /**
     * 脑血管病发病情况其他
     */
    private Boolean pathNerveHistoryOther;
    /**
     * 脑血管病发病情况其他描述
     */
    private String pathNerveHistoryOtherDescribe;
    /**
     * 部位 左
     */
    private Boolean positionLeft;
    /**
     * 部位 右
     */
    private Boolean positionRight;
    /**
     * 部位 双侧
     */
    private Boolean positionBilateal;
    /**
     * 部位 额叶
     */
    private Boolean positionFrontalLobe;
    /**
     * 部位 顶叶
     */
    private Boolean positionParietalLobe;
    /**
     * 部位 颞叶
     */
    private Boolean positionTemporalLobe;
    /**
     * 部位 枕叶
     */
    private Boolean positionOccipitalLobe;
    /**
     * 部位 脑干
     */
    private Boolean positionBrainstem;
    /**
     * 部位 小脑
     */
    private Boolean positionCerebellum;
    /**
     * 部位 基底节
     */
    private Boolean positionBasalGanglia;
    /**
     * 部位 丘脑
     */
    private Boolean positionThalamus;
    /**
     * 部位 其他
     */
   
    private Boolean positionOther;
    /**
     * 部位 其他描述
     */
    private String positionOtherDescribe;
    /**
     * 部位 不确定
     */
   
    private Boolean positionUncertain;
    /**
     * 部位 性质
     */
    private String positionNature;
    /**
     * 起病时间（年月日）
     */
   
    private Date startDate;
    /**
     * 治疗方法 药物
     */
   
    private Boolean therapeuticDrugs;
    /**
     * 治疗方法 药物描述
     */
    private String therapeuticDrugsDescribe;
    /**
     * 治疗方法 手术
     */
   
    private Boolean surgicalTreatmen;
    /**
     * 治疗方法 手术描述
     */
    private String surgicalTreatmenDescribe;
    /**
     * 遗留后遗症
     */
   
    private Boolean legacySequela;
    /**
     * 遗留后遗症描述
     */
   
    private String legacySequelaDescribe;
   
    private Timestamp createDate;


}
