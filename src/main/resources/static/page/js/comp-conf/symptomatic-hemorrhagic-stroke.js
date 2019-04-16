//既往症状性出血性脑卒中
var SymptomaticHemorrhagicStroke = function () {
    function show() {
        return {
            type: 'container',
            item: [{
                type: 'h3',
                text: '既往症状性出血性脑卒中'
            }, {
                type: 'hr',
                css: {
                    color: 'blue'
                }
            }, {
                type: 'row',
                item: [
                    {
                        type: 'col',
                        col: 12,
                        text:"类型：",
                        item: [{
                            type: 'cbox',
                            id: 'hypertensiveCerebralHemorrhage',
                            name: 'hypertensiveCerebralHemorrhage',
                            data: [{
                                value: '1',
                                unit: '高血压脑出血'
                            }]
                        }, {
                            type: 'cbox',
                            id: 'cerebralAmyloidAngiopathy',
                            name: 'cerebralAmyloidAngiopathy',
                            data: [{
                                value: '1',
                                unit: '脑淀粉样血管病'
                            }]
                        }, {
                            type: 'cbox',
                            id: 'arteriovenousMalformation',
                            name: 'arteriovenousMalformation',
                            data: [{
                                value: '1',
                                unit: '动静脉畸形'
                            }]
                        }, {
                            type: 'cbox',
                            id: 'moyamoya',
                            name: 'moyamoya',
                            data: [{
                                value: '1',
                                unit: 'moyamoya病'
                            }]
                        }, {
                            type: 'cbox',
                            id: 'ruptureOfAneurysm',
                            name: 'ruptureOfAneurysm',
                            data: [{
                                value: '1',
                                unit: '动脉瘤破裂'
                            }]
                        }, {
                            type: 'cbox',
                            id: 'intracranialVenousThrombosis',
                            name: 'intracranialVenousThrombosis',
                            data: [{
                                value: '1',
                                unit: '颅内静脉系统血栓形成'
                            }]
                        }, {
                            type: 'cbox',
                            id: 'hematologicalAbnormalities',
                            name: 'hematologicalAbnormalities',
                            data: [{
                                value: '1',
                                unit: '血液系统异常'
                            }]
                        }, {
                            type: 'cbox',
                            id: 'drugs',
                            name: 'drugs',
                            data: [{
                                value: '1',
                                unit: '药物（溶栓、抗凝、抗血小板治疗）'
                            }]
                        }, {
                            type: 'cbox',
                            id: 'pathNerveHistoryOther',
                            name: 'pathNerveHistoryOther',
                            data: [{
                                value: '1',
                                unit: '其他',
                                ex: {
                                    id: 'pathNerveHistoryOtherDescribe',
                                    name: 'pathNerveHistoryOtherDescribe',
                                    css: {width: '200px'}
                                }
                            }]
                        }
                        ]
                    }
                ]
            },{
                type: 'row',
                item: [
                    {
                        type: 'col',
                        col: 6,
                        item: [
                            {
                                type: 'cbox',
                                label: '部位：',
                                id: 'hemorrhagicStrokePositionLeft',
                                name: 'hemorrhagicStrokePositionLeft',
                                data: [
                                    {
                                        value: '1',
                                        label: '部位:',
                                        unit: '左'
                                    }]
                            }, {
                                type: 'cbox',
                                id: 'hemorrhagicStrokePositionRight',
                                name: 'hemorrhagicStrokePositionRight',
                                data: [
                                    {
                                        value: '1',
                                        unit: '右'
                                    }]
                            }, {
                                type: 'cbox',
                                id: 'hemorrhagicStrokePositionBilateal',
                                name: 'hemorrhagicStrokePositionBilateal',
                                data: [{
                                    value: '1',
                                    unit: '双侧'
                                }]
                            }
                        ]
                    }
                ]
            }, {
                type: 'row',
                item: [
                    {
                        type: 'col',col:1},
                    {
                        type: 'col',
                        col: 11,
                        item: [
                            {
                                type: 'cbox',
                                id: 'hemorrhagicStrokePositionFrontalLobe',
                                name: 'hemorrhagicStrokePositionFrontalLobe',
                                data: [
                                    {
                                        value: '1',
                                        unit: '额叶'
                                    }]
                            }, {
                                type: 'cbox',
                                id: 'hemorrhagicStrokePositionParietalLobe',
                                name: 'hemorrhagicStrokePositionParietalLobe',
                                data: [{
                                    value: '1',
                                    unit: '顶叶'
                                }]
                            }, {
                                type: 'cbox',
                                id: 'hemorrhagicStrokePositionTemporalLobe',
                                name: 'hemorrhagicStrokePositionTemporalLobe',
                                data: [{
                                    value: '1',
                                    unit: '颞叶'
                                }]
                            }, {
                                type: 'cbox',
                                id: 'hemorrhagicStrokePositionOccipitalLobe',
                                name: 'hemorrhagicStrokePositionOccipitalLobe',
                                data: [{
                                    value: '1',
                                    unit: '枕叶'
                                }]
                            }, {
                                type: 'cbox',
                                id: 'hemorrhagicStrokePositionBrainstem',
                                name: 'hemorrhagicStrokePositionBrainstem',
                                data: [{
                                    value: '1',
                                    unit: '脑干'
                                }]
                            }, {
                                type: 'cbox',
                                id: 'hemorrhagicStrokePositionCerebellum',
                                name: 'hemorrhagicStrokePositionCerebellum',
                                data: [{
                                    value: '1',
                                    unit: '小脑'
                                }]
                            }, {
                                type: 'cbox',
                                id: 'hemorrhagicStrokeVentricle',
                                name: 'hemorrhagicStrokeVentricle',
                                data: [{
                                    value: '1',
                                    unit: '脑室'
                                }]
                            }, {
                                type: 'cbox',
                                id: 'hemorrhagicStrokeSubarachnoidSpace',
                                name: 'hemorrhagicStrokeSubarachnoidSpace',
                                data: [{
                                    value: '1',
                                    unit: '蛛网膜下腔'
                                }]
                            },{
                                type: 'cbox',
                                id: 'hemorrhagicStrokePositionOther',
                                name: 'hemorrhagicStrokePositionOther',
                                data: [{
                                    value: '1',
                                    unit: '其他',
                                    ex: {
                                        id: 'hemorrhagicStrokePositionOtherDescribe',
                                        name: 'hemorrhagicStrokePositionOtherDescribe',
                                        css: {width: '200px'}
                                    }
                                }]
                            }
                        ]
                    }
                ]
            },{
                type: 'row',
                item: [{
                    type: 'col',
                    col: 10,
                    item: [
                        {
                            type: 'date',
                            id: 'hemorrhagicStrokeStartDate',
                            name: 'hemorrhagicStrokeStartDate',
                            label: '起病时间(年/月/日)：',
                            unit:"个月前"
                        }
                    ]
                }]
            }, {
                type: 'row',
                item: [{
                    type: 'col',
                    col: 12,
                    item: [
                        {
                            type: 'cbox',
                            radio:true,
                            label: '药物治疗：',
                            id: 'hemorrhagicStrokeTherapeuticDrugs',
                            name: 'hemorrhagicStrokeTherapeuticDrugs',
                            data: [
                                {
                                    value: 0,
                                    label: '药物治疗:',
                                    unit: '无'
                                },{
                                    value: 1,
                                    unit: '有',
                                    ex: {
                                        id: 'hemorrhagicStrokeTherapeuticDrugsDescribe',
                                        name: 'hemorrhagicStrokeTherapeuticDrugsDescribe',
                                        css: {width: '200px'}
                                    }
                                }]
                        }
                    ]
                }]
            }, {
                type: 'row',
                item: [{
                    type: 'col',
                    col: 12,
                    item: [
                        {
                            type: 'cbox',
                            radio:true,
                            label: '遗留后遗症：',
                            id: 'hemorrhagicStrokeLegacySequela',
                            name: 'hemorrhagicStrokeLegacySequela',
                            data: [
                                {
                                    value: 0,
                                    label: '遗留后遗症:',
                                    unit: '无'
                                },{
                                    value: 1,
                                    unit: '有',
                                    ex: {
                                        id: 'hemorrhagicStrokeLegacySequelaDescribe',
                                        name: 'hemorrhagicStrokeLegacySequelaDescribe',
                                        css: {width: '200px'}
                                    }
                                }]
                        }
                    ]
                }]
            }]
        }
    }

    function rules() {
        return []
    }

    return {
        show: show,
        rules: rules
    }
}();