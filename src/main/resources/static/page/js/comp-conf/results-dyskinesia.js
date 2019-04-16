//步态认知筛查结果（神经内科运动障碍专业专家医生组）  CrfFormGaitScreenResultsDyskinesia
var CompResultDy = function () {
    function show() {
        return {
            type:'container',
            item: [
                {
                    type: 'h3',
                    text: '步态认知筛查结果（神经内科运动障碍专业专家医生组）'
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
                                    , id: 'clockRound'
                                    , name: 'clockRound'
                                    , label: '轮廓为闭合的圆'
                                    , data: [
                                    {
                                        value: 1
                                        , label: '轮廓为闭合的圆'
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
                                    , id: 'clockAllNum'
                                    , name: 'clockAllNum'
                                    , label: '所有数字正确且位置和顺序正确'
                                    , data: [
                                    {
                                        value: 1
                                        , label: '所有数字正确且位置和顺序正确'
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
                                    , id: 'clockPoint'
                                    , name: 'clockPoint'
                                    , label: '指针正确且指向正确时间'
                                    , data: [
                                    {
                                        value: 1
                                        , label: '指针正确且指向正确时间'
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
                                    type: 'num'
                                    ,length:1
                                    , id: 'clockTotalScore'
                                    , name: 'clockTotalScore'
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
                            col: 2,
                            item:[
                                {
                                    type: 'cbox'
                                    , id: 'roundtripStandDifficultyOne'
                                    , name: 'roundtripStandDifficultyOne'
                                    , label: '起身困难'
                                    , data: [
                                    {
                                        value: 1
                                        , label: '起身困难'
                                    }
                                ]
                                }
                            ]
                        },
                        {
                            type: 'col',
                            col: 2,
                            item:[
                                {
                                    type: 'cbox'
                                    , id: 'roundtripTurnDifficultyOne'
                                    , name: 'roundtripTurnDifficultyOne'
                                    , label: '转身困难'
                                    , data: [
                                    {
                                        value: 1
                                        , label: '转身困难'
                                    }
                                ]
                                }
                            ]
                        },
                        {
                            type: 'col',
                            col:2,
                            item:[
                                {
                                    type: 'cbox'
                                    , id: 'roundtripBradykinesiaOne'
                                    , name: 'roundtripBradykinesiaOne'
                                    , label: '运动迟缓'
                                    , data: [
                                    {
                                        value: 1
                                        , label: '运动迟缓'
                                    }
                                ]
                                }
                            ]
                        },
                        {
                            type: 'col',
                            col:2,
                            item:[
                                {
                                    type: 'cbox'
                                    , id: 'roundtripPostureAbnormalOne'
                                    , name: 'roundtripPostureAbnormalOne'
                                    , label: '姿势异常'
                                    , data: [
                                    {
                                        value: 1
                                        , label: '姿势异常'
                                    }
                                ]
                                }
                            ]
                        },
                        {
                            type: 'col',
                            col:4,
                            item:[
                                {
                                    type: 'cbox'
                                    , id: 'roundtripOtherOne'
                                    , name: 'roundtripOtherOne'
                                    , label: '其他'
                                    , data: [
                                    {
                                        value: 1
                                        , label: '其他'
                                        , ex: {
                                        id: 'roundtripOtherDetailOne'
                                        , name: 'roundtripOtherDetailOne'
                                    }
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
                                    ,radio:true
                                    , id: 'gaitImpressOne'
                                    , name: 'gaitImpressOne'
                                    , label: '专家1步态印象：'
                                    , data: [
                                    {
                                        value: 1
                                        , label: '专家1步态印象：'
                                        , unit: '正常'
                                    }
                                    , {
                                        value: 0
                                        , unit: '异常'
                                        , ex: {
                                            id: 'gaitImpressDetailOne'
                                            , name: 'gaitImpressDetailOne'
                                        }
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
                            col: 2,
                            item:[
                                {
                                    type: 'cbox'
                                    , id: 'roundtripStandDifficultyTwo'
                                    , name: 'roundtripStandDifficultyTwo'
                                    , label: '起身困难'
                                    , data: [
                                    {
                                        value: 1
                                        , label: '起身困难'
                                    }
                                ]
                                }
                            ]
                        },
                        {
                            type: 'col',
                            col: 2,
                            item:[
                                {
                                    type: 'cbox'
                                    , id: 'roundtripTurnDifficultyTwo'
                                    , name: 'roundtripTurnDifficultyTwo'
                                    , label: '转身困难'
                                    , data: [
                                    {
                                        value: 1
                                        , label: '转身困难'
                                    }
                                ]
                                }
                            ]
                        },
                        {
                            type: 'col',
                            col:2,
                            item:[
                                {
                                    type: 'cbox'
                                    , id: 'roundtripBradykinesiaTwo'
                                    , name: 'roundtripBradykinesiaTwo'
                                    , label: '运动迟缓'
                                    , data: [
                                    {
                                        value: 1
                                        , label: '运动迟缓'
                                    }
                                ]
                                }
                            ]
                        },
                        {
                            type: 'col',
                            col:2,
                            item:[
                                {
                                    type: 'cbox'
                                    , id: 'roundtripPostureAbnormalTwo'
                                    , name: 'roundtripPostureAbnormalTwo'
                                    , label: '姿势异常'
                                    , data: [
                                    {
                                        value: 1
                                        , label: '姿势异常'
                                    }
                                ]
                                }
                            ]
                        },
                        {
                            type: 'col',
                            col:4,
                            item:[
                                {
                                    type: 'cbox'
                                    , id: 'roundtripOtherTwo'
                                    , name: 'roundtripOtherTwo'
                                    , label: '其他'
                                    , data: [
                                    {
                                        value: 1
                                        , label: '其他'
                                        , ex: {
                                        id: 'roundtripOtherDetailTwo'
                                        , name: 'roundtripOtherDetailTwo'
                                    }
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
                                    ,radio:true
                                    , id: 'gaitImpressTwo'
                                    , name: 'gaitImpressTwo'
                                    , label: '专家2步态印象：'
                                    , data: [
                                    {
                                        value: 1
                                        , label: '专家2步态印象：'
                                        , unit: '正常'
                                    }
                                    , {
                                        value: 0
                                        , unit: '异常'
                                        , ex: {
                                            id: 'gaitImpressDetailTwo'
                                            , name: 'gaitImpressDetailTwo'
                                        }
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
                            col: 2,
                            item:[
                                {
                                    type: 'cbox'
                                    , id: 'roundtripStandDifficultyThree'
                                    , name: 'roundtripStandDifficultyThree'
                                    , label: '起身困难'
                                    , data: [
                                    {
                                        value: 1
                                        , label: '起身困难'
                                    }
                                ]
                                }
                            ]
                        },
                        {
                            type: 'col',
                            col: 2,
                            item:[
                                {
                                    type: 'cbox'
                                    , id: 'roundtripTurnDifficultyThree'
                                    , name: 'roundtripTurnDifficultyThree'
                                    , label: '转身困难'
                                    , data: [
                                    {
                                        value: 1
                                        , label: '转身困难'
                                    }
                                ]
                                }
                            ]
                        },
                        {
                            type: 'col',
                            col:2,
                            item:[
                                {
                                    type: 'cbox'
                                    , id: 'roundtripBradykinesiaThree'
                                    , name: 'roundtripBradykinesiaThree'
                                    , label: '运动迟缓'
                                    , data: [
                                    {
                                        value: 1
                                        , label: '运动迟缓'
                                    }
                                ]
                                }
                            ]
                        },
                        {
                            type: 'col',
                            col:2,
                            item:[
                                {
                                    type: 'cbox'
                                    , id: 'roundtripPostureAbnormalThree'
                                    , name: 'roundtripPostureAbnormalThree'
                                    , label: '姿势异常'
                                    , data: [
                                    {
                                        value: 1
                                        , label: '姿势异常'
                                    }
                                ]
                                }
                            ]
                        },
                        {
                            type: 'col',
                            col:4,
                            item:[
                                {
                                    type: 'cbox'
                                    , id: 'roundtripOtherThree'
                                    , name: 'roundtripOtherThree'
                                    , label: '其他'
                                    , data: [
                                    {
                                        value: 1
                                        , label: '其他'
                                        , ex: {
                                        id: 'roundtripOtherDetailThree'
                                        , name: 'roundtripOtherDetailThree'
                                    }
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
                                    ,radio:true
                                    , id: 'gaitImpressThree'
                                    , name: 'gaitImpressThree'
                                    , label: '专家3步态印象：'
                                    , data: [
                                    {
                                        value: 1
                                        , label: '专家3步态印象：'
                                        , unit: '正常'
                                    }
                                    , {
                                        value: 0
                                        , unit: '异常'
                                        , ex: {
                                            id: 'gaitImpressDetailThree'
                                            , name: 'gaitImpressDetailThree'
                                        }
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