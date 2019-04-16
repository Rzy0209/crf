package com.wn.sjpt.crf.dto.ums;

import com.winning.framework.ums.model.ResourceVO;
import lombok.Getter;
import lombok.Setter;

import java.util.ArrayList;
import java.util.List;

@Getter
@Setter
public class Menu implements Comparable<Menu> {
    private String code;
    private String name;
    private String url;
    private Integer order;
    private List<Menu> children;

    public Menu(ResourceVO vo) {
        code=vo.getModuleCode();
        name=vo.getResourceName();
        url=vo.getResourceUrl();
        order=vo.getOrderNum();
        children=new ArrayList<>();
    }
    @Override
    public int compareTo(Menu another){
        return another.order-this.order;
    }
}
