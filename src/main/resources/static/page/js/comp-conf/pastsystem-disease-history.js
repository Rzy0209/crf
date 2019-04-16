//既往全身疾病史及用药情况 CrfFormPastNerveHistory
var CompPastSystem = function () {
    function show() {
        return {
            type: 'container',
            item: [
                {
                    type:'h3',
                    text: '既往全身疾病史及用药情况'
                }, {
                    type: 'hr'
                },{
                    type:'row',
                    item: [
                        {
                            type: 'col',
                            col: 12,
                            item: [
                                {
                                    text:'既往是否有以下脑血管病高危因素：'
                                }
                            ]
                        }

                    ]
                },
                {
                    type:'row',
                    item: [
                        {
                            type: 'col',
                            col: 6,
                            item:[
                                {
                                    type: 'cbox',
                                    radio:true,
                                    id: 'diabetes',
                                    name: 'diabetes',
                                    label: '糖尿病：',
                                    data:[
                                        {
                                            value:0,
                                            label: '糖尿病:',
                                            unit:'无'
                                        } ,
                                        {
                                            value:1,
                                            unit:'有',
                                            ex:{
                                                type: 'num',
                                                id: 'diabetesTime',
                                                label: '病程：',
                                                name: 'diabetesTime',
                                                unit: '年，',
                                                css:{width:'50px'}
                                            }
                                        }

                                    ]
                                }
                            ]
                        }, {
                            type: 'col',
                            col: 4,
                            item: [
                                {
                                    type: 'cbox',
                                    radio:true,
                                    id: 'treat',
                                    name: 'treat',
                                    label: '治疗：',
                                    data:[
                                        {
                                            value:0,
                                            label: '治疗:',
                                            unit:'无'
                                        } ,
                                        {
                                            value:1,
                                            unit:'有',
                                            ex:{
                                                id: 'diabetestreat',
                                                name: 'diabetestreat',
                                                css:{width:'50px'}
                                            }

                                        }

                                    ]
                                }
                            ]
                        }
                    ]
                },
                {
                    type:'row',
                    item: [
                        {
                            type: 'col',
                            col: 6,
                            item:[
                                {
                                    type: 'cbox',
                                    radio:true,
                                    id: 'hypertension',
                                    name: 'hypertension',
                                    label: '高血压：',
                                    data:[
                                        {
                                            value:0,
                                            label: '高血压:',
                                            unit:'无'
                                        } ,
                                        {
                                            value:1,
                                            unit:'有',
                                            ex:{
                                                type: 'num',
                                                id: 'hypertensionTime',
                                                label: '病程：',
                                                name: 'hypertensionTime',
                                                unit: '年，',
                                                css:{width:'50px'}
                                            }
                                        }

                                    ]
                                }
                            ]
                        }, {
                            type: 'col',
                            col: 4,
                            item: [
                                {
                                    type: 'cbox',
                                    radio:true,
                                    id: 'treat',
                                    name: 'treat',
                                    label: '治疗：',
                                    data:[
                                        {
                                            value:0,
                                            label: '治疗:',
                                            unit:'无'
                                        } ,
                                        {
                                            value:1,
                                            unit:'有',
                                            ex:{
                                                id: 'hypertensiontreat',
                                                name: 'hypertensiontreat',
                                                css:{width:'50px'}
                                            }

                                        }

                                    ]
                                }
                            ]
                        }
                    ]
                },
                {
                    type:'row',
                    item: [
                        {
                            type: 'col',
                            col: 12,
                            item:[
                                {
                                    type: 'cbox',
                                    radio:true,
                                    id: 'atrialFibrillation',
                                    name: 'atrialFibrillation',
                                    label: '心房颤动/瓣膜性心脏病/先天性心脏病/充血性心力衰竭：',
                                    data:[
                                        {
                                            value:0,
                                            label: '心房颤动/瓣膜性心脏病/先天性心脏病/充血性心力衰竭:',
                                            unit:'无'
                                        } ,
                                        {
                                            value:1,
                                            unit:'有',
                                            ex:{
                                                type: 'num',
                                                id: 'atrialFibrillationTime',
                                                label: '病程：',
                                                name: 'atrialFibrillationTime',
                                                unit: '年，',
                                                css:{width:'50px'}
                                            }
                                        }

                                    ]
                                }
                            ]
                        }
                    ]
                },
                {
                    type:'row',
                    item: [
                        {
                            type: 'col',
                            col: 6
                        }, {
                            type: 'col',
                            col: 6,
                            item: [
                                {
                                    type: 'cbox',
                                    radio:true,
                                    id: 'treat',
                                    name: 'treat',
                                    label: '治疗：',
                                    data:[
                                        {
                                            value:0,
                                            label: '治疗:',
                                            unit:'无'
                                        } ,
                                        {
                                            value:1,
                                            unit:'有',
                                            ex:{
                                                id: 'atrialFibrillationtreat',
                                                name: 'atrialFibrillationtreat',
                                                css:{width:'50px'}
                                            }

                                        }

                                    ]
                                }
                            ]
                        }
                    ]
                },
                {
                    type:'row',
                    item: [
                        {
                            type: 'col',
                            col: 6,
                            item:[
                                {
                                    type: 'cbox',
                                    radio:true,
                                    id: 'dyslipidemia',
                                    name: 'dyslipidemia',
                                    label: '血脂异常：',
                                    data:[
                                        {
                                            value:0,
                                            label: '血脂异常:',
                                            unit:'无'
                                        } ,
                                        {
                                            value:1,
                                            unit:'有',
                                            ex:{
                                                type: 'num',
                                                id: 'dyslipidemiaTime',
                                                label: '病程：',
                                                name: 'dyslipidemiaTime',
                                                unit: '年，',
                                                css:{width:'50px'}
                                            }
                                        }

                                    ]
                                }
                            ]
                        }, {
                            type: 'col',
                            col: 4,
                            item: [
                                {
                                    type: 'cbox',
                                    radio:true,
                                    id: 'treat',
                                    name: 'treat',
                                    label: '治疗：',
                                    data:[
                                        {
                                            value:0,
                                            label: '治疗:',
                                            unit:'无'
                                        } ,
                                        {
                                            value:1,
                                            unit:'有',
                                            ex:{
                                                id: 'dyslipidemiatreat',
                                                name: 'dyslipidemiatreat',
                                                css:{width:'50px'}
                                            }

                                        }

                                    ]
                                }
                            ]
                        }
                    ]
                },
                {
                    type:'row',
                    item: [
                        {
                            type: 'col',
                            col: 6,
                            item:[
                                {
                                    type: 'cbox',
                                    radio:true,
                                    id: 'hyperuricemia',
                                    name: 'hyperuricemia',
                                    label: '高尿酸血症：',
                                    data:[
                                        {
                                            value:0,
                                            label: '高尿酸血症:',
                                            unit:'无'
                                        } ,
                                        {
                                            value:1,
                                            unit:'有',
                                            ex:{
                                                type: 'num',
                                                id: 'hyperuricemiaTime',
                                                label: '病程：',
                                                name: 'hyperuricemiaTime',
                                                unit: '年，',
                                                css:{width:'50px'}
                                            }
                                        }

                                    ]
                                }
                            ]
                        }, {
                            type: 'col',
                            col: 4,
                            item: [
                                {
                                    type: 'cbox',
                                    radio:true,
                                    id: 'treat',
                                    name: 'treat',
                                    label: '治疗：',
                                    data:[
                                        {
                                            value:0,
                                            label: '治疗:',
                                            unit:'无'
                                        } ,
                                        {
                                            value:1,
                                            unit:'有',
                                            ex:{
                                                id: 'hyperuricemiatreat',
                                                name: 'hyperuricemiatreat',
                                                css:{width:'50px'}
                                            }

                                        }

                                    ]
                                }
                            ]
                        }
                    ]
                },
                {
                    type:'row',
                    item: [
                        {
                            type: 'col',
                            col:7,
                            item:[
                                {
                                    type: 'cbox',
                                    radio:true,
                                    id: 'hyperhomocysteinemia',
                                    name: 'hyperhomocysteinemia',
                                    label: '高同型半胱氨酸血症：',
                                    data:[
                                        {
                                            value:0,
                                            label: '高同型半胱氨酸血症:',
                                            unit:'无'
                                        } ,
                                        {
                                            value:1,
                                            unit:'有',
                                            ex:{
                                                type: 'num',
                                                id: 'hyperhomocysteinemiaTime',
                                                label: '病程：',
                                                name: 'hyperhomocysteinemiaTime',
                                                unit: '年，',
                                                css:{width:'50px'}
                                            }
                                        }

                                    ]
                                }
                            ]
                        }, {
                            type: 'col',
                            col: 4,
                            item: [
                                {
                                    type: 'cbox',
                                    radio:true,
                                    id: 'treat',
                                    name: 'treat',
                                    label: '治疗：',
                                    data:[
                                        {
                                            value:0,
                                            label: '治疗:',
                                            unit:'无'
                                        } ,
                                        {
                                            value:1,
                                            unit:'有',
                                            ex:{
                                                id: 'hyperhomocysteinemiatreat',
                                                name: 'hyperhomocysteinemiatreat',
                                                css:{width:'50px'}
                                            }

                                        }

                                    ]
                                }
                            ]
                        }
                    ]
                },
                {
                    type:'row',
                    item: [
                        {
                            type: 'col',
                            col:8,
                            item:[
                                {
                                    type: 'cbox',
                                    radio:true,
                                    id: 'oralContraceptives',
                                    name: 'oralContraceptives',
                                    label: '口服避孕药/绝经后激素治疗：',
                                    data:[
                                        {
                                            value:0,
                                            label: '口服避孕药/绝经后激素治疗:',
                                            unit:'无'
                                        } ,
                                        {
                                            value:1,
                                            unit:'有',
                                            ex:{
                                                type: 'num',
                                                id: 'oralContraceptivesTime',
                                                label: '病程：',
                                                name: 'oralContraceptivesTime',
                                                unit: '年，',
                                                css:{width:'50px'}
                                            }
                                        }

                                    ]
                                }
                            ]
                        }, {
                            type: 'col',
                            col: 4,
                            item: [
                                {
                                    type: 'cbox',
                                    radio:true,
                                    id: 'treat',
                                    name: 'treat',
                                    label: '治疗：',
                                    data:[
                                        {
                                            value:0,
                                            label: '治疗:',
                                            unit:'无'
                                        } ,
                                        {
                                            value:1,
                                            unit:'有',
                                            ex:{
                                                id: 'oralContraceptivestreat',
                                                name: 'oralContraceptivestreat',
                                                css:{width:'50px'}
                                            }

                                        }

                                    ]
                                }
                            ]
                        }
                    ]
                },
                {
                    type:'row',
                    item: [
                        {
                            type: 'col',
                            col:11,
                            item:[
                                {
                                    type: 'cbox',
                                    radio:true,
                                    id: 'otherArterialDiseases',
                                    name: 'otherArterialDiseases',
                                    label: '其他动脉疾病（冠心病、颈动脉斑块、外周动脉疾病）：',
                                    data:[
                                        {
                                            value:0,
                                            label: '其他动脉疾病（冠心病、颈动脉斑块、外周动脉疾病）:',
                                            unit:'无'
                                        } ,
                                        {
                                            value:1,
                                            unit:'有',
                                            ex:{
                                                type: 'num',
                                                id: 'otherArterialDiseasesTime',
                                                label: '病程：',
                                                name: 'otherArterialDiseasesTime',
                                                unit: '年，',
                                                css:{width:'50px'}
                                            }
                                        }

                                    ]
                                }
                            ]
                        }
                    ]
                },
                {
                    type:'row',
                    item: [
                        {
                            type: 'col',
                            col:6
                        }, {
                            type: 'col',
                            col: 4,
                            item: [
                                {
                                    type: 'cbox',
                                    radio:true,
                                    id: 'treat',
                                    name: 'treat',
                                    label: '治疗：',
                                    data:[
                                        {
                                            value:0,
                                            label: '治疗:',
                                            unit:'无'
                                        } ,
                                        {
                                            value:1,
                                            unit:'有',
                                            ex:{
                                                id: 'oralContraceptivestreat',
                                                name: 'oralContraceptivestreat',
                                                css:{width:'50px'}
                                            }

                                        }

                                    ]
                                }
                            ]
                        }
                    ]
                },
                {
                    type:'row',
                    item: [
                        {
                            type: 'col',
                            col: 6,
                            item:[
                                {
                                    type: 'cbox',
                                    radio:true,
                                    id: 'migraine',
                                    name: 'migraine',
                                    label: '偏头痛：',
                                    data:[
                                        {
                                            value:0,
                                            label: '偏头痛:',
                                            unit:'无'
                                        } ,
                                        {
                                            value:1,
                                            unit:'有',
                                            ex:{
                                                type: 'num',
                                                id: 'migraineTime',
                                                label: '病程：',
                                                name: 'migraineTime',
                                                unit: '年，',
                                                css:{width:'50px'}
                                            }
                                        }

                                    ]
                                }
                            ]
                        }, {
                            type: 'col',
                            col: 4,
                            item: [
                                {
                                    type: 'cbox',
                                    radio:true,
                                    id: 'treat',
                                    name: 'treat',
                                    label: '治疗：',
                                    data:[
                                        {
                                            value:0,
                                            label: '治疗:',
                                            unit:'无'
                                        } ,
                                        {
                                            value:1,
                                            unit:'有',
                                            ex:{
                                                id: 'migrainetreat',
                                                name: 'migrainetreat',
                                                css:{width:'50px'}
                                            }

                                        }

                                    ]
                                }
                            ]
                        }
                    ]
                },
                {
                    type:'row',
                    item: [
                        {
                            type: 'col',
                            col: 6,
                            item:[
                                {
                                    type: 'cbox',
                                    radio:true,
                                    id: 'sleepDisorderedBreathing',
                                    name: 'sleepDisorderedBreathing',
                                    label: '睡眠呼吸紊乱：',
                                    data:[
                                        {
                                            value:0,
                                            label: '睡眠呼吸紊乱:',
                                            unit:'无'
                                        } ,
                                        {
                                            value:1,
                                            unit:'有',
                                            ex:{
                                                type: 'num',
                                                id: 'sleepDisorderedBreathingTime',
                                                label: '病程：',
                                                name: 'sleepDisorderedBreathingTime',
                                                unit: '年，',
                                                css:{width:'50px'}
                                            }
                                        }

                                    ]
                                }
                            ]
                        }, {
                            type: 'col',
                            col: 4,
                            item: [
                                {
                                    type: 'cbox',
                                    radio:true,
                                    id: 'treat',
                                    name: 'treat',
                                    label: '治疗：',
                                    data:[
                                        {
                                            value:0,
                                            label: '治疗:',
                                            unit:'无'
                                        } ,
                                        {
                                            value:1,
                                            unit:'有',
                                            ex:{
                                                id: 'sleepDisorderedBreathingtreat',
                                                name: 'sleepDisorderedBreathingtreat',
                                                css:{width:'50px'}
                                            }

                                        }

                                    ]
                                }
                            ]
                        }
                    ]
                },
                {
                    type:'row',
                    item: [
                        {
                            type: 'col',
                            col: 12,
                            item: [
                                {
                                    text:'是否有以下既往病史：'
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
                                    type: 'cbox',
                                    id:'trauma',
                                    name: 'trauma',
                                    data: [
                                        {
                                            unit: '外伤',
                                            value: '1'

                                        }
                                    ]
                                },
                                {
                                    type: 'cbox',
                                    id:'fracture',
                                    name: 'fracture',
                                    data: [
                                        {
                                            unit: '骨折',
                                            value: '1'
                                        }
                                    ]
                                },
                                {
                                    type: 'cbox',
                                    id:'malformation',
                                    name: 'malformation',
                                    data: [
                                        {
                                            unit: '畸形',
                                            value: '1'

                                        }
                                    ]
                                },
                                {
                                    type: 'cbox',
                                    id:'pain',
                                    name: 'pain',
                                    data: [
                                        {
                                            unit: '疼痛',
                                            value: '1'

                                        }
                                    ]
                                },
                                {
                                    type: 'cbox',
                                    id:'other',
                                    name: 'other',
                                    data: [
                                        {
                                            unit: '其他',
                                            value: '1',
                                            ex: {
                                                id:'otherDescribe',
                                                name: 'otherDescribe',
                                                css:{width:'200px'}
                                            }

                                        }
                                    ]
                                }
                            ]
                        }

                    ]
                }
            ]
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