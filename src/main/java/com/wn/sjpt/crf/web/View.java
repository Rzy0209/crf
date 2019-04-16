package com.wn.sjpt.crf.web;

import org.springframework.beans.factory.annotation.Value;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;

/**
 * @author yzj
 */
@Controller
@RequestMapping()
public class View {
    private final String login;

    public View(@Value("${server.login:login}") String login) {
        this.login = login;
    }

    @GetMapping("/s/{view}")
    public String view(@PathVariable String view){
        return "view/"+view;
    }
    @GetMapping("/login")
    public String login(){
        return login;
    }
}
