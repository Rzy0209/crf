//脑血管病发病情况
var CompCerebrovascularDisease = function () {
    function show() {
        return {
            type: 'container',
            item:[
                {
                    type:'h3',
                    text: '脑血管病发病情况'
                }, {
                    type: 'hr',
                    css: {
                        color: 'blue'
                    }
                },
                {
                    type: 'row',
                    item:[
                        {
                            type: 'col',
                            col:12,
                            item: [
                                {
                                    type: 'cbox',
                                    radio:true,
                                    id: 'disease',
                                    name:'disease',
                                    data:[
                                        {
                                            label: '无',
                                            value: '0'
                                        },
                                        {
                                            label: '有',
                                            value: '1',
                                            unit: '（请填写下表）'
                                        }
                                    ]
                                }

                            ]
                        }
                    ]

                },
                {
                    type: 'row',
                    css:{
                        paddingLeft:'30px'
                    },
                    item: [
                        {
                            type: 'col',
                            col: 12,
                            item:[
                                {
                                    type: 'cbox',
                                    id:'cerebralThrombosis',
                                    name: 'cerebralThrombosis',
                                    data: [
                                        {
                                            label: '脑血栓形成',
                                            value: '1'

                                        }
                                    ]
                                },
                                {
                                    type: 'cbox',
                                    id:'cerebral',
                                    name: 'cerebral',
                                    data: [
                                        {
                                            label: '脑栓塞',
                                            value: '1'
                                        }
                                    ]
                                },
                                {
                                    type: 'cbox',
                                    id:'cerebralHemorrhage',
                                    name: 'cerebralHemorrhage',
                                    data: [
                                        {
                                            label: '脑出血',
                                            value: '1'

                                        }
                                    ]
                                },
                                {
                                    type: 'cbox',
                                    id:'pathNerveHistoryOther',
                                    name: 'pathNerveHistoryOther',
                                    data: [
                                        {
                                            label: '其他',
                                            value: '1',
                                            ex: {
                                                id: 'pathNerveHistoryOtherDescribe',
                                                name: 'pathNerveHistoryOtherDescribe',
                                                css:{
                                                    width: '100px'
                                                }
                                            }

                                        }
                                    ]
                                }
                            ]
                        }
                    ]
                },
                {
                    type: 'row',
                    item: [
                        {
                            type: 'col',
                            col: 12,
                            item:[
                                {
                                    type: 'cbox',
                                    id:'positionLeft',
                                    name: 'positionLeft',
                                    data: [
                                        {
                                            label: '部位：左',
                                            value: '1'

                                        }
                                    ]
                                },
                                {
                                    type: 'cbox',
                                    id:'positionRight',
                                    name: 'positionRight',
                                    data: [
                                        {
                                            label: '右',
                                            value: '1'
                                        }
                                    ]
                                },
                                {
                                    type: 'cbox',
                                    id:'positionBilateal',
                                    name: 'positionBilateal',
                                    data: [
                                        {
                                            label: '双侧',
                                            value: '1'

                                        }
                                    ]
                                }
                            ]
                        }
                    ]
                },
                {
                    type: 'row',
                    css:{
                        paddingLeft:'30px'
                    },
                    item: [
                        {
                            type: 'col',
                            col: 12,
                            item:[
                                {
                                    type: 'cbox',
                                    id:'positionFrontalLobe',
                                    name: 'positionFrontalLobe',
                                    data: [
                                        {
                                            label: '额叶',
                                            value: '1'

                                        }
                                    ]
                                },
                                {
                                    type: 'cbox',
                                    id:'positionParietalLobe',
                                    name: 'positionParietalLobe',
                                    data: [
                                        {
                                            label: '顶叶',
                                            value: '1'
                                        }
                                    ]
                                },
                                {
                                    type: 'cbox',
                                    id:'positionTemporalLobe',
                                    name: 'positionTemporalLobe',
                                    data: [
                                        {
                                            label: '颞叶',
                                            value: '1'

                                        }
                                    ]
                                },
                                {
                                    type: 'cbox',
                                    id:'positionOccipitalLobe',
                                    name: 'positionOccipitalLobe',
                                    data: [
                                        {
                                            label: '枕叶',
                                            value: '1'

                                        }
                                    ]
                                },
                                {
                                    type: 'cbox',
                                    id:'positionBrainstem',
                                    name: 'positionBrainstem',
                                    data: [
                                        {
                                            label: '脑干',
                                            value: '1'

                                        }
                                    ]
                                },
                                {
                                    type: 'cbox',
                                    id:'positionCerebellum',
                                    name: 'positionCerebellum',
                                    data: [
                                        {
                                            label: '小脑',
                                            value: '1'

                                        }
                                    ]
                                },
                                {
                                    type: 'cbox',
                                    id:'positionBasalGanglia',
                                    name: 'positionBasalGanglia',
                                    data: [
                                        {
                                            label: '基底节',
                                            value: '1'

                                        }
                                    ]
                                },
                                {
                                    type: 'cbox',
                                    id:'positionThalamus',
                                    name: 'positionThalamus',
                                    data: [
                                        {
                                            label: '丘脑',
                                            value: '1'

                                        }
                                    ]
                                }
                            ]
                        }
                    ]
                },
                {
                    type: 'row',
                    css:{
                        paddingLeft:'30px'
                    },
                    item: [
                        {
                            type: 'col',
                            col: 12,
                            item:[
                                {
                                    type: 'cbox',
                                    id:'positionOther',
                                    name: 'positionOther',
                                    data: [
                                        {
                                            label: '其他',
                                            value: '1',
                                            ex: {
                                                id: 'positionOtherDescribe',
                                                name: 'positionOtherDescribe',
                                                css: {
                                                    width:'200px'
                                                }
                                            }
                                        },
                                        {
                                            label: '不确定',
                                            value: '1',
                                        }
                                    ]
                                }
                            ]
                        }
                    ]
                },
                {
                    type: 'row',
                    css:{
                        paddingLeft:'30px'
                    },
                    item: [
                        {
                            type: 'col',
                            col: 12,
                            item:[
                                {
                                    type: 'input',
                                    label:'性质:',
                                    name:'positionNature',
                                    id:'positionNature',
                                    css:{
                                        width:'400px'
                                    }
                                }
                            ]
                        }
                    ]
                },
                {
                    type:'row',
                    item: [
                        {
                            type: 'col',
                            col:12,
                            item: [
                                {
                                    label: '起病时间（年/月/日）：',
                                    type: 'date',
                                    name: 'startDate',
                                    id:'startDate'
                                }
                            ]
                        }
                    ]
                },
                {
                    type: 'row',
                    item: [
                        {
                            type: 'col',
                            col: 12,
                            item:[
                                {
                                    type: 'cbox',
                                    name:'therapeuticDrugs',
                                    id:'therapeuticDrugs',
                                    data:[
                                        {
                                            label:'治疗方法：药物',
                                            value:'1',
                                            ex: {
                                                id:'therapeuticDrugsDescribe',
                                                name:'therapeuticDrugsDescribe',
                                                css:{
                                                    width:'150px'
                                                }
                                            }
                                        },
                                        {
                                            label:'手术',
                                            value:'1',
                                            ex: {
                                                id:'surgicalTreatmenDescribe',
                                                name:'surgicalTreatmenDescribe',
                                                css:{
                                                    width:'150px'
                                                }
                                            }
                                        }
                                    ]
                                }
                            ]
                        }
                    ]
                },
                {
                    type: 'row',
                    item: [
                        {
                            type: 'col',
                            col: 12,
                            item:[
                                {
                                    type: 'cbox',
                                    radio:true,
                                    name:'legacySequela',
                                    id:'legacySequela',
                                    data:[
                                        {
                                            label:'遗留后遗症：否',
                                            value:'0'
                                        },
                                        {
                                            label:'是',
                                            value:'1',
                                            ex: {
                                                id:'legacySequelaDescribe',
                                                name:'legacySequelaDescribe',
                                                css:{
                                                    width:'150px'
                                                }
                                            }
                                        }
                                    ]
                                }
                            ]
                        }
                    ]
                }
            ]
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