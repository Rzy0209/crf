//排除标准
var CompManyExclusionCriteria = function () {
    function show() {
        return {
        type: 'container',
        item: [
            {
                type:'h3',
                text: '排除标准'
            }, {
                type: 'hr',
                css: {
                    color: 'blue'
                }
            },
            {
                type: 'row',
                item: [
                    {
                        type: 'col',
                        col: 12,
                        item: [
                            {
                                type: 'table',
                                columns: [
                                    {
                                        text: '',
                                        field: 'col1'
                                    },
                                    {
                                        text: '根据病史和体格检查，请确认以下内容：',
                                        field: 'col2'
                                    },
                                    {
                                        text: '是',
                                        field: 'col3'
                                    },
                                    {
                                        text: '否',
                                        field: 'col4'
                                    }
                                ],
                                data: [
                                    {
                                        col1: '1',
                                        col2: '急性出血性或缺血性卒中。',
                                        col3:{
                                            type: 'cbox',
                                            radio:true,
                                            id: 'hemorrhagicAndIschemicStroke',
                                            name: 'hemorrhagicAndIschemicStroke',
                                            data :[
                                                {
                                                    value : '1'
                                                }
                                            ]
                                        },
                                        col4:{
                                            type: 'cbox',
                                            radio:true,
                                            id: 'hemorrhagicAndIschemicStroke',
                                            name: 'hemorrhagicAndIschemicStroke',
                                            data :[
                                                {
                                                    value : '0'
                                                }
                                            ]
                                        }
                                    },
                                    {
                                        col1: '2',
                                        col2:  '既往致残性出血性或缺血性卒中（NIHSS评分≥3分）。',
                                        col3: {
                                            type: 'cbox',
                                            radio:true,
                                            id: 'nihss',
                                            name: 'nihss',
                                            data :[
                                                {
                                                    value : '1'
                                                }
                                            ]
                                        },
                                        col4: {
                                            type: 'cbox',
                                            radio:true,
                                            id: 'NIHSS',
                                            name: 'NIHSS',
                                            data :[
                                                {
                                                    value : '0'
                                                }
                                            ]
                                        }
                                    },
                                    {
                                        col1: '3',
                                        col2: '其他原因引起的步态异常，如帕金森综合征、脑积水、小脑疾病、前庭系统疾病、深感觉异常、周围神经病变、肌肉骨骼病变等。',
                                        col3: {
                                            type: 'cbox',
                                            radio: true,
                                            id: 'gaitAbnormality',
                                            name: 'gaitAbnormality',
                                            data: [
                                                {
                                                    value: '1'
                                                }
                                            ]
                                        },
                                        col4: {
                                            type: 'cbox',
                                            radio: true,
                                            id: 'gaitAbnormality',
                                            name: 'gaitAbnormality',
                                            data: [
                                                {
                                                    value: '0'
                                                }
                                            ]
                                        }
                                    },
                                    {
                                        col1:  '4',
                                        col2: '其它原因引起的认知功能异常，如阿尔兹海默病、额颞叶痴呆、路易体痴呆、脑积水、精神疾病等。',
                                        col3: {
                                            type: 'cbox',
                                            radio:true,
                                            id: 'cognitiveDysfunction',
                                            name: 'cognitiveDysfunction',
                                            data :[
                                                {
                                                    value : '1'
                                                }
                                            ]
                                        },
                                        col4: {
                                            type: 'cbox',
                                            radio:true,
                                            id: 'cognitiveDysfunction',
                                            name: 'cognitiveDysfunction',
                                            data :[
                                                {
                                                    value : '0'
                                                }
                                            ]
                                        }
                                    },
                                    {
                                        col1:  '5',
                                        col2: '既往颅脑外伤、脑肿瘤、中枢神经系统感染、脱髓鞘疾病、癫痫、脊髓病等严重神经系统疾病。',
                                        col3: {
                                            type: 'cbox',
                                            radio:true,
                                            id: 'nervousSystemDisease',
                                            name: 'nervousSystemDisease',
                                            data :[
                                                {
                                                    value : '1'
                                                }
                                            ]
                                        },
                                        col4: {
                                            type: 'cbox',
                                            radio:true,
                                            id: 'nervousSystemDisease',
                                            name: 'nervousSystemDisease',
                                            data :[
                                                {
                                                    value : '0'
                                                }
                                            ]
                                        }
                                    },
                                    {
                                        col1:  '6',
                                        col2: '严重的认知障碍或失语等不能配合认知评估者。',
                                        col3: {
                                            type: 'cbox',
                                            radio:true,
                                            id: 'cognitiveImpairment',
                                            name: 'cognitiveImpairment',
                                            data :[
                                                {
                                                    value : '1'
                                                }
                                            ]
                                        },
                                        col4: {
                                            type: 'cbox',
                                            radio:true,
                                            id: 'cognitiveImpairment',
                                            name: 'cognitiveImpairment',
                                            data :[
                                                {
                                                    value : '0'
                                                }
                                            ]
                                        }
                                    },
                                    {
                                        col1:  '7',
                                        col2: '严重的步态障碍或平衡障碍等不能配合步态评估者。',
                                        col3: {
                                            type: 'cbox',
                                            radio:true,
                                            id: 'gaitDisorder',
                                            name: 'gaitDisorder',
                                            data :[
                                                {
                                                    value : '1'
                                                }
                                            ]
                                        },
                                        col4: {
                                            type: 'cbox',
                                            radio:true,
                                            id: 'gaitDisorder',
                                            name: 'gaitDisorder',
                                            data :[
                                                {
                                                    value : '0'
                                                }
                                            ]
                                        }
                                    },
                                    {
                                        col1:  '8',
                                        col2: '拒绝参加该研究的患者',
                                        col3: {
                                            type: 'cbox',
                                            radio:true,
                                            id: 'refuseResearch',
                                            name: 'refuseResearch',
                                            data :[
                                                {
                                                    value : '1'
                                                }
                                            ]
                                        },
                                        col4: {
                                            type: 'cbox',
                                            radio:true,
                                            id: 'refuseResearch',
                                            name: 'refuseResearch',
                                            data :[
                                                {
                                                    value : '0'
                                                }
                                            ]
                                        }
                                    },
                                    {
                                        col1:  '9',
                                        col2: '存在本排除标准未能列入、但研究者认为不宜入组本研究的其他异常情况',
                                        col3: {
                                            type: 'cbox',
                                            radio:true,
                                            id: 'abnormalSituation',
                                            name: 'abnormalSituation',
                                            data :[
                                                {
                                                    value : '1'
                                                }
                                            ]
                                        },
                                        col4: {
                                            type: 'cbox',
                                            radio:true,
                                            id: 'abnormalSituation',
                                            name: 'abnormalSituation',
                                            data :[
                                                {
                                                    value : '0'
                                                }
                                            ]
                                        }
                                    }
                                ],
                                end:'如果以上任何一项回答“否”,则受试者不能进入该研究。'
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