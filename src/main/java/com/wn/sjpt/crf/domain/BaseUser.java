package com.wn.sjpt.crf.domain;

import com.winning.framework.ums.filter.util.UserUtil;
import com.wn.sjpt.crf.dto.ums.LoginUser;
import lombok.Getter;
import lombok.Setter;
import lombok.extern.slf4j.Slf4j;

import javax.persistence.Column;
import javax.persistence.MappedSuperclass;
import java.io.Serializable;

/**
 * 继承超类，用户信息
 * @author yzj
 */
@MappedSuperclass
@Getter
@Setter
@Slf4j
public class BaseUser implements Serializable {
    /**
     * 机构码--备用
     */
    @Column(length = 100)
    private String orgCode;
    /**
     * 科室编码--备用
     */
    @Column(length = 100)
    private String depCode;
    /**
     * 用户名--备用
     */
    @Column(length = 100)
    private String userName;
    /**
     * 用户名--备用
     */
    @Column(length = 100)
    private String userAccount;

    /**
     * 初始化用户信息
     */
    public void init(){
        LoginUser user= (LoginUser) UserUtil.getUserLocal();
        if(null!=user){
            orgCode=user.getOrgCode();
            depCode=user.getDeptCode();
            userName=user.getName();
            userAccount=user.getAccount();
        }else {
            log.error("无法获取用户信息，检查是否登录！" );
        }
    }

}
