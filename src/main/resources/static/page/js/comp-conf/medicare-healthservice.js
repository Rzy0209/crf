//卫生经济学信息
var CompMedicareAndHealthservice = function () {
    function show() {
        return {
            type: 'container',
            item: [
                {
                    type: 'h3',
                    text: '卫生经济学信息'
                },
                {
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
                                    type: 'input',
                                    id: 'familyNum',
                                    name: 'familyNum',
                                    label: '家庭人口数：'
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
                            item: [
                                {
                                    type: 'input',
                                    id: 'familyMoney',
                                    name: 'familyMoney',
                                    label: '过去一年中您家庭的总收入为：',
                                    unit: '元（包括工资、补贴、奖金、退休工资等）'
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
                            item: [
                                {
                                    type: 'cbox',
                                    radio: true,
                                    id: 'poolFamily',
                                    name: 'poolFamily',
                                    data: [
                                        {
                                            label: '家庭是否为当地认证的贫困户？（五保户，低保户）：',
                                            value: 0,
                                            unit: '否'
                                        },
                                        {
                                            value: 1,
                                            unit: '是'
                                        }
                                    ]
                                }
                            ]
                        }
                    ]
                },
                {
                    type: 'row',
                    item: [{
                            type: 'col',
                            col: 12,
                            item: [{
                                text: '参加的医疗保险(可多选):'
                            }]
                        }]
                },
                {
                    type: 'row',
                    item: [{
                        type: 'col',
                        col: 1,
                        item: [{
                            text: ''
                        }]
                    },{
                            type: 'col',
                            col: 11,
                            item: [{
                                    type: 'cbox',
                                    id: 'workerMedicare',
                                    name: 'workerMedicare',
                                    data: [{
                                        value: '1',
                                        unit: '城镇职工医疗保险'
                                    }]
                                },
                                {
                                    type: 'cbox',
                                    id: 'residentMedicare',
                                    name: 'residentMedicare',
                                    data: [{
                                        value: '1',
                                        unit: '城镇居民医疗保险'
                                    }]
                                },
                                {
                                    type: 'cbox',
                                    id: 'ruralCooperativeMedicare',
                                    name: 'ruralCooperativeMedicare',
                                    data: [{
                                        value: '1',
                                        unit: '新型农村合作医疗保险'
                                    }]
                                },
                                {
                                    type: 'cbox',
                                    id: 'townAndContryResidentMedicare',
                                    name: 'townAndContryResidentMedicare',
                                    data: [{
                                        value: '1',
                                        unit: '城乡居民医疗保险'
                                    }]
                                },
                                {
                                    type: 'cbox',
                                    id: 'publicHealthCare',
                                    name: 'publicHealthCare',
                                    data: [{
                                        value: '1',
                                        unit: '公费医疗'
                                    }]
                                },
                                {
                                    type: 'cbox',
                                    id: 'commercialMedicare',
                                    name: 'commercialMedicare',
                                    data: [{
                                        value: '1',
                                        unit: '商业医疗保险'
                                    }]
                                },
                                {
                                    type: 'cbox',
                                    id: 'otherMedicare',
                                    name: 'otherMedicare',
                                    data: [{
                                        value: '1',
                                        unit: '其他医疗保险,请注明',
                                        ex: {
                                            id: 'otherMedicareDetail',
                                            name: 'otherMedicareDetail',
                                            css: {width: '200px'}
                                        }
                                    }]
                                },
                                {
                                    type: 'cbox',
                                    id: 'noMedicare',
                                    name: 'noMedicare',
                                    data: [{
                                        value: '1',
                                        unit: '没有保险'
                                    }]
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
                            col: 6,
                            item: [
                                {
                                    type: 'cbox',
                                    radio: true,
                                    id: 'medicalAssistance',
                                    name: 'medicalAssistance',
                                    data: [
                                        {
                                            label: '是否有医疗救助：',
                                            value: 0,
                                            unit: '否'
                                        },
                                        {
                                            value: 1,
                                            unit: '是'
                                        }
                                    ]
                                }
                            ]
                        },
                        {
                            type: 'col',
                            col: 6,
                            item: [
                                {
                                    type: 'input',
                                    id: 'seekMedicalAdviceTime',
                                    name: 'seekMedicalAdviceTime',
                                    label: '就医花了多久的时间：',
                                    unit: '天'
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
                            item: [
                                {
                                    type: 'cbox',
                                    radio: true,
                                    id: 'friendTakeCare',
                                    name: 'friendTakeCare',
                                    data: [
                                        {
                                            label: '是否有亲友陪同：',
                                            value: 0,
                                            unit: '无'
                                        },
                                        {
                                            value: 1,
                                            unit: '有'
                                        }
                                    ]
                                }
                            ]
                        }
                    ]
                },
                {
                    type: 'row',
                    item: [{
                        type: 'col',
                        col: 12,
                        item: [{
                            text: '陪同人员的职业类别:'
                        }]
                    }]
                },
                {
                    type: 'row',
                    item: [{
                        type: 'col',
                        col: 1,
                        item: [{
                            text: ''
                        }]
                    },{
                            type: 'col',
                            col: 11,
                            item: [
                                {
                                    type: 'cbox',
                                    id: 'professionalTechnicians',
                                    name: 'professionalTechnicians',
                                    data: [{
                                        value: '1',
                                        unit: '专业技术工作者（医务人员、教师、律师、建筑师、工程师等）'
                                    }]
                                },
                                {
                                    type: 'cbox',
                                    id: 'management',
                                    name: 'management',
                                    data: [{
                                        value: '1',
                                        unit: '管理者/行政官员/经理（厂长、政府官员、部门经理、村干部等）'
                                    }]
                                },
                                {
                                    type: 'cbox',
                                    id: 'toolWorker',
                                    name: 'toolWorker',
                                    data: [{
                                        value: '1',
                                        unit: '技术工人'
                                    }]
                                },
                                {
                                    type: 'cbox',
                                    id: 'nlmyPeople',
                                    name: 'nlmyPeople',
                                    data: [{
                                        value: '1',
                                        unit: '农、林、牧、渔业从业人员'
                                    }]
                                },
                                {
                                    type: 'cbox',
                                    id: 'waiter',
                                    name: 'waiter',
                                    data: [{
                                        value: '1',
                                        unit: '服务行业人员（服务员、厨师、理发师、售货员等）'
                                    }]
                                },
                                {
                                    type: 'cbox',
                                    id: 'worker',
                                    name: 'worker',
                                    data: [{
                                        value: '1',
                                        unit: '非技术工人（普通工人）'
                                    }]
                                },
                                {
                                    type: 'cbox',
                                    id: 'officeWorker',
                                    name: 'officeWorker',
                                    data: [{
                                        value: '1',
                                        unit: '办公室一般工作人员（秘书/职员等）'
                                    }]
                                },
                                {
                                    type: 'cbox',
                                    id: 'otherProfessional',
                                    name: 'otherProfessional',
                                    data: [{
                                        value: '1',
                                        unit: '其他',
                                        ex: {
                                            id: 'otherProfessionalDetial',
                                            name: 'otherProfessionalDetial',
                                            css: {width: '200px'}
                                        }
                                    }]
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
                            col: 6,
                            item: [
                                {
                                    type: 'input',
                                    id: 'togeterDays',
                                    name: 'togeterDays',
                                    label: '陪同天数为：',
                                    unit: '天'
                                }
                            ]
                        },
                        {
                            type: 'col',
                            col: 6,
                            item: [
                                {
                                    type: 'input',
                                    id: 'friendWages',
                                    name: 'friendWages',
                                    label: '陪同人员日工资为：',
                                    unit: '元'
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
                            item: [
                                {
                                    type: 'input',
                                    id: 'trafficCost',
                                    name: 'trafficCost',
                                    label: '（包括陪同人员）此次就诊的单程交通费用为：',
                                    unit: '元'
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
                            item: [
                                {
                                    type: 'input',
                                    id: 'boardAndLodgingCost',
                                    name: 'boardAndLodgingCost',
                                    label: '（包括陪同人员）此次就诊的食宿费为：',
                                    unit: '元'
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