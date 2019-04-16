package com.wn.sjpt.crf.util.exception;

import lombok.Getter;

import java.util.List;

/**
 * @author yzj 异常处理
 */
@Getter
public class BussinessException extends RuntimeException {
    private static final String PLACEHOLDER="\\{\\}";
    private Integer error;
    private String errMsg;

    /**
     * 异常处理
     * @param error
     * @param errMsg
     */
    public BussinessException(final ErrorCode error, final String errMsg) {
        super(errMsg);
        init(error,errMsg);
    }
    /**
     * 异常处理
     * @param error
     * @param errMsg
     * @param args
     */
    public BussinessException(final ErrorCode error, final String errMsg, final String ... args) {
        super(errMsg);
        init(error,errMsg);
        for(String arg:args){
            if(null==arg){
                arg="";
            }
            this.errMsg=this.errMsg.replaceFirst(PLACEHOLDER, arg);
        }
    }

    /**
     * 异常处理
     * @param error 异常编码
     * @param errMsg 异常消息
     * @param args 异常参数
     */
    public BussinessException(final ErrorCode error, final String errMsg, List<String> args){
        super(errMsg);
        init(error,errMsg);
        for(String arg:args){
            this.errMsg=this.errMsg.replaceFirst(PLACEHOLDER, arg);
        }
    }
    private void init(final ErrorCode error, final String errMsg){
        this.error = error.getVal();
        this.errMsg = errMsg;
    }
}
