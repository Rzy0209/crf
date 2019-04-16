package com.wn.sjpt.crf.service;

import com.wn.sjpt.crf.domain.CrfComp;
import com.wn.sjpt.crf.domain.CrfCompOption;
import com.wn.sjpt.crf.dto.comp.BaseComp;
import com.wn.sjpt.crf.dto.comp.CompOptionGroup;
import com.wn.sjpt.crf.dto.comp.SingleForm;
import com.wn.sjpt.crf.dto.comp.s.*;
import com.wn.sjpt.crf.repository.CrfCompOptionRepository;
import com.wn.sjpt.crf.repository.CrfCompRepository;
import com.wn.sjpt.crf.util.CommonUtils;
import net.sf.json.JSONArray;
import net.sf.json.JSONObject;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.text.SimpleDateFormat;
import java.util.ArrayList;
import java.util.Date;
import java.util.List;
import java.util.UUID;

/**
 * 组件Service
 *
 * @author ghr
 */
@Service
public class CrfCompService {
    @Autowired
    private CrfCompRepository crfCompRepository;
    @Autowired
    private CrfCompOptionRepository crfCompOptionRepository;

    public void createComp(Integer sort,String type, String crfId) {
        CrfComp crfcomp = new CrfComp();
        crfcomp.setId(getOrderNo());
        crfcomp.setNextId("");
        crfcomp.setPrivId("");
        crfcomp.setParentId("");
        crfcomp.setCompType(type);
        crfcomp.setFormId(crfId);
        crfcomp.setWidgetId(crfId);
        crfcomp.setTitle("");
        crfcomp.setLabel("");
        crfcomp.setValueCode("");
        crfcomp.setVisibility("normal");
        crfcomp.setShowCondition("");
        crfcomp.setValueCheck("");
        crfcomp.setPage(1);
        crfcomp.setDeleted(false);
        crfcomp.setCommitLock(false);
        crfcomp.setRequired(false);
        crfcomp.setSort(sort);
        crfcomp.setCreateAt(new Date());
        crfcomp.setUpdateAt(new Date());
        String result ="";
        if("number".equals(type)){
            //特殊字段拼接json放到extrafield字段
            result = "{\"min\":\"\", \"max\":\"\", \"defaultValue\":\"\", " +
                    " \"integer\":false, \"uk\":false, \"newIndex\":\"\"}";
            crfcomp.setExtraField(result);
        }else if("text".equals(type)){
            result = "{\"min\":0,\"max\":150000, \"setDefaultText\":\"\", " +
                    " \"cryptoStore\":false, \"defFlag\":0, \"dictionary\":\"\", " +
                    "\"displayType\":\"0\",\"newIndex\":\"\"}";
            crfcomp.setExtraField(result);
        }else if("time".equals(type)){
            result = "{\"min\":\"\",\"max\":\"\", \"format\":\"YYYY-MM-DD HH:mm:ss\", " +
                    " \"uk\":false, \"newIndex\":\"\"}";
            crfcomp.setExtraField(result);
        }else if("radio".equals(type) || "check".equals(type)){
            result = "{\"randomOptions\":false,\"mode\":\"\"}";
            crfcomp.setExtraField(result);
        }else if("label".equals(type)){
            result = "{\"labelType\":\"\"}";
            crfcomp.setExtraField(result);
        }else if("table".equals(type)){
            result = "{\"row\":0,\"col\":0,\"tableTitle\":\"\"}";
            crfcomp.setExtraField(result);
        }else{
            crfcomp.setExtraField("");
        }
        CrfComp cc = crfCompRepository.save(crfcomp);
        //如果是radio 或者checkbox，需要在option表中存内容
        if("radio".equals(type)||"check".equals(type)){
            for(int i=0;i<3;i++){
                CrfCompOption crfoption = new CrfCompOption();
                crfoption.setId(getUUID());
                crfoption.setCompId(cc.getId());
                crfoption.setSelected(false);
                crfoption.setTerminate(false);
                crfoption.setExclusive(false);
                crfoption.setOpenInputReg("");
                crfoption.setSort(i+1);
                crfoption.setImage("");
                crfoption.setLabel("选项");
                crfoption.setFixed(false);
                crfoption.setValueCode(i+1);
                crfoption.setOpenInput(false);
                crfoption.setJump("");
                crfCompOptionRepository.save(crfoption);
            }
        }
    }
    public static String getUUID(){
        UUID uuid= UUID.randomUUID();
        String str = uuid.toString();
        String uuidStr=str.replace("-", "");
        return uuidStr;
    }
    public static String getOrderNo(){
        String orderNo = "" ;
        String trandNo = String.valueOf((Math.random() * 9 + 1) * 1000000);
        String sdf = new SimpleDateFormat("MMddHHMMSS").format(new Date());
        orderNo = trandNo.toString().substring(0, 4); orderNo = orderNo + sdf ;
        return orderNo ;
    }

    public SingleForm findOneCompByCrfId(String crfId) {
        List<CrfComp> crfComplist = crfCompRepository.findByFormIdOrderBySort(crfId);
        List<BaseComp> baseComps = new ArrayList<BaseComp>();
        SimpleDateFormat sdf = new SimpleDateFormat("yyyy-MM-dd");
        sdf = new SimpleDateFormat("yyyy-MM-dd HH:mm:ss");
        for(CrfComp comp : crfComplist){
            BaseComp baseComp = new BaseComp();
            getBaseComp(baseComp,comp);
            if("radio".equals(comp.getCompType())||"check".equals(comp.getCompType())){
                List<CrfCompOption> options = new ArrayList<CrfCompOption>();
                List<CrfCompOption> compoption = crfCompOptionRepository.findByCompIdOrderBySort(comp.getId());
                if(CommonUtils.isNotEmpty(compoption)){
                    for(CrfCompOption option : compoption){
                        options.add(option);
                    }
                }
                CompOptionGroup compOptionGroup = new CompOptionGroup();
                String jsonstr = comp.getExtraField();
                JSONObject jsonObject= JSONObject.fromObject(jsonstr);
                CompTypeRadio compTypeRadio=(CompTypeRadio)JSONObject.toBean(jsonObject, CompTypeRadio.class);
                compOptionGroup.setOptionLayout(compTypeRadio.getOptionLayout());
                compOptionGroup.setRandom(compTypeRadio.isRandom());
                compOptionGroup.setOptions(options);
                baseComp.setOptionGroup(compOptionGroup);
                baseComps.add(baseComp);
            }else if("text".equals(comp.getCompType())){
                String jsonstr = comp.getExtraField();
                JSONObject jsonObject= JSONObject.fromObject(jsonstr);
                CompTypeText compTypeText=(CompTypeText)JSONObject.toBean(jsonObject, CompTypeText.class);
                getBaseComp(compTypeText,comp);
                baseComps.add(compTypeText);
            }else if("number".equals(comp.getCompType())){
                String jsonstr = comp.getExtraField();
                JSONObject jsonObject= JSONObject.fromObject(jsonstr);
                CompTypeNumber compTypeNumber=(CompTypeNumber)JSONObject.toBean(jsonObject, CompTypeNumber.class);
                getBaseComp(compTypeNumber,comp);
                baseComps.add(compTypeNumber);
            }else if("time".equals(comp.getCompType())){
                String jsonstr = comp.getExtraField();
                JSONObject jsonObject= JSONObject.fromObject(jsonstr);
                CompTypeDate compTypeDate=(CompTypeDate)JSONObject.toBean(jsonObject, CompTypeDate.class);
                getBaseComp(compTypeDate,comp);
                baseComps.add(compTypeDate);
            }else if("label".equals(comp.getCompType())){
                String jsonstr = comp.getExtraField();
                JSONObject jsonObject= JSONObject.fromObject(jsonstr);
                CompTypeLabel compTypeLabel=(CompTypeLabel)JSONObject.toBean(jsonObject, CompTypeLabel.class);
                getBaseComp(compTypeLabel,comp);
                baseComps.add(compTypeLabel);
            }else if("table".equals(comp.getCompType())){
                String jsonstr = comp.getExtraField();
                JSONObject jsonObject= JSONObject.fromObject(jsonstr);
                CompTypeTable compTypeTable=(CompTypeTable)JSONObject.toBean(jsonObject, CompTypeTable.class);
                getBaseComp(compTypeTable,comp);
                baseComps.add(compTypeTable);
            }
        }
        SingleForm singleForm = new SingleForm();
        singleForm.setId(crfId);
        singleForm.setPages(1);
        singleForm.setCreateTime(sdf.format(new Date()));
        singleForm.setUpdateTime(sdf.format(new Date()));
        singleForm.setUsername("管理员");
        singleForm.setName("人口学资料");
        singleForm.setOptions(baseComps);
        return singleForm;
    }

    private BaseComp getBaseComp(BaseComp baseComp, CrfComp comp) {
        SimpleDateFormat sdf = new SimpleDateFormat("yyyy-MM-dd");
        sdf = new SimpleDateFormat("yyyy-MM-dd HH:mm:ss");
        baseComp.setId(comp.getId());
        baseComp.setNextId(comp.getNextId());
        baseComp.setPrivId(comp.getPrivId());
        baseComp.setParentId(comp.getParentId());
        baseComp.setCompType(comp.getCompType());
        baseComp.setParentType(comp.getParentType());
        baseComp.setFormId(comp.getFormId());
        baseComp.setWidgetId(comp.getWidgetId());
        baseComp.setTitle(comp.getTitle());
        baseComp.setLabel(comp.getLabel());
        baseComp.setValueCode(comp.getValueCode());
        baseComp.setVisibility(comp.getVisibility());
        baseComp.setShowCondition(comp.getShowCondition());
        baseComp.setValueCheck(comp.getValueCheck());
        baseComp.setPage(comp.getPage());
        baseComp.setDeleted(comp.isDeleted());
        baseComp.setCommitLock(comp.isCommitLock());
        baseComp.setRequired(comp.isRequired());
        baseComp.setCreateAt(sdf.format(comp.getCreateAt()));
        baseComp.setUpdateAt(sdf.format(comp.getUpdateAt()));
        return baseComp;
    }

    public void deleteComp(String id) {
        //删除组件表
        crfCompRepository.deleteById(id);
        //删除选项表
        List<CrfCompOption> crfCompOptions = crfCompOptionRepository.findByCompIdOrderBySort(id);
        for(CrfCompOption cc : crfCompOptions){
            crfCompOptionRepository.delete(cc);
        }
    }

    public void saveComp(String id,String type,String info) {
        JSONObject jsonObject=JSONObject.fromObject(info);
        CrfComp crfComp = crfCompRepository.findOneById(id);
        String result="";
        switch (type){
            case "number":
                CompTypeNumber compTypeNumber=(CompTypeNumber)JSONObject.toBean(jsonObject, CompTypeNumber.class);
                result = "{\"min\":"+compTypeNumber.getMin()+", \"max\":"+compTypeNumber.getMax()+", \"defaultValue\":\"\", " +
                        " \"integer\":"+compTypeNumber.isInteger()+", \"uk\":"+compTypeNumber.isUk()+", \"newIndex\":\"\"}";
                crfComp.setValueCode(compTypeNumber.getValueCode());
                crfComp.setTitle(compTypeNumber.getTitle());
                crfComp.setLabel(compTypeNumber.getLabel());
                crfComp.setRequired(compTypeNumber.isRequired());
                crfComp.setCommitLock(compTypeNumber.isCommitLock());
                crfComp.setExtraField(result);
                break;
            case "text":
                CompTypeText  compTypeText=(CompTypeText)JSONObject.toBean(jsonObject, CompTypeText.class);
                result = "{\"min\":"+compTypeText.getMin()+",\"max\":"+compTypeText.getMax()+", \"setDefaultText\":\"\", " +
                        " \"cryptoStore\":false, \"defFlag\":0, \"dictionary\":\"\", " +
                        "\"displayType\":\""+compTypeText.getDisplayType()+"\",\"newIndex\":\"\"}";
                crfComp.setValueCode(compTypeText.getValueCode());
                crfComp.setTitle(compTypeText.getTitle());
                crfComp.setLabel(compTypeText.getLabel());
                crfComp.setRequired(compTypeText.isRequired());
                crfComp.setCommitLock(compTypeText.isCommitLock());
                crfComp.setExtraField(result);
                break;
            case "radio":
            case "check":
                CompTypeRadio  compTypeRadio=(CompTypeRadio)JSONObject.toBean(jsonObject, CompTypeRadio.class);
                result = "{\"random\":"+compTypeRadio.isRandom()+",\"optionLayout\":\""+compTypeRadio.getOptionLayout()+"\"}";
                crfComp.setValueCode(compTypeRadio.getValueCode());
                crfComp.setTitle(compTypeRadio.getTitle());
                crfComp.setLabel(compTypeRadio.getLabel());
                crfComp.setRequired(compTypeRadio.isRequired());
                crfComp.setCommitLock(compTypeRadio.isCommitLock());
                crfComp.setExtraField(result);
                String options = compTypeRadio.getOptions();
                if(CommonUtils.isNotEmpty(options)){
                    //先删除原来的
                    List<CrfCompOption> crfCompOptions = crfCompOptionRepository.findByCompIdOrderBySort(id);
                    if(CommonUtils.isNotEmpty(crfCompOptions)){
                        for(CrfCompOption c : crfCompOptions){
                            crfCompOptionRepository.delete(c);
                        }
                    }
                }
                JSONArray jsonArray= JSONArray.fromObject(options);
                for(int i=0;i<jsonArray.size();i++){
                    Object o=jsonArray.get(i);
                    JSONObject jsonObj=JSONObject.fromObject(o);
                    CrfCompOption ccoption=(CrfCompOption)JSONObject.toBean(jsonObj, CrfCompOption.class);
                    ccoption.setId(getUUID());
                    ccoption.setCompId(id);
                    ccoption.setSelected(false);
                    ccoption.setTerminate(false);
                    ccoption.setExclusive(false);
                    ccoption.setOpenInputReg("");
                    ccoption.setSort(i+1);
                    ccoption.setImage("");
                    ccoption.setFixed(false);
                    ccoption.setOpenInput(false);
                    ccoption.setJump("");
                    crfCompOptionRepository.save(ccoption);
                }
                break;
            case "time":
                CompTypeDate  compTypeDate=(CompTypeDate)JSONObject.toBean(jsonObject, CompTypeDate.class);
                result = "{\"min\":\""+compTypeDate.getMin()+"\",\"max\":\""+compTypeDate.getMax()+"\", " +
                        "\"format\":\""+compTypeDate.getFormat()+"\", " +
                        " \"uk\":"+compTypeDate.isUk()+", \"newIndex\":\"\"}";
                crfComp.setValueCode(compTypeDate.getValueCode());
                crfComp.setTitle(compTypeDate.getTitle());
                crfComp.setLabel(compTypeDate.getLabel());
                crfComp.setRequired(compTypeDate.isRequired());
                crfComp.setCommitLock(compTypeDate.isCommitLock());
                crfComp.setExtraField(result);
                break;
            case "label":
                CompTypeLabel  compTypeLabel=(CompTypeLabel)JSONObject.toBean(jsonObject, CompTypeLabel.class);
                result = "{\"labelType\":\""+compTypeLabel.getLabelType()+"\"}";
                crfComp.setValueCode(compTypeLabel.getValueCode());
                crfComp.setTitle(compTypeLabel.getTitle());
                crfComp.setLabel(compTypeLabel.getLabel());
                crfComp.setExtraField(result);
                break;
            case "table":
                CompTypeTable compTypeTable = (CompTypeTable)JSONObject.toBean(jsonObject, CompTypeTable.class);
                result = "{\"row\":"+compTypeTable.getRow()+",\"col\":"+compTypeTable.getCol()+",\"tableTitle\":\""+compTypeTable.getTableTitle()+"\"}";
                crfComp.setValueCode(compTypeTable.getValueCode());
                crfComp.setTitle(compTypeTable.getTitle());
                crfComp.setLabel(compTypeTable.getLabel());
                crfComp.setExtraField(result);
                break;
                default:break;
        }
        crfCompRepository.save(crfComp);
    }

    public void addOption(String id) {
        List<CrfCompOption> crfCompOptions = crfCompOptionRepository.findByCompIdOrderBySort(id);
        if(CommonUtils.isNotEmpty(crfCompOptions)){
            CrfCompOption crfoption = new CrfCompOption();
            crfoption.setId(getUUID());
            crfoption.setCompId(id);
            crfoption.setSelected(false);
            crfoption.setTerminate(false);
            crfoption.setExclusive(false);
            crfoption.setOpenInputReg("");
            crfoption.setSort(crfCompOptions.get(crfCompOptions.size()-1).getSort()+1);
            crfoption.setImage("");
            crfoption.setLabel("选项");
            crfoption.setFixed(false);
            crfoption.setValueCode(crfCompOptions.size()+1);
            crfoption.setOpenInput(false);
            crfoption.setJump("");
            crfCompOptionRepository.save(crfoption);
        }

    }

    public void delOption(String id) {
        CrfCompOption c  = crfCompOptionRepository.findOneById(id);
        crfCompOptionRepository.delete(c);
    }

    public void update(Integer oldIndex, Integer newIndex) {
        if(oldIndex > newIndex){
            //上移
            //给被移动对象的sort赋值，
            CrfComp crfComp = crfCompRepository.findBySort(oldIndex+1);
            if(CommonUtils.isNotEmpty(crfComp)){
                crfComp.setSort(0);
                crfCompRepository.save(crfComp);
            }
            List<CrfComp> crfComps = crfCompRepository.findBySortLessThanAndSortGreaterThanAndSortNotInAndSortNotIn(oldIndex+1,newIndex,0,newIndex);
            for(CrfComp crf : crfComps){
                crf.setSort(crf.getSort()+1);
                crfCompRepository.save(crf);
            }
            CrfComp cc = crfCompRepository.findBySort(0);
            cc.setSort(newIndex == 0? 1:newIndex+1);
            crfCompRepository.save(cc);
        }else{
            //下移
            //给被移动对象的sort赋值
            CrfComp crfComp = crfCompRepository.findBySort(oldIndex+1);
            if(CommonUtils.isNotEmpty(crfComp)){
                crfComp.setSort(0);
                crfCompRepository.save(crfComp);
            }
            List<CrfComp> crfComps = crfCompRepository.findBySortGreaterThanAndSortLessThanEqualAndSortNot(oldIndex,newIndex+1,0);
            for(CrfComp crf : crfComps){
                crf.setSort(crf.getSort()-1);
                crfCompRepository.save(crf);
            }
            CrfComp cc = crfCompRepository.findBySort(0);
            cc.setSort(newIndex == 0? newIndex:newIndex+1);
            crfCompRepository.save(cc);
        }
    }
}
