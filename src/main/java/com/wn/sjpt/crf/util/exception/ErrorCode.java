package com.wn.sjpt.crf.util.exception;

import lombok.Getter;

/**
 * @author yzj
 * 错误码定义枚举
 */
@Getter
public enum ErrorCode {
    /**
     * 未找到异常
     */
    NOT_FIND(404),
    /**
     * 空列表
     */
    EMPTY_LIST(405),
    /**
     * 权限不足-认证失败
     */
    AUTH_FAILURE(401),
    /**
     * 参数缺失异常
     */
    PARAM_NOT_FOUND(402)
    ;
    private int val;
    ErrorCode(int val) {
        this.val=val;
    }
}
