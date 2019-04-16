//不良事件观察表 CrfFormAdverseEventsObservation
var CompAEO = function () {
    function show() {
        return {
            type: 'container',
            item: [{
                type: 'h3',
                text: '不良事件观察表'
            }, {
                type: 'row',
                item: [
                    {
                        type: 'col',
                        item: [{
                            type: 'table',
                            data: [
                                [
                                    '不良事件的名称:',
                                    {
                                        item: [{
                                            type: 'input',
                                            id: 'adverseEventName',
                                            name: 'adverseEventName'
                                        }]
                                    }
                                ], [
                                    '不良事件发生的日期（年月日时）:',
                                    {
                                        item: [{
                                            label: ' ',
                                            type: 'date',
                                            format: 'yyyy-mm-dd hh:ii',
                                            id: 'startDate',
                                            name: 'startDate'
                                        }]
                                    }
                                ], [
                                    '不良事件的严重程度:',
                                    {
                                        item: [{
                                            type: 'select',
                                            id: 'severity',
                                            name: 'severity',
                                            data: [
                                                {
                                                    key: 1,
                                                    name: '轻度'
                                                }, {
                                                    key: 2,
                                                    name: '中度'
                                                }, {
                                                    key: 3,
                                                    name: '重度'
                                                }
                                            ]
                                        }]
                                    }
                                ], [
                                    '是否采取措施:',
                                    {
                                        item: [{
                                            type: 'select',
                                            id: 'takeSteps',
                                            name: 'takeSteps',
                                            data: [
                                                {
                                                    key: 0,
                                                    name: '否'
                                                }, {
                                                    key: 1,
                                                    name: '是'
                                                }
                                            ]
                                        }]
                                    }
                                ], [
                                    '是否与研究器械相关:',
                                    {
                                        item: [{
                                            type: 'select',
                                            id: 'relateToInstrument',
                                            name: 'relateToInstrument',
                                            data: [
                                                {
                                                    key: 1,
                                                    name: '肯定有关'
                                                }, {
                                                    key: 2,
                                                    name: '可能无关'
                                                }, {
                                                    key: 3,
                                                    name: '极可能有关'
                                                }, {
                                                    key: 4,
                                                    name: '可能有关'
                                                }, {
                                                    key: 5,
                                                    name: '肯定无关'
                                                }
                                            ]
                                        }]
                                    }
                                ], [
                                    '是否属于严重不良事件',
                                    {
                                        item: [{
                                            type: 'select',
                                            id: 'seriousAdverseEvent',
                                            name: 'seriousAdverseEvent',
                                            data: [
                                                {
                                                    key: 0,
                                                    name: '否'
                                                }, {
                                                    key: 1,
                                                    name: '是'
                                                }
                                            ]
                                        }]
                                    }
                                ], [
                                    '所发生不良事件的结局',
                                    {
                                        item: [{
                                            type: 'select',
                                            id: 'ending',
                                            name: 'ending',
                                            data: [
                                                {
                                                    key: 1,
                                                    name: '仍存在'
                                                }, {
                                                    key: 2,
                                                    name: '不知道'
                                                }, {
                                                    key: 3,
                                                    name: '已缓解'
                                                }
                                            ]
                                        }]
                                    }
                                ], [
                                    '受试者是否因此事件而退出试验',
                                    {
                                        item: [{
                                            type: 'select',
                                            id: 'exitTest',
                                            name: 'exitTest',
                                            data: [
                                                {
                                                    key: 0,
                                                    name: '否'
                                                }, {
                                                    key: 1,
                                                    name: '是'
                                                }
                                            ]
                                        }]
                                    }
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