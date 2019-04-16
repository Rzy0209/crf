package com.wn.sjpt.crf.dto.es;

import lombok.Getter;
import lombok.Setter;

import javax.persistence.GeneratedValue;
import javax.persistence.Id;
import java.sql.Timestamp;
import java.util.Date;

/**
 * @author ghr
 * 试验完成情况总结
 */
@Getter
@Setter
public class CrfFormExperimentCompleteSummary  extends BaseForm {
    /**
     * ID
     */
    @Id
    @GeneratedValue
    private Integer id;

    /**
     * 表单id
     */
    private String crfId;
    /**
     * 按方案执行并完成
     */
   
    private String isOver;
    /**
     * 退出研究日期
     */
   
    private Date exitResearch;
    /**
     * 退出原因 字典项 患者不配合、要求退出、不良事件、其他
     */
   
    private String exitReason;
    /**
     * 不良事件原因描述
     */
   
    private String adverseReasonDescribe;
    /**
     * 其他退出原因描述
     */
   
    private String otherReasonDescribe;
    /**
     * 创建时间
     */
   
    private Timestamp createDate;

}
