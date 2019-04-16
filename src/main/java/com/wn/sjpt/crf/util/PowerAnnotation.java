package com.wn.sjpt.crf.util;

import org.springframework.core.Ordered;
import org.springframework.core.annotation.Order;

import java.lang.annotation.*;

/**
 * @author li_jing
 * @data 2018/12/12 15:41
 **/
@Documented
@Inherited
@Target({ ElementType.FIELD, ElementType.METHOD ,ElementType.TYPE_USE,ElementType.ANNOTATION_TYPE,ElementType.TYPE})
@Retention(RetentionPolicy.RUNTIME)
public @interface PowerAnnotation {
    /**
     * 行为描述，数据类型为String类型
     * @return
     */
    String behaviorDes() default "";
    String resourceType() default "";

}
