//EQ-5D-5L
var CompEq5d5l = function () {
    function show() {
        return {
            type: 'container',
            class:'no-group',
            item: [
                {
                    type: 'h3',
                    text: 'EQ-5D-5L'
                },
                {
                    type: 'hr',
                    css: {
                        color: 'blue'
                    }
                },
                {
                    type:'row',
                    item:[
                        {
                            type:'col',
                            col:12,
                            item:[
                                {
                                    type:'span',
                                    text:'今天您在行动方面:'
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
                            col: 1,
                        },
                        {
                            type: 'col',
                            col: 11,
                            item: [
                                {
                                    type: 'cbox',
                                    id: 'moveAbout',
                                    name: 'moveAbout',
                                    radio: true,
                                    data: [
                                        {
                                            value: '1',
                                            unit: '没有困难'
                                        },
                                        {
                                            value: '2',
                                            unit: '有一点困难'
                                        },
                                        {
                                            value: '3',
                                            unit: '有中度困难'
                                        },
                                        {
                                            value: '4',
                                            unit: '有严重困难'
                                        },
                                        {
                                            value: '5',
                                            unit: '我无法行走'
                                        }
                                    ]
                                }
                            ]
                        }
                    ]
                },
                {
                    type:'row',
                    item:[
                        {
                            type:'col',
                            col:12,
                            item:[
                                {
                                    type:'span',
                                    text:'今天您自我照顾（盥洗和穿衣）方面:'
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
                            col: 1,
                        },
                        {
                            type: 'col',
                            col: 11,
                            item: [
                                {
                                    type: 'cbox',
                                    id: 'takeCareOwn',
                                    name: 'takeCareOwn',
                                    radio: true,
                                    data: [
                                        {
                                            value: '1',
                                            unit: '没有困难'
                                        },
                                        {
                                            value: '2',
                                            unit: '有一点困难'
                                        },
                                        {
                                            value: '3',
                                            unit: '有中度困难'
                                        },
                                        {
                                            value: '4',
                                            unit: '有严重困难'
                                        },
                                        {
                                            value: '5',
                                            unit: '我无法照顾自己'
                                        }
                                    ]
                                }
                            ]
                        }
                    ]
                },
                {
                    type:'row',
                    item:[
                        {
                            type: 'col',
                            col: 1,
                        },
                        {
                            type:'col',
                            col:11,
                            item:[
                                {
                                    type:'span',
                                    text:'今天您从事日常活动（工作、读书或做家务）方面:'
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
                            col: 1,
                        },
                        {
                            type: 'col',
                            col: 11,
                            item: [
                                {
                                    type: 'cbox',
                                    id: 'dailyActive',
                                    name: 'dailyActive',
                                    radio: true,
                                    data: [
                                        {
                                            value: '1',
                                            unit: '没有困难'
                                        },
                                        {
                                            value: '2',
                                            unit: '有一点困难'
                                        },
                                        {
                                            value: '3',
                                            unit: '有中度困难'
                                        },
                                        {
                                            value: '4',
                                            unit: '有严重困难'
                                        },
                                        {
                                            value: '5',
                                            unit: '我无法进行日常活动'
                                        }
                                    ]
                                }
                            ]
                        }
                    ]
                },
                {
                    type:'row',
                    item:[
                        {
                            type:'col',
                            col:12,
                            item:[
                                {
                                    type:'span',
                                    text:'今天您身体疼痛或不舒服方面:'
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
                            col: 1,
                        },
                        {
                            type: 'col',
                            col: 11,
                            item: [
                                {
                                    type: 'cbox',
                                    id: 'hurtAndIll',
                                    name: 'hurtAndIll',
                                    radio: true,
                                    data: [
                                        {
                                            value: '1',
                                            unit: '没有疼痛或不舒服'
                                        },
                                        {
                                            value: '2',
                                            unit: '有一点疼痛或不舒服'
                                        },
                                        {
                                            value: '3',
                                            unit: '有中度疼痛或不舒服'
                                        },
                                        {
                                            value: '4',
                                            unit: '有严重疼痛或不舒服'
                                        },
                                        {
                                            value: '5',
                                            unit: '有非常严重的疼痛或不舒服'
                                        }
                                    ]
                                }
                            ]
                        }
                    ]
                },
                {
                    type:'row',
                    item:[
                        {
                            type:'col',
                            col:12,
                            item:[
                                {
                                    type:'span',
                                    text:'今天您在焦虑或沮丧方面:'
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
                            col: 1,
                        },
                        {
                            type: 'col',
                            col: 11,
                            item: [
                                {
                                    type: 'cbox',
                                    id: 'anxietyAndDepression',
                                    name: 'anxietyAndDepression',
                                    radio: true,
                                    data: [
                                        {
                                            value: '1',
                                            unit: '没有焦虑或沮丧'
                                        },
                                        {
                                            value: '2',
                                            unit: '有一点焦虑或沮丧'
                                        },
                                        {
                                            value: '3',
                                            unit: '有中度焦虑或沮丧'
                                        },
                                        {
                                            value: '4',
                                            unit: '有严重焦虑或沮丧'
                                        },
                                        {
                                            value: '5',
                                            unit: '有非常严重的焦虑或沮丧'
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
                                    id: 'healthScord',
                                    name: 'healthScord',
                                    label: '指出最能代表您今天健康状况好坏的分数：',
                                    unit:'分(100分制)'
                                }
                            ]
                        }
                    ]
                },
                {
                    type:'row',
                    item:[
                        {
                            type:'col',
                            col:12,
                            item:[
                                {
                                    type:'span',
                                    text:'总体来讲，您的健康状况是:'
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
                            col: 1,
                        },
                        {
                            type: 'col',
                            col: 11,
                            item: [
                                {
                                    type: 'cbox',
                                    id: 'healthInfo',
                                    name: 'healthInfo',
                                    radio: true,
                                    data: [
                                        {
                                            value: '1',
                                            unit: '非常好'
                                        },
                                        {
                                            value: '2',
                                            unit: '很好'
                                        },
                                        {
                                            value: '3',
                                            unit: '一般'
                                        },
                                        {
                                            value: '4',
                                            unit: '差'
                                        }
                                    ]
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