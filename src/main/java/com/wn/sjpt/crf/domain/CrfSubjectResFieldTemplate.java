package com.wn.sjpt.crf.domain;

import lombok.Getter;
import lombok.Setter;

import javax.persistence.*;
import java.io.Serializable;

/**
 * @author yzj
 * 分类模板关联表
 */
@Entity
@Getter
@Setter
public class CrfSubjectResFieldTemplate implements Serializable {
    @Id
    @GeneratedValue
    private int id;
    @ManyToOne
    @JoinColumn(name = "rf_id")
    private CrfSubjectResField resField;
    @ManyToOne
    @JoinColumn(name = "temp_id")
    private CrfSubjectTemplate template;
}
