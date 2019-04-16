package com.wn.sjpt.crf.dto.es;

import lombok.Getter;
import lombok.Setter;

import java.sql.Timestamp;
import java.util.Date;

/**
 * @author ghr
 * 不良事件观察表
 */
@Getter
@Setter
public class CrfFormAdverseEventsObservation extends BaseForm {
    /**
     * ID
     */
    private Integer id;
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
     * 不良事件名称
     */
    private String adverseEventNameTwo;
    /**
     * 不良事件名称
     */
    private String adverseEventNameThree;
    /**
     * 开始时间one
     */
    private Date startDateOne;
    /**
     * 开始时间two
     */
    private Date startDateTwo;
    /**
     * 开始时间three
     */
    private Date startDateThree;
    /**
     * 不良事件严重程度 字典表 轻度、中度、重度
     */
    private String severityOne;
    private String severityTwo;
    private String severityThree;
    /**
     * 是否采取措施
     */
    private Boolean takeStepsOne;
    private Boolean takeStepsTwo;
    private Boolean takeStepsThree;
    /**
     * 是否与研究器械相关 字典表 肯定有关、可能无关、极可能有关、可能有关、肯定无关
     */
    private String relateToInstrumentOne;
    private String relateToInstrumentTwo;
    private String relateToInstrumentThree;
    /**
     * 是否严重不良事件
     */
    private Boolean seriousAdverseEventOne;
    private Boolean seriousAdverseEventTwo;
    private Boolean seriousAdverseEventThree;
    /**
     * 不良事件结局 仍存在、不知道、已缓解
     */
    private String endingOne;
    private String endingTwo;
    private String endingThree;
    /**
     * 缓解日期one
     */
    private Date relieveDateOne;
    /**
     * 缓解日期Two
     */

    private Date relieveDateTwo;
    /**
     * 缓解日期Three
     */

    private Date relieveDateThree;
    /**
     * 是否退出实验
     */

    private Boolean exitTestOne;

    private Boolean exitTestTwo;

    private Boolean exitTestThree;
    /**
     * 医生签名
     */
    private String docSignatureOne;
    private String docSignatureTwo;
    private String docSignatureThree;
    /**
     * 日期one
     */

    private Date eventDateOne;
    /**
     * 日期Two
     */

    private Date eventDateTwo;
    /**
     * 日期Three
     */

    private Date eventDateThree;
    /**
     * 创建日期
     */

    private Timestamp createDate;
}
