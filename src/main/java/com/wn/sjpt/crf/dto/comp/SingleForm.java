package com.wn.sjpt.crf.dto.comp;

import lombok.Getter;
import lombok.Setter;

import java.util.List;

/**
 * 独立表单配置
 * @author yzj
 */
@Getter
@Setter
public class SingleForm<T extends BaseComp> {
    /**
     * 独立表单id
     */
    private String id;
    /**
     * 页数
     */
    private int pages=1;
    /**
     * 创建用户帐号
     */
    private String username;
    /**
     * 表单名称
     */
    private String name;
    /**
     * 创建时间
     */
    private String createTime;

    /**
     * 是否系统内置
     */
    private boolean offical;
    /**
     * 更新时间
     */
    private String updateTime;
    /**
     * 分组配置
     */
    private List<CompGroupConf> groups;
    /**
     * 组件配置
     */
    private List<T> options;

}
