//严重不良事件或非预期不良事件评估表 CrfFormAssessmentForSaeAndUae
var CompAFSAU = function () {
    function show() {
        return {
            type: 'container',
            item: [{
                type: 'h3',
                text: '严重不良事件或非预期不良事件评估表'
            }, {
                type: 'h5',
                text: 'Assessment Form for On-site SAE&UAE'
            }, {
                type: 'input',
                label: '伦理编号：',
                id: 'ethicalCode',
                name: 'ethicalCode'
            }, {
                type: 'row',
                item: [
                    {
                        type: 'col',
                        item: [{
                            type: 'table',
                            data: [
                                [
                                    '项目名称',
                                    {
                                        colspan: 5,
                                        item: [{
                                            type: 'textarea',
                                            id: 'entryName',
                                            name: 'entryName'
                                        }]
                                    },
                                    '',
                                    '',
                                    '',
                                    ''
                                ], [
                                    '主要研究者',
                                    {
                                        item: [{
                                            type: 'input',
                                            id: 'majorResearcher',
                                            name: 'majorResearcher'
                                        }]
                                    },
                                    '申办者',
                                    {
                                        item: [{
                                            type: 'input',
                                            id: 'sponsor',
                                            name: 'sponsor'
                                        }]
                                    },
                                    'CRO',
                                    {
                                        item: [{
                                            type: 'input',
                                            id: 'cro',
                                            name: 'cro'
                                        }]
                                    }
                                ], [
                                    '事件类型',
                                    {
                                        colspan: 5,
                                        item: [{
                                            type: 'row',
                                            item: [{
                                                type: 'col',
                                                col: 12,
                                                item: [{
                                                    type: 'cbox',
                                                    radio:true,
                                                    id: 'eventType',
                                                    name: 'eventType',
                                                    data: [
                                                        {
                                                            value: 1,
                                                            unit: '严重不良事件(SAE)'
                                                        }, {
                                                            value: 2,
                                                            unit: '非预期不良事件（UAE）'
                                                        }, {
                                                            value: 3,
                                                            unit: '其他',
                                                            ex: {
                                                                id: 'otherEvent',
                                                                name: 'otherEvent'
                                                            }
                                                        }
                                                    ]
                                                }]
                                            }]
                                        }, {
                                            type: 'row',
                                            item: [{
                                                type: 'col',
                                                col: 12,
                                                item: [{
                                                    text: '注：1.严重不良事件：临床试验过程中发生需住院治疗、延长住院时间、伤残、影响工作能力、危及生命或死亡、导致先天畸形等事件。2.非预期不良事件：不良事件的性质、严重程度或频度，不同于先前方案或其他相关资料（如研究者手册、药品说明）所描述的预期风险。'
                                                }]
                                            }]
                                        }]
                                    },
                                    '',
                                    '',
                                    '',
                                    ''
                                ], [
                                    '报告类型',
                                    {
                                        colspan: 5,
                                        item: [{
                                            type: 'cbox',
                                            radio:true,
                                            id: 'reportType',
                                            name: 'reportType',
                                            data: [
                                                {
                                                    value: 1,
                                                    unit: '首次报告'
                                                }, {
                                                    value: 2,
                                                    unit: '随访报告'
                                                }, {
                                                    value: 3,
                                                    unit: '总结报告'
                                                }
                                            ]
                                        }]
                                    },
                                    '',
                                    '',
                                    '',
                                    ''
                                ], [
                                    '本项目SAE发生情况',
                                    {
                                        colspan: 5,
                                        item: [{
                                            type: 'row',
                                            item: [{
                                                type: 'col',
                                                col: 12,
                                                item: [{
                                                    type: 'input',
                                                    id: 'planEntryNumber',
                                                    name: 'planEntryNumber',
                                                    label: '本院计划入组例数：'
                                                }]
                                            }]
                                        }, {
                                            type: 'row',
                                            item: [{
                                                type: 'col',
                                                col: 12,
                                                item: [{
                                                    type: 'input',
                                                    id: 'currentEntryNumber',
                                                    name: 'currentEntryNumber',
                                                    label: '本院目前入组例数：'
                                                }]
                                            }]
                                        }, {
                                            type: 'row',
                                            item: [{
                                                type: 'col',
                                                col: 12,
                                                item: [{
                                                    type: 'input',
                                                    id: 'allEntryNumber',
                                                    name: 'allEntryNumber',
                                                    label: '本院至今发生SAE受试者例数：'
                                                }]
                                            }]
                                        }]
                                    },
                                    '',
                                    '',
                                    '',
                                    ''
                                ], [
                                    '本SAE/UAE情况概述',
                                    {
                                        colspan: 5,
                                        item: [{
                                            type: 'row',
                                            item: [{
                                                type: 'col',
                                                col: 4,
                                                item: [{
                                                    type: 'input',
                                                    id: 'subjectShortName',
                                                    name: 'subjectShortName',
                                                    label: '受试者姓名缩写：'
                                                }]
                                            }, {
                                                type: 'col',
                                                col: 4,
                                                item: [{
                                                    type: 'date',
                                                    id: 'occurrenceTime',
                                                    name: 'occurrenceTime',
                                                    label: '发生时间：'
                                                }]
                                            }, {
                                                type: 'col',
                                                col: 4,
                                                item: [{
                                                    type: 'input',
                                                    id: 'relevanceJudgment',
                                                    name: 'relevanceJudgment',
                                                    label: '相关性判断：'
                                                }]
                                            }]
                                        }, {
                                            type: 'row',
                                            item: [{
                                                type: 'col',
                                                col: 12,
                                                item: [{
                                                    type: 'input',
                                                    id: 'eventName',
                                                    name: 'eventName',
                                                    label: '发生事件名称：'
                                                }]
                                            }]
                                        }, {
                                            type: 'row',
                                            item: [{
                                                type: 'col',
                                                col: 12,
                                                item: [{
                                                    text: '处理措施：'
                                                }]
                                            }]
                                        }, {
                                            type: 'row',
                                            item: [{
                                                type: 'col',
                                                col: 12,
                                                item: [{
                                                    type: 'textarea',
                                                    id: 'treatmentMeasures',
                                                    name: 'treatmentMeasures'
                                                }]
                                            }]
                                        }, {
                                            type: 'row',
                                            item: [{
                                                type: 'col',
                                                col: 12,
                                                item: [{
                                                    text: '结果：'
                                                }]
                                            }]
                                        }, {
                                            type: 'row',
                                            item: [{
                                                type: 'col',
                                                col: 12,
                                                item: [{
                                                    type: 'textarea',
                                                    id: 'result',
                                                    name: 'result'
                                                }]
                                            }]
                                        }]
                                    },
                                    '',
                                    '',
                                    '',
                                    ''
                                ], [
                                    '项目负责人/授权人自我评估',
                                    {
                                        colspan: 5,
                                        item: [{
                                            type: 'row',
                                            item: [{
                                                type: 'col',
                                                col: 12,
                                                item: [{
                                                    text: '评价该事件对于整个试验的影响：'
                                                }]
                                            }]
                                        }, {
                                            type: 'row',
                                            item: [{
                                                type: 'col',
                                                col: 12,
                                                item: [{
                                                    type: 'cbox',
                                                    radio:true,
                                                    id: 'selfAssessment',
                                                    name: 'selfAssessment',
                                                    data: [
                                                        {
                                                            value: 1,
                                                            unit: '1.对试验影响较小，试验可继续进行'
                                                        }
                                                    ]
                                                }]
                                            }]
                                        }, {
                                            type: 'row',
                                            item: [{
                                                type: 'col',
                                                col: 12,
                                                item: [{
                                                    type: 'cbox',
                                                    radio:true,
                                                    start:1,
                                                    id: 'selfAssessment',
                                                    name: 'selfAssessment',
                                                    data: [
                                                        {
                                                            value: 2,
                                                            unit: '2.对试验有一定影响，需修订方案或知情同意书'
                                                        }
                                                    ]
                                                }]
                                            }]
                                        }, {
                                            type: 'row',
                                            item: [{
                                                type: 'col',
                                                col: 12,
                                                item: [{
                                                    type: 'cbox',
                                                    radio:true,
                                                    start:2,
                                                    id: 'selfAssessment',
                                                    name: 'selfAssessment',
                                                    data: [
                                                        {
                                                            value: 3,
                                                            unit: '3.对试验影响较大，需暂停试验'
                                                        }
                                                    ]
                                                }]
                                            }]
                                        }, {
                                            type: 'row',
                                            item: [{
                                                type: 'col',
                                                col: 12,
                                                item: [{
                                                    type: 'cbox',
                                                    radio:true,
                                                    start:3,
                                                    id: 'selfAssessment',
                                                    name: 'selfAssessment',
                                                    data: [
                                                        {
                                                            value: 4,
                                                            unit: '4.对试验影响大，需终止试验'
                                                        }
                                                    ]
                                                }]
                                            }]
                                        }]
                                    },
                                    '',
                                    '',
                                    '',
                                    ''
                                ], [
                                    '项目负责人/授权人签名',
                                    {
                                        colspan: 5,
                                        item: [{
                                            type: 'input',
                                            id: 'personInChargeName',
                                            name: 'personInChargeName'
                                        }]
                                    },
                                    '',
                                    '',
                                    '',
                                    ''
                                ], [{
                                    colspan: 6,
                                    item: [{
                                        text: '以下由伦理委员会人员填写'
                                    }]
                                },
                                    '',
                                    '',
                                    '',
                                    '',
                                    ''
                                ], [
                                    '审核意见',
                                    {
                                        colspan: 5,
                                        item: [{
                                            type: 'row',
                                            item: [{
                                                type: 'col',
                                                col: 12,
                                                item: [{
                                                    type: 'cbox',
                                                    radio:true,
                                                    id: 'auditOpinion',
                                                    name: 'auditOpinion',
                                                    data: [
                                                        {
                                                            value: 1,
                                                            unit: '无需进一步审查，同意该项目继续进行；'
                                                        }
                                                    ]
                                                }]
                                            }]
                                        }, {
                                            type: 'row',
                                            item: [{
                                                type: 'col',
                                                col: 12,
                                                item: [{
                                                    type: 'cbox',
                                                    radio:true,
                                                    start:1,
                                                    id: 'auditOpinion',
                                                    name: 'auditOpinion',
                                                    data: [
                                                        {
                                                            value: 2,
                                                            unit: '需进行会议审查；'
                                                        }
                                                    ]
                                                }]
                                            }]
                                        }, {
                                            type: 'row',
                                            item: [{
                                                type: 'col',
                                                col: 12,
                                                item: [{
                                                    type: 'cbox',
                                                    radio:true,
                                                    start:2,
                                                    id: 'auditOpinion',
                                                    name: 'auditOpinion',
                                                    data: [
                                                        {
                                                            value: 3,
                                                            unit: '需进行紧急会议审查。'
                                                        }
                                                    ]
                                                }]
                                            }]
                                        }]
                                    },
                                    '',
                                    '',
                                    '',
                                    ''
                                ], [
                                    '审查者签名/日期',
                                    {
                                        colspan: 5,
                                        item: [{
                                            type: 'row',
                                            item: [{
                                                type: 'col',
                                                col: 6,
                                                item: [{
                                                    type: 'input',
                                                    id: 'censorName',
                                                    name: 'censorName'
                                                }]
                                            }, {
                                                type: 'col',
                                                col: 6,
                                                item: [{
                                                    label: ' ',
                                                    type: 'date',
                                                    id: 'examinationDate',
                                                    name: 'examinationDate'
                                                }]
                                            }]
                                        }]
                                    },
                                    '',
                                    '',
                                    '',
                                    ''
                                ]
                            ]
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