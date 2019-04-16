package com.wn.sjpt.crf.dto;

import com.wn.sjpt.crf.dto.es.CrfFormRecordsOfUnplannedTreatmentChangeDetail;
import com.wn.sjpt.crf.dto.es.CrfFormRecordsOfUnplannedTreatmentMedicalDetail;
import lombok.Getter;
import lombok.Setter;

import java.util.List;

/**
 * 患者接受非计划治疗记录
 * @author wzy
 */
@Getter
@Setter
public class CrfFormUnplannedTreatmentDto {
    private List<CrfFormRecordsOfUnplannedTreatmentChangeDetail> changes;

    private List<CrfFormRecordsOfUnplannedTreatmentMedicalDetail> medicas;

    private String remark;

    private String crfId;

    private String subjectId;
}
