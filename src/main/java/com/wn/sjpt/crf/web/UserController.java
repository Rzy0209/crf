package com.wn.sjpt.crf.web;

import com.winning.framework.ums.client.UmsService;
import com.winning.framework.ums.dto.User;
import com.winning.framework.ums.filter.serv.AuthService;
import com.winning.framework.ums.filter.util.JwtUtil;
import com.winning.framework.ums.filter.util.UserUtil;
import com.winning.framework.ums.model.ResourceVO;
import com.wn.sjpt.crf.dto.ums.LoginUser;
import com.wn.sjpt.crf.util.CommonUtils;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import javax.servlet.http.HttpServletRequest;
import java.util.List;

/**
 * @author pingtai
 */

@RequestMapping("/api/user")
@RestController
public class UserController {
    @Value("${appid.value:2345}")
    private int appid;
    @Value("${umsPageService.url:${umsService.url:localhost:8889/ums}}")
    private String umsUrl;
    @Autowired
    private AuthService comp;
    @Value("${umsService.url:localhost:8889/ums}")
    private String umsServiceUrl;

    @GetMapping("")
    public User user() {
        return UserUtil.getUserLocal();
    }

    @GetMapping("/info")
    public LoginUser userVO(HttpServletRequest req) {
        LoginUser user = (LoginUser) UserUtil.getUserLocal();
        String jwt = JwtUtil.getJwt(req);
        transMenu(user.getMenus(), jwt);
        return user;
    }

    @GetMapping({"/pwd/change"})
    public boolean changePwd(String oldPwd, String newPwd, HttpServletRequest req)
    {
        LoginUser user = (LoginUser)UserUtil.getUserLocal();
        if (null == user) {
            return false;
        }
        String jwt = JwtUtil.getJwt(req);
        if (CommonUtils.isEmpty(jwt)) {
            return false;
        }
        UmsService service = new UmsService(this.umsServiceUrl, jwt);
        String val = service.changePwd(user.getUid(), oldPwd, newPwd);
        return true;
    }



    private void transMenu(List<ResourceVO> menus, String jwt) {
        if (CommonUtils.isNotEmpty(menus)) {
            for (ResourceVO menu : menus) {
                List<ResourceVO> children = menu.getResChild();
                transMenu(children, jwt);
                String url = menu.getResourceUrl();
                if (CommonUtils.isNotEmpty(url) && url.startsWith("/ums")) {
                    StringBuilder urlSb = new StringBuilder();
                    int queryIndex = url.indexOf("?"), methodIndex = url.indexOf("#");
                    int startIndex = methodIndex > 0 ? methodIndex : url.length();
                    urlSb.append(umsUrl);
                    urlSb.append(url.substring(0, startIndex));
                    urlSb.append(queryIndex > 0 ? "&" : "?");
                    urlSb.append("jwt=").append(jwt).append("&appid=").append(appid);
                    if (methodIndex > 0) {
                        urlSb.append(url.substring(methodIndex));
                    }
                    menu.setResourceUrl(urlSb.toString());
                }
            }
        }
    }
}
