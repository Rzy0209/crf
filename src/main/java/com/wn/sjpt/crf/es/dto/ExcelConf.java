package com.wn.sjpt.crf.es.dto;

import com.wn.sjpt.crf.util.CommonUtils;
import lombok.Getter;
import lombok.Setter;

import java.text.SimpleDateFormat;

/**
 * @author yzj
 */
@Getter
@Setter
public class ExcelConf {
    private int pos;
    private String type;
    private SimpleDateFormat fmt;

    public ExcelConf(int pos,String type, String fmt) {
        this.pos = pos;
        this.type=type;
        if(CommonUtils.isNotEmpty(fmt)){
            this.fmt = new SimpleDateFormat(fmt);
        }
    }
}
