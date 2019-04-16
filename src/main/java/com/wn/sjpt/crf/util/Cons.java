package com.wn.sjpt.crf.util;

/**
 * 常量定义
 * @author yzj
 */
public interface Cons {
    /**
     * 版本-防止缓存
     */
    long VERSION=System.currentTimeMillis()/600000-2570000;
    /**
     * 资源类型定义
     * @author yzj
     */
    interface  ResType{
        /**
         * 菜单
         */
        int MENU=1;
        /**
         * 权限
         */
        int AUTH=2;
    }

    /**
     * 数据类型
     */
    interface DataType{
        /**实体*/
        int OBJ=1;
        /**数组*/
        int ARR=2;
        /**字符串*/
        int STR=3;
        /**整数*/
        int INT=4;
        /**浮点数*/
        int FLT=5;
        /**日期*/
        int DATE=6;
        /**逻辑*/
        int BOOL=7;
    }
}
