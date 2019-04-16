package com.wn.sjpt.crf.domain;

import lombok.Getter;
import lombok.Setter;

import javax.persistence.*;
import java.util.Date;
@Entity
@Getter
@Setter
public class CrfSubjectTemplet{
    @Id
    @GeneratedValue
    private Integer id;
    //标题
    @Column(length = 50)
    private String title;
    //模板
    @Column(length = 50)
    private String template;
    //描述
    @Column(length = 50)
    private String description;
    //创建时间
    @Column(length = 6)
    private Date createTime;
    //更新时间
    @Column(length = 6)
    private Date updateTime;

    @Override
    public String toString() {
        return "CrfSubjectTemplet{" +
                "id=" + id +
                ", title='" + title + '\'' +
                ", template='" + template + '\'' +
                ", description='" + description + '\'' +
                ", createTime=" + createTime +
                ", updateTime=" + updateTime +
                '}';
    }
}
