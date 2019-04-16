//入选标准
var CompInclusioCreiteria = function () {
    function show() {
        return {
            type: 'container',
            item: [
                {
                    type:'h3',
                    text: '入选标准'
                }, {
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
                            col: 12,
                            item: [
                                {
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
                                            col2: '年龄≥45周岁，≤80周岁',
                                            col3:{
                                                type: 'cbox',
                                                radio:true,
                                                id: 'oldGteSixty',
                                                name: 'oldGteSixty',
                                                data :[
                                                    {
                                                        value : '1'
                                                    }
                                                ]
                                            },
                                            col4:{
                                                type: 'cbox',
                                                radio:true,
                                                id: 'oldGteSixty',
                                                name: 'oldGteSixty',
                                                data :[
                                                    {
                                                        value : '0'
                                                    }
                                                ]
                                            }
                                        },
                                        {
                                            col1: '2',
                                            col2:  '符合2015年《中国脑血管疾病分类》标准，诊断为非急性非致残性脑血管病，改良Rankin量表(Modified Rankin Scale, mRS)≤2分。',
                                            col3: {
                                                type: 'cbox',
                                                radio:true,
                                                id: 'nonAcuteAndNonDisabledDisease',
                                                name: 'nonAcuteAndNonDisabledDisease',
                                                data :[
                                                    {
                                                        value : '1'
                                                    }
                                                ]
                                            },
                                            col4: {
                                                type: 'cbox',
                                                radio:true,
                                                id: 'nonAcuteAndNonDisabledDisease',
                                                name: 'nonAcuteAndNonDisabledDisease',
                                                data :[
                                                    {
                                                        value : '0'
                                                    }
                                                ]
                                            }
                                        },
                                        {
                                            col1: '3',
                                            col2: '意识清醒，无严重视觉、听觉或精神障碍，能配合完成认知评估。',
                                            col3: {
                                                type: 'cbox',
                                                radio: true,
                                                id: 'conscious',
                                                name: 'conscious',
                                                data: [
                                                    {
                                                        value: '1'
                                                    }
                                                ]
                                            },
                                            col4: {
                                                type: 'cbox',
                                                radio: true,
                                                id: 'conscious',
                                                name: 'conscious',
                                                data: [
                                                    {
                                                        value: '0'
                                                    }
                                                ]
                                            }
                                        },
                                        {
                                            col1:  '4',
                                            col2: '能独立站立及行走，不需要他人帮助或使用辅助器，能配合完成步态评估',
                                            col3: {
                                                type: 'cbox',
                                                radio:true,
                                                id: 'canBeIndependent',
                                                name: 'canBeIndependent',
                                                data :[
                                                    {
                                                        value : '1'
                                                    }
                                                ]
                                            },
                                            col4: {
                                                type: 'cbox',
                                                radio:true,
                                                id: 'canBeIndependent',
                                                name: 'canBeIndependent',
                                                data :[
                                                    {
                                                        value : '0'
                                                    }
                                                ]
                                            }
                                        }
                                    ],
                                    end:'如果以上任何一项回答“否”,则受试者不能进入该研究。'
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