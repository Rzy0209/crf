package com.wn.sjpt.crf.service;

import com.wn.sjpt.crf.domain.CrfSubjectResField;
import com.wn.sjpt.crf.domain.CrfSubjectResFieldTemplate;
import com.wn.sjpt.crf.domain.CrfSubjectTemplate;
import com.wn.sjpt.crf.dto.CrfFieldTempDto;
import com.wn.sjpt.crf.repository.CrfSubjectResFieldRespsitory;
import com.wn.sjpt.crf.repository.CrfSubjectResFieldTemplateRepository;
import com.wn.sjpt.crf.repository.CrfSubjectTemplateDataRepository;
import com.wn.sjpt.crf.util.CommonUtils;
import com.wn.sjpt.crf.util.exception.BussinessException;
import com.wn.sjpt.crf.util.exception.ErrorCode;
import lombok.extern.slf4j.Slf4j;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.*;

import static java.util.Comparator.comparing;
import static java.util.Comparator.comparingLong;
import static java.util.stream.Collectors.collectingAndThen;
import static java.util.stream.Collectors.toCollection;

/**
 * @author yzj
 */
@Service
@Slf4j
public class CrfSubjectResFieldService {
    private final CrfSubjectResFieldRespsitory crfSubjectResFieldRespsitory;
    private final CrfSubjectResFieldTemplateRepository crfSubjectResFieldTemplateRepository;
    private final CrfSubjectTemplateDataRepository crfSubjectTemplateDataRepository;
    @Autowired
    public CrfSubjectResFieldService(CrfSubjectResFieldRespsitory crfSubjectResFieldRespsitory, CrfSubjectResFieldTemplateRepository crfSubjectResFieldTemplateRepository, CrfSubjectTemplateDataRepository crfSubjectTemplateDataRepository) {
        this.crfSubjectResFieldRespsitory = crfSubjectResFieldRespsitory;
        this.crfSubjectResFieldTemplateRepository = crfSubjectResFieldTemplateRepository;
        this.crfSubjectTemplateDataRepository = crfSubjectTemplateDataRepository;
    }

    /**
     * 查询课题下分类领域
     * @param sid
     * @return
     */
    public List<CrfSubjectResField> findBySid(String sid) {
        return crfSubjectResFieldRespsitory.findAllBySubIdAndDisabledFalse(sid);
    }

    public List<CrfSubjectTemplate> findTemplateByFieldType(String fieldTypeId){
        List<CrfSubjectResFieldTemplate> links=crfSubjectResFieldTemplateRepository.findAllByResFieldId(fieldTypeId);
        List<CrfSubjectTemplate> templates=new ArrayList<>();
        for(CrfSubjectResFieldTemplate link:links){
            //查询数据
            templates.add(link.getTemplate());
        }
        return templates;
    }



    public void save(CrfSubjectResField field){
        if(CommonUtils.isEmpty(field.getId())){
            //新增，设置ID
            field.setId(CommonUtils.nextu());
        }
        //初始化录入人员信息
        field.init();
        crfSubjectResFieldRespsitory.save(field);
    }

    /**
     * 根据ID删除
     * @param id
     * @throws BussinessException
     */
    public void delete(String id) throws BussinessException {
        CrfSubjectResField field=crfSubjectResFieldRespsitory.getByIdAndDisabledFalse(id);
        if(null==field){
            throw new BussinessException(ErrorCode.NOT_FIND,"未找到相对应的分类，删除失败!");
        }
        field.setDisabled(true);
        crfSubjectResFieldRespsitory.save(field);
    }

    /**
     * 通过subId获取表单分类关系及表单详细内容
     *
     * @param subId
     * @return
     */
    public CrfFieldTempDto findTempIdBySubId(String subId) {
        //通过subId获取CrfSubjectResField的ID集合
        List<String> rfIdList = crfSubjectResFieldRespsitory.findIdBySubIdAndDisabledFalse( subId );
        //通过rfIdList获取CrfSubjectResFieldTemplate集合
        List<CrfSubjectResFieldTemplate> rftList = crfSubjectResFieldTemplateRepository.findAllByResFieldIdIn( rfIdList );
        //符合条件的CrfSubjectTemplateMap,以ID为key，便于前台调取
        Map<String, CrfSubjectTemplate> subTempMap = new HashMap<String, CrfSubjectTemplate>();
        //CrfSubjectResFieldTemplate关联关系整理map
        Map<String, List<String>> rftMap = new HashMap<String, List<String>>();
        for (CrfSubjectResFieldTemplate rft : rftList) {
            CrfSubjectTemplate subTemp = rft.getTemplate();
            String rfId = rft.getResField().getId();
            String tempId = subTemp.getId();
            if (!subTempMap.containsKey( tempId )) {
                subTempMap.put( tempId, subTemp );
            }
            if (rftMap.containsKey( rfId )) {
                rftMap.get( rfId ).add( tempId );
            } else {
                List<String> tempIdList = new ArrayList<>();
                tempIdList.add( tempId );
                rftMap.put( rfId, tempIdList );
            }
        }
        CrfFieldTempDto ftDto = new CrfFieldTempDto();
        ftDto.setRftMap( rftMap );
        ftDto.setSubTempMap( subTempMap );
        return ftDto;
    }

}
