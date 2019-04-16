package com.wn.sjpt.crf.dto;

import lombok.Getter;
import lombok.Setter;

import java.util.List;

/**
 * @author yzj
 * 分页返回实体类
 */
@Getter
@Setter
public class RespPage<T> {
    private Integer total;
    private Integer page;
    private Integer limit;
    private List<T> rows;

    public RespPage(PageDto dto) {
        this.limit=dto.getLimit();
        this.page=dto.getOffset()%limit==0?dto.getOffset()/limit+1:dto.getOffset()/limit+2;
    }
    public RespPage(PageDto dto,Integer total,List<T> rows) {
        this.limit=dto.getLimit();
        this.page=dto.getOffset()%limit==0?dto.getOffset()/limit+1:dto.getOffset()/limit+2;
        this.total=total;
        this.rows=rows;
    }
}
