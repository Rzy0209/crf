package com.wn.sjpt.crf.dto.es;

import lombok.Getter;
import lombok.Setter;

import java.sql.Timestamp;
import java.util.Date;

/**
 * @author ghr
 *
 * @date 2018-11-30
 * 基线评估
 */
@Getter
@Setter
public class CrfFormBaselineAssessment extends BaseForm {

    /**
     * id
     */
    private Integer id;

    /**
     * 文档类型
     */
   
    private Integer type;
    /**
     * 过去1年内跌倒次数
     */
    private String fallTimes;
    /**
     * 地形不平稳、有障碍物
     */
   
    private Boolean unstableTerrain;
    /**
     * 衣裤不合身、鞋不合脚
     */
   
    private Boolean unfitClothes;
    /**
     * 负载过重
     */
   
    private Boolean overload;
    /**
     * 情绪不佳
     */
   
    private Boolean badMood;
    /**
     * 视力不佳、视野受限
     */
   
    private Boolean poorEyesight;
    /**
     * 听觉受限
     */
   
    private Boolean limitedHearing;
    /**
     * 头晕、肢体乏力
     */
   
    private Boolean dizziness;
    /**
     * 其他
     */
   
    private Boolean otherReason;
    /**
     * 其他描述
     */
    private String otherReasonDescribe;
    /**
     * 改良Rankin量表（mRS）评分分级（0~6）：
     */
   
    private String rankin;
    /**
     * 进餐
     */
   
    private String eat;
    /**
     * 洗澡
     */
   
    private String shower;
    /**
     * 修饰
     */
   
    private String modification;
    /**
     * 穿衣
     */
   
    private String dress;
    /**
     * 可控制大便
     */
   
    private String controllableStool;
    /**
     * 可控制小便
     */
   
    private String controllableUrination;
    /**
     * 用厕
     */
   
    private String toilet;
    /**
     * 床椅转移（指从床上到椅子上并返回）
     */
   
    private String bedChairTransfer;
    /**
     * 平地行走
     */
   
    private String walkOnTheGround;
    /**
     * 上下楼梯
     */
   
    private String upAndDownStairs;
    /**
     * 步态认知筛查结果（神经内科普通医生）
     */
   
    private String internalMedicineNeurology;
    /**
     * 步态认知筛查结果（智能化神经系统功能评估）
     */
    private String intelligentNervousSystem;
    /**
     * 遗留后遗症
     */
   
    private Boolean baselineLegacySequela;
    /**
     * 遗留后遗症描述
     */
   
    private String baselineLegacySequelaDescribe;
    /**
     * 报表ID
     */
    private String crfId;
   
    private Timestamp createDate;

}
