package com.wn.sjpt.crf.domain;

import lombok.Getter;
import lombok.Setter;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.Id;
import java.util.Date;

/**
 * @author yzj
 */
@Entity
@Getter
@Setter
public class CrfCompForm {
    /**
     * id
     */
    @Id
    @Column(length = 50)
    private String id;
    /**
     * 机构码--备用
     */
    @Column(length = 100)
    private String orgCode;
    /**
     * 科室编码--备用
     */
    @Column(length = 100)
    private String depCode;
    /**
     * 用户名--备用
     */
    @Column(length = 100)
    private String userName;

    /**
     * 页数
     */
    private int pages=1;
    /**
     * 创建人
     */
    @Column(length = 100)
    private String creator;
    /**
     * 表单名称
     */
    @Column(length = 100)
    private String name;

    /**
     * 是否系统内置
     */
    private boolean offical;
    /**
     * 创建时间
     */
    @Column(nullable = false)
    private Date createTime;
    /**
     * 更新时间
     */
    @Column(nullable = false)
    private Date updateTime;

}
