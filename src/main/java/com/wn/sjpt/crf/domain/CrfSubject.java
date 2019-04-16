package com.wn.sjpt.crf.domain;

import lombok.Getter;
import lombok.Setter;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.Id;
import java.util.Date;

/**
 * 课题实体类
 * @author yzj
 */
@Getter
@Setter
@Entity
public class CrfSubject extends BaseUser {
    /**
     * id
     */
    @Id
    @Column(length = 36)
    private String id;

    /**
     * 负责人
     */
    @Column(length = 100)
    private String leader;
    /**
     * 课题开始时间
     */
    @Column
    private Date startDate;
    /**
     * 课题结束时间
     */
    @Column
    private Date endDate;
    /**
     * 课题类型
     */
    private Integer type;
    /**
     * 课题级别
     */
    private Integer level;
    /**
     * 归属专病
     */
    private String belong;
    /**
     * 课题描述
     */
    private String remark;
    /**
     * 当前状态
     */
    private Integer status=1;
    /**
     * 课题名称
     */
    private String name;
}
