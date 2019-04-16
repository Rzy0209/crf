//医疗机构相关信息
var CompOrgInfo = function () {
    function show() {
        return {
            type: 'container',
            item: [
                {
                    type: 'h3',
                    text: '医疗机构相关信息'
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
                            item:[
                                {
                                    type: 'input',
                                    id: 'seekMedicalAdviceOrgName',
                                    name: 'seekMedicalAdviceOrgName',
                                    label: '此次就诊的医疗机构名称：'
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
                                    id: 'seekMedicalAdviceHospitalLevel',
                                    name: 'seekMedicalAdviceHospitalLevel',
                                    radio: true,
                                    data: [
                                        {
                                            label:'此次就诊医疗机构的级别：:',
                                            value: '1',
                                            unit: '三级甲'
                                        },
                                        {
                                            value: '2',
                                            unit: '三级乙'
                                        },
                                        {
                                            value: '3',
                                            unit: '三级丙'
                                        },
                                        {
                                            value: '4',
                                            unit: '三级'
                                        },
                                        {
                                            value: '5',
                                            unit: '二级甲'
                                        },
                                        {
                                            value: '6',
                                            unit: '二级乙'
                                        },
                                        {
                                            value: '7',
                                            unit: '二级丙'
                                        },
                                        {
                                            value: '8',
                                            unit: '二级'
                                        },
                                        {
                                            value: '9',
                                            unit: '一级甲'
                                        },
                                        {
                                            value: '10',
                                            unit: '一级乙'
                                        },
                                        {
                                            value: '11',
                                            unit: '一级丙'
                                        },
                                        {
                                            value: '12',
                                            unit: '一级'
                                        },
                                        {
                                            value: '13',
                                            unit: '未定级'
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
                                    id: 'compilationNum',
                                    name: 'compilationNum',
                                    label: '医院的核定编制数：'
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
                                    id: 'workerNum',
                                    name: 'workerNum',
                                    label: '医院的在岗工作人员数：'
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
                                    id: 'positiveHeight',
                                    name: 'positiveHeight',
                                    label: '职称：正高（人）：'
                                },
                                {
                                    type: 'input',
                                    id: 'deputySeniorRanks',
                                    name: 'deputySeniorRanks',
                                    label: '副高（人）：'
                                },
                                {
                                    type: 'input',
                                    id: 'middleLevel',
                                    name: 'middleLevel',
                                    label: '中级（人）：'
                                },
                                {
                                    type: 'input',
                                    id: 'primaryLevel',
                                    name: 'primaryLevel',
                                    label: '初级（人）：'
                                },
                                {
                                    type: 'input',
                                    id: 'otherLevel',
                                    name: 'otherLevel',
                                    label: '其他（人）：'
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
                                    id: 'orgnationBeds',
                                    name: 'orgnationBeds',
                                    label: '医院的编制床位数：'
                                }
                            ]
                        },
                        {
                            type: 'col',
                            col: 6,
                            item: [
                                {
                                    type: 'input',
                                    id: 'openBeds',
                                    name: 'openBeds',
                                    label: '医院的开放床位数：'
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
                                    id: 'allIncome',
                                    name: 'allIncome',
                                    label: '医疗机构去年年收入总计（万元）：'
                                }
                            ]
                        },
                        {
                            type: 'col',
                            col: 6,
                            item: [
                                {
                                    type: 'input',
                                    id: 'businessIncome',
                                    name: 'businessIncome',
                                    label: '其中：业务收入（万元）：'
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
                                    id: 'medicineNeurologyBeds',
                                    name: 'medicineNeurologyBeds',
                                    label: '神经内科床位数：'
                                }
                            ]
                        },
                        {
                            type: 'col',
                            col: 6,
                            item: [
                                {
                                    type: 'input',
                                    id: 'medicineNeurologyArea',
                                    name: 'medicineNeurologyArea',
                                    label: '神经内科病区数：'
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
                                    id: 'depInWorkPers',
                                    name: 'depInWorkPers',
                                    label: '科室内在岗人数：'
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
                                    id: 'chiefPhysicianPers',
                                    name: 'chiefPhysicianPers',
                                    label: '其中：主任医师（人）：'
                                },
                                {
                                    type: 'input',
                                    id: 'chiefPhysicianPersDayWages',
                                    name: 'chiefPhysicianPersDayWages',
                                    label: '，日工资（元）：'
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
                                    id: 'DeputyChiefPhysicianPers',
                                    name: 'DeputyChiefPhysicianPers',
                                    label: '副主任医师（人）：'
                                },
                                {
                                    type: 'input',
                                    id: 'DeputyChiefPhysicianPersDayWages',
                                    name: 'DeputyChiefPhysicianPersDayWages',
                                    label: '，日工资（元）：'
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
                                    id: 'attendingDoctors',
                                    name: 'attendingDoctors',
                                    label: '主治医师（人）：'
                                },
                                {
                                    type: 'input',
                                    id: 'attendingDoctorsDayWages',
                                    name: 'attendingDoctorsDayWages',
                                    label: '，日工资（元）：'
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
                                    id: 'nurses',
                                    name: 'nurses',
                                    label: '护士（人）：'
                                },
                                {
                                    type: 'input',
                                    id: 'toolPers',
                                    name: 'toolPers',
                                    label: '技术人员数（人）：'
                                },
                                {
                                    type: 'input',
                                    id: 'scientificPers',
                                    name: 'scientificPers',
                                    label: '科研人员数（人）：'
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
                                    id: 'drs',
                                    name: 'drs',
                                    label: '学历：博士及以上（人）：'
                                },
                                {
                                    type: 'input',
                                    id: 'masters',
                                    name: 'masters',
                                    label: '硕士（人）：'
                                },
                                {
                                    type: 'input',
                                    id: 'undergraduates',
                                    name: 'undergraduates',
                                    label: '本科（人）：'
                                },
                                {
                                    type: 'input',
                                    id: 'middleSchools',
                                    name: 'middleSchools',
                                    label: '高中及以下（人）：'
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
                                    id: 'sjnknmzrcs',
                                    name: 'sjnknmzrcs',
                                    label: '神经内科年门急诊人次数（人次）：'
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
                                    id: 'sjnknzyrcs',
                                    name: 'sjnknzyrcs',
                                    label: '神经内科年住院人次数（人次）：'
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
                                    id: 'sjnknssrcs',
                                    name: 'sjnknssrcs',
                                    label: '神经内科年手术人次数（人次）：'
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
                                    id: 'xmfff',
                                    name: 'xmfff',
                                    label: '步态语言认知评估的项目服务费用（元）：',
                                    unit:'(若无项目费用，则填0）'
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