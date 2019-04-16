// 其他相关病史
var CompORML = function () {
    function show() {
        return {
            type: 'container',
                item: [
                {
                    type:'h3',
                    text: '其他相关病史'
                },
                {
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
                            col: 6,
                            item: [
                                {
                                    type: 'h4',
                                    text: '个人史'

                                }
                            ]
                        },
                        {
                            type: 'col',
                            col: 6,
                            item: [
                                {
                                    type: 'h4',
                                    text: '家族史'

                                }
                            ]
                        }
                    ]
                },
                {
                    type: 'row',
                    item:[
                        {
                            type: 'col',
                            col: 6,
                            item: [
                                {
                                    type: 'cbox',
                                    radio:true,
                                    id: 'smoke',
                                    name: 'smoke',
                                    label: '吸烟：',
                                    data:[
                                        {
                                            value:0,
                                            label: '吸烟:',
                                            unit:'否'
                                        } ,
                                        {
                                            value:1,
                                            unit:'是',
                                            ex: {
                                                id: 'smokeNumber',
                                                name: 'smokeNumber',
                                                unit: '支/天，',
                                                css:{width:'50px'}
                                            }
                                        }

                                    ]
                                },{
                                    type: 'num',
                                    id: 'smokeYear',
                                    name: 'smokeYear',
                                    length: 2,
                                    unit: '年'
                                }
                            ]
                        },
                        {
                            type: 'col',
                            col: 6,
                            item: [
                                {
                                    type: 'cbox',
                                    radio:true,
                                    id: 'cerebralVascularDisease',
                                    name: 'cerebralVascularDisease',
                                    label: '脑血管病家族史：',
                                    data: [
                                        {
                                            value: 1,
                                            label: '脑血管病家族史:',
                                            unit: '无'
                                        },
                                        {
                                            value: 2,
                                            unit: '有'
                                        }
                                    ]
                                }

                            ]
                        }
                    ]
                },
                {
                    type: 'row',
                    item:[
                        {
                            type: 'col',
                            col: 6,
                            item: [
                                {
                                    type: 'cbox',
                                    radio:true,
                                    id: 'drinWine',
                                    name: 'drinWine',
                                    label: '饮酒：',
                                    data:[
                                        {
                                            value:0,
                                            label: '饮酒:',
                                            unit:'否'
                                        } ,
                                        {
                                            value:1,
                                            unit:'是',
                                            ex: {
                                                id: 'drinWineWeight',
                                                name: 'drinWineWeight',
                                                unit: '克酒精/天，',
                                                css:{width:'50px'}
                                            }
                                        }
                                    ]
                                },{
                                    type: 'num',
                                    id: 'drinWineYear',
                                    name: 'drinWineYear',
                                    length: 2,
                                    unit: '年'
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