/**
 * 患者就诊和费用明细数据（医保数据库最优，医院信息系统/病案首页备选）
 * @type {{show, rules}}
 */
var CompPatFeeDiag = function () {
    var show = function () {
        return {
            type: 'container',
            class:'no-group',
            item: [
                {
                    type: 'h3',
                    text: '患者就诊和费用明细数据（医保数据库最优，医院信息系统/病案首页备选）'
                },
                {
                    type: 'hr',
                    css: {
                        color: 'blue'
                    }
                },
                {
                    type: 'row', item: [{
                        type: 'col',
                        item: [
                            {
                                type: 'input',
                                label: '1.门诊和住院患者的总费用',
                                name: 'fee'
                            },
                            {
                                type: 'input',
                                label: '自付金额',
                                name: 'feeSelf'
                            }
                        ]
                    }]
                },
                {
                    type: 'row', item: [{
                        type: 'col',
                        item: [
                            {type: 'label', text: '2.门诊患者的此次就诊的费用明细：'}
                            , {type: 'br'}
                            , {type: 'input', label: '综合医疗服务费（一般诊疗费、治疗操作费）', name: 'medServFee'}
                            , {type: 'br'}
                            , {type: 'input', label: '诊断费', name: 'diagFee'}
                            , {type: 'br'}
                            , {type: 'input', label: '治疗费（非手术治疗费、手术治疗费）', name: 'treatFee'}
                            , {type: 'br'}
                            , {type: 'input', label: '康复费', name: 'rehabFee'}
                            , {type: 'br'}
                            , {type: 'input', label: '中医治疗费', name: 'tcmFee'}
                            , {type: 'br'}
                            , {type: 'input', label: '西药费', name: 'wmFee'}
                            , {type: 'br'}
                            , {type: 'input', label: '中药费', name: 'cmFee'}
                            , {type: 'br'}
                            , {type: 'input', label: '血液及血制品类费用', name: 'bloodsFee'}
                            , {type: 'br'}
                            , {type: 'input', label: '耗材费', name: 'dispFee'}, {type: 'br'}
                            , {type: 'input', label: '其他', name: 'otherFee'}
                        ]
                    }]
                }, {
                    type: 'row', item: [{
                        type: 'col',
                        item: [
                            {type: 'label', text: '3.住院患者此次就诊的费用明细：'}
                            , {type: 'br'}
                            , {type: 'input', label: '综合医疗服务费（一般诊疗费、治疗操作费）', name: 'hosMedServFee'}
                            , {type: 'br'}
                            , {type: 'input', label: '诊断费', name: 'hosDiagFee'}
                            , {type: 'br'}
                            , {type: 'input', label: '治疗费（非手术治疗费、手术治疗费）', name: 'hosTreatFee'}
                            , {type: 'br'}
                            , {type: 'input', label: '康复费', name: 'hosRehabFee'}
                            , {type: 'br'}
                            , {type: 'input', label: '中医治疗费', name: 'hosTcmFee'}
                            , {type: 'br'}
                            , {type: 'input', label: '西药费', name: 'hosWmFee'}
                            , {type: 'br'}
                            , {type: 'input', label: '中药费', name: 'hosCmFee'}
                            , {type: 'br'}
                            , {type: 'input', label: '血液及血制品类费用', name: 'hosBloodsFee'}
                            , {type: 'br'}
                            , {type: 'input', label: '耗材费', name: 'hosDispFee'}, {type: 'br'}
                            , {type: 'input', label: '其他', name: 'hosOtherFee'}
                        ]
                    }]
                }, {
                    type: 'row', item: [{
                        type: 'col',
                        item: [
                            {type: 'label', text: '4.住院信息：'}
                            , {type: 'br'}
                            , {type: 'input', label: '入院日期', name: 'hosInDate'}
                            , {type: 'br'}
                            , {type: 'input', label: '出院日期', name: 'hosOutDate'}
                            , {type: 'br'}
                            , {type: 'input', label: '入院诊断', name: 'hosInDiag'}
                            , {type: 'br'}
                            , {type: 'input', label: '出院诊断（名称和ICD编码）', name: 'hosOutDiag'}
                            , {type: 'br'}
                            , {type: 'input', label: '主要诊断', name: 'hosMainDiag'}
                            , {type: 'br'}
                            , {type: 'input', label: '次要诊断', name: 'hosOtherDiag'}
                        ]
                    }]
                }, {
                    type: 'row', item: [{
                        type: 'col',
                        item: [{type: 'input', label: '5.医院治疗一名神经功能障碍所对应疾病的患者的平均住院天数：', name: 'hosAvgDate'}
                            , {type: 'input', label: '平均费用', name: 'hosAvgFee'}
                        ]
                    }]
                }
            ]
        };
    };
    $.vtool.n2i(show);
    return {
        show: show,
        rules: function () {
            return [];
        }
    }
}();