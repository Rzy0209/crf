//试验完成情况总结 CrfFormExperimentCompleteSummary
var CompComSummary = function () {
    function show() {
        return {
            type: 'container',
            item: [{
                type: 'h3',
                text: '研究完成'
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
                                radio:true,
                                id: 'isOver',
                                name: 'isOver',
                                label: '按方案执行并完成：',
                                data: [
                                    {
                                        value: 1,
                                        label: '按方案执行并完成：',
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
            }, {
                type: 'div',
                css: {
                    padding: '10px 0'
                }
            }, {
                type: 'h3',
                text: '退出研究'
            }, {
                type: 'hr'
            }, {
                type: 'row',
                item: [
                    {
                        type: 'col',
                        col: 12,
                        item: [{
                            label: '退出试验的日期为 ',
                            type: 'date',
                            id: 'exitResearch',
                            name: 'exitResearch'
                        }]
                    }
                ]
            },
                {
                    type: 'row',
                    item: [
                        {
                            type: 'col',
                            col: 12,
                            item: [{
                                text: '退出的主要原因：'
                            }]
                        }
                    ]
                }
                ,{
                type: 'row'
                    ,item:[
                        {
                            type:'col'
                            ,col:12
                            ,item:[{
                                label: '受试者不配合',
                                type: 'cbox',
                                id: 'exitReason',
                                name: 'exitReason'
                                ,data:[{
                                    value: 1,
                                    label: '受试者不配合',
                                    unit:'是'
                                }]
                            }]
                        }
                    ]
                }
                ,{
                    type: 'row'
                    ,item:[
                        {
                            type:'col'
                            ,col:12
                            ,item:[{
                                label: '不良事件',
                                type: 'cbox',
                                start:1,
                                id: 'exitReason',
                                name: 'exitReason'
                                ,data:[{
                                    value: 2,
                                    label: '不良事件',
                                    unit:'是'
                                }]
                            }]
                        }
                    ]
                }
                ,{
                    type: 'row'
                    ,item:[
                        {
                            type:'col'
                            ,col:12
                            ,item:[{
                                label: '患者要求退出',
                                type: 'cbox',
                                start:2,
                                id: 'exitReason',
                                name: 'exitReason'
                                ,data:[{
                                    value: 3,
                                    label: '患者要求退出',
                                    unit:'是'
                                }]
                            }]
                        }
                    ]
                }
                ,{
                    type: 'row'
                    ,item:[
                        {
                            type:'col'
                            ,col:12
                            ,item:[{
                                label: '其他原因',
                                type: 'cbox',
                                start:3,
                                id: 'exitReason',
                                name: 'exitReason'
                                ,data:[{
                                    value: 4,
                                    label: '其他原因',
                                    unit:'是',
                                    ex:{
                                        id: 'otherReasonDescribe',
                                        name:'otherReasonDescribe',
                                        placeholder:'请详述'
                                    }
                                }]
                            }]
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