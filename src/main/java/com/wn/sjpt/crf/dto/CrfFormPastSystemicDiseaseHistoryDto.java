package com.wn.sjpt.crf.dto;

import com.wn.sjpt.crf.dto.es.CrfFormPastSystemicDiseaseHistory;
import com.wn.sjpt.crf.dto.es.CrfFormPastSystemicDiseaseHistoryDetailed;
import lombok.Getter;
import lombok.Setter;

import java.util.List;

/**
 * @author wzy
 * 既往全身疾病史及用药情况
 */
@Getter
@Setter
public class CrfFormPastSystemicDiseaseHistoryDto extends CrfFormPastSystemicDiseaseHistory {

    private List<CrfFormPastSystemicDiseaseHistoryDetailed> crfd;

}
