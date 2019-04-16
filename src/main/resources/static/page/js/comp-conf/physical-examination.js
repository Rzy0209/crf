// 患者体格检查
var CompPhysicalExamination = function () {
    function show() {
        return {
            type: 'container',
            item: [
                {
                    type:'h3',
                    text: '患者体格检查'
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
                                    type: 'input',
                                    label:'阳性体征（若无阳性体征请填写无）:',
                                    id: 'positiveSigns',
                                    name: 'positiveSigns',
                                    css:{width:'200px'}
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