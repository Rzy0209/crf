package com.wn.sjpt.crf.dto;

import lombok.Getter;
import lombok.Setter;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.Id;
import java.util.Date;

/**
 * @author mengpengwei
 * 不良事件观察表DTO
 */
@Getter
@Setter
public class CrfFormAdverseEventsObservationDto {
    /**
     * ID
     */
    private Integer id;
    /**
     * 机构码--备用
     */
    private String orgCode;
    /**
     * 科室编码--备用
     */
    private String depCode;
    /**
     * 用户名--备用
     */
    private String userName;
    /**
     * 表单id
     */
    private String crfId;
    /**
     * 文档类型
     */
    private Integer type;

    /**
     * 是否有不良事件
     */
    private Boolean haveAdverseEvent;

    /**
     * 不良事件名称
     */
    private String adverseEventNameOne;
    /**
     * 开始时间
     */
    private Date startDateOne;
    /**
     * 不良事件严重程度 字典表 轻度、中度、重度
     */
    private Integer severityOne;
    /**
     * 是否采取措施
     */
    private Boolean takeStepsOne;
    /**
     * 是否与研究器械相关 字典表 肯定有关、可能无关、极可能有关、可能有关、肯定无关
     */
    private Boolean relateToInstrumentOne;
    /**
     * 是否严重不良事件
     */
    private Boolean seriousAdverseEventOne;
    /**
     * 不良事件结局 仍存在、不知道、已缓解
     */
    private Integer endingOne;
    /**
     * 缓解日期
     */
    private Date relieveDateOne;
    /**
     * 是否退出实验
     */
    private Boolean exitTestOne;
    /**
     * 医生签名
     */
    private String docSignatureOne;
    /**
     * 日期
     */
    private Date eventDateOne;

    /**
     * 不良事件名称
     */
    private String adverseEventNameTwo;
    /**
     * 开始时间
     */
    private Date startDateTwo;
    /**
     * 不良事件严重程度 字典表 轻度、中度、重度
     */
    private Integer severityTwo;
    /**
     * 是否采取措施
     */
    private Boolean takeStepsTwo;
    /**
     * 是否与研究器械相关 字典表 肯定有关、可能无关、极可能有关、可能有关、肯定无关
     */
    private Boolean relateToInstrumentTwo;
    /**
     * 是否严重不良事件
     */
    private Boolean seriousAdverseEventTwo;
    /**
     * 不良事件结局 仍存在、不知道、已缓解
     */
    private Integer endingTwo;
    /**
     * 缓解日期
     */
    private Date relieveDateTwo;
    /**
     * 是否退出实验
     */
    private Boolean exitTestTwo;
    /**
     * 医生签名
     */
    private String docSignatureTwo;
    /**
     * 日期
     */
    private Date eventDateTwo;

    /**
     * 不良事件名称
     */
    private String adverseEventNameThree;
    /**
     * 开始时间
     */
    private Date startDateThree;
    /**
     * 不良事件严重程度 字典表 轻度、中度、重度
     */
    private Integer severityThree;
    /**
     * 是否采取措施
     */
    private Boolean takeStepsThree;
    /**
     * 是否与研究器械相关 字典表 肯定有关、可能无关、极可能有关、可能有关、肯定无关
     */
    private Boolean relateToInstrumentThree;
    /**
     * 是否严重不良事件
     */
    private Boolean seriousAdverseEventThree;
    /**
     * 不良事件结局 仍存在、不知道、已缓解
     */
    private Integer endingThree;
    /**
     * 缓解日期
     */
    private Date relieveDateThree;
    /**
     * 是否退出实验
     */
    private Boolean exitTestThree;
    /**
     * 医生签名
     */
    private String docSignatureThree;
    /**
     * 日期
     */
    private Date eventDateThree;
}
