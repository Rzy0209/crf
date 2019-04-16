package com.wn.sjpt.crf.domain;

import lombok.Getter;
import lombok.Setter;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.Id;

/**
 * @author yzj
 * option参数配置
 */
@Entity
@Getter
@Setter
public class CrfCompOption {
    @Id
    @Column(length = 50)
    private String id;
    @Column(length = 50)
    private String compId;
    @Column
    private boolean selected;
    @Column
    private boolean terminate;
    @Column
    private boolean exclusive;
    @Column(length = 50)
    private String openInputReg;
    @Column(length = 100)
    private String image;
    @Column(length = 50)
    private String label;
    @Column
    private boolean fixed;
    @Column
    private int valueCode;
    @Column
    private boolean openInput;
    @Column(length = 50)
    private String jump;
    /**
     * 排序
     */
    @Column
    private int sort;
}
