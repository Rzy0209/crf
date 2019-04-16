package com.wn.sjpt.crf.dto.es;

import lombok.Getter;
import lombok.Setter;

import java.sql.Timestamp;
import java.util.Date;

/**
 * @author ghr
 * 严重不良事件或非预期不良事件评估表
 */
@Getter
@Setter
public class CrfFormAssessmentForSaeAndUae extends BaseForm {
    /**
     * ID
     */
    private Integer id;
    /**
     * 文档类型
     */
   
    private Integer type;
    /**
     * 伦理编号
     */
    private String ethicalCode;
    /**
     * 项目名称
     */
    private String entryName;
    /**
     * 主要研究者
     */
    private String majorResearcher;
    /**
     * 申办者
     */
    private String sponsor;
    /**
     *
     */
    private String cro;
    /**
     * 事件类型 字典表 严重不良事件、非预期不良事件
     */
   
    private String eventType;
    /**
     *  其他事件类型
     */
    private String otherEvent;
    /**
     * 报告类型 字典表 首次报告、随访报告、总结报告
     */
   
    private String reportType;
    /**
     * 本项目SAE本院计划入组例数
     */
   
    private String planEntryNumber;
    /**
     * 本项目SAE本院目前入组例数
     */
   
    private String currentEntryNumber;
    /**
     * 本院至今发生SAE受试者例数
     */
   
    private String allEntryNumber;
    /**
     *  受试者姓名缩写
     */
    private String subjectShortName;
    /**
     *  发生时间
     */
   
    private Date occurrenceTime;
    /**
     *  相关性判断
     */
    private String relevanceJudgment;
    /**
     *  发生事件名称
     */
    private String eventName;
    /**
     *  处理措施
     */
    private String treatmentMeasures;
    /**
     *  结果
     */
    private String result;
    /**
     *  项目负责人/授权人 自我评估 字典表 影响较小、较大。。
     */
   
    private String selfAssessment;
    /**
     *  项目负责人/授权人签名
     */
    private String personInChargeName;
    /**
     *  审核意见 字典表 无需进一步审查、需要审查。。。
     */
   
    private String auditOpinion;
    /**
     *  审查者签名
     */
    private String censorName;
    /**
     *  审查日期
     */
   
    private Date examinationDate;
   
    private Timestamp createDate;
}
