package com.wn.sjpt.crf.domain;

import lombok.Getter;
import lombok.Setter;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.Id;

/**
 * @author yzj
 * 字典实体类
 */
@Entity
@Getter
@Setter
public class CrfDict {
    @Id
    @GeneratedValue
    private Integer id;
    /**
     * 字典类型
     */
    private Integer type;
    /**
     * 类型名称
     */
    @Column(length = 50)
    private String typeName;
    /**
     *
     */
    @Column(length = 50,nullable = false)
    private String code;
    @Column(length = 50,nullable = false)
    private String name;
    @Column(length = 100)
    private String remark;
    private Integer status=1;

}
