package com.wn.sjpt.crf.service;

import com.wn.sjpt.crf.domain.CrfEsData;
import com.wn.sjpt.crf.repository.CrfEsDataRepo;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.cache.annotation.Cacheable;
import org.springframework.stereotype.Service;

import java.util.HashMap;
import java.util.List;
import java.util.Map;

/**
 * @author yzj
 */
@Service
public class CrfEsDataService {
    private final CrfEsDataRepo repo;
    @Autowired
    public CrfEsDataService(CrfEsDataRepo crfEsDataRepo) {
        this.repo = crfEsDataRepo;
    }
    public List<CrfEsData> findAll(){
        return  repo.findAll();
    }
    @Cacheable("ES_DATA_MAP")
    public Map<String,CrfEsData> dataMap(){
        List<CrfEsData> list=repo.findAll();
        Map<String,CrfEsData> map=new HashMap<>(64);
        list.forEach(data->{
            map.put(data.getPath(),data);
        });
        return map;
    }
}
