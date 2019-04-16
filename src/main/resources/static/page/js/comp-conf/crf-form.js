// 病历报告表
var CompCrfForm = function () {
    function show() {
        return {
            type: 'container',
            item: [
                {
                    type: 'container',
                    class:'title-center',
                    item: [{
                        type: 'row',
                        item: [
                            {
                                type: "col",
                                col: 12,
                                item: [
                                    {
                                        type: "h2",
                                        text: "脑血管病神经功能损伤智能诊断评价系统建立及应用"

                                    }
                                ]
                            }
                        ]
                    },{
                        type: 'row',
                        item: [
                            {
                                type: "col",
                                col: 12,
                                item: [
                                    {
                                        id: "titleText",
                                        type: "h2",
                                        text: ""

                                    }
                                ]
                            }
                        ]
                    },{
                        type: 'row',
                        item: [
                            {
                                type: "col",
                                col: 12,
                                item: [
                                    {
                                        type: "h2",
                                        text: "病历报告表"

                                    }
                                ]
                            }
                        ]
                    },
                        {
                            type: 'row',
                            item: [
                                {
                                    type: "col",
                                    col: 12,
                                    item: [
                                        {
                                            type: "h3",
                                            text: "(Case Report Form)"

                                        }
                                    ]
                                }
                            ]
                        },
                        {
                            type: 'row',
                            item: [
                                {
                                    type: "col",
                                    col: 12,
                                    item: [
                                        {
                                            type: "h3",
                                            text: "版本号：1.2"

                                        }
                                    ]
                                }
                            ]
                        }]
                },
                {type: 'container', css: {height: '40px'}},
                {
                    type: 'row',
                    class: 'justify-content-md-center',
                    item: [
                        {
                            type: "col",
                            col: 8,
                            item: [
                                {
                                    type: 'cbox',
                                    radio: true,
                                    id: 'finishResearch',
                                    name: 'finishResearch',
                                    data: [
                                        {
                                            value: 1,
                                            label: '是否完成研究：',
                                            unit: '是'
                                        },
                                        {
                                            value: 0,
                                            unit: '否'
                                        }
                                    ]
                                }
                            ]
                        }
                    ]
                },
                {
                    type: 'row',
                    class: 'justify-content-md-center',
                    item: [
                        {
                            type: "col",
                            col: 8,
                            item: [
                                {
                                    type: 'input',
                                    css: {
                                        width: '300px',
                                        placeholder: '复旦大学附属中山医院'
                                    },
                                    id: 'actuatorName',
                                    name: 'actuatorName',
                                    label: '承担临床试验的医疗机构：',

                                }
                            ]
                        }
                    ]
                },
                {
                    type: 'row',
                    class: 'justify-content-md-center',
                    item: [
                        {
                            type: "col",
                            col: 8,
                            item: [
                                {
                                    type: 'input',
                                    css: {
                                        width: '300px !important',
                                    },
                                    id: 'subjectsShortName',
                                    name: 'subjectsShortName',
                                    label: '受试者姓名拼音首字：',

                                }
                            ]
                        }
                    ]
                },
                {
                    type: 'row',
                    class: 'justify-content-md-center',
                    item: [
                        {
                            type: "col",
                            col: 8,
                            item: [
                                {
                                    type: 'input',
                                    css: {
                                        width: '600px !important',
                                    },
                                    id: 'identityNumber',
                                    name: 'identityNumber',
                                    label: '身份证号码：',

                                }
                            ]
                        }
                    ]
                },
                {
                    type: 'row',
                    class: 'justify-content-md-center',
                    item: [
                        {
                            type: "col",
                            col: 8,
                            item: [
                                {
                                    type: 'input',
                                    css: {
                                        width: '300px',
                                    },
                                    id: 'testNumber',
                                    name: 'testNumber',
                                    label: '试验编号：',

                                }
                            ]
                        }
                    ]
                },
                {
                    type: 'row',
                    class: 'justify-content-md-center',
                    item: [
                        {
                            type: "col",
                            col: 8,
                            item: [
                                {
                                    type: 'input',
                                    css: {
                                        width: '300px',
                                    },
                                    id: 'researcher',
                                    name: 'researcher',
                                    label: '研究者：',

                                }
                            ]
                        }
                    ]
                },
                {
                    type: 'row',
                    class: 'justify-content-md-center',
                    item: [
                        {
                            type: "col",
                            col: 8,
                            item: [
                                {
                                    label: '研究日期：',
                                    type: 'date',
                                    id: 'researchDate',
                                    name: 'researchDate'
                                }
                            ]
                        }
                    ]
                },
                {
                    type: 'row',
                    class: 'justify-content-md-center',
                    item: [
                        {
                            type: "col",
                            col: 8,
                            item: [
                                {
                                    label: '研究单位：',
                                    type: 'input',
                                    id: 'researchUnit',
                                    name: 'researchUnit'
                                }
                            ]
                        }
                    ]
                }
            ]
        };
    }

    function rules() {
        return [{
            id: "subjectsShortName",
            rules: {
                required: true,
                messages: {
                    required: '请输入受试者姓名拼音首字',
                }
            }
        }, {
            id: "identityNumber",
            rules: {
                required: true,
                messages: {
                    required: '请输入身份证号',
                }
            }
        }]
    }

    return {
        show: show,
        rules: rules
    }
}();