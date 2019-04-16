package com.wn.sjpt.crf.dto;

import com.wn.sjpt.crf.util.exception.BussinessException;
import lombok.Getter;
import lombok.Setter;
import lombok.ToString;

/**
 * @author yzj
 * 响应结果
 */
@Getter
@Setter
@ToString
public class Resp<T> {
    /**
     * 状态
     */
    private boolean success;
    /**
     * 错误码
     */
    private Integer error;
    /**
     * 错误信息
     */
    private String errMsg;
    /**
     * 返回数据
     */
    private T data;

    public Resp(Integer error, String errMsg) {
        this.error = error;
        this.errMsg = errMsg;
        this.success=false;
    }
    public Resp(T data) {
        this.success = true;
        this.error=0;
        this.data = data;
    }
    public Resp(BussinessException ex){
        this.success=false;
        this.error = ex.getError();
        this.errMsg=ex.getErrMsg();
    }
}
