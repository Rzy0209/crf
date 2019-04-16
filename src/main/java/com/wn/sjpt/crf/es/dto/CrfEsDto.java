package com.wn.sjpt.crf.es.dto;

import com.wn.sjpt.crf.dto.es.*;
import lombok.Getter;
import lombok.Setter;
import org.springframework.data.annotation.Id;
import org.springframework.data.elasticsearch.annotations.Field;

import java.util.List;

/**
 * @author li_jing
 * @data 2018/12/19 10:11
 **/
// indexName ：索引名字（对应mysql的数据库名字）
//type:类型（对应mysql的表名）
@Setter
@Getter
public class CrfEsDto extends BaseForm {
    @Id
    private String id;
    private Integer num;
    @Field
    private CrfForm crfForm;
    @Field
    private CrfFormAdverseEventsObservation crfFormAdverseEventsObservation;
    @Field
    private CrfFormAssessmentForSaeAndUae crfFormAssessmentForSaeAndUae;
    @Field
    private CrfFormBasicInfo crfFormBasicInfo;
    @Field
    private CrfFormExclusionCriteria crfFormExclusionCriteria;
    @Field
    private CrfFormExperimentCompleteSummary crfFormExperimentCompleteSummary;
    @Field
    private CrfFormGaitScreenResultsDyskinesia crfFormGaitScreenResultsDyskinesia;
    @Field
    private CrfFormGaitScreenResultsIntelligent crfFormGaitScreenResultsIntelligent;
    @Field
    private CrfFormHealthEconomics crfFormHealthEconomics;
    @Field
    private CrfFormInclusionCriteriaAbnormal crfFormInclusionCriteriaAbnormal;
    @Field
    private CrfFormInclusionCriteriaNormal crfFormInclusionCriteriaNormal;
    @Field
    private CrfFormOtherRelatedMedicalHistory crfFormOtherRelatedMedicalHistory;
    @Field
    private CrfFormPastNerveHistory crfFormPastNerveHistory;
    @Field
    private CrfFormPastSystemicDiseaseHistory crfFormPastSystemicDiseaseHistory;
    @Field
    private List<CrfFormPastSystemicDiseaseHistoryDetailed> crfFormPastSystemicDiseaseHistoryDetailed;
    @Field
    private CrfFormPhysicalExamination crfFormPhysicalExamination;
    @Field
    private CrfFormSupplementaryExamination crfFormSupplementaryExamination;
    @Field
    private CrfFormInclusionCriteria crfFormInclusionCriteria;
    @Field
    private CrfFormManyExclusionCriteria crfFormManyExclusionCriteria;
    @Field
    private CrfFormGaitScreenResultsNoDyskinesia crfFormGaitScreenResultsNoDyskinesia;
    @Field
    private CrfFormCerebrovascularDisease crfFormCerebrovascularDisease;
    @Field
    private CrfFormHeadNuclearMagneticResonance crfFormHeadNuclearMagneticResonance;
    @Field
    private List<CrfFormRecordsOfUnplannedTreatmentChangeDetail> changes;
    @Field
    private List<CrfFormRecordsOfUnplannedTreatmentMedicalDetail> medicas;
    @Field
    private CrfFormRecordsOfUnplannedTreatment remark;

    public CrfEsDto(String crfId, String subjectId, String fieldTypeId) {
        super(crfId, subjectId, fieldTypeId);
    }
    public CrfEsDto(){}
}
