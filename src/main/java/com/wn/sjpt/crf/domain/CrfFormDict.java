package com.wn.sjpt.crf.domain;

import lombok.Getter;
import lombok.Setter;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.Id;

/**
 * @author ghr
 * 字典表
 */
@Entity
@Getter
@Setter
public class CrfFormDict {
    /**
     * ID
     */
    @Id
    @GeneratedValue
    private Integer id;
    /**
     * 文档类型
     */
    @Column
    private Integer type;
    /**
     * 字典代码类型
     */
    @Column
    private Integer dictType;
    /**
     * 字典代码类型名称
     */
    @Column(length = 100)
    private String dictTypeName;
    /**
     * 字典项编码
     */
    @Column(length = 64)
    private String dictCode;
    /**
     * 字典项名称
     */
    @Column(length = 100)
    private String dictName;
}
