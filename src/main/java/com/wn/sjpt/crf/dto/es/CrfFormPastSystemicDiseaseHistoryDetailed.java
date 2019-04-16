package com.wn.sjpt.crf.dto.es;

import lombok.Getter;
import lombok.Setter;

import java.util.Date;

/**
 * @author li_jing
 * @date 2018-11-30
 */
@Getter
@Setter
public class CrfFormPastSystemicDiseaseHistoryDetailed extends BaseForm {

    /**
     * id
     */
    private Integer id;

    /**
     * 文档类型
     */
   
    private Integer type;
    /**
     * 父级id
     */
   
    private Integer parentid;
    /**
     * 疾病名称
     */
    private String diseaseName;
    /**
     * 病程（年）
     */
   
    private Integer diseaseCourse;
    /**
     * 药物名称
     */
    private String drugName;
    /**
     * 剂量
     */
    private String dose;
    /**
     * 给药途径
     */
    private String route;
    /**
     * 起始日期
     */
   
    private Date startDate;
    /**
     * 报表ID
     */
    private String crfId;


}
