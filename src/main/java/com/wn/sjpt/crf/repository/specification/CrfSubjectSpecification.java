package com.wn.sjpt.crf.repository.specification;

import com.wn.sjpt.crf.domain.CrfSubject;
import com.wn.sjpt.crf.dto.CrfFormBasicInfoDto;
import com.wn.sjpt.crf.util.CommonUtils;
import org.springframework.data.jpa.domain.Specification;

import javax.persistence.criteria.CriteriaBuilder;
import javax.persistence.criteria.CriteriaQuery;
import javax.persistence.criteria.Predicate;
import javax.persistence.criteria.Root;
import java.util.ArrayList;
import java.util.List;

public class CrfSubjectSpecification {
    public static Specification<CrfSubject> queryAllBySubject(final CrfSubject subject) {
        return new Specification<CrfSubject>() {
            @Override
            public Predicate toPredicate(Root<CrfSubject> root, CriteriaQuery<?> query, CriteriaBuilder builder) {
                List<Predicate> list = new ArrayList<Predicate>();
                if (CommonUtils.isNotEmpty( subject.getName() )) {
                    list.add( builder.like( root.get( "name" ).as( String.class ), "%" + subject.getName() + "%" ) );
                }
//                if (CommonUtils.isNotEmpty( subject.getMinAge() )) {
//                    list.add( builder.greaterThanOrEqualTo( root.get( "age" ).as( Integer.class ), subject.getMinAge() ) );
//                }
//                if (CommonUtils.isNotEmpty( subject.getMaxAge() )) {
//                    list.add( builder.lessThanOrEqualTo( root.get( "age" ).as( Integer.class ), subject.getMaxAge() ) );
//                }
//                if (CommonUtils.isNotEmpty( subject.getGender() )) {
//                    list.add( builder.equal( root.get( "gender" ).as( Integer.class ), subject.getGender() ) );
//                }
                Predicate[] p = new Predicate[list.size()];
                return builder.and( list.toArray( p ) );
            }
        };
    }
}
