//头颅核磁共振
var CompHeadNMR = function () {
    function show() {
        return {
            type: 'container',
            item:[
                {
                    type:'h3',
                    text: '头颅核磁共振'
                }, {
                    type: 'hr',
                    css: {
                        color: 'blue'
                    }
                },
                {
                    type: 'row',
                    item:[
                        {
                            type: 'col',
                            col:12,
                            item: [
                                {
                                    type: 'cbox',
                                    radio:true,
                                    id: 'headMri',
                                    name:'headMri',
                                    data:[
                                        {
                                            label: '无',
                                            value: '0'
                                        },
                                        {
                                            label: '有',
                                            value: '1',
                                            unit: '（请填写下表）'
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
                            col:12,
                            item: [
                                {
                                    label: '检查时间：',
                                    type: 'date',
                                    name: 'examDate',
                                    id:'examDate'
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
                                    css: {
                                        width: '300px',
                                    },
                                    id:'examResult',
                                    name:'examResult',
                                    label: '结果：',

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