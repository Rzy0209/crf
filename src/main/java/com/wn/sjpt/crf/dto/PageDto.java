package com.wn.sjpt.crf.dto;


import lombok.Getter;
import lombok.Setter;

/**
 * @author mengpengwei
 * 分页条件DTO
 */
@Getter
@Setter
public class PageDto {
    /**
     * 页数
     */
    private Integer offset;
    /**
     * 每页条数
     */
    private Integer limit;
    /**
     * 排序字段
     */
    private String sortCol;
    /**
     * 排序类型：ASC、DESC
     */
    private String sortType;
}
