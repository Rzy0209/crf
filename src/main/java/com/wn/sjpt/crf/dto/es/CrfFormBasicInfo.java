package com.wn.sjpt.crf.dto.es;

import lombok.Getter;
import lombok.Setter;

import java.sql.Timestamp;

/**
 * @author li_jing
 * @date 2018-11-30
 * 患者基本信息
 */
@Getter
@Setter
public class CrfFormBasicInfo  extends BaseForm {

    /**
     * id
     */
    private Integer id;
    /**
     * 文档类型
     */
   
    private Integer type;
    /**
     * 性别，1：男，2：女 ，99：未知，0：未说明
     */
   
    private Integer gender;
    /**
     * 身份证号
     */
    private String identifier;
    /**
     * 年龄
     */
    private Integer age;
    /**
     * 民族
     */

    private String nation;
    /**
     * 姓名
     *
     */

    private String name;
    /**
     * 身体质量指数（BMI）
     */
    private String bmi;
    /**
     * 舒张压
     */
    private String dbp;
    /**
     * 收缩压
     */
    private String sbp;
    /**
     * 手机号码
     */
    private String phoneNum;
    /**
     * 姓名缩写
     *
     */
    private String nameSx;
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
    /**
     * 创建时间
     */
   
    private Timestamp createDate;
    

}
