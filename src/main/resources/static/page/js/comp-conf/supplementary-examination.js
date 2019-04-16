// 既往辅助检查（非必须，如有请记录）
var CompSupplementaryExamination = function () {
    function show() {
        return {
            type: 'container',
            item: [
                {
                    type:'h3',
                    text: '既往辅助检查（非必须，如有请记录）'
                }, {
                    type: 'hr',
                    css: {
                        color: 'blue'
                    }
                },
                {
                    type:'row',
                    item: [
                        {
                            type:  'col',
                            col: 3,
                            item: [
                                {
                                    type: 'cbox',
                                    radio:true,
                                    id: 'headCT',
                                    name: 'headCT',
                                    label: '头颅CT：',
                                    data:[
                                        {
                                            value:0,
                                            label: '头颅CT:无',
                                        }
                                    ]
                                },
                                {
                                    type: 'cbox',
                                    radio:true,
                                    id: 'headCtOurHospital',
                                    name: 'headCtOurHospital',
                                    data:[
                                        {
                                            value:0,
                                            label: '本院',
                                        }
                                    ]
                                },
                                {
                                    type: 'cbox',
                                    radio:true,
                                    id: 'headCtOuterHospital',
                                    name: 'headCtOuterHospital',
                                    data:[
                                        {
                                            value:0,
                                            label: '外院',
                                        }
                                    ]
                                }
                            ]
                        },
                        {
                            type: 'col',
                            col: 6,
                            item:[
                                {
                                    type: 'date',
                                    label: '检查日期：',
                                    name: 'headCtInspectDate',
                                    id: 'headCtInspectDate'
                                }
                            ]
                        }
                    ]
                },
                {
                    type: 'row',
                    item:  [
                        {
                            type: 'col',
                            col: 6,
                            item: [
                                {
                                    type: 'cbox',
                                    radio:true,
                                    id: 'headCtAbnormal',
                                    name: 'headCtAbnormal',
                                    label: '头颅CT：',
                                    data:[
                                        {
                                            value:1,
                                            label:'正常'
                                        } ,
                                        {
                                            value:0,
                                            label:'异常',
                                            ex: {
                                                id: 'headCtAbnormalDescribe',
                                                name: 'headCtAbnormalDescribe',
                                                css:{width:'200px'}
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
                            type:  'col',
                            col: 3,
                            item: [
                                {
                                    type: 'cbox',
                                    radio:true,
                                    id: 'headMri',
                                    name: 'headMri',
                                    label: '头颅MRI：',
                                    data:[
                                        {
                                            value:0,
                                            label: '头颅MRI:无',
                                        }
                                    ]
                                },
                                {
                                    type: 'cbox',
                                    radio:true,
                                    id: 'headMriOurHospital',
                                    name: 'headMriOurHospital',
                                    data:[
                                        {
                                            value:0,
                                            label: '本院',
                                        }
                                    ]
                                },
                                {
                                    type: 'cbox',
                                    radio:true,
                                    id: 'headMriOuterHospital',
                                    name: 'headMriOuterHospital',
                                    data:[
                                        {
                                            value:0,
                                            label: '外院',
                                        }
                                    ]
                                }
                            ]
                        },
                        {
                            type: 'col',
                            col:6,
                            item:[
                                {
                                    type: 'date',
                                    label: '检查日期：',
                                    name: 'headMriInspectDate',
                                    id: 'headMriInspectDate'
                                }
                            ]
                        }
                    ]
                },
                {
                    type: 'row',
                    item:  [
                        {
                            type: 'col',
                            col: 6,
                            item: [
                                {
                                    type: 'cbox',
                                    radio:true,
                                    id: 'headMriAbnormal',
                                    name: 'headMriAbnormal',
                                    label: '头颅MRI：',
                                    data:[
                                        {
                                            value:1,
                                            label:'正常'
                                        } ,
                                        {
                                            value:0,
                                            label:'异常',
                                            ex: {
                                                id: 'headMriAbnormalDescribe',
                                                name: 'headMriAbnormalDescribe',
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
        }
    }

    function rules() {
        return []
    }

    return {
        show: show,
        rules: rules
    }
}()