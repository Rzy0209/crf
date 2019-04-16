package com.wn.sjpt.crf.dto.es;

import com.wn.sjpt.crf.domain.BaseUser;
import lombok.Getter;
import lombok.Setter;

import java.sql.Timestamp;

/**
 * @author yzj
 * form
 */
@Getter
@Setter
public class BaseForm extends BaseUser {
    /**
     * 报表ID
     */
    private String crfId;
    /**
     * 课题ID
     */
    private String subjectId;
    /**
     * 课题分类ID
     */
    private String fieldTypeId;
    /**
     * 创建时间
     */
    private Timestamp createDate;

    public BaseForm(String crfId, String subjectId, String fieldTypeId) {
        super.init();
        this.crfId = crfId;
        this.subjectId = subjectId;
        this.fieldTypeId = fieldTypeId;
        this.createDate=new Timestamp(System.currentTimeMillis());
    }

    public BaseForm() {
    }
}
