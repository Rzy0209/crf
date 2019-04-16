package com.wn.sjpt.crf.es;

import com.wn.sjpt.crf.es.service.EsIndexService;
import lombok.extern.slf4j.Slf4j;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.boot.ApplicationArguments;
import org.springframework.boot.ApplicationRunner;
import org.springframework.core.Ordered;
import org.springframework.stereotype.Component;

/**
 * @author li_jing
 * @date 2018-11-29
 */
@Component
@Slf4j
public class EsIndexRunner implements ApplicationRunner, Ordered {
    /**
     * ES 索引服务
     */
    private final EsIndexService esIndexService;
    @Autowired
    public EsIndexRunner(EsIndexService esIndexService) {
        this.esIndexService = esIndexService;
    }

    @Override
    public void run(ApplicationArguments args) throws Exception {
        esIndexService.autoIndex(null, null);
        log.info("--自动创建ES索引完毕--");
    }
    @Override
    public int getOrder() {
        return 1;
    }
}
