package com.wn.sjpt.crf.dto.ums;

import com.winning.framework.ums.dto.AppUser;
import com.winning.framework.ums.model.ResourceVO;
import com.winning.framework.ums.model.UmsUserVO;
import com.wn.sjpt.crf.util.CommonUtils;
import lombok.Getter;

import javax.servlet.http.HttpServletRequest;
import java.util.*;

import static com.wn.sjpt.crf.util.Cons.ResType.AUTH;
import static com.wn.sjpt.crf.util.Cons.ResType.MENU;

/**
 * @author yzj
 * 用户重写
 */
@Getter
public class LoginUser extends AppUser {
    /**
     * 权限
     */
    private Set<String> auths=new HashSet<>();
    /**
     * 菜单
     */
    private List<ResourceVO> menus=new ArrayList<>();

    @Override
    public void init(UmsUserVO user, HttpServletRequest req) {
        super.init(user, req);
        menus=user.getAppMenu();
        sort(menus);
        auths=user.getAppAuth();
    }
    private void sort(List<ResourceVO> menus){
        Collections.sort(menus,Comparator.comparingInt(ResourceVO::getOrderNum));
        for(ResourceVO menu:menus){
            List<ResourceVO> chiMenus=menu.getResChild();
            if(CommonUtils.isNotEmpty(chiMenus)){
                sort(chiMenus);
            }
        }
    }

}
