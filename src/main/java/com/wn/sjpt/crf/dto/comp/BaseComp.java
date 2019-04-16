package com.wn.sjpt.crf.dto.comp;

import com.wn.sjpt.crf.domain.CrfCompOption;
import lombok.Getter;
import lombok.Setter;

import java.util.List;

/**
 * @author yzj
 * 组件通用配置
 */
@Getter
@Setter
public class BaseComp {
    /**
     * 组件编码
     */
    private String id;
    /**
     * 下一个组件编码
     */
    private String nextId;
    /**
     * 上一个组件编码
     */
    private String privId;
    /**
     * 组件类型
     */
    private String compType;
    /**
     * 父组件ID
     */
    private String parentId;
    /**
     * 父组件类型
     */
    private String parentType;
    /**
     * 所在表单编号
     */
    private String formId;
    /**
     * 部件编号
     */
    private String widgetId;
    /**
     * 组件标题
     */
    private String title;
    /**
     * 标签
     */
    private String label;
    /**
     * 组件值编码（区分不同组件）
     */
    private String valueCode;
    /**
     * 显示方式：
     */
    private String visibility;
    /**
     * 显示条件脚本
     */
    private String showCondition;
    /**
     * 值检查脚本
     */
    private String valueCheck;
    /**
     * 值校验规则
     */
    private CompValidateRule valueValidateRule;
    /**
     * 所在页数
     */
    private int page;
    /**
     * 是否删除
     */
    private boolean deleted;
    /**
     * 是否提交锁定
     */
    private boolean commitLock;
    /**
     * 是否必需
     */
    private boolean required;
    /**
     * 创建时间
     */
    private String createAt;
    /**
     * 更新时间
     */
    private String updateAt;
    /**
     * 选项
     */
    private CompOptionGroup optionGroup;
}
