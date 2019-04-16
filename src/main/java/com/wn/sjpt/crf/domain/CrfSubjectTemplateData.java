package com.wn.sjpt.crf.domain;

import lombok.Getter;
import lombok.Setter;

import javax.persistence.*;

/**
 * 模板数据定义表
 * @author yzj
 */
@Entity
@Setter
@Getter
public class CrfSubjectTemplateData {
    @Id
    @Column(length = 36)
    private String id;
    @Column(nullable = false,length = 50)
    private String code;
    @Column(length = 100)
    private String title;
    @Column(length = 200)
    private String remark;
    /**
     * 格式化信息
     */
    @Column(length = 50)
    private String fmt;
    /**
     * 数据类型
     */
    @Column(length = 10)
    private String type;
    private boolean disabled;

    @ManyToOne(cascade = CascadeType.ALL,fetch = FetchType.LAZY)
    @JoinColumn(name = "template_id")
    private CrfSubjectTemplate template;
}
