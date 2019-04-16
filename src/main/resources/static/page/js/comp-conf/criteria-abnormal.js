//异常受试者入选标准 CrfFormInclusionCriteriaAbnormal
var CompICA = function () {
    function show() {
        return {
            type: 'container',
            item: [{
                type: 'h3',
                text: '异常受试者入选标准'
            }, {
                type: 'row',
                item: [
                    {
                        type: 'col',
                        item: [{
                            type: 'table',
                            columns: [
                                {
                                    text: '',
                                    field: 'col1'
                                },
                                {
                                    text: '根据病史和体格检查，请确认以下内容：',
                                    field: 'col2'
                                },
                                {
                                    text: '是',
                                    field: 'col3'
                                },
                                {
                                    text: '否',
                                    field: 'col4'
                                }
                            ],
                            data: [
                                {
                                    col1: '1',
                                    col2: '年龄18～80周岁周岁。',
                                    col3: {
                                        type: 'cbox',
                                        radio:true,
                                        name: 'ageStandard',
                                        data: [
                                            {
                                                value: 1,
                                            }
                                        ]
                                    },
                                    col4: {
                                        type: 'cbox',
                                        radio:true,
                                        name: 'ageStandard',
                                        data: [
                                            {
                                                value: 0,
                                            }
                                        ]
                                    }
                                }, {
                                    col1: '2',
                                    col2: '在复旦大学附属中山医院神经内科门诊就诊，神经内科专家组医生评估其步态和认知功能异常，诊断为患病的受试者。',
                                    col3: {
                                        type: 'cbox',
                                        radio:true,
                                        name: 'sick',
                                        data: [
                                            {
                                                value: 1,
                                            }
                                        ]
                                    },
                                    col4: {
                                        type: 'cbox',
                                        radio:true,
                                        name: 'sick',
                                        data: [
                                            {
                                                value: 0,
                                            }
                                        ]
                                    }
                                }, {
                                    col1: '3',
                                    col2: '意识清醒，无严重视觉、听觉或精神障碍，能配合完成认知评估。',
                                    col3: {
                                        type: 'cbox',
                                        radio:true,
                                        name: 'cognitiveAssessment',
                                        data: [
                                            {
                                                value: 1,
                                            }
                                        ]
                                    },
                                    col4: {
                                        type: 'cbox',
                                        radio:true,
                                        name: 'cognitiveAssessment',
                                        data: [
                                            {
                                                value: 0,
                                            }
                                        ]
                                    }
                                }, {
                                    col1: '4',
                                    col2: '能独立站立及行走，不需要他人帮助或使用辅助器，能配合完成步态评估。',
                                    col3: {
                                        type: 'cbox',
                                        radio:true,
                                        name: 'gaitAssessment',
                                        data: [
                                            {
                                                value: 1,
                                            }
                                        ]
                                    },
                                    col4: {
                                        type: 'cbox',
                                        radio:true,
                                        name: 'gaitAssessment',
                                        data: [
                                            {
                                                value: 0,
                                            }
                                        ]
                                    }
                                }
                            ],
                            end: '如果以上任何一项回答“否”,则受试者不能进入该研究。'
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