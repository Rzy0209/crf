package com.wn.sjpt.crf.domain;

import lombok.Getter;
import lombok.Setter;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.Id;

/**
 * @author yzj
 * es 数据结构定义
 */
@Entity
@Getter
@Setter
public class CrfEsData {
    @Id
    @GeneratedValue
    private Integer id;
    private Integer pid;
    private Integer level;
    @Column(length = 50)
    private String code;
    @Column(length = 100)
    private String path;
    @Column(length = 50)
    private String name;
    @Column(length = 50)
    private String fmt;
    @Column(length = 100)
    private String remark;
    private Integer leaf;
    private Integer dataType=3;
    private Integer orderNum=0;
    private Integer isSort=0;
    private Integer isIk=0;
    private Integer status=1;
}
