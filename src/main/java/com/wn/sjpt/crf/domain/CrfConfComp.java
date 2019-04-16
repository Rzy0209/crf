package com.wn.sjpt.crf.domain;

import lombok.Getter;
import lombok.Setter;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.Id;

/**
 * @author yzj
 * 组件配置
 */
@Entity
@Getter
@Setter
public class CrfConfComp {
    /**
     * ID
     */
    @Id
    @GeneratedValue
    private Integer id;
    /**
     * 机构码--备用
     */
    @Column(length = 100)
    private String orgCode;
    /**
     * 科室编码--备用
     */
    private String depCode;
    /**
     * 用户名--备用
     */
    @Column(length = 100)
    private String userName;
    /**
     * 名称
     */
    @Column(nullable = false, length = 100)
    private String name;
    /**
     * 编码
     */
    @Column(nullable = false, length = 100)
    private String code;
    /**
     * 组件分类-1 基础组件 2 布局组件
     */
    private Integer type;
    /**
     * 组件二级分类
     */
    private Integer subType;
    /**
     * 是否引用组件(组合组件、业务组件)
     */
    private Boolean quote;
    /**
     * 引用组件编码,组件编码间以逗号分隔
     */
    @Column(length = 500)
    private String quoteCompCodes;
    /**
     * 组件内容
     */
    @Column(length = 1000)
    private String content;
    /**
     * 组件脚本
     */
    @Column(length = 1000)
    private String script;
    /**
     * 组件说明信息
     */
    @Column(length = 200)
    private String remark;
    /**
     * 组件排序
     */
    private Integer sort;
    /**
     * 是否启用
     */
    private Boolean enabled=true;
}
