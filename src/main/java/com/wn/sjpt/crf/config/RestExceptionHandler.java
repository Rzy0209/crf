package com.wn.sjpt.crf.config;

import com.alibaba.fastjson.JSONException;
import com.alibaba.fastjson.JSONObject;
import com.wn.sjpt.crf.dto.Resp;
import com.wn.sjpt.crf.util.exception.BussinessException;
import lombok.extern.slf4j.Slf4j;
import org.springframework.core.MethodParameter;
import org.springframework.http.HttpStatus;
import org.springframework.http.MediaType;
import org.springframework.http.ResponseEntity;
import org.springframework.http.converter.HttpMessageConverter;
import org.springframework.http.server.ServerHttpRequest;
import org.springframework.http.server.ServerHttpResponse;
import org.springframework.web.bind.annotation.ExceptionHandler;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.bind.annotation.RestControllerAdvice;
import org.springframework.web.servlet.mvc.method.annotation.ResponseBodyAdvice;

/**
 * @author yzj
 * rest统一数据f及异常处理
 */
@Slf4j
@RestControllerAdvice(annotations = RestController.class)
public class RestExceptionHandler
        implements ResponseBodyAdvice<Object> {
    private static final String RESP_CLASS = "com.wn.sjpt.crf.dto.comp.Resp",VOID_STR="void",SPR_RESP_CLASS="org.springframework.http.ResponseEntity",STR_CLASS="java.lang.String";

    /***
     * "业务异常"处理
     * @param e 异常对象
     * @return 响应体
     * **/
    @ExceptionHandler(BussinessException.class)
    public ResponseEntity<Resp<Void>> exception(BussinessException e) {
        log.error("操作失败：{}", e);
        Resp<Void> apiResponse = new Resp<>(e);
        return new ResponseEntity<>(apiResponse, HttpStatus.OK);
    }

    /***
     * "未知异常"处理
     * @param e 异常对象
     * @return 响应体
     * **/
    @ExceptionHandler(Exception.class)
    public ResponseEntity<Resp<Void>> exception(Exception e) {
        log.error("操作失败：{}", e);
        Resp<Void> apiResponse = new Resp<>(HttpStatus.INTERNAL_SERVER_ERROR.value(),"系统内部错误，请联系管理员！");
        return new ResponseEntity<>(apiResponse, HttpStatus.INTERNAL_SERVER_ERROR);
    }

    /***
     * 返回结果处理判断
     * @param methodParameter 方法参数类型
     * @param aClass 请求类
     * @return 是否支持返回结果处理
     * */
    @Override
    public boolean supports(MethodParameter methodParameter, Class<? extends HttpMessageConverter<?>> aClass) {
        final String returnTypeName = methodParameter.getParameterType().getName();
        return !RESP_CLASS.equals(returnTypeName) && !SPR_RESP_CLASS.equals(returnTypeName);
    }

    /***
     * 返回结果封装
     * @param body 返回结果
     * @param methodParameter 请求方法参数
     * @param mediaType mediaType
     * @param aClass 请求转换类
     * @param serverHttpRequest 请求
     * @param serverHttpResponse 响应
     * @return 封装结果
     */
    @Override
    public Object beforeBodyWrite(Object body, MethodParameter methodParameter,
                                  MediaType mediaType, Class<? extends HttpMessageConverter<?>> aClass,
                                  ServerHttpRequest serverHttpRequest, ServerHttpResponse serverHttpResponse) {
        final String returnTypeName = methodParameter.getParameterType().getName();
        if (VOID_STR.equals(returnTypeName)) {
            return new Resp<>(null);
        }
        if(STR_CLASS.equals(returnTypeName)){
            JSONObject resp=JSONObject.parseObject("{\"success\":true,\"error\":0}");
            if(null!=body){
                try {
                    resp.put("data",JSONObject.parseObject(body.toString()) );
                }catch (JSONException e){
                    resp.put("data",body.toString());
                }
            }
            return  resp.toJSONString();
        }
        if (!mediaType.includes(MediaType.APPLICATION_JSON) || RESP_CLASS.equals(returnTypeName)) {
            return body;
        }
        return new Resp<>(body);
    }
}
