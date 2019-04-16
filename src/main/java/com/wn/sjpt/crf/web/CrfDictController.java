package com.wn.sjpt.crf.web;

import com.winning.framework.ums.dto.AppUser;
import com.winning.framework.ums.filter.util.UserUtil;
import com.wn.sjpt.crf.domain.CrfDict;
import com.wn.sjpt.crf.domain.CrfSubject;
import com.wn.sjpt.crf.dto.PageDto;
import com.wn.sjpt.crf.service.CrfDictService;
import com.wn.sjpt.crf.service.CrfSubjectService;
import net.sf.json.JSONObject;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.Page;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;


/**
 * 字典 web
 *
 * @author mengpengwei
 */
@RestController
@RequestMapping(value = "/api/dict")
public class CrfDictController {
    @Autowired
    private CrfDictService dictService;

    /**
     * 根据type查询字典
     *
     * @param type
     * @return
     */
    @RequestMapping(value = "/type/{type}", method = RequestMethod.GET)
    public List<CrfDict> findById(@PathVariable int type) {
        List<CrfDict> dictList = null;
        try {
            dictList = dictService.findByType( type );
        } catch (Exception e) {
            e.printStackTrace();
        }
        return dictList;
    }

}
