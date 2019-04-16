package com.wn.sjpt.crf.domain;

import com.wn.sjpt.crf.dto.comp.CompValidateRule;
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
public class CrfComp {
    @Id
    @Column(length = 50)
    /**
     * 组件编码
     */
    private String id;
    /**
     * 下一个组件编码
     */
    @Column(length = 50)
    private String nextId;
    /**
     * 上一个组件编码
     */
    @Column(length = 50)
    private String privId;
    /**
     * 组件类型
     */
    @Column(length = 20)
    private String compType;
    /**
     * 父组件ID
     */
    @Column(length = 50)
    private String parentId;
    /**
     * 父组件类型
     */
    @Column(length = 20)
    private String parentType;
    /**
     * 所在表单编号
     */
    @Column(length = 50)
    private String formId;
    /**
     * 部件编号
     */
    @Column(length = 50)
    private String widgetId;
    /**
     * 组件标题
     */
    @Column(length = 100)
    private String title;
    /**
     * 标签
     */
    @Column(length = 100)
    private String label;
    /**
     * 组件值编码（区分不同组件）
     */
    @Column(length = 50)
    private String valueCode;
    /**
     * 显示方式：
     */
    @Column(length = 20)
    private String visibility;
    /**
     * 显示条件脚本
     */
    @Column(length = 1000)
    private String showCondition;
    /**
     * 值检查脚本
     */
    @Column(length = 1000)
    private String valueCheck;
    /**
     * 所在页数
     */
    private int page;
    /**
     * 是否删除
     */
    private boolean deleted=false;
    /**
     * 是否提交锁定
     */
    private boolean commitLock=false;
    /**
     * 是否必需
     */
    private boolean required=false;
    /**
     * 创建时间
     */
    private Date createAt;
    /**
     * 更新时间
     */
    private Date updateAt;
    /**
     * 特殊字段 json
     */
    @Column(length = 1000)
    private String extraField;
    /**
     * 排序
     */
    private int sort;
}
