package com.wn.sjpt.crf.domain;

import lombok.Getter;
import lombok.Setter;

import javax.persistence.Entity;
import javax.persistence.Id;

/**
 * @author mengpengwei
 * 编号表（试验编号用）
 */
@Getter
@Setter
@Entity
public class CrfSubjectCode {
    @Id
    private String subjectId;

    private Integer val;
}
