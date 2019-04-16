package com.wn.sjpt.crf.dto.es;

import lombok.Getter;
import lombok.Setter;

import java.sql.Timestamp;
import java.util.Date;

/**
 * @author ghr
 * 头颅核磁共振
 */
@Getter
@Setter
public class CrfFormHeadNuclearMagneticResonance  extends BaseForm {
    /**
     * ID
     */
    private Integer id;

    /**
     * 表单id
     */
    private String crfId;
    /**
     * 文档类型
     */
   
    private Integer type;
    /**
     * 有无头颅核磁共振
     */
   
    private boolean headMri;
    /**
     * 检查时间
     */
   
    private Date examDate;
    /**
     * 检查结果
     */
    private String examResult;
   
    private Timestamp createDate;
}
