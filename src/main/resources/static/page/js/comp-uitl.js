var CompUtil = function ($) {
    //定义组件填充
    $.fn.extend({
        "_conf_set": function (c) {
            var el = $(this);
            for (var i in c) {
                var v = c[i];
                if (null === v) {
                    continue;
                }
                switch (i) {
                    //class 添加
                    case 'class':
                        if(v instanceof Array){
                            for(var j=0;j<v.length;j++){
                                el.addClass(v[j]);
                            }
                        }else {
                            el.addClass(v);
                        }
                        break;
                    //style
                    case 'css':
                        el.css(v);
                        break;
                    case 'html':
                        el.html(v);
                        break;
                    case 'text':
                        el.text(v);
                        break;
                    //disabled
                    case 'disabled':
                        el.attr('disabled', 'disabled');
                        break;
                    //值
                    case 'val':
                        el.val(v);
                        break;
                    //绑定数据
                    case 'bind':
                        if(_.isArray(v)){
                            _.forEach(v,function (_val) {
                                el.data(_val.key,_val.val);
                            });
                        }else {
                            if(_.has(v,'key')){
                                el.data(v.key,v.val);
                            }else {
                                el.data('data',v);
                            }
                        }
                        break;
                    //事件
                    case 'click':
                    case 'change':
                    case 'focus':
                    case 'blur':
                    case 'keyup':
                    case 'keydown':
                    case 'select':
                        el[i](v);
                        break;
                    //默认处理
                    default:
                        el.attr(i, v);
                        break;
                }
            }
        }
    });
    /**
     * 定义基础组件-生成function
     */
    var _genComp = function (conf) {
        var type = conf.type, data = conf.data;
        var el;
        //定义基础组件
        switch (type) {
            //无类型
            case null:
            case undefined:
            case '':
                el=$(document.createElement('span'));
                break;
            //文本输入
            case 'inputText':
                el = $('<input type="text">');
                break;
            case 'button':
                el=$('<button type="button"></button>');
                break;
            //下拉框
            case 'select':
                var option = '';
                if (data) {
                    for (var i = 0; i < data.length; i++) {
                        option += '<option value="' + data[i].key + '" ';
                        if(data[i].selected){
                            option+='selected="selected"';
                        }
                        option+='>' + data[i].name + '</option>'
                    }
                }
                el = $('<select>' + option + '</select>');
                break;
            //隐藏域
            case 'inputHidden':
                el = $('<input type="hidden">');
                break;
            //    table
            case 'table':
                el = $('<table><thead></thead><tbody></tbody></table>');
                break;
            //    checkbox
            case 'checkBox':
                el = $('<input type="checkbox">');
                break;
                //row
            case 'bs-row':
                el=$('<div class="row"></div>');
                break;
            case 'bs-col':
                var col=conf.col||12;
                conf.col=null;
                el=$('<div class="input-group col-'+col+'"></div>');
                break;
            case 'bs-container':
                el=$('<div class="container"></div>');
                break;
            // case 'bs-date':
            //     el=$('<input type="text"/>年<input type="text"/>月<input type="text"/>日<input type="hidden">');
            //     break;
            case 'image':
                el=$('<input type="file">');
                break;
            default:
                el=$(document.createElement(type));
                break;
        }
        //属性配置
        el._conf_set($.extend(conf, {type: null, data: null}));
        return el;
    };

    //定义工具类
    $.extend({
        vtool:{
            n2i:function (obj,pri) {
                if(!obj)return;
                if(null==pri)pri='';
                if(!obj.id&&!!obj.name){
                    obj.id=pri+obj.name
                }
                if(!!obj.item){
                    var oi=obj.item;
                    for (var i=0;i<oi.length;i++){
                        $.vtool.n2i(oi[i],pri);
                    }
                }
            }
        }
    });

    return {
        comp: _genComp
    }
}(jQuery);