package com.wn.sjpt.crf.web;

import com.wn.sjpt.crf.util.PinYinUtil;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequestMapping(value = "/api/crf")
public class CrfController {

    @RequestMapping(value = "generateCode")
    public String generateCode(String comanyName) {
        //根据汉语生成对应拼音的首字母
        String comanyCode = PinYinUtil.convertChineseToPinyin(comanyName, 1);
        return comanyCode;
    };

}
