package com.wn.sjpt.crf.dto.es;

import lombok.Getter;
import lombok.Setter;

import java.sql.Timestamp;

/**
 * @author li_jing
 * @date 2018-11-30
 * 其他相关病史
 */
@Getter
@Setter
public class CrfFormOtherRelatedMedicalHistory extends BaseForm {

    /**
     * id
     */
    private Integer id;

    /**
     * 文档类型
     */
   
    private Integer type;
    /**
     * 个人史 吸烟
     */
   
    private Boolean smoke;
    /**
     * 个人史 吸烟数量
     */
   
    private Integer smokeNumber;
    /**
     * 个人史 饮酒
     */
   
    private Boolean drinWine;
    /**
     * 个人史 饮酒重量
     */
   
    private Integer drinWineWeight;
    /**
     * 个人史 其他
     */
   
    private Boolean personOhter;
    /**
     * 个人史 其他描述
     */
    private String personOtherDescribe;
    /**
     * 家族史 脑血管病家族史
     */
   
    private Boolean cerebralVascularDisease;
    /**
     * 家族史 脑血管病家族史描述
     */
    private String cerebralVascularDiseaseDescribe;
    /**
     * 家族史 其他
     */
   
    private Boolean familyOther;
    /**
     * 家族史 其他描述
     */
    private String familyOtherDescribe;
    /**
     * 报表ID
     */
    private String crfId;
   
    private Timestamp createDate;
    /**
     * 抽烟年
     */
    private Integer  smokeYear;
    /**
     * 饮酒年
     */
    private Integer drinWineYear;

}
