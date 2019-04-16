package com.wn.sjpt.crf.service;

import com.wn.sjpt.crf.domain.CrfSubjectCode;
import com.wn.sjpt.crf.repository.CrfSubjectCodeRepository;
import com.wn.sjpt.crf.util.CommonUtils;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import java.util.Optional;

/**
 * 编号
 *
 * @author mengpengwei
 */
@Service
public class CrfSubjectCodeService {
    @Autowired
    private CrfSubjectCodeRepository subjectCodeRepository;

    @Transactional
    public String findTestNumber(String id) {
        String code = "";
        CrfSubjectCode subjectCode = null;
        Optional<CrfSubjectCode> subjectCodeOptional = subjectCodeRepository.findById( id );
        if (subjectCodeOptional.isPresent()) {
            subjectCode = subjectCodeOptional.get();
        }
        int step = 1;
        if (CommonUtils.isEmpty( subjectCode )) {
            subjectCode = new CrfSubjectCode();
            int startVal = 1;
            subjectCode.setSubjectId( id );
            subjectCode.setVal( startVal + step );
            subjectCodeRepository.save( subjectCode );
            code = buileFiveFigureCode( startVal );
        } else {
            int val = subjectCode.getVal();
            subjectCode.setVal( val + step );
            subjectCodeRepository.save( subjectCode );
            code = buileFiveFigureCode( val );
        }
        return code;
    }

    private String buileFiveFigureCode(int val) {
        String code = String.valueOf( val );
        int size = 5;
        String comp = "0";
        int codeLength = code.length();
        int length = size - codeLength;
        StringBuffer codeBuffer = new StringBuffer();
        for (int i = 0; i < length; i++) {
            codeBuffer.append( comp );
        }
        codeBuffer.append( code );
        return codeBuffer.toString();
    }
}
