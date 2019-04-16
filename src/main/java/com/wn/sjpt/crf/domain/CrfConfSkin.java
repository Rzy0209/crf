package com.wn.sjpt.crf.domain;

import lombok.Getter;
import lombok.Setter;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.Id;

/**
 * @author yzj
 * 皮肤（整体样式）配置
 */
@Entity
@Getter
@Setter
public class CrfConfSkin {
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
     * 皮肤类型 1 内容 2 页面路径
     */
    @Column(nullable = false)
    private Integer type;
    /**
     * 皮肤css样式
     */
    @Column(length = 2000)
    private String content;
    /**
     * 是否启用
     */
    private Boolean enabled=true;
}
