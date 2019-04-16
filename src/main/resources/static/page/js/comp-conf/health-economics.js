//卫生经济学信息 CrfFormHealthEconomics
var CompHE = function () {
    function show() {
        return {
            type: 'container',
            item: [{
                type: 'h3',
                text: '卫生经济学信息'
            }, {
                type: 'hr'
            }, {
                type: 'row',
                item: [
                    {
                        type: 'col',
                        col: 12,
                        item: [
                            {
                                type: 'cbox',
                                radio:true,
                                id: 'insuranceType',
                                name: 'insuranceType',
                                label: '医疗保险类型：',
                                data: [
                                    {
                                        value: 1,
                                        label: '医疗保险类型：',
                                        unit: '医保'
                                    },
                                    {
                                        value: 2,
                                        unit: '自费'
                                    },
                                    {
                                        value: 3,
                                        unit: '其他',
                                        ex:{
                                            id:'insuranceDetail',
                                            name:'insuranceDetail'
                                        }
                                    }
                                ]
                            }
                        ]
                    }
                ]
            },{
                type: 'row',
                item: [
                    {
                        type: 'col',
                        col: 12,
                        item: [
                            {
                                type: 'input',
                                id: 'reimbursementPercent',
                                name: 'reimbursementPercent',
                                label: '报销百分比：'
                            }
                        ]
                    }
                ]
            },{
                type: 'row',
                item: [
                    {
                        type: 'col',
                        col: 12,
                        item: [
                            {
                                type: 'input',
                                id: 'treatmentFee',
                                name: 'treatmentFee',
                                label: '本次就医诊疗费：',
                                unit: '元'
                            }
                        ]
                    }
                ]
            },{
                type: 'row',
                item: [
                    {
                        type: 'col',
                        col: 12,
                        item: [
                            {
                                type: 'input',
                                id: 'trafficFee',
                                name: 'trafficFee',
                                label: '本次就医交通费：',
                                unit: '元'
                            }
                        ]
                    }
                ]
            },{
                    type: 'row',
                    item: [
                        {
                            type: 'col',
                            col: 12,
                            item: [
                                {
                                    type: 'input',
                                    id: 'loseWorkingTimeFee',
                                    name: 'loseWorkingTimeFee',
                                    label: '本次就医误工费：',
                                    unit: '元'
                                }
                            ]
                        }
                    ]
                },{
                    type: 'row',
                    item: [
                        {
                            type: 'col',
                            col: 12,
                            item: [
                                {
                                    type: 'input',
                                    id: 'perCapitaMonthlyIncome',
                                    name: 'perCapitaMonthlyIncome',
                                    label: '人均月家庭收入：',
                                    unit: '元/人/月'
                                }
                            ]
                        }
                    ]
                },{
                    type: 'row',
                    item: [
                        {
                            type: 'col',
                            col: 12,
                            item: [
                                {
                                    type: 'input',
                                    id: 'permanentArea',
                                    name: 'permanentArea',
                                    label: '常住地区：'
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