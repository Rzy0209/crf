package com.wn.sjpt.crf.es.dto;

import lombok.Getter;

/**
 * @author yzj
 * 分词器
 */
@Getter
public enum Analyzer {
    /**
     *
     */
    IK_SMART(1,"ik_smart","IK分词器"),IK_MAX(2,"ik_max_word","IK最大词分词器"),
    IK_SYNO(3,"ik_syno","同义词分词器"),IK_SYNO_MAX(4,"ik_syno_max","同义词最大词分词器");
    private int val;
    private String code;
    private String desc;

    Analyzer(int val, String code, String desc) {
        this.val = val;
        this.code = code;
        this.desc = desc;
    }
    public static Analyzer analyzer(int val){
        for(Analyzer a:Analyzer.values()){
            if(val==a.val){
                return a;
            }
        }
        return Analyzer.IK_SMART;
    }
}
