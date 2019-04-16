package com.wn.sjpt.crf.dto;

import lombok.Getter;
import lombok.Setter;

import javax.persistence.Column;
import javax.persistence.GeneratedValue;
import javax.persistence.Id;
import java.sql.Timestamp;
import java.util.Date;
import java.util.Map;

/**
 * @author wzy
 * 病理报告信息DTO
 */
@Getter
@Setter
public class CrfFormDto {
    /**
     * id
     */
    private Integer id;
    /**
     * 课题ID
     */
    private String subjectId;
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
     * 文档类型
     */
    private Integer type;
    /**
     * 是否完成研究
     */
    private Boolean finishResearch;
    /**
     * 承担临床试验的医疗机构
     */
    private String actuatorName;
    /**
     * 受试者姓名拼音首字
     */
    private String subjectsShortName;
    /**
     * 试验编号
     */
    private String testNumber;
    /**
     * 研究者
     */
    private String researcher;
    /**
     * 研究日期
     */
    private String researchDate;
    /**
     * 研究单位
     */
    private String researchUnit;
    /**
     * 报表ID
     */
    private String crfId;
    /**
     * 报表ID
     */
    private Integer finishForm;
    /**
     * 创建日期
     */
    private Timestamp createDate;
    /**
     * 路径
     */
    private String uploadPath;
    /**
     * 统计数量
     */
    private Map<String, Integer> tj;
}
