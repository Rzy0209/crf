package com.wn.sjpt.crf.es.service;

import org.springframework.boot.context.properties.ConfigurationProperties;
import org.springframework.stereotype.Component;

import java.util.Map;

/**
 * @author pingtai
 */

@Component
@ConfigurationProperties(prefix = "spring.data.elasticsearch.indices.crf")
public class EsCrfProperties {
    private String index;
    private Map<String,String> types;

    public String getIndex() {
        return index;
    }

    public void setIndex(String index) {
        this.index = index;
    }

    public Map<String, String> getTypes() {
        return types;
    }

    public void setTypes(Map<String, String> types) {
        this.types = types;
    }
}
