package com.wn.sjpt.crf.web;

import org.apache.commons.logging.Log;
import org.apache.commons.logging.LogFactory;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.HashMap;
import java.util.Map;

/**
 * @author yzj
 * 登录
 */
@RestController
@RequestMapping("/api/login")
public class LoginController {

    private static Log log = LogFactory.getLog(LoginController.class);
    @Value("${appid.value:2345}")
    private int appid;
    @Value("${umsPageService.url:${umsService.url:localhost:8889/ums}}")
    private String umsUrl;
    @Value("${sys.indexUrl:http://localhost:7777/metrix}")
    private String indexUrl;
    @Value("${jwt.ssoUrl:http://localhost:7777/metrix/sso}")
    private String ssoUrl;

    @GetMapping("/params")
    public Map<String, Object> params() {
        Map<String, Object> params = new HashMap<>(512);
        params.put("action", umsUrl + "/api/login/");
        params.put("ssourl", ssoUrl);
        params.put("from", indexUrl);
        params.put("nbd", true);
        params.put("appid", appid);
        return params;
    }
}