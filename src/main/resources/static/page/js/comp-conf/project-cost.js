/**
 * 项目相关成本
 * @type {{show, rules}}
 */
var CompProjCost = function () {
    var show = function () {
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
                        item: [{
                            type: 'inputText',
                            label: '1.AI评估所需时间为（分钟）：',
                            name: 'aiTimeCost'
                        }]
                    }
                ]
            },
            {
                type: 'row',
                item: [
                    {
                        type: 'col',
                        item: [{
                            type: 'inputText',
                            label: '2.AI工具总成本【元/（年•台）】：',
                            name: 'aiMoneyCost'
                        }, {
                            type: 'row',
                            css: {'paddingLeft': '30px;'},
                            item: [{
                                type: 'col',
                                item: [{
                                    type: 'inputText',
                                    label: '固定成本【元/（年•台）】：',
                                    name: 'aiFixCost'
                                }, {
                                    type: 'inputText',
                                    label: '折旧成本【元/（年•台）】：',
                                    name: 'aiOldCost'
                                }, {
                                    type: 'inputText',
                                    label: '维修与运营成本【元/（年•台）】：',
                                    name: 'aiRepairCost'
                                }, {
                                    type: 'inputText',
                                    label: '共投入工具数量（台）：',
                                    name: 'aiNum'
                                }
                                ]
                            }]
                        }

                        ]
                    }
                ]
            }
        ]
    };
    }
    $.vtool.n2i(show);
    return {
        show: show,
        rules: []
    }
}();