package com.wn.sjpt.crf.dto.es;

import lombok.Getter;
import lombok.Setter;

import java.sql.Timestamp;

/**
 * @author li_jing
 * @date 2018-11-30
 * 既往全身疾病史及用药情况
 */
@Getter
@Setter
public class CrfFormPastSystemicDiseaseHistory extends BaseForm {

    /**
     * id
     */
    private Integer id;

    /**
     * 文档类型
     */
   
    private Integer type;
    /**
     * 是否有既往病史
     */
   
    private Boolean pastMedicalHistory;
    /**
     * 糖尿病
     */
   
    private Boolean diabetes;
    /**
     * 糖尿病病程
     */

    private String diabetesTime;
    /**
     * 糖尿病治疗
     */

    private String diabetesTreat;
    /**
     * 高血压
     */
   
    private Boolean hypertension;
    /**
     * 高血压病程
     */

    private String hypertensionTime;
    /**
     * 高血压治疗
     */

    private String hypertensionTreat;
    /**
     * 心房颤动/瓣膜性心脏病/先天性心脏病/充血性心力衰竭
     */
   
    private Boolean atrialFibrillation;
    /**
     * 心房颤动/瓣膜性心脏病/先天性心脏病/充血性心力衰竭病程
     */

    private String atrialFibrillationTime;
    /**
     * 心房颤动/瓣膜性心脏病/先天性心脏病/充血性心力衰竭治疗
     */

    private String atrialFibrillationTreat;
    /**
     * 血脂异常
     */
   
    private Boolean dyslipidemia;
    /**
     * 血脂异常病程
     */

    private String dyslipidemiaTime;
    /**
     * 血脂异常治疗
     */

    private String dyslipidemiaTreat;
    /**
     * 高尿酸血症
     */
   
    private Boolean hyperuricemia;
    /**
     * 高尿酸血症病程
     */

    private String hyperuricemiaTime;
    /**
     * 高尿酸血症治疗
     */

    private String hyperuricemiaTreat;
    /**
     * 高同型半胱氨酸血症
     */
   
    private Boolean hyperhomocysteinemia;
    /**
     * 高同型半胱氨酸血症病程
     */

    private String hyperhomocysteinemiaTime;
    /**
     * 高同型半胱氨酸血症治疗
     */

    private String hyperhomocysteinemiaTreat;
    /**
     * 口服避孕药/绝经后激素治疗
     */
   
    private Boolean oralContraceptives;
    /**
     * 口服避孕药/绝经后激素治疗病程
     */

    private String oralContraceptivesTime;
    /**
     * 口服避孕药/绝经后激素治疗
     */

    private String oralContraceptivesTreat;
    /**
     * 其他动脉疾病（冠心病、颈动脉斑块、外周动脉疾病）
     */
   
    private Boolean otherArterialDiseases;
    /**
     * 其他动脉疾病（冠心病、颈动脉斑块、外周动脉疾病）病程
     */

    private String otherArterialDiseasesTime;
    /**
     * 其他动脉疾病（冠心病、颈动脉斑块、外周动脉疾病）治疗
     */

    private String otherArterialDiseasesTreat;
    /**
     * 偏头痛
     */
   
    private Boolean migraine;
    /**
     * 偏头痛病程
     */

    private String migraineTime;
    /**
     * 偏头痛治疗
     */

    private String migraineTreat;
    /**
     * 睡眠呼吸紊乱
     */
   
    private Boolean sleepDisorderedBreathing;
    /**
     * 睡眠呼吸紊乱病程
     */

    private String sleepDisorderedBreathingTime;
    /**
     * 睡眠呼吸紊乱治疗
     */

    private String sleepDisorderedBreathingTreat;
    /**
     * 外伤
     */
   
    private Boolean trauma;
    /**
     * 骨折
     */
   
    private Boolean fracture;
    /**
     * 畸形
     */
   
    private Boolean malformation;
    /**
     * 疼痛
     */
   
    private Boolean pain;
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
   
    private Timestamp createDate;

}
