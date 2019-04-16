package com.wn.sjpt.crf.domain;

import com.fasterxml.jackson.annotation.JsonIgnore;
import lombok.Getter;
import lombok.Setter;

import javax.persistence.*;
import java.util.List;

/**
 * @author yzj
 * 模板配置表
 */
@Entity
@Getter
@Setter
public class CrfSubjectTemplate  extends BaseUser{
    @Id
    @Column(length = 36)
    private String id;
    @Column(nullable = false,length = 50)
    private String code;
    @Column(length = 50)
    private String title;
    @Column(length = 200)
    private String remark;
    @Column(length = 10000)
    private String template;
    private boolean disabled=false;

    @JsonIgnore
    @OneToMany(cascade = CascadeType.REMOVE,orphanRemoval = true,fetch = FetchType.LAZY)
    @JoinColumn(name="template_id")
    private List<CrfSubjectTemplateData> dataList;

}
