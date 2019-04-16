//患者基本情况 CtfFormBasicInfo
var CompWsjjxxxBase = function () {
    function show() {
        return {
            type: 'container',
            item: [
                {
                    type: 'h3',
                    text: '患者基本情况'
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
                            col: 6,
                            item: [
                                {
                                    type: 'input',
                                    id: 'codeNum',
                                    name: 'codeNum',
                                    label: '编码信息：',
                                    unit: '（包括地区、医疗机构）'
                                }
                            ]
                        },
                        {
                            type: 'col',
                            col: 3,
                            item: [
                                {
                                    type: 'cbox',
                                    radio:true,
                                    id: 'gender',
                                    name: 'gender',
                                    label: '性别：',
                                    data: [
                                        {
                                            value: 1,
                                            label: '性别:',
                                            unit: '男'
                                        },
                                        {
                                            value: 2,
                                            unit: '女'
                                        }
                                    ]
                                }
                            ]
                        },
                        {
                            type: 'col',
                            col: 3,
                            item: [
                                {
                                    type: 'num',
                                    id: 'age',
                                    name: 'age',
                                    length: 2,
                                    label: '年龄：'
                                    , unit: '岁'
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
                                    id: 'provinceAddress',
                                    name: 'provinceAddress',
                                    label: '家庭地址：',
                                    unit: '省'
                                },{
                                    type: 'input',
                                    id: 'cityAddress',
                                    name: 'cityAddress',
                                    unit: '市'
                                },{
                                    type: 'input',
                                    id: 'countyAddress',
                                    name: 'countyAddress',
                                    unit: '县'
                                }
                            ]
                        }]
                }, {
                    type: 'row',
                    item: [
                        {
                            type: 'col',
                            col: 6,
                            item: [
                                {
                                    type: 'cbox',
                                    radio:true,
                                    id: 'registeredResidence',
                                    name: 'registeredResidence',
                                    data: [
                                        {
                                            label: '户口：',
                                            value: 1,
                                            unit: '城镇'
                                        },
                                        {
                                            value: 2,
                                            unit: '农村'
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
                                    type: 'cbox',
                                    radio:true,
                                    id: 'registeredAddress',
                                    name: 'registeredAddress',
                                    data: [
                                        {
                                            label: '居住地址：',
                                            value: 1,
                                            unit: '城镇'
                                        },
                                        {
                                            value: 2,
                                            unit: '农村'
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
                            item: [
                                {
                                    type: 'cbox',
                                    id: 'education',
                                    name: 'education',
                                    radio: true,
                                    data: [
                                        {
                                            label:'教育情况:',
                                            value: '1',
                                            unit: '没上过学'
                                        },
                                        {
                                            value: '2',
                                            unit: '小学'
                                        },
                                        {
                                            value: '3',
                                            unit: '初中'
                                        },
                                        {
                                            value: '4',
                                            unit: '高中/技校'
                                        },
                                        {
                                            value: '5',
                                            unit: '中专'
                                        },
                                        {
                                            value: '6',
                                            unit: '大专'
                                        },
                                        {
                                            value: '7',
                                            unit: '大学及以上'
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
                            item: [
                                {
                                    type: 'cbox',
                                    id: 'professionalTechnicians',
                                    name: 'professionalTechnicians',
                                    data: [{
                                        label:'职业:',
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
                                        unit: '管理人员（厂长、政府官员、部门经理、村干部等）'
                                    }]
                                },
                                {
                                    type: 'cbox',
                                    id: 'clerks',
                                    name: 'clerks',
                                    data: [{
                                        value: '1',
                                        unit: '办事人员（秘书/职员等）'
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
                                    id: 'nowork',
                                    name: 'nowork',
                                    data: [{
                                        value: '1',
                                        unit: '无业'
                                    }]
                                },
                                {
                                    type: 'cbox',
                                    id: 'retiree',
                                    name: 'retiree',
                                    data: [{
                                        value: '1',
                                        unit: '离退休人员'
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
                                    id: 'familyNum',
                                    name: 'familyNum',
                                    label: '家庭人口数：'
                                }
                            ]
                        },
                        {
                            type: 'col',
                            col: 6,
                            item: [
                                {
                                    type: 'cbox',
                                    radio:true,
                                    id: 'poolFamily',
                                    name: 'poolFamily',
                                    data: [
                                        {
                                            label: '是否贫困户：',
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
                                    unit:'元（包括工资、补贴、奖金、退休工资等）'
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