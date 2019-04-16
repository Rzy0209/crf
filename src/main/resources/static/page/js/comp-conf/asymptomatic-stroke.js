//无症状性脑卒中
var AsymptomaticStroke = function () {
    function show() {
        return {
            type: 'container',
            item: [{
                type: 'h3',
                text: '无症状性脑卒中'
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
                            id: 'lacunarInfarction',
                            name: 'lacunarInfarction',
                            data: [{
                                value: '1',
                                unit: '腔隙性梗死或缺血灶（直径≤2cm）'
                            }]
                        }, {
                            type: 'cbox',
                            id: 'whiteMatterHyperintensity',
                            name: 'whiteMatterHyperintensity',
                            data: [{
                                value: '1',
                                unit: '脑白质高信号'
                            }]
                        }, {
                            type: 'cbox',
                            id: 'microHemorrhage',
                            name: 'microHemorrhage',
                            data: [{
                                value: '1',
                                unit: '微出血'
                            }]
                        }, {
                            type: 'cbox',
                            id: 'asymptomaticStrokeOther',
                            name: 'asymptomaticStrokeOther',
                            data: [{
                                value: '1',
                                unit: '其他',
                                ex: {
                                    id: 'asymptomaticStrokeOtherDescribe',
                                    name: 'asymptomaticStrokeOtherDescribe',
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
                                id: 'asymptomaticStrokePositionLeft',
                                name: 'asymptomaticStrokePositionLeft',
                                data: [
                                    {
                                        value: '1',
                                        label: '部位:',
                                        unit: '左'
                                    }]
                            }, {
                                type: 'cbox',
                                id: 'asymptomaticStrokePositionRight',
                                name: 'asymptomaticStrokePositionRight',
                                data: [
                                    {
                                        value: '1',
                                        unit: '右'
                                    }]
                            }, {
                                type: 'cbox',
                                id: 'asymptomaticStrokePositionBilateal',
                                name: 'asymptomaticStrokePositionBilateal',
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
                                id: 'asymptomaticStrokePositionFrontalLobe',
                                name: 'asymptomaticStrokePositionFrontalLobe',
                                data: [
                                    {
                                        value: '1',
                                        unit: '额叶'
                                    }]
                            }, {
                                type: 'cbox',
                                id: 'asymptomaticStrokePositionParietalLobe',
                                name: 'asymptomaticStrokePositionParietalLobe',
                                data: [{
                                    value: '1',
                                    unit: '顶叶'
                                }]
                            }, {
                                type: 'cbox',
                                id: 'asymptomaticStrokePositionTemporalLobe',
                                name: 'asymptomaticStrokePositionTemporalLobe',
                                data: [{
                                    value: '1',
                                    unit: '颞叶'
                                }]
                            }, {
                                type: 'cbox',
                                id: 'asymptomaticStrokePositionOccipitalLobe',
                                name: 'asymptomaticStrokePositionOccipitalLobe',
                                data: [{
                                    value: '1',
                                    unit: '枕叶'
                                }]
                            },{
                                type: 'cbox',
                                id: 'asymptomaticStrokePositionBasalGanglia',
                                name: 'asymptomaticStrokePositionBasalGanglia',
                                data: [{
                                    value: '1',
                                    unit: '基底节'
                                }]
                            }, {
                                type: 'cbox',
                                id: 'asymptomaticStrokePositionThalamus',
                                name: 'asymptomaticStrokePositionThalamus',
                                data: [{
                                    value: '1',
                                    unit: '丘脑'
                                }]
                            },  {
                                type: 'cbox',
                                id: 'asymptomaticStrokePositionBrainstem',
                                name: 'asymptomaticStrokePositionBrainstem',
                                data: [{
                                    value: '1',
                                    unit: '脑干'
                                }]
                            }, {
                                type: 'cbox',
                                id: 'asymptomaticStrokePositionCerebellum',
                                name: 'asymptomaticStrokePositionCerebellum',
                                data: [{
                                    value: '1',
                                    unit: '小脑'
                                }]
                            }, {
                                type: 'cbox',
                                id: 'asymptomaticStrokePositionOther',
                                name: 'asymptomaticStrokePositionOther',
                                data: [{
                                    value: '1',
                                    unit: '其他',
                                    ex: {
                                        id: 'asymptomaticStrokePositionOtherDescribe',
                                        name: 'asymptomaticStrokePositionOtherDescribe',
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
                    col: 12,
                    item: [
                        {
                            type: 'cbox',
                            label: '治疗方法：',
                            id: 'asymptomaticStrokeTherapeuticDrugs',
                            name: 'asymptomaticStrokeTherapeuticDrugs',
                            data: [
                                {
                                    value: 1,
                                    label: '治疗方法:',
                                    unit: '药物',
                                    ex: {
                                        id: 'asymptomaticStrokeTherapeuticDrugsDescribe',
                                        name: 'asymptomaticStrokeTherapeuticDrugsDescribe',
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