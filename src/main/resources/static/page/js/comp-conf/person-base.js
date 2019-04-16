//患者基本信息 CtfFormBasicInfo
var CompBase = function () {
    function show() {
        return {
            type: 'container',
            item: [{
                type: 'h3',
                text: '患者基本信息'
            }, {
                type: 'hr',
                css: {
                    color: 'blue'
                }
            },{
                type: 'row',
                item: [
                    {
                        type: 'col',
                        col: 6,
                        item: [
                            {
                                type: 'input',
                                id: 'identifier',
                                name: 'identifier',
                                label: '身份证号：'
                            }
                        ]
                    },
                    {
                        type: 'col',
                        col: 6,
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
            },{
                type: 'row',
                item: [
                    {
                        type: 'col',
                        col: 6,
                        item: [
                            {
                                type: 'input',
                                id: 'name',
                                name: 'name',
                                label: '姓名：'
                            }
                        ]
                    },
                    {
                        type: 'col',
                        col: 6,
                        item: [
                            {
                                type: 'input',
                                id: 'nameSx',
                                name: 'nameSx',
                                label: '姓名缩写：'
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
                                type: 'num',
                                id: 'age',
                                name: 'age',
                                length: 2,
                                label: '年龄：'
                                , unit: '岁'
                            }
                        ]
                    },
                    {
                        type: 'col',
                        col: 6,
                        item: [
                            {
                                type: 'input',
                                id: 'phoneNum',
                                name: 'phoneNum',
                                label: '手机号码：'
                            }
                        ]
                    }
                ]
            }, {
                type: 'row',
                item: [
                    {
                        type: 'col',
                        name:123,
                        col: 6,
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
                        col: 6,
                        item: [
                            {
                                type: 'input',
                                id: 'nation',
                                name: 'nation',
                                label: '民族：'
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
                                radio:true,
                                id: 'handedness',
                                name: 'handedness',
                                label: '利手：',
                                data: [
                                    {
                                        value: 1,
                                        label: '利手:',
                                        unit: '右'
                                    },
                                    {
                                        value: 2,
                                        unit: '左'
                                    },
                                    {
                                        value: 3,
                                        unit: '双手'
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
                                type: 'select',
                                id: 'profession',
                                name: 'profession',
                                label: '职业：',
                                data : [
                                    {
                                        name:"专业技术工作者（医务人员、教师、律师、建筑师、工程师等）",
                                        key:1
                                    },{
                                        name:"管理者/行政官员/经理（厂长、政府官员、部门经理、村干部等）",
                                        key:2
                                    },{
                                        name:"技术工人农、林、牧、渔业从业人员",
                                        key:3
                                    },{
                                        name:"服务行业人员（服务员、厨师、理发师、售货员等）",
                                        key:4
                                    },{
                                        name:"非技术工人（普通工人）",
                                        key:5
                                    },{
                                        name:"办公室一般工作人员（秘书/职员等）",
                                        key:6
                                    },{
                                        name:"其他",
                                        key:7
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
                        type: 'col',
                        col: 6,
                        item: [
                            {
                                type: 'select',
                                id: 'eductionDegree',
                                name: 'eductionDegree',
                                label: '文化程度：',
                                data : [
                                    {
                                        name:"没上过学",
                                        key:1
                                    },{
                                        name:"小学",
                                        key:2
                                    },{
                                        name:"初中",
                                        key:3
                                    },{
                                        name:"高中/技校",
                                        key:4
                                    },{
                                        name:"中专",
                                        key:5
                                    },{
                                        name:"大专",
                                        key:6
                                    },{
                                        name:"大学及以上",
                                        key:7
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
                                type: 'num',
                                id: 'educationYear',
                                name: 'educationYear',
                                length: 2,
                                label: '受教育年限：'
                                , unit: '年'
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
                                type: 'num',
                                id: 'height',
                                name: 'height',
                                length: 3,
                                label: '身高：'
                                , unit: 'cm'
                            }
                        ]
                    },
                    {
                        type: 'col',
                        col: 6,
                        item: [
                            {
                                type: 'num',
                                id: 'weight',
                                name: 'weight',
                                length: 3,
                                label: '体重：'
                                , unit: 'kg'
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
                                type: 'num',
                                id: 'bmi',
                                name: 'bmi',
                                length: 3,
                                label: '身体质量指数（BMI）：'
                                , unit: 'kg/m2'
                            }
                        ]
                    },
                    {
                        type: 'col',
                        col: 6,
                        item: [
                            {
                                type: 'input',
                                id: 'sbp',
                                name: 'sbp',
                                label: '血压：',
                                unit: '/'
                            },{
                                type: 'input',
                                id: 'dbp',
                                name: 'dbp',
                                unit: 'mmHg'
                            }
                        ]
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