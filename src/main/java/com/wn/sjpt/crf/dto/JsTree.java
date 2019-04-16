package com.wn.sjpt.crf.dto;

import java.util.ArrayList;
import java.util.List;

/**
 * JSTree
 *
 * @author lee
 * @version V1.0.0
 * @date 16/9/8
 */
public class JsTree {
    private String id;

    private String parentId;

    private String text;

    private String icon;

    private String tag;

    private State state;

    private List<JsTree> children;

    public String getId() {
        return id;
    }

    public void setId(String id) {
        this.id = id;
    }

    public String getParentId() {
        return parentId;
    }

    public void setParentId(String parentId) {
        this.parentId = parentId;
    }

    public String getText() {
        return text;
    }

    public void setText(String text) {
        this.text = text;
    }

    public String getIcon() {
        return icon;
    }

    public void setIcon(String icon) {
        this.icon = icon;
    }

    public State getState() {
        return state;
    }

    public void setState(Boolean state) {
        State temp = new State();
        temp.setOpened(state);
        this.state = temp;
    }

    public List<JsTree> getChildren() {
        return children;
    }

    public void setChildren(List<JsTree> children) {
        this.children = children;
    }

    public String getTag() {
        return tag;
    }

    public void setTag(String tag) {
        this.tag = tag;
    }

    public void addChild(JsTree node) {
        if (children == null) {
            children = new ArrayList<>();
        }
        children.add(node);
    }
}

