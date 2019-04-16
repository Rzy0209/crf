package com.wn.sjpt.crf.domain;

import lombok.Getter;
import lombok.Setter;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.Id;

/**
 * @author yzj
 * 课题表单
 */
@Entity
@Getter
@Setter
public class CrfSubjectForm  extends BaseUser{
    /**
     * id
     */
    @Id
    @GeneratedValue
    private Integer id;
    /**
     * 课题编码
     */
    private String subId;
    /**
     * 表单类型 0 分组，1 表单
     */
    private Integer type;
    /**
     * 分类编码
     */
    @Column(length = 50)
    private String code;
    /**
     * 标题
     */
    @Column(length = 50)
    private String title;
    /**
     * 上级ID
     */
    private Integer pid;
    /**
     * 备注
     */
    private String remark;
    /**
     * 状态
     */
    private Integer status=1;
}
