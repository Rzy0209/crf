package com.wn.sjpt.crf.domain;

import lombok.Getter;
import lombok.Setter;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.Id;

/**
 * @author yzj
 * 课题研究方向/领域/分类/报表分类
 */
@Entity
@Getter
@Setter
public class CrfSubjectResField extends BaseUser{
    @Id
    @Column(length = 36)
    private String id;
    /**
     * 课题编码
     */
    @Column(length = 36)
    private String subId;
    /**
     * 编码
     */
    @Column(length = 50)
    private String code;
    /**
     * 名称
     */
    @Column(length = 50)
    private String name;
    /**
     * 备注
     */
    @Column(length = 200)
    private String remark;
    /**
     * 是否禁用
     */
    private boolean disabled=false;

}
