package com.wn.sjpt.crf.domain;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.Id;

/**
 * @author yzj
 * 数据字典描述
 */
@Entity
public class CrfEsDataDict {
    @Id
    @GeneratedValue
    private Integer id;

    private Integer dataId;
    private Integer code;
    @Column(length = 50)
    private Integer name;
    @Column(length = 100)
    private Integer remark;
}
