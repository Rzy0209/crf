//既往症状性缺血性脑卒中
var SymptomaticIschemicStroke = function () {
    function show() {
        return {
            type: 'container',
            item: [{
                type: 'h3',
                text: '既往症状性缺血性脑卒中'
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
                            id: 'atherosclerotIccerebralInfarction',
                            name: 'atherosclerotIccerebralInfarction',
                            data: [{
                                value: '1',
                                unit: '大动脉粥样硬化性脑梗死'
                            }]
                        }, {
                            type: 'cbox',
                            id: 'cerebral',
                            name: 'cerebral',
                            data: [{
                                value: '1',
                                unit: '脑栓塞'
                            }]
                        }, {
                            type: 'cbox',
                            id: 'arterioleBstructionInfarction',
                            name: 'arterioleBstructionInfarction',
                            data: [{
                                value: '1',
                                unit: '小动脉闭塞性脑梗死'
                            }]
                        }, {
                            type: 'cbox',
                            id: 'watershedInfarction',
                            name: 'watershedInfarction',
                            data: [{
                                value: '1',
                                unit: '分水岭梗死'
                            }]
                        }, {
                            type: 'cbox',
                            id: 'hemorrhagicInfarction',
                            name: 'hemorrhagicInfarction',
                            data: [{
                                value: '1',
                                unit: '出血性梗死'
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
                            id: 'arterialDissection',
                            name: 'arterialDissection',
                            data: [{
                                value: '1',
                                unit: '动脉夹层'
                            }]
                        }, {
                            type: 'cbox',
                            id: 'ischemicStrokeOther',
                            name: 'ischemicStrokeOther',
                            data: [{
                                value: '1',
                                unit: '其他',
                                ex: {
                                    id: 'ischemicStrokeOtherDescribe',
                                    name: 'ischemicStrokeOtherDescribe',
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
                                id: 'ischemicStrokePositionLeft',
                                name: 'ischemicStrokePositionLeft',
                                data: [
                                    {
                                        value: '1',
                                        label: '部位:',
                                        unit: '左'
                                    }]
                            }, {
                                type: 'cbox',
                                id: 'ischemicStrokePositionRight',
                                name: 'ischemicStrokePositionRight',
                                data: [
                                    {
                                        value: '1',
                                        unit: '右'
                                    }]
                            }, {
                                type: 'cbox',
                                id: 'ischemicStrokePositionBilateal',
                                name: 'ischemicStrokePositionBilateal',
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
                                id: 'ischemicStrokePositionFrontalLobe',
                                name: 'ischemicStrokePositionFrontalLobe',
                                data: [
                                    {
                                        value: '1',
                                        unit: '额叶'
                                    }]
                            }, {
                                type: 'cbox',
                                id: 'ischemicStrokePositionParietalLobe',
                                name: 'ischemicStrokePositionParietalLobe',
                                data: [{
                                    value: '1',
                                    unit: '顶叶'
                                }]
                            }, {
                                type: 'cbox',
                                id: 'ischemicStrokePositionTemporalLobe',
                                name: 'ischemicStrokePositionTemporalLobe',
                                data: [{
                                    value: '1',
                                    unit: '颞叶'
                                }]
                            }, {
                                type: 'cbox',
                                id: 'ischemicStrokePositionOccipitalLobe',
                                name: 'ischemicStrokePositionOccipitalLobe',
                                data: [{
                                    value: '1',
                                    unit: '枕叶'
                                }]
                            },{
                                type: 'cbox',
                                id: 'ischemicStrokePositionBasalGanglia',
                                name: 'ischemicStrokePositionBasalGanglia',
                                data: [{
                                    value: '1',
                                    unit: '基底节'
                                }]
                            }, {
                                type: 'cbox',
                                id: 'ischemicStrokePositionThalamus',
                                name: 'ischemicStrokePositionThalamus',
                                data: [{
                                    value: '1',
                                    unit: '丘脑'
                                }]
                            },  {
                                type: 'cbox',
                                id: 'ischemicStrokePositionBrainstem',
                                name: 'ischemicStrokePositionBrainstem',
                                data: [{
                                    value: '1',
                                    unit: '脑干'
                                }]
                            }, {
                                type: 'cbox',
                                id: 'ischemicStrokePositionCerebellum',
                                name: 'ischemicStrokePositionCerebellum',
                                data: [{
                                    value: '1',
                                    unit: '小脑'
                                }]
                            }, {
                                type: 'cbox',
                                id: 'ischemicStrokeCorpusCallosum',
                                name: 'ischemicStrokeCorpusCallosum',
                                data: [{
                                    value: '1',
                                    unit: '胼胝体'
                                }]
                            }, {
                                type: 'cbox',
                                id: 'ischemicStrokePositionOther',
                                name: 'ischemicStrokePositionOther',
                                data: [{
                                    value: '1',
                                    unit: '其他',
                                    ex: {
                                        id: 'ischemicStrokePositionOtherDescribe',
                                        name: 'ischemicStrokePositionOtherDescribe',
                                        css: {width: '200px'}
                                    }
                                }]
                            }
                        ]
                    }
                ]
            }, {
                type: 'row',
                item: [{
                    type: 'col',
                    col: 10,
                    item: [
                        {
                            type: 'date',
                            id: 'ischemicStrokeStartDate',
                            name: 'ischemicStrokeStartDate',
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
                            id: 'ischemicStrokeTherapeuticDrugs',
                            name: 'ischemicStrokeTherapeuticDrugs',
                            data: [
                                {
                                    value: 0,
                                    label: '药物治疗:',
                                    unit: '无'
                                },{
                                    value: 1,
                                    unit: '有',
                                    ex: {
                                        id: 'ischemicStrokeTherapeuticDrugsDescribe',
                                        name: 'ischemicStrokeTherapeuticDrugsDescribe',
                                        css: {width: '200px'}
                                    }
                                }]
                        }
                    ]
                }]
            },{
                type: 'row',
                item: [{
                    type: 'col',
                    col: 12,
                    item: [
                        {
                            type: 'cbox',
                            radio:true,
                            label: '遗留后遗症：',
                            id: 'ischemicStrokeLegacySequela',
                            name: 'ischemicStrokeLegacySequela',
                            data: [
                                {
                                    value: 0,
                                    label: '遗留后遗症:',
                                    unit: '无'
                                },{
                                    value: 1,
                                    unit: '有',
                                    ex: {
                                        id: 'ischemicStrokeLegacySequelaDescribe',
                                        name: 'ischemicStrokeLegacySequelaDescribe',
                                        css: {width: '200px'}
                                    }
                                }]
                        }
                    ]
                }]
            }]
        };
    }

    function rules() {
        return []
    }

    return {
        show: show,
        rules: rules
    }
}();