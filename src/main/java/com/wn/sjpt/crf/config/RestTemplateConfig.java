package com.wn.sjpt.crf.config;

import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;
import org.springframework.http.client.ClientHttpRequestFactory;
import org.springframework.http.client.SimpleClientHttpRequestFactory;
import org.springframework.web.client.RestTemplate;

/**
 * Created by wzy on 2018/09/28.
 * RestTemplate配置类
 * @author pingtai
 */
@Configuration
public class RestTemplateConfig {

    @Bean
    public RestTemplate restTemplate(ClientHttpRequestFactory factory) {
        return new RestTemplate(factory);
    }

    @Bean
    public ClientHttpRequestFactory simpleClientHttpRequestFactory() {
        SimpleClientHttpRequestFactory factory = new SimpleClientHttpRequestFactory();
        /**单位为ms
         *
         */
        factory.setReadTimeout(5000);
        /**单位为ms
         *
         */
        factory.setConnectTimeout(5000);
        return factory;
    }
}
