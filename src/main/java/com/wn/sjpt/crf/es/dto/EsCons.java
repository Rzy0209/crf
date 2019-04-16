package com.wn.sjpt.crf.es.dto;

import com.alibaba.fastjson.JSONObject;

/**
 * ElasticSearch常量定义
 * @author yzj
 */
public interface EsCons {
    /**
     * 文档排序
     */
    String SORT_DOC="_doc";
    /**
     * 默认分页大小
     */
    int PAGE_SIZE_DEFAULT=100;

    /**
     * 默认游标持续时间(分钟)
     */
    int LAST_MIN_DEFAULT=10;
    /**
     * 数组导出长度
     */
    int ARRAY_EXPORT_SIZE=5;
    /**
     * 领域类型ID字段
     */
    String FIELD_FIELD_TYPE_ID="fieldTypeId";
    /**
     * 课题ID字段
     */
    String FIELD_SUBJECT_ID="subjectId";
    /**
     * 机构字段
     */
    String FIELD_ORG_CODE="orgCode";
    /**
     * 编号字段
     */
    String FIELD_NUM="num";
    /**
     * agg节点统计
     */
    String AGG="agg";
    /**
     * 测试号字段
     */
    String FILED_FORM_TEST_NUM="crfForm.testNumber";
    /**
     * 类型：数组
     */
    String TYPE_ARRAY="array";
    /**
     * 路径分隔字符
     */
    String PATH_SPLIT_STR=".";
    /**
     * 左中括号
     */
    String BRACKET_LEFT="[";
    /**
     * 右中括号
     */
    String BRACKET_RIGHT="]";
    /**
     * 研究日期
     */
    String RESEARCH_DATE="crfForm.researchDate";

    interface Field{
        String PROP="properties";
        String DATA="data";
        String TYPE="type";
        String FIELD="fields";
        String KEY_WROD="keyword";
        String IGNORE_ABOVE="ignore_above";
        String ANALYZER="analyzer";
        String FIELDDATA="fielddata";
        String FORMAT="format";
    }
    interface DataType{
        String NESTED="nested";
        String TEXT="text";
        String INTEGER="integer";
        String FLOAT="float";
        String BOOLEAN="boolean";
        String DATE="date";
        String TEXT_FIELD="{\"keyword\":{\"type\":\"keyword\",\"ignore_above\":256}}";
    }
}
