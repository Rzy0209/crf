!function ($) {
    var _defaultIgnore={label:null,unit:null,item:null};
    function _class(clazz){
        var cls=[];
        if(typeof clazz=='string'){
            cls=clazz.split(',');
        }else if(null!=clazz){
            cls=clazz;
        }
        return cls;
    }
    //组件
    var comps={
        //数字
        num:function (conf) {
            var length=conf.length,id=conf.id||conf.name;
            var arr=[];
            var hdn=CompUtil.comp($.extend({},conf,{type:'inputHidden'},_defaultIgnore));
            hdn.change(function (e,t) {
                var value = hdn.val();
                var newStr = value.split("").reverse().join("");
                // 倒叙
                $($('.el-num-link-'+id+'.number').toArray().reverse()).each(function (index,domEle) {
                    if(!!newStr[index]){
                        $(this).val(newStr[index]);
                    }
                });
                // 处理小数点num类型
                if(value.indexOf(".")>-1){
                    var replace = value.replace(".","");
                    $('.el-num-link-'+id+'.number').each(function (index,domEle) {
                        if(!!replace[index]){
                            $(this).val(replace[index]);
                        }
                    });
                }
            });
            arr.push(hdn);
            //前置
            if(conf.label){
                arr.push(CompUtil.comp({text:conf.label}));
            }
            if(length>0){
                var clazz=['el-num-link-'+id,'number'];
                var clastr=['el-num-link-'+id,'string'];
                for(var i=0;i<length;i++){
                    var nel=CompUtil.comp({type:'inputText',maxlength:1,class:clazz});
                    //按键上弹事件
                    nel.keyup(function () {
                        methods.numberKeyUp($(this),hdn,clazz);
                    });
                    nel.focus(function () {
                        $(this).select();
                    });
                    arr.push(nel);
                }
                //Double类型处理
                if(conf.scale>0){
                    arr.push(CompUtil.comp({text:'.',class:clastr}));
                    // arr.push(CompUtil.comp({text:'.'}));
                    for(var i=0;i<conf.scale;i++){
                        var nel=CompUtil.comp({type:'inputText',maxlength:1,class:clazz});
                        //按键上弹事件
                        nel.keyup(function () {
                            methods.numberKeyUp($(this),hdn,clazz);
                        });
                        nel.focus(function () {
                            $(this).select();
                        });
                        arr.push(nel);
                    }
                }
            }
            //后置
            if(conf.unit){
                arr.push(CompUtil.comp({text:conf.unit}));
            }
            return $(arr);
        },
        //table
        table:function (conf) {
            var data=conf.data,end=conf.end,columns=conf.columns;
            var clazz=_class(conf.class);
            clazz.push('table');
            var tbl=CompUtil.comp($.extend({},conf,{type:'table',class:clazz},_defaultIgnore));
            if(!!columns){
                // 表头
                var head=tbl.find('thead');
                var headRow=CompUtil.comp({type:'tr'});
                for(var i in columns){
                    var column=columns[i];
                    var text;
                    if(typeof column == 'string'){
                        text=column;
                    }else {
                        text=column.text;
                    }
                    var cell=CompUtil.comp({type:'th',text:text});
                    headRow.append(cell);
                }
                head.append(headRow);
            }

            var body=tbl.find('tbody');
            if (!!data) {
                for (var j in data) {
                    var dataRow = CompUtil.comp({type: 'tr'});
                    var rowData=data[j];
                    var colLength;
                    if(rowData instanceof  Array){
                        colLength = rowData.length;
                        for(var k in rowData){
                            var colCellInfo=rowData[k];
                            if(!colCellInfo){
                                continue;
                            }
                            var cell=getCell(colCellInfo);
                            dataRow.append(cell);
                        }
                    }else {
                        colLength = columns.length;
                        for (var k in columns) {
                            var colText = data[j][columns[k].field];
                            if(!colText){
                                continue;
                            }
                            var cell=getCell(colText);
                            dataRow.append(cell);
                        }
                    }
                    body.append(dataRow);
                }
            }
            if(!!end){
                var endRow = CompUtil.comp({type:'tr'});
                var cell=CompUtil.comp({type:'td',colspan:colLength,text:end,style:'text-align:center;'});
                endRow.append(cell);
                body.append(endRow);
            }

            /**
             * 生成TD
             * @param cellData
             * @returns {*}
             */
            function getCell(cellData){
                var cell;
                if(typeof  cellData == 'string'){
                    cell = CompUtil.comp({type: 'td',text: cellData});
                }else {
                    var colspan=cellData.colspan;
                    cell=CompUtil.comp({type: 'td', colspan: colspan});
                    cell.comp($.extend(cellData,{colspan:null}));
                }
                return cell;
            }
            return tbl;
        },
        cbox:function (conf) {
            var name=conf.name,data=conf.data,value=conf.value;
            var id=conf.id|| conf.name;
            var radio = conf.radio || false;
            var exClazz = 'el-cbox-input-' + id;
            var arr=[];
            var start = 0;
            if(!!conf.start){
                start = conf.start
            }
            $(data).each(function(i,v){
                var id = exClazz + '-' + (i + start);
                var exId = '',checked;
                var cbxConf={type: 'checkBox',class:'comp-cbox', value: v.value, text: v.text, name: name, id: id};
                if (v.ex) {
                    if(v.ex instanceof Array){
                        exId='_ex_'+id;
                    }else {
                        exId = v.ex.id || v.ex.name||'';
                    }
                }
                if(v.checked){
                    cbxConf.checked='checked';
                }
                var _box=CompUtil.comp({type:'div',class:'comp-cbox'});
                //前缀
                if(v.label){
                    _box.append(CompUtil.comp({type:'label',class:'comp-cbox-label',html:v.label,for:id}));
                }
                var cb = CompUtil.comp(cbxConf);
                if(exId){
                    cb.data('ex',exId);
                }
                cb.click(function () {
                    var _exid=$(this).data('ex');
                    if ($(this).is(':checked')) {
                        if (radio) {
                            $('[name="' + name + '"]').prop('checked', false);
                            $(this).prop('checked', true);
                            $('.' + exClazz).prop('display', 'none');
                        }
                        if(_exid){
                            $('#_cbx_ex_cont_'+_exid).css('display','inline');
                        }
                    }else{
                        if(_exid){
                            $('#_cbx_ex_cont_'+_exid).css('display','none');
                        }
                    }
                });
                cb.change(function () {
                    var _exid=$(this).data('ex');
                    if ($(this).is(':checked')) {
                        if (radio) {
                            $('[name="' + name + '"]').prop('checked', false);
                            $(this).prop('checked', true);
                            $('.' + exClazz).css('display', 'none');
                        }
                        if(_exid){
                            $('#_cbx_ex_cont_'+_exid).css('display','inline');
                        }
                    }
                });
                _box.append(cb);

                //后缀
                if(v.unit){
                    _box.append(CompUtil.comp({type:'label',class:'comp-cbox-label',html:v.unit,for:id}));
                }
                //填写信息
                if(v.ex){
                    var _box_ex=CompUtil.comp({type:'div',id:'_cbx_ex_cont_'+exId,css:{display:'none'},class:exClazz});
                    if(v.ex instanceof Array){
                        $.each(v.ex,function(i,item){
                            _fillExInfo(item,i,_box_ex);
                        })
                    }else{
                        _fillExInfo(v.ex,null,_box_ex);
                    }
                    _box.append(_box_ex);
                }
                arr.push(_box);
            });

            /**
             * 填充扩展数据
             * @param ex
             * @param i
             * @param par
             * @private
             */
            function _fillExInfo(ex,i,par) {
                i=i?'':i+'_';
                if(ex.label){
                    par.append(CompUtil.comp({id:'cbx_lbl_'+i+ex.id,text:ex.label}));
                }
                var clazz=['input'];
                par.comp($.extend({},{type:'inputText',class:clazz},ex));
                if(ex.unit){
                    par.append(CompUtil.comp({id:'cbx_lbl_'+i+ex.id,text:ex.unit}));
                }
            }
            return $(arr);
        },
        row:function (conf) {
            return CompUtil.comp($.extend({},conf,{type:'bs-row'},_defaultIgnore));
        },
        col:function (conf) {
            return CompUtil.comp($.extend({},conf,{type:'bs-col'},_defaultIgnore));
        },
        container:function (conf) {
            return CompUtil.comp($.extend({},conf,{type:'bs-container'},_defaultIgnore));
        },
        image:function (conf){
            var id=conf.id||conf.name;
            var clazz=['el-input-image-'+id,'input'];
            var arr=[];
            //前置
            if(conf.label){
                arr.push(CompUtil.comp({id:'image_lbl_'+id,text:conf.label}));
            }
            let fileObj = CompUtil.comp({type:'image',class:clazz,id:id,name:conf.name});
            arr.push(fileObj);
            fileObj.change(function () {
               var url = conf.ajax.url,crfId=conf.ajax.crfId,subId=conf.ajax.subId,typeId=conf.ajax.typeId;
               // 上傳文件接口
                var file = fileObj.val();
                if (file == '') {
                    alert('请选择要上传的文件夹');
                    return;
                }
                var options = {
                    url: url,
                    type: 'post',
                    data:{
                        crfIdUploadPic:crfId,
                        subjectIdUploadPic:subId,
                        typeIdUploadPic:typeId,
                        fileId:conf.name
                    },
                    success: function (data) {
                        if (data) {
                            alert("上传成功");
                        }else {
                            alert("上传失败");
                        }
                    }
                };
                $("#form-info").ajaxSubmit(options);
            });
            if(conf.unit){
                arr.push(CompUtil.comp({id:'image_unit_'+id,text:conf.unit}));
            }
            return $(arr);
        },
        input:function (conf) {
            var id=conf.id||conf.name;
            var clazz=['el-input-link-'+id,'input'];
            var arr=[];
            //前置
            if(conf.label){
                arr.push(CompUtil.comp({text:conf.label}));
            }
            var _comp_conf={type:'inputText',class:clazz,id:id,name:conf.name};
            if(conf.css){
                _comp_conf.css=conf.css;
            }
            arr.push(CompUtil.comp(_comp_conf));
            //后置
            if(conf.unit){
                arr.push(CompUtil.comp({text:conf.unit}));
            }
            return $(arr);
        },
        date: function (conf) {
            var el=comps.input(conf);
            if (!conf.format) {
                conf.format = 'yyyy-mm-dd';
                conf.minView = 2;
            }else if(conf.format.indexOf("hh:ii")>0){
                conf.minView = 0
            }
            var dateEl=(!!conf.label)?el[1]:el[0];
            if(dateEl){
                dateEl.datetimepicker({
                    language:'zh-CN',
                    format:conf.format,
                    minView:conf.minView,
                    todayBtn: "linked",
                    changeMonth: true,
                    autoclose: true,
                    todayHighlight: true
                });
            }
            return el;
        },
        select: function (conf){
            var id=conf.id||conf.name;
            var clazz=['el-select-'+id,'form-control','form-select'];
            var arr=[];
            //前置
            if(conf.label){
                arr.push(CompUtil.comp({text:conf.label}));
            }
            arr.push(CompUtil.comp({type:'select',class:clazz,id:id,data:conf.data,name:id}));
            //后置
            if(conf.unit){
                arr.push(CompUtil.comp({text:conf.unit}));
            }
            return $(arr);
        }
    };
    var comp=function(){
        var args=arguments;
        var conf,type;
        switch (args.length) {
            case 0:
                console.error('组件创建失败，参数缺失');
                return;
            case 1:
                conf=args[0];
                type=conf.type;
                break;
            case 2:
                type=args[0];
                conf=args[1];
                break;
            default:
                type=args[0];
                conf=args[1];
                break;
        }
        var _that=$(this);
        var result;
        if(!!comps[type]){
            result=comps[type](conf);
        }else {
            result=CompUtil.comp(conf)
        }
        //子类处理
        if(conf.item){
            $(conf.item).each(function (i,d) {
                    $(result).comp(d);
                }
            );
        }
        result.each(function () {
            _that.append($(this));
        });
        return result;
    };
    var methods={
        /**
         * 数值框按键弹起赋值
         * @param curEl 当前el
         * @param valEl 赋值el
         * @param clazz class识别
         */
        numberKeyUp:function (curEl,valEl,clazz) {
            var els=$('.'+clazz[0]),val='';
            var thisVal=curEl.val();
            //判断是否可转换为数值
            if(isNaN(thisVal)||' '==thisVal||''==thisVal){
                //非数值-清空
                curEl.val('');
            }else{
                //聚焦下一个
                var _next=curEl.next();
                if(_next){
                    _next.focus();
                    var cla = _next.attr('class');
                    if(cla!=null && cla!='' && cla!=undefined && cla.indexOf("string")>-1){
                        //聚焦下一个
                        if(_next.next()){
                            _next.next().focus();
                        }
                    }
                }
            }
            //赋值
            els.each(function () {
                var _cv=$(this).val();
                var tagName=$(this).prop('tagName').toLowerCase();
                if('span'==tagName){
                    val+='.';
                }else {
                    val+=_cv;
                }
            });

            valEl.val(val);
        },
        /**
         * 日期组件number类型时按键弹起赋值
         * @param curEl 当前el
         * @param valEl 赋值el
         * @param clazz class识别
         */
        dateKeyUp: function (curEl, valEl, clazz,yearLength) {
            var inputType = clazz[1];
            if ('time' != inputType) {
                curEl.val(curEl.val().replace(/\D/g, ''))
            }
            var valLen = curEl.val().toString().length;
            if ('number' == inputType || ('dateShort' == inputType && valLen == 2) ||
                ('dateLong' == inputType && valLen == 4) || ('time' == inputType & valLen > 1)) {
                //聚焦下一个
                var _next = curEl.next();
                if (_next) {
                    _next.focus();
                    //年月日class中包含string，判断class中是否包含，包含聚焦下一个，不包含不处理
                    var cla = _next.attr('class');
                    if(cla!=null && cla!='' && cla!=undefined && cla.indexOf("string")>-1){
                        //聚焦下一个
                        if(_next.next()){
                            _next.next().focus();
                        }
                    }
                }
                //赋值
                var els = $('.' + clazz[0]), val = '';
                var curDate = new Date;
                var year = curDate.getFullYear().toString();
                //赋值
                els.each(function () {
                    var _cv = $(this).val();
                    var type = $(this)[0].className.split(' ')[1];
                    switch (type) {
                        case 'number':
                            if (!_cv) {
                                _cv = '0';
                            }
                            break;
                        case 'dateShort':
                            if (!_cv) {
                                _cv = '00';
                            } else if (_cv.length == 1) {
                                _cv = '0' + _cv.toString();
                            }
                            break;
                        case 'dateLong':
                            if (!_cv) {
                                _cv = year;
                            } else if (_cv.length < 4) {
                                var len = _cv.length;
                                _cv = year.substring(0, len) + _cv
                            }
                            break;
                        case 'time':
                            if (!_cv) {
                                _cv = ' 00:00';
                            }else{
                                _cv = ' ' + _cv;
                            }
                            break;
                        default:
                            break;
                    }
                    val += _cv;
                });
                if (yearLength == 2) {
                    var yearStart = year.substring(0, 2);
                    val = yearStart + val;
                }
                var valYearAndMonth = val.substring(0, 6);
                val = val.replace(valYearAndMonth, valYearAndMonth + '-');
                var valYear = val.substring(0, 4);
                val = val.replace(valYear, valYear + '-');
                val = val.replace(/-00/g, '-01');
                valEl.val(val);
            }
        }
    };
    var extend=function(){
        var args=arguments;
        switch (args.length) {
            case 1:
                $.extend(comps,args[0]);
                break;
            case 2:
                comps[args[0]]=args[1];
                break;
            default:
                break;
        }
    };


    $.fn.extend({
        "comp":comp
    });
    $.extend({
        "comp":{
            "reg":extend
        }
    })
}(jQuery);