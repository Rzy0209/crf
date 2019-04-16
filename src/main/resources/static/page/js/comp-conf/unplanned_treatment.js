//患者接受非计划治疗记录 CrfFormRecordsOfUnplannedTreatment CrfFormRecordsOfUnplannedTreatmentDetail
var CompUT = function () {
    function show() {
        return {
            type: 'container',
            item: [{
                type: 'h3',
                text: '患者接受非计划治疗记录'
            }, {
                type: 'row',
                item: [
                    {
                        type: 'col',
                        col: 12,
                        item: [{
                            type: 'table',
                            columns: [
                               '非计划治疗序数',
                                '非计划治疗时间（年/月/日）',
                                '药物名称',
                                '剂量（mg/d）'
                            ],
                            data: [
                                [
                                    {
                                        text:'1'
                                    },
                                     {
                                        label: ' ',
                                        type: 'date',
                                        id: 'medicas_0_treatmentDate',
                                        name: 'medicas[0].treatmentDate',

                                    },
                                     {
                                        type: 'input',
                                        id: 'medicas_0_drugName',
                                        name: 'medicas[0].drugName'
                                    },
                                     {
                                        type: 'input',
                                        id: 'medicas_0_dose',
                                        name: 'medicas[0].dose'
                                    }
                                ], [
                                    {
                                        text:'2'
                                    },
                                     {
                                        label: ' ',
                                        type: 'date',
                                        id: 'medicas_1_treatmentDate',
                                        name: 'medicas[1].treatmentDate',

                                    },
                                     {
                                        type: 'input',
                                        id: 'medicas_1_drugName',
                                        name: 'medicas[1].drugName'
                                    },
                                     {
                                        type: 'input',
                                        id: 'medicas_1_dose',
                                        name: 'medicas[1].dose'
                                    }
                                ], [
                                    {
                                        text:'3'
                                    },
                                     {
                                        label: ' ',
                                        type: 'date',
                                        id: 'medicas_2_treatmentDate',
                                        name: 'medicas[2].treatmentDate',

                                    },
                                     {
                                        type: 'input',
                                        id: 'medicas_2_drugName',
                                        name: 'medicas[2].drugName'
                                    },
                                     {
                                        type: 'input',
                                        id: 'medicas_2_dose',
                                        name: 'medicas[2].dose'
                                    }
                                ], [
                                    {
                                        text:'4'
                                    },
                                     {
                                        label: ' ',
                                        type: 'date',
                                        id: 'medicas_3_treatmentDate',
                                        name: 'medicas[3].treatmentDate',

                                    },
                                     {
                                        type: 'input',
                                        id: 'medicas_3_drugName',
                                        name: 'medicas[3].drugName'
                                    },
                                     {
                                        type: 'input',
                                        id: 'medicas_3_dose',
                                        name: 'medicas[3].dose'
                                    }
                                ], [
                                    {
                                        text:'5'
                                    },
                                     {
                                         label: ' ',
                                        type: 'date',
                                        id: 'medicas_4_treatmentDate',
                                        name: 'medicas[4].treatmentDate',

                                    },
                                     {
                                        type: 'input',
                                        id: 'medicas_4_drugName',
                                        name: 'medicas[4].drugName'
                                    },
                                     {
                                        type: 'input',
                                        id: 'medicas_4_dose',
                                        name: 'medicas[4].dose'
                                    }
                                ]
                            ]
                        }]
                    }
                ]
            }, {
                type: 'row',
                item: [{
                    type: 'col',
                    col: 12,
                    item: [{
                        text: ''
                    }]
                }]
            }, {
                type: 'row',
                item: [
                    {
                        type: 'col',
                        col: 12,
                        item: [{
                            type: 'table',
                            columns: [
                                {
                                    text: '非计划治疗序数',
                                    field: 'col1'
                                },
                                {
                                    text: '非计划治疗后不适',
                                    field: 'col2'
                                },
                                {
                                    text: '是否改动（如有改动，请注明原因）',
                                    field: 'col3'
                                }
                            ],
                            data: [
                                {
                                    col1: '1',
                                    col2: {
                                        type: 'cbox',
                                        radio:true,
                                        name: 'changes[0].discomfort',
                                        id:'changes_0_discomfort',
                                        data: [
                                            {
                                                value: 0,
                                                label: '无'
                                            }, {
                                                value: 1,
                                                label: '有',
                                                ex: {
                                                    id: 'changes_0_discomfortDescribe',
                                                    name: 'changes[0].discomfortDescribe'
                                                }
                                            }
                                        ]
                                    },
                                    col3: {
                                        type: 'cbox',
                                        radio:true,
                                        name: 'changes[0].changes',
                                        id:'changes_0_changes',
                                        data: [
                                            {
                                                value: 0,
                                                label: '否'
                                            }, {
                                                value: 1,
                                                label: '是',
                                                ex: {
                                                    id: 'changes_0_changeReason',
                                                    name: 'changes[0].changeReason'
                                                }
                                            }
                                        ]
                                    }
                                }, {
                                    col1: '2',
                                    col2: {
                                        type: 'cbox',
                                        radio:true,
                                        name: 'changes[1].discomfort',
                                        id:'changes_1_discomfort',
                                        data: [
                                            {
                                                value: 0,
                                                label: '无'
                                            }, {
                                                value: 1,
                                                label: '有',
                                                ex: {
                                                    id: 'changes_1_discomfortDescribe',
                                                    name: 'changes[1].discomfortDescribe'
                                                }
                                            }
                                        ]
                                    },
                                    col3: {
                                        type: 'cbox',
                                        radio:true,
                                        name: 'changes[1].changes',
                                        id:'changes_1_changes',
                                        data: [
                                            {
                                                value: 0,
                                                label: '否'
                                            }, {
                                                value: 1,
                                                label: '是',
                                                ex: {
                                                    id: 'changes_1_changeReason',
                                                    name: 'changes[1].changeReason'
                                                }
                                            }
                                        ]
                                    }
                                }, {
                                    col1: '3',
                                    col2: {
                                        type: 'cbox',
                                        radio:true,
                                        name: 'changes[2].discomfort',
                                        id: 'changes_2_discomfort',
                                        data: [
                                            {
                                                value: 0,
                                                label: '无'
                                            }, {
                                                value: 1,
                                                label: '有',
                                                ex: {
                                                    id: 'changes_2_discomfortDescribe',
                                                    name: 'changes[2].discomfortDescribe'
                                                }
                                            }
                                        ]
                                    },
                                    col3: {
                                        type: 'cbox',
                                        radio:true,
                                        name: 'changes[2].changes',
                                        id: 'changes_2_changes',
                                        data: [
                                            {
                                                value: 0,
                                                label: '否'
                                            }, {
                                                value: 1,
                                                label: '是',
                                                ex: {
                                                    id: 'changes_2_changeReason',
                                                    name: 'changes[2].changeReason'
                                                }
                                            }
                                        ]
                                    }
                                }, {
                                    col1: '4',
                                    col2: {
                                        type: 'cbox',
                                        radio:true,
                                        name: 'changes[3].discomfort',
                                        id: 'changes_3_discomfort',
                                        data: [
                                            {
                                                value: 0,
                                                label: '无'
                                            }, {
                                                value: 1,
                                                label: '有',
                                                ex: {
                                                    id: 'changes_3_discomfortDescribe',
                                                    name: 'changes[3].discomfortDescribe'
                                                }
                                            }
                                        ]
                                    },
                                    col3: {
                                        type: 'cbox',
                                        radio:true,
                                        name: 'changes[3].changes',
                                        id: 'changes_3_changes',
                                        data: [
                                            {
                                                value: 0,
                                                label: '否'
                                            }, {
                                                value: 1,
                                                label: '是',
                                                ex: {
                                                    id: 'changes_3_changeReason',
                                                    name: 'changes[3].changeReason'
                                                }
                                            }
                                        ]
                                    }
                                }, {
                                    col1: '5',
                                    col2: {
                                        type: 'cbox',
                                        radio:true,
                                        name: 'changes[4].discomfort',
                                        id: 'changes_4_discomfort',
                                        data: [
                                            {
                                                value: 0,
                                                label: '无'
                                            }, {
                                                value: 1,
                                                label: '有',
                                                ex: {
                                                    id: 'changes_4_discomfortDescribe',
                                                    name: 'changes[4].discomfortDescribe'
                                                }
                                            }
                                        ]
                                    },
                                    col3: {
                                        type: 'cbox',
                                        radio:true,
                                        id: 'changes_4_changes',
                                        name: 'changes[4].changes',
                                        data: [
                                            {
                                                value: 0,
                                                label: '否'
                                            }, {
                                                value: 1,
                                                label: '是',
                                                ex: {
                                                    id: 'changes_4_changeReason',
                                                    name: 'changes[4].changeReason'
                                                }
                                            }
                                        ]
                                    }
                                }
                            ]
                        }]
                    }
                ]
            }, {
                type: 'row',
                item: [{
                    type: 'col',
                    col: 12,
                    item: [{
                        text: ''
                    }]
                }]
            }, {
                type: 'row',
                item: [{
                    type: 'col',
                    col: 12,
                    item: [{
                        text: '备注：'
                    }]
                }]
            }, {
                type: 'row',
                item: [{
                    type: 'col',
                    col: 12,
                    item: [{
                        type: 'textarea',
                        id: 'remark',
                        name: 'remark'
                    }]
                }]
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