package com.wn.sjpt.crf.util;


import com.alibaba.fastjson.JSONObject;
import com.winning.framework.ums.filter.util.UserUtil;
import com.wn.sjpt.crf.dto.es.*;
import com.wn.sjpt.crf.dto.ums.LoginUser;
import com.wn.sjpt.crf.es.dto.CrfEsDto;
import com.wn.sjpt.crf.es.service.ElasticSearchService;
import com.wn.sjpt.crf.util.exception.BussinessException;
import com.wn.sjpt.crf.util.exception.ErrorCode;
import org.aspectj.lang.ProceedingJoinPoint;
import org.aspectj.lang.Signature;
import org.aspectj.lang.annotation.Around;
import org.aspectj.lang.annotation.Aspect;
import org.aspectj.lang.annotation.Pointcut;
import org.aspectj.lang.reflect.MethodSignature;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Component;

import java.lang.reflect.Method;
import java.sql.Timestamp;
import java.util.Set;

/**
 * @author li_jing
 * @data 2018/12/12 15:38
 **/
@Aspect
@Component
public class PowerAspect {
    private static final String msg="操作失败，权限不足";
    @Autowired
    private ElasticSearchService esService;


    @Pointcut("execution(public * com.wn.sjpt.crf..*.*(..)) && @annotation(com.wn.sjpt.crf.util.PowerAnnotation)")
    public void addAdvice() {
    }

    @Around("addAdvice()")
    public Object Interceptor(ProceedingJoinPoint joinPoint) throws Throwable {
        Object result = "";
        boolean flag = true;
        //获取访问信息
        Object[] args = joinPoint.getArgs();
        Signature signature = joinPoint.getSignature();
        MethodSignature methodSignature = (MethodSignature) signature;
        //获取登录用户信息
        LoginUser user = (LoginUser) UserUtil.getUserLocal();
        Method method = methodSignature.getMethod();
        PowerAnnotation pw = (PowerAnnotation) method.getAnnotation(PowerAnnotation.class);
        String resourceType = pw.resourceType();
        Set<String> set = user.getAuths();
        //判断是否具有操作权限
        final String edit = "after24H_is_edit";
        if (!set.contains(resourceType)&&!resourceType.equals(edit)) {
            //flag = false;
            throw new BussinessException(ErrorCode.AUTH_FAILURE,msg);
        }
        //判断是否该表单修改是否超过24小时
        if (resourceType.equals(edit) && !flag) {
            String tableName = args[1].toString();
            JSONObject json = (JSONObject) JSONObject.parse(args[0].toString());
            String crfId = json.getString("crfId");
            JSONObject js = esService.findOne(crfId);
            CrfEsDto crfEsDto = JSONObject.toJavaObject(js, CrfEsDto.class);
            switch (tableName) {
                //CrfForm
                case "crfform":
                    CrfForm old = crfEsDto.getCrfForm();
                    flag = selectCrf(old.getCreateDate());
                    break;
                case "base":
                    CrfFormBasicInfo baseOld = crfEsDto.getCrfFormBasicInfo();
                    flag = selectCrf(baseOld.getCreateDate());
                    break;
                //CrfFormPastNerveHistory  pastnerve
                case "pastnerve":
                    CrfFormPastNerveHistory pastnerveOld = crfEsDto.getCrfFormPastNerveHistory();
                    flag = selectCrf(pastnerveOld.getCreateDate());
                    break;
                //CrfFormPastSystemicDiseaseHistory  pastsystem
                case "pastsystem":
                    CrfFormPastSystemicDiseaseHistory pastsystemOld = crfEsDto.getCrfFormPastSystemicDiseaseHistory();
                    flag = selectCrf(pastsystemOld.getCreateDate());
                    break;
                //CrfFormOtherRelatedMedicalHistory medicalHistory
                case "medicalHistory":
                    CrfFormOtherRelatedMedicalHistory medicalHistoryOld = crfEsDto.getCrfFormOtherRelatedMedicalHistory();
                    flag = selectCrf(medicalHistoryOld.getCreateDate());
                    break;
                //CrfFormPhysicalExamination  physicalExamination crfFormPhysicalExaminationService
                case "physicalExamination":
                    CrfFormPhysicalExamination physicalExaminationOld = crfEsDto.getCrfFormPhysicalExamination();
                    flag = selectCrf(physicalExaminationOld.getCreateDate());
                    break;
                //CrfFormSupplementaryExamination  supplementaryExamination   crfFormSupplementaryExaminationService
                case "supplementaryExamination":
                    CrfFormSupplementaryExamination supplementaryExaminationOld = crfEsDto.getCrfFormSupplementaryExamination();
                    flag = selectCrf(supplementaryExaminationOld.getCreateDate());
                    break;
                //CrfFormHealthEconomics
                case "healthEconomics":
                    CrfFormHealthEconomics healthEconomicsOld = crfEsDto.getCrfFormHealthEconomics();
                        flag = selectCrf(healthEconomicsOld.getCreateDate());
                    break;
                //CrfFormInclusionCriteriaNormal criteriaNormal
                case "criteriaNormal":
                    CrfFormInclusionCriteriaNormal criteriaNormal = JSONObject.toJavaObject(json, CrfFormInclusionCriteriaNormal.class);
                    CrfFormInclusionCriteriaNormal criteriaNormalOld = crfEsDto.getCrfFormInclusionCriteriaNormal();
                        flag = selectCrf(criteriaNormalOld.getCreateDate());
                    break;
                //CrfFormInclusionCriteriaAbnormal
                case "criteriaAbnormal":
                    CrfFormInclusionCriteriaAbnormal criteriaAbnormalOld = crfEsDto.getCrfFormInclusionCriteriaAbnormal();
                        flag = selectCrf(criteriaAbnormalOld.getCreateDate());
                    break;
                //CrfFormExclusionCriteria
                case "exclusionCriteria":
                    CrfFormExclusionCriteria exclusionCriteriaOld = crfEsDto.getCrfFormExclusionCriteria();
                        flag = selectCrf(exclusionCriteriaOld.getCreateDate());
                    break;
                //CrfFormGaitScreenResultsIntelligent
                case "resultIntelligent":
                    CrfFormGaitScreenResultsIntelligent resultIntelligentOld = crfEsDto.getCrfFormGaitScreenResultsIntelligent();
                        flag = selectCrf(resultIntelligentOld.getCreateDate());
                    break;
                //CrfFormGaitScreenResultsDyskinesia
                case "resultsDyskinesia":
                    CrfFormGaitScreenResultsDyskinesia resultsDyskinesiaOld = crfEsDto.getCrfFormGaitScreenResultsDyskinesia();
                        flag = selectCrf(resultsDyskinesiaOld.getCreateDate());
                    break;
                //CrfFormAdverseEventsObservation
                case "eventsObservation":
                    CrfFormAdverseEventsObservation eventsObservationOld = crfEsDto.getCrfFormAdverseEventsObservation();
                        flag = selectCrf(eventsObservationOld.getCreateDate());
                    break;
                //CrfFormAssessmentForSaeAndUae
                case "assessmentForSaeAndUae":
                    CrfFormAssessmentForSaeAndUae assessmentForSaeAndUaeOld = crfEsDto.getCrfFormAssessmentForSaeAndUae();
                        flag = selectCrf(assessmentForSaeAndUaeOld.getCreateDate());
                    break;
                //CrfFormExperimentCompleteSummary
                case "completesummary":
                    CrfFormExperimentCompleteSummary completesummaryOld = crfEsDto.getCrfFormExperimentCompleteSummary();
                        flag = selectCrf(completesummaryOld.getCreateDate());
                    break;
                case "creiteria":
                    CrfFormInclusionCriteria creitriaOld = crfEsDto.getCrfFormInclusionCriteria();
                    flag = selectCrf(creitriaOld.getCreateDate());
                    break;
                case "manyExclusionCriteria":
                    CrfFormManyExclusionCriteria manyExclusionCriteriaOld = crfEsDto.getCrfFormManyExclusionCriteria();
                    flag = selectCrf(manyExclusionCriteriaOld.getCreateDate());
                    break;
                case "noDyskineisa":
                    CrfFormGaitScreenResultsNoDyskinesia noDyskineisaOld = crfEsDto.getCrfFormGaitScreenResultsNoDyskinesia();
                    flag = selectCrf(noDyskineisaOld.getCreateDate());
                    break;
                case "cerebrovascularDisease":
                    CrfFormCerebrovascularDisease cerebrovascularDisease = crfEsDto.getCrfFormCerebrovascularDisease();
                    flag = selectCrf(cerebrovascularDisease.getCreateDate());
                    break;
                case "headNMR":
                    CrfFormHeadNuclearMagneticResonance headNMR = crfEsDto.getCrfFormHeadNuclearMagneticResonance();
                    flag = selectCrf(headNMR.getCreateDate());
                    break;
                case "unplannedTreatment":
                    CrfFormRecordsOfUnplannedTreatment unplannedTreatment = crfEsDto.getRemark();
                    flag = selectCrf(unplannedTreatment.getCreateDate());
                    break;
                default:
                    break;
            }

        }
        if (flag) {
            result = joinPoint.proceed();
        } else {
            throw new BussinessException(ErrorCode.AUTH_FAILURE,msg);
        }
        return result;
    }

    public boolean selectCrf(Timestamp createDate) {
        boolean flag = false;
        Timestamp enddate = new Timestamp(System.currentTimeMillis());
        if (CommonUtils.isNotEmpty(createDate)) {
            long result = enddate.getTime() - createDate.getTime();
            long pd = 86400000;
            if (pd > result) {
                flag = true;
            }
        }
        return flag;
    }


}
