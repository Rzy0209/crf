//基线评估
var BaselineAssessment = function () {
    function show() {
        return {
            type: 'container',
            item: [{
                type: 'h3',
                text: '基线评估'
            }, {
                type: 'hr',
                css: {
                    color: 'blue'
                }
            },
                {
                    type: 'row',
                    item: [{
                        type: 'col',
                        col: 10,
                        item: [
                            {
                                type: 'input',
                                id: 'fallTimes',
                                name: 'fallTimes',
                                label: '过去1年内跌倒次数：',
                                unit: "次（如≥1次，请填写下表）"
                            }
                        ]
                    }]
                }, {
                    type: 'row',
                    item: [
                        {
                            type: 'col',
                            col: 12,
                            text: "跌倒诱因：",
                            item: [{
                                type: 'cbox',
                                id: 'unstableTerrain',
                                name: 'unstableTerrain',
                                data: [{
                                    value: '1',
                                    unit: '地形不平稳、有障碍物'
                                }]
                            }, {
                                type: 'cbox',
                                id: 'unfitClothes',
                                name: 'unfitClothes',
                                data: [{
                                    value: '1',
                                    unit: '衣裤不合身、鞋不合脚'
                                }]
                            }, {
                                type: 'cbox',
                                id: 'overload',
                                name: 'overload',
                                data: [{
                                    value: '1',
                                    unit: '负载过重'
                                }]
                            }, {
                                type: 'cbox',
                                id: 'badMood',
                                name: 'badMood',
                                data: [{
                                    value: '1',
                                    unit: '情绪不佳'
                                }]
                            }]
                        }
                    ]
                }, {
                    type: 'row',
                    item: [{
                        type: 'col',
                        col: 1,
                    },
                        {
                            type: 'col',
                            col: 11,
                            item: [{
                                type: 'cbox',
                                id: 'poorEyesight',
                                name: 'poorEyesight',
                                data: [{
                                    value: '1',
                                    unit: '视力不佳、视野受限'
                                }]
                            }, {
                                type: 'cbox',
                                id: 'limitedHearing',
                                name: 'limitedHearing',
                                data: [{
                                    value: '1',
                                    unit: '听觉受限'
                                }]
                            }, {
                                type: 'cbox',
                                id: 'dizziness',
                                name: 'dizziness',
                                data: [{
                                    value: '1',
                                    unit: '头晕、肢体乏力'
                                }]
                            }, {
                                type: 'cbox',
                                id: 'otherReason',
                                name: 'otherReason',
                                data: [{
                                    value: '1',
                                    unit: '其他',
                                    ex: {
                                        id: 'otherReasonDescribe',
                                        name: 'otherReasonDescribe',
                                        css: {width: '200px'}
                                    }
                                }]
                            }]
                        }
                    ]
                }, {
                    type: 'row',
                    item: [{
                        type: 'col',
                        col: 12,
                        item: [
                            {
                                type: 'cbox',
                                radio: true,
                                label: '遗留后遗症：',
                                id: 'baselineLegacySequela',
                                name: 'baselineLegacySequela',
                                data: [
                                    {
                                        value: 0,
                                        label: '遗留后遗症:',
                                        unit: '无'
                                    }, {
                                        value: 1,
                                        unit: '有',
                                        ex: {
                                            id: 'baselineLegacySequelaDescribe',
                                            name: 'baselineLegacySequelaDescribe',
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
                        col: 10,
                        item: [
                            {
                                type: 'select',
                                id: 'rankin',
                                name: 'rankin',
                                label: '改良Rankin量表（mRS）评分分级（0~6）：',
                                data: [
                                    {
                                        name: "无神经功能障碍，日常生活正常",
                                        key: 0
                                    },
                                    {
                                        name: "极轻微神经功能障碍但不影响患者日常生活",
                                        key: 1
                                    }, {
                                        name: "轻度神经功能障碍，影响患者日常生活，但能自理",
                                        key: 2
                                    }, {
                                        name: "中度神经功能障碍，需一些帮助，但能自己行走",
                                        key: 3
                                    }, {
                                        name: "中重度神经功能障碍，没有帮助不能行走和自理，靠轮椅行走",
                                        key: 4
                                    }, {
                                        name: "卧床不起，失禁，完全不能自理，需长期护理",
                                        key: 5
                                    }, {
                                        name: "死亡",
                                        key: 6
                                    }
                                ]
                            }
                        ]
                    }]

                },
                {
                    type: 'row',
                    item: [
                        {
                            type: 'col',
                            col: 12,
                            item: [
                                {
                                    text: 'BARTHEL指数（ADL）：'
                                }
                            ]
                        }

                    ]
                },
                {
                    type: 'row',
                    item: [{
                        type: 'col',
                        col: 6,
                        item: [
                            {
                                text: '进餐：'
                            }
                        ]
                    }, {
                        type: 'col',
                        col: 3,
                        item: [
                            {
                                type: 'select',
                                id: 'eat',
                                name: 'eat',
                                data: [
                                    {
                                        name: "空白",
                                        key: 0
                                    },
                                    {
                                        name: "独立",
                                        key: 1
                                    }, {
                                        name: "部分独立或需要帮助",
                                        key: 2
                                    }, {
                                        name: "需极大帮助",
                                        key: 3
                                    }, {
                                        name: "完全依赖",
                                        key: 4
                                    }
                                ]
                            }
                        ]
                    }]

                },
                {
                    type: 'row',
                    item: [{
                        type: 'col',
                        col: 6,
                        item: [
                            {
                                text: '洗澡：'
                            }
                        ]
                    }, {
                        type: 'col',
                        col: 3,
                        item: [
                            {
                                type: 'select',
                                id: 'shower',
                                name: 'shower',
                                data: [
                                    {
                                        name: "空白",
                                        key: 0
                                    },
                                    {
                                        name: "独立",
                                        key: 1
                                    }, {
                                        name: "部分独立或需要帮助",
                                        key: 2
                                    }, {
                                        name: "需极大帮助",
                                        key: 3
                                    }, {
                                        name: "完全依赖",
                                        key: 4
                                    }
                                ]
                            }
                        ]
                    }]

                },
                {
                    type: 'row',
                    item: [{
                        type: 'col',
                        col: 6,
                        item: [
                            {
                                text: '修饰：'
                            }
                        ]
                    }, {
                        type: 'col',
                        col: 3,
                        item: [
                            {
                                type: 'select',
                                id: 'modification',
                                name: 'modification',
                                data: [
                                    {
                                        name: "空白",
                                        key: 0
                                    },
                                    {
                                        name: "独立",
                                        key: 1
                                    }, {
                                        name: "部分独立或需要帮助",
                                        key: 2
                                    }, {
                                        name: "需极大帮助",
                                        key: 3
                                    }, {
                                        name: "完全依赖",
                                        key: 4
                                    }
                                ]
                            }
                        ]
                    }]

                },
                {
                    type: 'row',
                    item: [{
                        type: 'col',
                        col: 6,
                        item: [
                            {
                                text: '穿衣：'
                            }
                        ]
                    }, {
                        type: 'col',
                        col: 3,
                        item: [
                            {
                                type: 'select',
                                id: 'dress',
                                name: 'dress',
                                data: [
                                    {
                                        name: "空白",
                                        key: 0
                                    },
                                    {
                                        name: "独立",
                                        key: 1
                                    }, {
                                        name: "部分独立或需要帮助",
                                        key: 2
                                    }, {
                                        name: "需极大帮助",
                                        key: 3
                                    }, {
                                        name: "完全依赖",
                                        key: 4
                                    }
                                ]
                            }
                        ]
                    }]

                },
                {
                    type: 'row',
                    item: [{
                        type: 'col',
                        col: 6,
                        item: [
                            {
                                text: '可控制大便：'
                            }
                        ]
                    }, {
                        type: 'col',
                        col: 3,
                        item: [
                            {
                                type: 'select',
                                id: 'controllableStool',
                                name: 'controllableStool',
                                data: [
                                    {
                                        name: "空白",
                                        key: 0
                                    },
                                    {
                                        name: "独立",
                                        key: 1
                                    }, {
                                        name: "部分独立或需要帮助",
                                        key: 2
                                    }, {
                                        name: "需极大帮助",
                                        key: 3
                                    }, {
                                        name: "完全依赖",
                                        key: 4
                                    }
                                ]
                            }
                        ]
                    }]

                },
                {
                    type: 'row',
                    item: [{
                        type: 'col',
                        col: 6,
                        item: [
                            {
                                text: '可控制小便：'
                            }
                        ]
                    }, {
                        type: 'col',
                        col: 3,
                        item: [
                            {
                                type: 'select',
                                id: 'controllableUrination',
                                name: 'controllableUrination',
                                data: [
                                    {
                                        name: "空白",
                                        key: 0
                                    },
                                    {
                                        name: "独立",
                                        key: 1
                                    }, {
                                        name: "部分独立或需要帮助",
                                        key: 2
                                    }, {
                                        name: "需极大帮助",
                                        key: 3
                                    }, {
                                        name: "完全依赖",
                                        key: 4
                                    }
                                ]
                            }
                        ]
                    }]

                },
                {
                    type: 'row',
                    item: [{
                        type: 'col',
                        col: 6,
                        item: [
                            {
                                text: '用厕：'
                            }
                        ]
                    }, {
                        type: 'col',
                        col: 3,
                        item: [
                            {
                                type: 'select',
                                id: 'toilet',
                                name: 'toilet',
                                data: [
                                    {
                                        name: "空白",
                                        key: 0
                                    },
                                    {
                                        name: "独立",
                                        key: 1
                                    }, {
                                        name: "部分独立或需要帮助",
                                        key: 2
                                    }, {
                                        name: "需极大帮助",
                                        key: 3
                                    }, {
                                        name: "完全依赖",
                                        key: 4
                                    }
                                ]
                            }
                        ]
                    }]

                },
                {
                    type: 'row',
                    item: [{
                        type: 'col',
                        col: 6,
                        item: [
                            {
                                text: '床椅转移（指从床上到椅子上并返回）：'
                            }
                        ]
                    }, {
                        type: 'col',
                        col: 3,
                        item: [
                            {
                                type: 'select',
                                id: 'bedChairTransfer',
                                name: 'bedChairTransfer',
                                data: [
                                    {
                                        name: "空白",
                                        key: 0
                                    },
                                    {
                                        name: "独立",
                                        key: 1
                                    }, {
                                        name: "部分独立或需要帮助",
                                        key: 2
                                    }, {
                                        name: "需极大帮助",
                                        key: 3
                                    }, {
                                        name: "完全依赖",
                                        key: 4
                                    }
                                ]
                            }
                        ]
                    }]

                },
                {
                    type: 'row',
                    item: [{
                        type: 'col',
                        col: 6,
                        item: [
                            {
                                text: '平地行走：'
                            }
                        ]
                    }, {
                        type: 'col',
                        col: 3,
                        item: [
                            {
                                type: 'select',
                                id: 'walkOnTheGround',
                                name: 'walkOnTheGround',
                                data: [
                                    {
                                        name: "空白",
                                        key: 0
                                    },
                                    {
                                        name: "独立",
                                        key: 1
                                    }, {
                                        name: "部分独立或需要帮助",
                                        key: 2
                                    }, {
                                        name: "需极大帮助",
                                        key: 3
                                    }, {
                                        name: "完全依赖",
                                        key: 4
                                    }
                                ]
                            }
                        ]
                    }]

                },
                {
                    type: 'row',
                    item: [{
                        type: 'col',
                        col: 6,
                        item: [
                            {
                                text: '上下楼梯：'
                            }
                        ]
                    }, {
                        type: 'col',
                        col: 3,
                        item: [
                            {
                                type: 'select',
                                id: 'upAndDownStairs',
                                name: 'upAndDownStairs',
                                data: [
                                    {
                                        name: "空白",
                                        key: 0
                                    },
                                    {
                                        name: "独立",
                                        key: 1
                                    }, {
                                        name: "部分独立或需要帮助",
                                        key: 2
                                    }, {
                                        name: "需极大帮助",
                                        key: 3
                                    }, {
                                        name: "完全依赖",
                                        key: 4
                                    }
                                ]
                            }
                        ]
                    }]

                },
                {
                    type: 'row',
                    item: [{
                        type: 'col',
                        col: 12,
                        item: [
                            {
                                type: 'input',
                                id: 'internalMedicineNeurology',
                                name: 'internalMedicineNeurology',
                                label: '步态认知筛查结果（神经内科普通医生）（直接上传excel文件导入数据）'
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
                                type: 'input',
                                id: 'intelligentNervousSystem',
                                name: 'intelligentNervousSystem',
                                label: '步态认知筛查结果（智能化神经系统功能评估）（直接上传报告pdf，excel另导入数据）'
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
}();