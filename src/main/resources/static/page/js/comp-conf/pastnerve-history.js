//既往神经系统疾病史 CrfFormPastNerveHistory
var CompPastNerve = function () {
    function show() {
        return {
            type: 'container',
            item: [{
                type: 'h3',
                text: '既往神经系统疾病史'
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
                        item: [
                            {
                                type: 'cbox',
                                radio: true,
                                id: 'disease',
                                name: 'disease',
                                data: [
                                    {
                                        value: 0,
                                        unit: '无'
                                    },
                                    {
                                        value: 1,
                                        unit: '有(请填写下表)'
                                    }
                                ]
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
                        item: [{
                            type: 'cbox',
                            id: 'cerebralThrombosis',
                            name: 'cerebralThrombosis',
                            data: [{
                                value: '1',
                                unit: '脑血栓形成'
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
                            id: 'lacunarInfarction',
                            name: 'lacunarInfarction',
                            data: [{
                                value: '1',
                                unit: '腔隙性脑梗死'
                            }]
                        }, {
                            type: 'cbox',
                            id: 'transientIschemicAttack',
                            name: 'transientIschemicAttack',
                            data: [{
                                value: '1',
                                unit: '短暂性脑缺血发作'
                            }]
                        }, {
                            type: 'cbox',
                            id: 'cerebralHemorrhage',
                            name: 'cerebralHemorrhage',
                            data: [{
                                value: '1',
                                unit: '脑出血'
                            }]
                        }, {
                            type: 'cbox',
                            id: 'subarachnoidHemorrhage',
                            name: 'subarachnoidHemorrhage',
                            data: [{
                                value: '1',
                                unit: '蛛网膜下腔出血'
                            }]
                        }, {
                            type: 'cbox',
                            id: 'cerebralVascularMalformation',
                            name: 'cerebralVascularMalformation',
                            data: [{
                                value: '1',
                                unit: '脑血管畸形'
                            }]
                        }, {
                            type: 'cbox',
                            id: 'intacranialVenousSinusThrombosis',
                            name: 'intacranialVenousSinusThrombosis',
                            data: [{
                                value: '1',
                                unit: '颅内静脉窦血栓形成'
                            }]
                        }, {
                            type: 'cbox',
                            id: 'intracranialInfection',
                            name: 'intracranialInfection',
                            data: [{
                                value: '1',
                                unit: '颅内感染'
                            }]
                        }, {
                            type: 'cbox',
                            id: 'epilepsy',
                            name: 'epilepsy',
                            data: [{
                                value: '1',
                                unit: '癫痫'
                            }]
                        }, {
                            type: 'cbox',
                            id: 'brainTumor',
                            name: 'brainTumor',
                            data: [{
                                value: '1',
                                unit: '脑肿瘤'
                            }]
                        }, {
                            type: 'cbox',
                            id: 'traumaticBrainInjury',
                            name: 'traumaticBrainInjury',
                            data: [{
                                value: '1',
                                unit: '脑外伤'
                            }]
                        }, {
                            type: 'cbox',
                            id: 'alzheimersDisease',
                            name: 'alzheimersDisease',
                            data: [{
                                value: '1',
                                unit: '阿尔兹海默病'
                            }]
                        }, {
                            type: 'cbox',
                            id: 'parkinsonsDisease',
                            name: 'parkinsonsDisease',
                            data: [{
                                value: '1',
                                unit: '帕金森病'
                            }]
                        }, {
                            type: 'cbox',
                            id: 'spinalCordDisease',
                            name: 'spinalCordDisease',
                            data: [{
                                value: '1',
                                unit: '脊髓疾病'
                            }]
                        }, {
                            type: 'cbox',
                            id: 'peripheralNeuropathy',
                            name: 'peripheralNeuropathy',
                            data: [{
                                value: '1',
                                unit: '周围神经病'
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
            }, {
                type: 'row',
                item: [
                    {
                        type: 'col',
                        col: 6,
                        item: [
                            {
                                type: 'cbox',
                                label: '部位：',
                                id: 'positionLeft',
                                name: 'positionLeft',
                                data: [
                                    {
                                        value: '1',
                                        label: '部位:',
                                        unit: '左'
                                    }]
                            }, {
                                type: 'cbox',
                                id: 'positionRight',
                                name: 'positionRight',
                                data: [
                                    {
                                        value: '1',
                                        unit: '右'
                                    }]
                            }, {
                                type: 'cbox',
                                id: 'positionBilateal',
                                name: 'positionBilateal',
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
                                id: 'positionFrontalLobe',
                                name: 'positionFrontalLobe',
                                data: [
                                    {
                                        value: '1',
                                        unit: '额叶'
                                    }]
                            }, {
                                type: 'cbox',
                                id: 'positionParietalLobe',
                                name: 'positionParietalLobe',
                                data: [{
                                    value: '1',
                                    unit: '顶叶'
                                }]
                            }, {
                                type: 'cbox',
                                id: 'positionTemporalLobe',
                                name: 'positionTemporalLobe',
                                data: [{
                                    value: '1',
                                    unit: '颞叶'
                                }]
                            }, {
                                type: 'cbox',
                                id: 'positionOccipitalLobe',
                                name: 'positionOccipitalLobe',
                                data: [{
                                    value: '1',
                                    unit: '枕叶'
                                }]
                            }, {
                                type: 'cbox',
                                id: 'positionBrainstem',
                                name: 'positionBrainstem',
                                data: [{
                                    value: '1',
                                    unit: '脑干'
                                }]
                            }, {
                                type: 'cbox',
                                id: 'positionCerebellum',
                                name: 'positionCerebellum',
                                data: [{
                                    value: '1',
                                    unit: '小脑'
                                }]
                            }, {
                                type: 'cbox',
                                id: 'positionBasalGanglia',
                                name: 'positionBasalGanglia',
                                data: [{
                                    value: '1',
                                    unit: '基底节'
                                }]
                            }, {
                                type: 'cbox',
                                id: 'positionThalamus',
                                name: 'positionThalamus',
                                data: [{
                                    value: '1',
                                    unit: '丘脑'
                                }]
                            }, {
                                type: 'cbox',
                                id: 'positionSpinalCord',
                                name: 'positionSpinalCord',
                                data: [{
                                    value: '1',
                                    unit: '脊髓'
                                }]
                            }, {
                                type: 'cbox',
                                id: 'positionOther',
                                name: 'positionOther',
                                data: [{
                                    value: '1',
                                    unit: '其他',
                                    ex: {
                                        id: 'positionOtherDescribe',
                                        name: 'positionOtherDescribe',
                                        css: {width: '200px'}
                                    }
                                }]
                            }, {
                                type: 'cbox',
                                id: 'positionUncertain',
                                name: 'positionUncertain',
                                data: [{
                                    value: '1',
                                    unit: '不确定'
                                }]
                            }
                        ]
                    }
                ]
            }, {
                type: 'row',
                item: [{
                    type: 'col',
                    col: 3,
                    item: [
                        {
                            type: 'input',
                            id: 'positionNature',
                            name: 'positionNature',
                            label: '性质：',
                            css: {width: '400px'}
                        }
                    ]
                }]
            }, {
                //起病时间
                type: 'row',
                item: [{
                    type: 'col',
                    col: 10,
                    item: [
                        {
                            type: 'date',
                            id: 'startDate',
                            name: 'startDate',
                            label: '起病时间(年/月/日)：'
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
                            label: '治疗方法：',
                            id: 'therapeuticDrugs',
                            name: 'therapeuticDrugs',
                            data: [
                                {
                                    value: 1,
                                    label: '治疗方法:',
                                    unit: '药物',
                                    ex: {
                                        id: 'therapeuticDrugsDescribe',
                                        name: 'therapeuticDrugsDescribe',
                                        css: {width: '200px'}
                                    }
                                }]
                        },
                        {
                            type: 'cbox',
                            id: 'surgicalTreatmen',
                            name: 'surgicalTreatmen',
                            data: [{
                                value: 1,
                                unit: '手术',
                                ex: {
                                    id: 'surgicalTreatmenDescribe',
                                    name: 'surgicalTreatmenDescribe',
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
                            radio: true,
                            id: 'cure',
                            name: 'cure',
                            data: [
                                {
                                    label: '是否治愈：是',
                                    value: '1'
                                }
                            ]
                        },
                        {
                            type: 'date',
                            label: '治愈时间（年/月/日）：',
                            name: 'cureDate',
                            id: 'cureDate'
                        }
                    ]
                }
                ]
            }, {
                type: 'row',
                item: [{
                    type: 'col',
                    css: {
                        paddingLeft: '90px'
                    },
                    item: [
                        {
                            type: 'cbox',
                            radio: true,
                            start:1,
                            id: 'cure',
                            name: 'cure',
                            laber: '是否治愈：',
                            data: [
                                {
                                    label: '否',
                                    value: '0'
                                }
                            ]
                        },
                        {
                            type: 'cbox',
                            radio: true,
                            id: 'legacySequela',
                            name: 'legacySequela',
                            data: [
                                {
                                    label: '遗留后遗症：否',
                                    value: '0'
                                },
                                {
                                    label: '是',
                                    value: '1',
                                    ex: {
                                        id: 'legacySequelaDescribe',
                                        name: 'legacySequelaDescribe',
                                        css: {width: '200px'}
                                    }
                                }
                            ]
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
}
();