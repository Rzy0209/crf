//步态认知筛查结果（智能化神经系统功能评估） CrfFormGaitScreenResultsIntelligent
var CompResults = function () {
    function show() {
        return {
            type:'container',
            item: [
                {
                    type: 'h3',
                    text: '步态认知筛查结果（智能化神经系统功能评估）'
                },
                {
                    type:'hr'
                },
                {
                    type: 'row',
                    item: [
                        {
                            type: 'col',
                            col: 4,
                            class:'bold',
                            item:[
                                {
                                    type: 'span',
                                    text:'句子复述'
                                }
                            ]
                        },
                        {
                            type: 'col',
                            col: 4,
                            item:[
                                {
                                    type: 'cbox',
                                    radio:true,
                                    id: 'retellFinish',
                                    name: 'retellFinish',
                                    label: '是否完成：',
                                    data: [
                                        {
                                            value: 1
                                            , label: '是否完成：'
                                            , unit: '是'
                                        }
                                        , {
                                            value: 0
                                            , unit: '否'
                                        }
                                    ]
                                }
                            ]
                        },
                        {
                            type: 'col',
                            col: 4,
                            item:[
                                {
                                    type: 'date',
                                    id: 'retellDate',
                                    name: 'retellDate',
                                    label: '检查日期：'
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
                            col: 8,
                            item:[
                                {
                                    type: 'cbox'
                                    ,radio:true
                                    , id: 'languageImpress'
                                    , name: 'languageImpress'
                                    , label: '语言印象：'
                                    , data: [
                                    {
                                        value: 1
                                        , label: '语言印象：'
                                        , unit: '正确'
                                    }
                                    , {
                                        value: 0
                                        , unit: '异常'
                                        , ex: {
                                            id: 'languageImpressDetail'
                                            , name: 'languageImpressDetail'
                                        }
                                    }
                                ]
                                }
                            ]
                        }
                    ]
                },
                {
                    type:'hr'
                },
                {
                    type: 'row',
                    item: [
                        {
                            type: 'col',
                            col: 4,
                            class:'bold',
                            item:[
                                {
                                    type: 'span',
                                    text:'词语短时回忆'
                                }
                            ]
                        },
                        {
                            type: 'col',
                            col: 4,
                            item:[
                                {
                                    type: 'cbox',
                                    radio:true,
                                    id: 'recallFinish',
                                    name: 'recallFinish',
                                    label: '是否完成：',
                                    data: [
                                        {
                                            value: 1
                                            , label: '是否完成：'
                                            , unit: '是'
                                        }
                                        , {
                                            value: 0
                                            , unit: '否'
                                        }
                                    ]
                                }
                            ]
                        },
                        {
                            type: 'col',
                            col: 4,
                            item:[
                                {
                                    type: 'date',
                                    id: 'recallDate',
                                    name: 'recallDate',
                                    label: '检查日期：'
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
                            col: 4,
                            item:[
                                {
                                    type: 'cbox'
                                    , id: 'recallBall'
                                    , name: 'recallBall'
                                    , label: '皮球'
                                    , data: [{
                                    value: 1
                                    , label: '皮球'
                                }]
                                }
                            ]
                        },
                        {
                            type: 'col',
                            col: 4,
                            item:[
                                {
                                    type: 'cbox'
                                    , id: 'recallNationalFlag'
                                    , name: 'recallNationalFlag'
                                    , label: '国旗'
                                    , data: [{
                                    value: 1
                                    , label: '国旗'
                                }]
                                }
                            ]
                        },
                        {
                            type: 'col',
                            col: 4,
                            item:[
                                {
                                    type: 'cbox'
                                    , id: 'recallTree'
                                    , name: 'recallTree'
                                    , label: '树木'
                                    , data: [{
                                    value: 1
                                    , label: '树木'
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
                            col: 4,
                            item:[
                                {
                                    type: 'num'
                                    ,length:1
                                    , id: 'recallTotalScore'
                                    , name: 'recallTotalScore'
                                    , label: '总分：'
                                    , unit: '分/3分'
                                }
                            ]
                        }
                    ]
                },
                {
                    type:'hr'
                },
                {
                    type: 'row',
                    item: [
                        {
                            type: 'col',
                            col: 4,
                            class:'bold',
                            item:[
                                {
                                    type: 'span',
                                    text:'画钟测试'
                                }
                            ]
                        },
                        {
                            type: 'col',
                            col: 4,
                            item:[
                                {
                                    type: 'cbox',
                                    radio:true,
                                    id: 'clockFinish',
                                    name: 'clockFinish',
                                    label: '是否完成：',
                                    data: [
                                        {
                                            value: 1
                                            , label: '是否完成：'
                                            , unit: '是'
                                        }
                                        , {
                                            value: 0
                                            , unit: '否'
                                        }
                                    ]
                                }
                            ]
                        },
                        {
                            type: 'col',
                            col: 4,
                            item:[
                                {
                                    type: 'date',
                                    id: 'clockDate',
                                    name: 'clockDate',
                                    label: '检查日期：'
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
                            col: 4,
                            item:[
                                {
                                    type: 'cbox'
                                    , id: 'clockAllNum'
                                    , name: 'clockAllNum'
                                    , label: '12个数字齐全'
                                    , data: [
                                    {
                                        value: 1
                                        , label: '12个数字齐全'
                                    }
                                ]
                                }
                            ]
                        },
                        {
                            type: 'col',
                            col: 4,
                            item:[
                                {
                                    type: 'cbox'
                                    , id: 'clockNumSort'
                                    , name: 'clockNumSort'
                                    , label: '所有数字顺序正确'
                                    , data: [
                                    {
                                        value: 1
                                        , label: '所有数字顺序正确'
                                    }
                                ]
                                }
                            ]
                        },
                        {
                            type: 'col',
                            col: 4,
                            item:[
                                {
                                    type: 'cbox'
                                    , id: 'clockNumPosition'
                                    , name: 'clockNumPosition'
                                    , label: '所有数字位置正确'
                                    , data: [
                                    {
                                        value: 1
                                        , label: '所有数字位置正确'
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
                            col: 4,
                            item:[
                                {
                                    type: 'cbox'
                                    , id: 'clockOnlyTwo'
                                    , name: 'clockOnlyTwo'
                                    , label: '有且仅有2个指针'
                                    , data: [
                                    {
                                        value: 1
                                        , label: '有且仅有2个指针'
                                    }
                                ]
                                }
                            ]
                        },
                        {
                            type: 'col',
                            col: 4,
                            item:[
                                {
                                    type: 'cbox'
                                    , id: 'clockFourPoint'
                                    , name: 'clockFourPoint'
                                    , label: '时针指向4'
                                    , data: [
                                    {
                                        value: 1
                                        , label: '时针指向4'
                                    }
                                ]
                                }
                            ]
                        },
                        {
                            type: 'col',
                            col: 4,
                            item:[
                                {
                                    type: 'cbox'
                                    , id: 'clockEightMinutes'
                                    , name: 'clockEightMinutes'
                                    , label: '分针指向8'
                                    , data: [
                                    {
                                        value: 1
                                        , label: '分针指向8'
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
                            col: 8,
                            item:[
                                {
                                    type: 'cbox'
                                    , id: 'clockProportionAppropriate'
                                    , name: 'clockProportionAppropriate'
                                    , label: '时针和分针比例恰当'
                                    , data: [
                                    {
                                        value: 1
                                        , label: '时针和分针比例恰当'
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
                            col: 8,
                            item:[
                                {
                                    type: 'num'
                                    ,length: 1
                                    , id: 'clockTotalScore'
                                    , name: 'clockTotalScore'
                                    , label: '总分：'
                                    , unit: "分/7分"
                                }
                            ]
                        }
                    ]
                },
                {
                    type:'hr'
                },
                {
                    type: 'row',
                    item: [
                        {
                            type: 'col',
                            col: 4,
                            class:'bold',
                            item:[
                                {
                                    type: 'span',
                                    text:'词语短延迟回忆'
                                }
                            ]
                        },
                        {
                            type: 'col',
                            col: 4,
                            item:[
                                {
                                    type: 'cbox',
                                    radio:true,
                                    id: 'delayRecallFinish',
                                    name: 'delayRecallFinish',
                                    label: '是否完成：',
                                    data: [
                                        {
                                            value: 1
                                            , label: '是否完成：'
                                            , unit: '是'
                                        }
                                        , {
                                            value: 0
                                            , unit: '否'
                                        }
                                    ]
                                }
                            ]
                        },
                        {
                            type: 'col',
                            col: 4,
                            item:[
                                {
                                    type: 'date',
                                    id: 'delayRecallDate',
                                    name: 'delayRecallDate',
                                    label: '检查日期：'
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
                            col: 4,
                            item:[
                                {
                                    type: 'cbox'
                                    , id: 'delayRecallBall'
                                    , name: 'delayRecallBall'
                                    , label: '皮球'
                                    , data: [{
                                    value: 1
                                    , label: '皮球'
                                }]
                                }
                            ]
                        },
                        {
                            type: 'col',
                            col: 4,
                            item:[
                                {
                                    type: 'cbox'
                                    , id: 'delayRecallNationalFlag'
                                    , name: 'delayRecallNationalFlag'
                                    , label: '国旗'
                                    , data: [{
                                    value: 1
                                    , label: '国旗'
                                }]
                                }
                            ]
                        },
                        {
                            type: 'col',
                            col: 4,
                            item:[
                                {
                                    type: 'cbox'
                                    , id: 'delayRecallTree'
                                    , name: 'delayRecallTree'
                                    , label: '树木'
                                    , data: [{
                                    value: 1
                                    , label: '树木'
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
                            col: 4,
                            item:[
                                {
                                    type: 'num'
                                    ,length:1
                                    , id: 'delayRecallTotalScore'
                                    , name: 'delayRecallTotalScore'
                                    , label: '总分：'
                                    , unit: '分/3分'
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
                            col: 8,
                            item:[
                                {
                                    type: 'cbox'
                                    ,radio:true
                                    , id: 'cognitionImpress'
                                    , name: 'cognitionImpress'
                                    , label: '认知印象：'
                                    , data: [
                                    {
                                        value: 1
                                        , label: '认知印象：'
                                        , unit: '正常'
                                    }
                                    , {
                                        value: 0
                                        , unit: '异常'
                                        , ex: {
                                            name: 'cognitionImpressDetail'
                                            , id: 'cognitionImpressDetail'
                                        }
                                    }
                                ]
                                }
                            ]
                        }
                    ]
                },
                {
                    type:'hr'
                },
                {
                    type: 'row',
                    item: [
                        {
                            type: 'col',
                            col: 4,
                            class:'bold',
                            item:[
                                {
                                    type: 'span',
                                    text:'起身步行3米往返测试'
                                }
                            ]
                        },
                        {
                            type: 'col',
                            col: 4,
                            item:[
                                {
                                    type: 'cbox',
                                    radio:true,
                                    id: 'roundtripFinish',
                                    name: 'roundtripFinish',
                                    label: '是否完成：',
                                    data: [
                                        {
                                            value: 1
                                            , label: '是否完成：'
                                            , unit: '是'
                                        }
                                        , {
                                            value: 0
                                            , unit: '否'
                                        }
                                    ]
                                }
                            ]
                        },
                        {
                            type: 'col',
                            col: 4,
                            item:[
                                {
                                    type: 'date',
                                    id: 'roundtripDate',
                                    name: 'roundtripDate',
                                    label: '检查日期：'
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
                            col: 3,
                            item:[
                                {
                                    type: 'num'
                                    , length: 1
                                    , scale: 2
                                    , id: 'roundtripStand'
                                    , name: 'roundtripStand'
                                    , label: '起身：'
                                    , unit: 's'
                                }
                            ]
                        },
                        {
                            type: 'col',
                            col: 3,
                            item:[
                                {
                                    type: 'num'
                                    , length: 1
                                    , scale: 2
                                    , id: 'roundtripTurn'
                                    , name: 'roundtripTurn'
                                    , label: '转身：'
                                    , unit: 's'
                                }
                            ]
                        },
                        {
                            type: 'col',
                            col:3,
                            item:[
                                {
                                    type: 'num'
                                    , length: 3
                                    , id: 'roundtripHipShimmy'
                                    , name: 'roundtripHipShimmy'
                                    , label: '摆臂：'
                                    , unit: '°'
                                }
                            ]
                        },
                        {
                            type: 'col',
                            col:3,
                            item:[
                                {
                                    type: 'num'
                                    , length: 1
                                    , scale: 2
                                    , id: 'roundtripStepWidth'
                                    , name: 'roundtripStepWidth'
                                    , label: '步宽：'
                                    , unit: 'm'
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
                            col: 3,
                            item:[
                                {
                                    type: 'num'
                                    , length: 1
                                    , scale: 2
                                    , id: 'roundtripStepLength'
                                    , name: 'roundtripStepLength'
                                    , label: '步长：'
                                    , unit: 'm'
                                }
                            ]
                        },
                        {
                            type: 'col',
                            col: 3,
                            item:[
                                {
                                    type: 'num'
                                    , length: 1
                                    , scale: 2
                                    , id: 'roundtripStepSpeed'
                                    , name: 'roundtripStepSpeed'
                                    , label: '步速：'
                                    , unit: 'm/s'
                                }
                            ]
                        },
                        {
                            type: 'col',
                            col:3,
                            item:[
                                {
                                    type: 'num'
                                    , length: 1
                                    , scale: 2
                                    , id: 'roundtripStepFrequency'
                                    , name: 'roundtripStepFrequency'
                                    , label: '步频：'
                                    , unit: '步/s'
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
                            col: 8,
                            item:[
                                {
                                    type: 'cbox'
                                    ,radio:true
                                    , id: 'gaitImpress'
                                    , name: 'gaitImpress'
                                    , label: '步态印象：'
                                    , data: [
                                    {
                                        value: 1
                                        , label: '步态印象：'
                                        , unit: '正常'
                                    }
                                    , {
                                        value: 0
                                        , unit: '异常'
                                        , ex: {
                                            id: 'gaitImpressDetail'
                                            , name: 'gaitImpressDetail'
                                        }
                                    }
                                ]
                                }
                            ]
                        }
                    ]
                },
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

