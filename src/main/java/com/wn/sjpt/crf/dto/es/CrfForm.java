package com.wn.sjpt.crf.dto.es;

import lombok.Getter;
import lombok.Setter;

import java.sql.Timestamp;
import java.util.Date;
import java.util.Map;

/**
 * @author li_jing
 * @date 2018-11-29
 * 病例报告表
 */
@Getter
@Setter
public class CrfForm extends BaseForm{
    /**
     * id
     */
    private Integer id;
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
     * 身份证号
     */
    private String identityNumber;
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
    private Date researchDate;
    /**
     * 研究单位
     */
    private String researchUnit;
    /**
     * 完成form的数量
     */
    private Integer finishForm;
    /**
     * 创建时间
     */
    private Timestamp createDate;
    /**
     * 路径
     */
    private String uploadPath;
    /**
     * 统计数量
     */
    private Map<String,Integer> tj;

}
