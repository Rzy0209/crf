package com.wn.sjpt.crf.dto;

import lombok.Getter;
import lombok.Setter;

/**
 * @author mengpengwei
 * 患者基本信息DTO
 */
@Getter
@Setter
public class CrfFormBasicInfoDto {

    /**
     * id
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
     * 文档类型
     */
    private Integer type;
    /**
     * 报表ID
     */
    private String crfId;
    /**
     * 性别，1：男，2：女 ，99：未知，0：未说明
     */
    private Integer gender;
    /**
     * 年龄
     */
    private Integer age;
    private Integer minAge;
    private Integer maxAge;
    /**
     * 民族
     */
    private String nation;
    /**
     * 职业
     */
    private String profession;
    /**
     * 身高 单位cm
     */
    private Double height;
    /**
     * 体重 单位kg
     */
    private Double weight;
    /**
     * 婚姻
     */
    private Integer marriage;
    /**
     * 收教育年限 单位年
     */
    private Integer educationYear;
    /**
     * 文化程度
     */
    private String eductionDegree;
    /**
     * 利手 0：双手，1：右手，2：左右
     */
    private Integer handedness;

}
