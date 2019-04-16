package com.wn.sjpt.crf.web;

import com.wn.sjpt.crf.dto.comp.SingleForm;
import com.wn.sjpt.crf.service.CrfCompService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

/**
 * @author ghr
 *
 */
@RestController
@RequestMapping(value = "/api/crf/comp")
public class CrfCompController {

    private final CrfCompService crfCompService;
    @Autowired
    public CrfCompController(CrfCompService crfCompService) {
        this.crfCompService = crfCompService;
    }

    /**
     *  创建组件
     * @param sort
     * @param type
     * @param crfId
     * @return
     */
    @RequestMapping(value = "/create",method = RequestMethod.POST)
    @ResponseBody
    public Boolean createComp(@RequestParam(value = "sort",required = false) Integer sort,@RequestParam(value = "type",required = false) String type,@RequestParam(value = "crfId",required = false) String crfId) {
        try {
            crfCompService.createComp(sort,type,crfId);
            return true;
        } catch (Exception e) {
            e.printStackTrace();
            return false;
        }
    }

    /**
     * 查询一个组件
     * @param crfId
     * @return
     */
    @RequestMapping(value = "/findOne",method = RequestMethod.GET)
    @ResponseBody
    public SingleForm find(@RequestParam(value = "crfId") String crfId) {

        try {
            return crfCompService.findOneCompByCrfId(crfId);
        } catch (Exception e) {
            e.printStackTrace();
            return null;
        }
    }

    /**
     * 删除组件
     * @param id
     * @return
     */
    @RequestMapping(value = "/delete",method = RequestMethod.DELETE)
    @ResponseBody
    public Boolean delete(@RequestParam(value = "id") String id) {
        try {
            crfCompService.deleteComp(id);
            return true;
        } catch (Exception e) {
            e.printStackTrace();
            return false;
        }
    }

    /**
     * 保存组建
     * @param id
     * @param type
     * @param info
     * @return
     */
    @RequestMapping(value = "/save", method = RequestMethod.POST)
    public Boolean saveComp(String id,String type,String info) {
        try {
            crfCompService.saveComp(id,type,info);
            return true;
        }catch (Exception e){
            e.printStackTrace();
            return false;
        }
    }

    /**
     * 新增选项
     * @param id
     * @return
     */
    @RequestMapping(value = "/addOption", method = RequestMethod.POST)
    public Boolean addOption(String id) {
        try {
            crfCompService.addOption(id);
            return true;
        }catch (Exception e){
            e.printStackTrace();
            return false;
        }
    }

    /**
     * 删除选项
     * @param id
     * @return
     */
    @RequestMapping(value = "/delOption",method = RequestMethod.DELETE)
    @ResponseBody
    public Boolean delOption(@RequestParam(value = "id") String id) {
        try {
            crfCompService.delOption(id);
            return true;
        } catch (Exception e) {
            e.printStackTrace();
            return false;
        }
    }

    /**
     * 更新排序
     * @param oldIndex
     * @param newIndex
     * @return
     */
    @RequestMapping(value = "/updateSort",method = RequestMethod.POST)
    @ResponseBody
    public Boolean updateSort(@RequestParam(value = "oldIndex") Integer oldIndex,
                             @RequestParam(value = "newIndex") Integer newIndex) {
        try {
            crfCompService.update(oldIndex,newIndex);
            return true;
        } catch (Exception e) {
            e.printStackTrace();
            return false;
        }
    }
}
