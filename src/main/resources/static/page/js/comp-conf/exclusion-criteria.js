//排除标准 CrfFormExclusionCriteria
var CompEC = function () {
    function show() {
        return {
            type: 'container',
            item: [{
                type: 'h3',
                text: '排除标准'
            }, {
                type: 'row',
                item: [
                    {
                        type: 'col',
                        col: 12,
                        item: [{
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
                                    col2: '既往≤6个月出现急性出血性或缺血性卒中。',
                                    col3: {
                                        type: 'cbox',
                                        radio:true,
                                        name: 'ischemicStrokeLessThanSixMonths',
                                        data: [
                                            {
                                                value: 1,
                                            }
                                        ]
                                    },
                                    col4: {
                                        type: 'cbox',
                                        radio:true,
                                        name: 'ischemicStrokeLessThanSixMonths',
                                        data: [
                                            {
                                                value: 0,
                                            }
                                        ]
                                    }
                                },{
                                    col1: '2',
                                    col2: '既往＞6个月出现致残性出血性或缺血性卒中（mRS≥3分）。',
                                    col3: {
                                        type: 'cbox',
                                        radio:true,
                                        name: 'ischemicStrokeOccurredMoreThanSixMonths',
                                        data: [
                                            {
                                                value: 1,
                                            }
                                        ]
                                    },
                                    col4: {
                                        type: 'cbox',
                                        radio:true,
                                        name: 'ischemicStrokeOccurredMoreThanSixMonths',
                                        data: [
                                            {
                                                value: 0,
                                            }
                                        ]
                                    }
                                },{
                                    col1: '3',
                                    col2: '其他原因引起的步态异常，如帕金森病、正常颅压性脑积水、耳源性疾病、亚急性联合变性、周围神经病变等',
                                    col3: {
                                        type: 'cbox',
                                        radio:true,
                                        name: 'cognitiveDysfunction',
                                        data: [
                                            {
                                                value: 1,
                                            }
                                        ]
                                    },
                                    col4: {
                                        type: 'cbox',
                                        radio:true,
                                        name: 'gaitAbnormality',
                                        data: [
                                            {
                                                value: 0,
                                            }
                                        ]
                                    }
                                },{
                                    col1: '4',
                                    col2: '其它原因引起的认知功能异常，如阿尔兹海默病、额颞叶痴呆、路易体痴呆等',
                                    col3: {
                                        type: 'cbox',
                                        radio:true,
                                        name: 'cognitiveDysfunction',
                                        data: [
                                            {
                                                value: 1,
                                            }
                                        ]
                                    },
                                    col4: {
                                        type: 'cbox',
                                        radio:true,
                                        name: 'cognitiveDysfunction',
                                        data: [
                                            {
                                                value: 0,
                                            }
                                        ]
                                    }
                                },{
                                    col1: '5',
                                    col2: '既往颅脑外伤、脑肿瘤、中枢神经系统感染、脱髓鞘疾病、癫痫、脊髓病等严重神经系统疾病。',
                                    col3: {
                                        type: 'cbox',
                                        radio:true,
                                        name: 'severeNeurologicalDiseases',
                                        data: [
                                            {
                                                value: 1,
                                            }
                                        ]
                                    },
                                    col4: {
                                        type: 'cbox',
                                        radio:true,
                                        name: 'severeNeurologicalDiseases',
                                        data: [
                                            {
                                                value: 0,
                                            }
                                        ]
                                    }
                                },{
                                    col1: '6',
                                    col2: '严重的心血管合并症，不能耐受评估者。',
                                    col3: {
                                        type: 'cbox',
                                        radio:true,
                                        name: 'notCognitiveAssessment',
                                        data: [
                                            {
                                                value: 1,
                                            }
                                        ]
                                    },
                                    col4: {
                                        type: 'cbox',
                                        radio:true,
                                        name: 'notCognitiveAssessment',
                                        data: [
                                            {
                                                value: 0,
                                            }
                                        ]
                                    }
                                },{
                                    col1: '7',
                                    col2: '严重的视力或听力障碍、失语、精神障碍、认知障碍、步态或平衡障碍等，不能配合认知和步态评估者。',
                                    col3: {
                                        type: 'cbox',
                                        radio:true,
                                        name: 'notGaitAssessment',
                                        data: [
                                            {
                                                value: 1,
                                            }
                                        ]
                                    },
                                    col4: {
                                        type: 'cbox',
                                        radio:true,
                                        name: 'notGaitAssessment',
                                        data: [
                                            {
                                                value: 0,
                                            }
                                        ]
                                    }
                                },{
                                    col1: '8',
                                    col2: '拒绝参加该研究的患者。',
                                    col3: {
                                        type: 'cbox',
                                        radio:true,
                                        name: 'refuseToParticipate',
                                        data: [
                                            {
                                                value: 1,
                                            }
                                        ]
                                    },
                                    col4: {
                                        type: 'cbox',
                                        radio:true,
                                        name: 'refuseToParticipate',
                                        data: [
                                            {
                                                value: 0,
                                            }
                                        ]
                                    }
                                },{
                                    col1: '9',
                                    col2: '存在本排除标准未能列入、但研究者认为不宜入组本研究的其他异常情况。',
                                    col3: {
                                        type: 'cbox',
                                        radio:true,
                                        name: 'otherAbnormal',
                                        data: [
                                            {
                                                value: 1,
                                            }
                                        ]
                                    },
                                    col4: {
                                        type: 'cbox',
                                        radio:true,
                                        name: 'otherAbnormal',
                                        data: [
                                            {
                                                value: 0,
                                            }
                                        ]
                                    }
                                }
                            ],
                            end:'如果以上任何一项回答“是”,则受试者不能进入该研究'
                        }]
                    }
                ]
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