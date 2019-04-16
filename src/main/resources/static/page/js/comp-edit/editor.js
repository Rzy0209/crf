var crfId = "123456789";
var jsonstr = {};
var singleComp="";
!function ($) {
    //扩展编辑
    $.fn.extend({
        'editorMenu':function (config,target) {
            var _that=$(this);
            _that.empty();
            $.each(config,function (i,conf) {
                var el=$('<button type="button" data-role="'+conf.role+'" class="list-group-item list-group-item-action">'
                    +(conf.icon?('<i class="'+conf.icon+'"></i>&nbsp;'):'')
                    +conf.name+'</button>');
                el.click(function () {
                    var _el=$(this);
                    //调用接口向数据库增加记录
                    createComp(_el.data('role'));
                    getJsonStr();
                    //展示
                    var comp = getComp();
                    target.append(comp);
                });
                _that.append(el);
            });
        }
    });
    var editor={
        menu:[
            {name:'单项选择',role:'radio',icon:'fa fa-dot-circle-o'},
            {name:'多项选择',role:'check',icon:'fa fa-check-square-o'},
            {name:'文本',role:'text',icon:'fa fa-sort-alpha-asc'},
            {name:'数值',role:'number',icon:'fa fa-sort-numeric-asc'},
            {name:'时间',role:'time',icon:'fa fa-calendar-minus-o'},
            {name:'标签',role:'label',icon:'fa fa-font'},
            {name:'表格',role:'table',icon:'fa fa-table'}
        ]
    };
    $(function () {
        $('#v-form-item-menu .list-group').editorMenu(editor.menu,$('#v-form-view-content'));
        init();
        var el=$('#v-form-view-content')[0];
        var sortable=Sortable.create(el,{
            onUpdate: function (evt) {
                var oldIndex = evt.oldIndex;
                var newIndex = evt.newIndex;
                var url = '../api/crf/comp/updateSort';
                $.ajax({
                    url:url,
                    type:'post',
                    data:{
                        "oldIndex":oldIndex,
                        "newIndex":newIndex
                    },
                    async:false,
                    success:function (msg) {
                        if(msg == true){
                            init()
                        }else{
                            alert("更新失败")
                        }
                    }
                });
            }
        });
    });
}(jQuery);
function init() {
    getJsonStr();
    var comp = getComp();
    $('#v-form-view-content').append(comp);
};
function createComp(type) {
    var ulElement = document.getElementById('v-form-view-content');
    var liElements = ulElement.children;
    var sort = liElements.length;
    var url = '../api/crf/comp/create';
    $.ajax({
        url:url,
        type:'post',
        data:{
            "sort":sort+1,
            "type":type,
            "crfId":crfId
        },
        async:false,
        success:function (msg) {
        }
    });
};
function getJsonStr() {
    var url = '../api/crf/comp/findOne';
    $.ajax({
        url:url,
        type:'get',
        data:{
            "crfId":crfId
        },
        async:false,
        dataType: 'json',
        success:function (result) {
            jsonstr = result;
        }
    });
};
function getComp() {
    $('#v-form-view-content').html("");
    var json = jsonstr.options;
    var compArr=[];
    for(var i=0;i<json.length;i++){
        var str = json[i];
        var compType = str.compType;
        compArr.push('<div id="comp-'+i+'" data-questionid="');
        compArr.push(str.id);
        compArr.push('" data-index="');
        compArr.push(i);
        compArr.push('" data-formid="');
        compArr.push(str.formId);
        compArr.push('" data-parentid="');
        // compArr.push(conf.parentid);
        compArr.push ('" class="question-body-handler single-text-box visibility-normal" >');
        compArr.push('<i class="question-body-handler option-handle  fa  fa-align-justify" aria-describedby="addInput"></i>')
        compArr.push('<i onclick="deleteComp('+str.id+')" id="icon-trash-'+i+'" class="fa fa-trash" aria-describedby="addInput" style="display: none; margin-left: 6px; font-size: 16px; z-index: 2;"></i>');
        // compArr.push('<i id="icon-copy-'+i+'" class="fa fa-copy" aria-describedby="addInput" style="display: none; margin-left: 6px; font-size: 15px; z-index: 2;"></i>')
        switch (compType){
            case "radio":
                var optionGroup = str.optionGroup;
                var options = optionGroup.options;
                compArr.push('<div>'+str.title+'</div>');
                compArr.push('<div class="richtext"></div>');
                compArr.push('<ul>');
                for(var j=0;j<options.length;j++){
                    compArr.push('<li>');
                    compArr.push('<label>');
                    compArr.push('<input type="radio" name="'+str.id+'" disabled="" value="">');
                    compArr.push(options[j].label);
                    compArr.push('</label>');
                    compArr.push('<div class="media-body"></div>')
                    compArr.push('</li>');
                }
                compArr.push('</ul>');
                break;
            case "check":
                var optionGroup = str.optionGroup;
                var options = optionGroup.options;
                compArr.push('<div>'+str.title+'</div>');
                compArr.push('<div class="richtext"></div>');
                compArr.push('<ul>');
                for(var j=0;j<options.length;j++){
                    compArr.push('<li>');
                    compArr.push('<label>');
                    compArr.push('<input type="checkBox" name="'+str.id+'" disabled="" value="">');
                    compArr.push(options[j].label);
                    compArr.push('</label>');
                    compArr.push('<div class="media-body"></div>')
                    compArr.push('</li>');
                }
                compArr.push('</ul>');
                break;
            case "text":
            case "number":
                compArr.push('<div>'+str.title+'</div>');
                compArr.push('<div class="richtext"></div>');
                compArr.push('<div class="control-group form-group"><div class="controls"><input type="text" class="form-control opentext-input" placeholder="" disabled=""><p class="help-block"></p></div></div>');
                break;
            case "time":
                compArr.push('<div>'+str.title+'</div>');
                compArr.push('<div class="richtext"></div>');
                compArr.push('<span class="time_set_controll"><div> <span class="yearInput"><select data-property="year" class="form-control" disabled=""><option value="-1">请选择</option><option value="2013">2013</option><option value="2014">2014</option><option value="2015">2015</option><option value="2016">2016</option><option value="2017">2017</option><option value="2018">2018</option><option value="2019">2019</option><option value="2020">2020</option><option value="2021">2021</option><option value="2022">2022</option></select><span class="text">年</span></span><span class="monthChoice"><select data-property="month" class="form-control" disabled=""><option value="-1">请选择</option><option value="01">01</option><option value="02">02</option><option value="03">03</option><option value="04">04</option><option value="05">05</option><option value="06">06</option><option value="07">07</option><option value="08">08</option><option value="09">09</option><option value="10">10</option><option value="11">11</option><option value="12">12</option></select><span class="text">月</span></span><span class="dayInput"><select data-property="day" class="form-control" disabled=""><option value="-1">请选择</option><option value="01">01</option><option value="02">02</option><option value="03">03</option><option value="04">04</option><option value="05">05</option><option value="06">06</option><option value="07">07</option><option value="08">08</option><option value="09">09</option><option value="10">10</option><option value="11">11</option><option value="12">12</option><option value="13">13</option><option value="14">14</option><option value="15">15</option><option value="16">16</option><option value="17">17</option><option value="18">18</option><option value="19">19</option><option value="20">20</option><option value="21">21</option><option value="22">22</option><option value="23">23</option><option value="24">24</option><option value="25">25</option><option value="26">26</option><option value="27">27</option><option value="28">28</option><option value="29">29</option><option value="30">30</option><option value="31">31</option></select><span class="text">日</span></span></div><div class="hour_set"><span class="hourSelect"> <select data-property="hour" class="form-control" disabled=""><option value="-1">请选择</option><option value="00">00</option><option value="01">01</option><option value="02">02</option><option value="03">03</option><option value="04">04</option><option value="05">05</option><option value="06">06</option><option value="07">07</option><option value="08">08</option><option value="09">09</option><option value="10">10</option><option value="11">11</option><option value="12">12</option><option value="13">13</option><option value="14">14</option><option value="15">15</option><option value="16">16</option><option value="17">17</option><option value="18">18</option><option value="19">19</option><option value="20">20</option><option value="21">21</option><option value="22">22</option><option value="23">23</option></select><span class="text">时</span></span></div></span>')
                break;
            case "label":
            case "table":
                compArr.push('<div>'+str.title+'</div>');
                compArr.push('<div class="richtext"></div>');
                break;
            default:break;
        }
        compArr.push('</div>');
    }
    var el = $(compArr.join(''));
    el.click(function () {
        var json = jsonstr.options;
        for (var i = 0;i < json.length; i++) {
            if($(this).data("index") == i){
                $('#comp-'+i).css("background","#D8D6D2");
                $('#icon-trash-'+i).css('display','inline-block');
            }else{
                $('#comp-'+i).css("background","#ffffff");
                $('#icon-trash-'+i).css('display','none');
            }
        }
        //显示右侧设置部分
        compSetting($(this).data("questionid"))
        $( ".fz-datepicker" ).datetimepicker({
            minView: 2,
            format: "yyyy-mm-dd",
            language: "zh-CN",
            todayBtn: "linked",
            changeMonth: true,
            autoclose: true,
            todayHighlight: true
        }).on('hide', function(event) {
            event.preventDefault();
            event.stopPropagation();
        });
    })
    return el;
}
function compSetting(id) {
    var json = jsonstr.options;
    //在大json中根据点击的选项id，获取相应的json，用来右侧回显
    for (var i = 0;i < json.length; i++) {
        if(json[i]["id"] == id){
            singleComp = json[i];
        }
    }
    var compType = singleComp.compType;
    var context = "";
    context +='<div class="panel-body singleContentBg conditionContent">'+
        '<div><div class="controls"><span style="color: red;">*</span>' +
        '<label>编号:<i class="fa fa-question-circle"></i></label>' +
        '<span class="errorMsg" style="display: none; color: rgb(255, 0, 0);"></span>' +
        '<input type="text" id="valueCode" class="single-input" value="'+singleComp.valueCode+'"></div>' +
        '<div class="controls"><span style="color: red;">*</span>' +
        '<label>题干:<i class="fa fa-question-circle"></i></label>' +
        '<button type="button" class="btn" style="display: none;">插入答案</button>' +
        '<input type="text" contenteditable="true" id="title" class="single-input replacere" placeholder="请设置题干信息" value="'+singleComp.title+'"></input>' +
        '<span class="errorMsg" style="display: none; color: rgb(255, 0, 0);"></span></div>' +
        '<div class="controls"><label>描述:<i class="fa fa-question-circle"></i></label>' +
        // '<button type="button" class="btn">编辑</button>' +
        '<span class="errorMsg" style="display: none; color: rgb(255, 0, 0);"></span>' +
        '<input type="text" class="single-input" id="label" value="'+singleComp.label+'"></div>' +
        '</div>';
    //text判断显示样式
    var displayType = singleComp.displayType;
    if(compType == 'text'){
        if(displayType =="0"){
            context +='<div><label>显示样式</label><select id="displayType">' +
                '<option value="0" selected>单行文本</option>' +
                '<option value="1">多行文本</option></select></div>';
        }else{
            context +='<div><label>显示样式</label><select id="displayType">' +
                '<option value="0">单行文本</option>' +
                '<option value="1"  selected>多行文本</option></select></div>';
        }
    }
    //判断是否必填
    var required = singleComp.required;
    if(required == true && compType !='label'&& compType !='table'){
        context +='<div class="controls options-box" >' +
            '<input type="checkbox" checked id="required" name="required" class="oper-radio"><label>必填' +
            '<i class="fa fa-question-circle"></i></label></div>';
    }else if (required == false && compType !='label'&& compType !='table'){
        context +='<div class="controls options-box" >' +
            '<input type="checkbox" id="required" name="required" class="oper-radio"><label>必填' +
            '<i class="fa fa-question-circle"></i></label></div>';
    }
    //判断标签类型
    if(compType =='label'){
        labelType = singleComp.labelType;
        if(labelType == "text"){
            context +='<label>标签类型</label>' +
                '<select id="labelType"><option value="text" selected>文字性</option><option value="slice">分割性</option></select>';
        }else{
            context +='<label>标签类型</label>' +
                '<select id="labelType"><option value="text" >文字性</option><option value="slice" selected>分割性</option></select>';
        }
    }
    //判断是否有uk值
    var uk = singleComp.uk;
    if(uk == true){
        context += '<div class="controls options-box">' +
            '<input type="checkbox"  id="uk" name="uk" class="oper-radio" checked><label>允许输入UK' +
            '<i class="fa fa-question-circle"></i></label></div>';
    }else if(uk == false){
        context += '<div class="controls options-box">' +
            '<input type="checkbox"  id="uk" name="uk" class="oper-radio"><label>允许输入UK' +
            '<i class="fa fa-question-circle"></i></label></div>';
    }
    //判断是否可以是小数
    var integer = singleComp.integer;
    if(integer == true){
        context +='<div class="controls options-box">' +
            '<input type="checkbox"  id="integer" name="integer" class="oper-radio" checked><label>允许小数点' +
            '<i class="fa fa-question-circle"></i></label></div>';
    }else if(integer == false){
        context +='<div class="controls options-box">' +
            '<input type="checkbox"  id="integer" name="integer" class="oper-radio"><label>允许小数点' +
            '<i class="fa fa-question-circle"></i></label></div>';
    }
    //判断时间格式
    var format = singleComp.format;
    if(format !='' && format !='undefined'  && format !=undefined){
        if(format == "yyyy-mm-dd HH:mm:ss"){
            context +='<div>时间格式<select id="format"><option value="yyyy-mm-dd HH:mm:ss" selected>yyyy-mm-dd HH:mm:ss</option>' +
                '<option value="yyyy-mm-dd">yyyy-mm-dd</option><option value="HH:mm:ss">HH:mm:ss</option></select></div>';
        }else if(format == "yyyy-mm-dd"){
            context +='<div>时间格式<select id="format"><option value="yyyy-mm-dd HH:mm:ss" >yyyy-mm-dd HH:mm:ss</option>' +
                '<option value="yyyy-mm-dd" selected>yyyy-mm-dd</option><option value="HH:mm:ss">HH:mm:ss</option></select></div>';
        }else if(format == "HH:mm:ss"){
            context +='<div>时间格式<select id="format"><option value="yyyy-mm-dd HH:mm:ss" >yyyy-mm-dd HH:mm:ss</option>' +
                '<option value="yyyy-mm-dd" >yyyy-mm-dd</option><option value="HH:mm:ss" selected>HH:mm:ss</option></select></div>';
        }else{
            context +='<div>时间格式<select id="format"><option value="yyyy-mm-dd HH:mm:ss" selected>yyyy-mm-dd HH:mm:ss</option>' +
                '<option value="yyyy-mm-dd" >yyyy-mm-dd</option><option value="HH:mm:ss">HH:mm:ss</option></select></div>';
        }
    }
    //判断是否有最大值最小值，根据不同的type，时间类型要有日历控件
    if(compType == "time"){
        context +='<div>' +
                    '<div style="margin: 10px 0px;">' +
                        '<div style="display: flex; margin-bottom: 5px;">' +
                            '<span style="margin-right: 10px;">最小值</span>' +
                            '<input name="min" id="min" class="infoInput information institution_input affiliateIpt fz-datepicker"\n' +
                            'autocomplete="off" placeholder="最小值" value="'+singleComp.min+'" type="text">'+
                         '</div>' +
                        '<div style="display: flex; margin-bottom: 5px;">' +
                        '<span style="margin-right: 10px;">最大值</span>' +
                        '<input name="max" id="max" class="infoInput information institution_input affiliateIpt fz-datepicker"\n' +
                        'autocomplete="off" placeholder="最大值" value="'+singleComp.max+'" type="text">'+
                        '</div>' +
                     '</div>' +
                '</div>';
    }else if(compType == 'number'){
        context +='<div><div>最小值<input value="'+(singleComp.min==null?0:singleComp.min)+'" data-property="min" id="min"><span class="errorMsg" style="display: none; color: rgb(255, 0, 0);"></span></div><div>最大值<input value="'+(singleComp.max==null?0:singleComp.max)+'" id="max" data-property="max"><span class="errorMsg" style="display: none; color: rgb(255, 0, 0);"></span></div></div>';
    }else if(compType == "text"){
        context +='<div><div>最小字符数<input value="'+(singleComp.min==null?0:singleComp.min)+'" data-property="min" id="min"><span class="errorMsg" style="display: none; color: rgb(255, 0, 0);"></span></div><div>最大字符数<input id="max" value="'+(singleComp.max==null?0:singleComp.max)+'" data-property="max"><span class="errorMsg" style="display: none; color: rgb(255, 0, 0);"></span></div></div>';
    }
    //判断是table
    if(compType == "table"){
        context +='<div><div style="padding-top:10px;">表格标题<input value="'+singleComp.tableTitle+'" data-property="tableTitle" id="tableTitle"><span class="errorMsg" style="display: none; color: rgb(255, 0, 0);"></span></div>' +
            '<div style="padding-top:10px;">行数<input value="'+singleComp.row+'" data-property="row" id="row"><span class="errorMsg" style="display: none; color: rgb(255, 0, 0);"></span></div>' +
            '<div style="padding-top:10px;">列数<input id="col" value="'+singleComp.col+'" data-property="col"><span class="errorMsg" style="display: none; color: rgb(255, 0, 0);"></span></div></div>';
    }
    //判断有radio单选框
    var optionGroup = singleComp.optionGroup;
    if(optionGroup != undefined){
        var options = optionGroup.options;
        if(options && options.length>0){
            context +='<div class="controls options-box"><label>选项<i class="fa fa-question-circle"></i>' +
                '<span class="errorMsg" style="display: none; color: rgb(255, 0, 0);"></span></label>' +
                '<div id="optionsDiv">';
            for(var j=0;j<options.length;j++){
                context +='<div class="controls options-box">' +
                    '<div class="single-operation-box"><input id="value_'+j+'" type="text" value="'+options[j].valueCode+'" class="single-operation-box-input">' +
                    '<span class="errorMsg" style="display: none; color: rgb(255, 0, 0);"></span>' +
                    '<div class="single-operation pull-right"><ul><li><a>' +
                    '<i class="option-handle fa fa-align-justify" aria-describedby="addInput"></i>' +
                    "<li><a><i class='fa fa-minus-circle' onclick='delOptions(\"" + options[j].id + "\")' aria-describedby='addInput'></i></a></li>" +
                    '</a></li></ul></div>' +
                    '<div class="clearfix"></div><input id="label_'+j+'" type="text" class="single-oper-input" value="'+options[j].label+'">' +
                    '<div class="clearfix"></div><span class="errorMsg" style="display: none; color: rgb(255, 0, 0);"></span></div></div>';
            }
            context +='</div>' +
                '<div class="oper-crumbs"><ul><li><a onclick="addOption()">添加选项</a></li></ul></div><div class="clearfix"></div>';
        }
    }
    //随机选项 横排纵排
    if(compType == "radio" || compType == "check"){
        var random = singleComp.optionGroup.random;
        var optionLayout = singleComp.optionGroup.optionLayout;
        if(random == true){
            context +='<div><label>随机选项</label><input id="random" name="random" type="checkbox" class="oper-radio" checked></div>';
        }else{
            context +='<div><label>随机选项</label><input id="random" name="random" type="checkbox" class="oper-radio" value="on"></div>';
        }
        if(optionLayout == "h"){
            if(compType == "check"){
                context += '<select id="optionLayout"><option value="h" selected>横向排列</option><option value="v">纵向排列</option></select></div>';
            }else{
                context += '<select id="optionLayout"><option value="h" selected>横向排列</option><option value="v">纵向排列</option><option value="d">下拉列表</option></select></div>';
            }
        }else if(optionLayout == "v"){
            if(compType == "check"){
                context += '<select id="optionLayout"><option value="h">横向排列</option><option value="v" selected>纵向排列</option></select></div>';
            }else{
                context += '<select id="optionLayout"><option value="h">横向排列</option><option value="v" selected>纵向排列</option><option value="d">下拉列表</option></select></div>';
            }
        }else{
            context += '<select id="optionLayout"><option value="h">横向排列</option><option value="v">纵向排列</option><option value="d" selected >下拉列表</option></select></div>';
        }
    }
    //是否提交锁定
    var commitLock = singleComp.commitLock;
    if(commitLock == true && compType !='label'&& compType !='table'){
        context +='<div class="controls options-box"><div><p style="padding: 5px 0px;">首次提交锁定<input id="commitLock" name="commitLock" type="checkbox" class="oper-radio" checked></p></div></div>';
    }else if(commitLock == false && compType !='label'&& compType !='table'){
        context +='<div class="controls options-box"><div><p style="padding: 5px 0px;">首次提交锁定<input id="commitLock" name="commitLock" type="checkbox" class="oper-radio"></p></div></div>';
    }
    context +='<div class="formeditor-panel-btn" style="padding-top:10px;"><a class="edit-save-form-btn btn" onclick="saveComp()" style="margin:10px 16px 16px 16px;">保存</a><a class="edit-save-form-btn btn" onclick="cleanComp()" style="margin:10px 16px 16px 16px;">重置</a></div>';
    $("#v-form-view-setting").html(context);
}
function deleteComp(id) {
    var url = '../api/crf/comp/delete';
    $.ajax({
        url:url,
        type:'delete',
        data:{
            "id":id
        },
        success:function (msg) {
            if(msg == true){
                init()
                alert("删除成功")
            }else{
                alert("删除失败")
            }
        }
    });
};
function saveComp() {
    var compType=singleComp.compType;
    var json = {};
    var valueCode = $("#valueCode").val();
    var title = $("#title").val();
    var label = $("#label").val();
    if(valueCode =='' || title == ''){
        alert("基本信息未添加完整，请重新填写")
    }else{
        switch (compType){
            case "text":
                json = {
                    valueCode: valueCode,
                    title: title,
                    label: label,
                    required:$('#required').is(':checked'),
                    min:$('#min').val(),
                    max:$('#max').val(),
                    displayType:$("#displayType").val(),
                    commitLock:$('#commitLock').is(':checked')
                };
                break;
            case "number":
                json = {
                    valueCode: valueCode,
                    title: title,
                    label: label,
                    required:$('#required').is(':checked'),
                    uk:$('#uk').is(':checked'),
                    integer:$('#integer').is(':checked'),
                    min:$('#min').val(),
                    max:$('#max').val(),
                    commitLock:$('#commitLock').is(':checked')
                };
                break;
            case "check":
            case "radio":
                var option = singleComp.optionGroup.options;
                var obj=new Array();;
                for(var i=0;i<option.length;i++){
                    var jsr = {};
                    jsr.label=$("#label_"+i).val();
                    jsr.valueCode = $("#value_"+i).val();
                    obj.push(jsr);
                }
                json = {
                    valueCode: valueCode,
                    title: title,
                    label: label,
                    options : JSON.stringify(obj),
                    optionLayout:$("#optionLayout").val(),
                    random :$('#random').is(':checked'),
                    required:$('#required').is(':checked'),
                    commitLock:$('#commitLock').is(':checked')
                };
                break;
            case "time":
                json = {
                    valueCode: valueCode,
                    title: title,
                    label: label,
                    required:$('#required').is(':checked'),
                    uk:$('#uk').is(':checked'),
                    format:$('#format').val(),
                    min:$('#min').val(),
                    max:$('#max').val(),
                    commitLock:$('#commitLock').is(':checked')
                };
                break;
            case "label":
                json = {
                    valueCode: valueCode,
                    title: title,
                    label: label,
                    labelType:$('#labelType').val()
                };
                break;
            case "table":
                json = {
                    valueCode: valueCode,
                    title: title,
                    label: label,
                    col:$('#col').val(),
                    row:$('#row').val(),
                    tableTitle:$('#tableTitle').val()
                };
                break;
            default:break;
        }
        $.ajax({
            url: "../api/crf/comp/save",
            type: "post",
            dataType: "text",
            data: {
                "id":singleComp.id,
                "type":compType,
                "info": JSON.stringify(json)
            },
            success: function (msg) {
                if(msg == "true"){
                    init();
                    alert("保存成功")
                }else{
                    alert("保存失败")
                }
            }
        });
    }

};
function cleanComp() {
    compSetting(singleComp.id)
};
function addOption() {
    $.ajax({
        url: "../api/crf/comp/addOption",
        type: "post",
        dataType: "text",
        data: {
            "id":singleComp.id
        },
        success: function (msg) {
            init()
            compSetting(singleComp.id)
        }
    });
}
function delOptions(id) {
    var url = '../api/crf/comp/delOption';
    $.ajax({
        url:url,
        type:'delete',
        data:{
            "id":id
        },
        success:function (msg) {
            if(msg == true){
                init()
                compSetting(singleComp.id)
                alert("删除成功")
            }else{
                alert("删除失败")
            }
        }
    });
};
//预览功能
function compPreview() {
    $('#compModal').modal('show');
    //组装模态窗页面内容
    previewComp();
    //日期控件处理

    //表单验证
    validForm();
    //跳转页面
    // window.open("/ecrf/s/preview?crfId="+crfId);
}
function dealDatetimepicker() {

}
function previewComp() {
    var context="";
    context +='<div class="portlet" >' +
        '<form class="form" id="comp_form" style="min-height: 500px;">';
    var json = jsonstr.options;
    for(var i=0;i<json.length;i++){
        var jsr = json[i];
        var compType = jsr.compType;
        switch (compType){
            case "time":
                context +='<div class="form-group row"><div class="col-3" style="text-align:right;">' +
                    '<label class="control-label">'+jsr.title+'' +
                    '</label></div>' +
                    '<div class="col"><input name="time" id="time" class="time-set-input fz-datepicker"' +
                    'autocomplete="off" placeholder="时间选择" value="" type="text"></div></div>';
                break;
            case "label":
                var labelType = jsr.labelType;

                if(labelType =="text"){
                    context +='<div class="form-group row"><div class="col-3" style="text-align:right;">' +
                        '<label class="control-label">'+jsr.title+'' +
                        '</label></div>' +
                        '<div class="col"></div></div>';
                }else{
                    context +='<div class="form-group row"><div class="col-12" style="background-color: #76808E;' +
                        'color: #fff;text-align: center;line-height: 8px;margin-top: 5px;margin-bottom: 5px;">' +
                        '<label class="control-label">'+jsr.title+'' +
                        '</label></div></div>';
                }
                break;
            case "radio":
                var optionGroup = jsr.optionGroup;
                var optionLayout = optionGroup.optionLayout;
                context +='<div class="form-group row"><div class="col-3" style="text-align:right;">' +
                    '<label class="control-label">'+jsr.title+'</label></div>';
                if(optionLayout =="v"){
                    //纵着排
                    context +='<div><ul class="imgul">';
                    if(optionGroup != undefined){
                        var options = optionGroup.options;
                        if(options && options.length>0){
                            for(var j=0;j<options.length;j++){
                                context +='<li class="">' +
                                    '<label class="defLabel" for="'+options[j].id+'">' +
                                    '<input type="radio" name="'+jsr.id+'" id="'+options[j].id+'" value="">' +
                                    '<span class="replaceInput"><i></i></span><span class="selectText">'+options[j].label+'</span></label>' +
                                    '<div class="media-body singleArea open-show-undefined" title="" style="width: 0px;"></div>' +
                                    '</li>';
                            }
                        }
                    }
                    context +='</ul></div></div>';
                }else if(optionLayout == "h"){
                    //横着排
                    context +='<div><ul class="noimgul">';
                    if(optionGroup != undefined){
                        var options = optionGroup.options;
                        if(options && options.length>0){
                            for(var j=0;j<options.length;j++){
                                context +='<li class="">' +
                                    '<label class="defLabel" for="'+options[j].id+'">' +
                                    '<input type="radio" name="'+jsr.id+'" id="'+options[j].id+'" value="">' +
                                    '<span class="replaceInput"><i></i></span><span class="selectText">'+options[j].label+'</span></label>' +
                                    '<div class="media-body singleArea open-show-undefined" title="" style="width: 0px;"></div>' +
                                    '</li>';
                            }
                        }
                    }
                    context +='</ul></div></div>';
                }else{
                    context +='<div class="col"><select class="bs-select form-control" tabindex="-98" id="'+jsr.id+'" name="'+jsr.id+'">'
                    if(optionGroup != undefined){
                        var options = optionGroup.options;
                        if(options && options.length>0){
                            for(var j=0;j<options.length;j++){
                                context +='<option value="'+options[j].valueCode+'">'+options[j].label+'</option>';
                            }
                        }
                    }
                    context +='</select></div></div>';
                }
                break;
            case "check":
                var optionGroup = jsr.optionGroup;
                var optionLayout = optionGroup.optionLayout;
                context +='<div class="form-group row"><div class="col-3" style="text-align:right;">' +
                    '<label class="control-label">'+jsr.title+'</label></div>';
                if(optionLayout =="v"){
                    //纵着排
                    context +='<div><ul class="imgul">';
                    if(optionGroup != undefined){
                        var options = optionGroup.options;
                        if(options && options.length>0){
                            for(var j=0;j<options.length;j++){
                                context +='<li class="">' +
                                    '<label class="defLabel" for="'+options[j].id+'">' +
                                    '<input type="checkbox" name="'+jsr.id+'" id="'+options[j].id+'" value="">' +
                                    '<span class="replaceInput"><i></i></span><span class="selectText">'+options[j].label+'</span></label>' +
                                    '<div class="media-body singleArea open-show-undefined" title="" style="width: 0px;"></div>' +
                                    '</li>';
                            }
                        }
                    }
                    context +='</ul></div></div>';
                }else if(optionLayout == "h"){
                    //横着排
                    context +='<div><ul class="noimgul">';
                    if(optionGroup != undefined){
                        var options = optionGroup.options;
                        if(options && options.length>0){
                            for(var j=0;j<options.length;j++){
                                context +='<li class="">' +
                                    '<label class="defLabel" for="'+options[j].id+'">' +
                                    '<input type="checkbox" name="'+jsr.id+'" id="'+options[j].id+'" value="">' +
                                    '<span class="replaceInput"><i></i></span><span class="selectText">'+options[j].label+'</span></label>' +
                                    '<div class="media-body singleArea open-show-undefined" title="" style="width: 0px;"></div>' +
                                    '</li>';
                            }
                        }
                    }
                    context +='</ul></div></div>';
                }
                break;
            case "text":
                var displayType = jsr.displayType;
                context +='<div class="form-group row"><div class="col-3" style="text-align:right;">' +
                    '<label class="control-label">'+jsr.title+'' +
                    '</label></div>' +
                    '<div class="col">';
                if(displayType =="0"){
                    //单行文本
                    context += '<input type="text" class="form-control" name="'+jsr.valueCode+'" id="'+jsr.id+'" ' +
                        '                    placeholder=""style="width:50% !important;min-width: 50px;margin-top:5px;">';
                }else{
                    //多行文本
                    context += '<textarea maxlength="15000" style="margin-top:10px;margin-left:10px;" class="addTestHalfOpen" rows="3" placeholder=""></textarea>';
                }
                context +='</div></div>';
                break;
            case "number":
                context +='<div class="form-group row"><div class="col-3" style="text-align:right;">' +
                    '<label class="control-label">'+jsr.title+'' +
                    '</label></div>' +
                    '<div class="col"><input type="text" class="form-control" name="'+jsr.valueCode+'" id="'+jsr.id+'" ' +
                    'placeholder=""style="width:50% !important;min-width: 50px;margin-top:5px;"></div></div>';
                break;
            case "table":
                // var row = jsr.row;
                // var col = jsr.col;
                // var title = jsr.tableTitle;
                // context +='<div style="padding-left:40px;"><table border=1 width="500px">' +
                //     '<tr>' +
                //     '<td colspan='+col+'>'+title+'</td>' +
                //     '</tr>';
                // for(var a=0;a<row;a++){
                //     context +='<tr>';
                //     for(var j=0;j<col;j++){
                //         context += '<td>第'+j+'列</td>';
                //     }
                //     context +='</tr>';
                // }
                // context +='</table></div>';
                break;
            default: break;
        }

    }
    context +='</form></div>';
    $('#compPre').html(context);
    for(var i=0;i<json.length;i++) {
        var jsr = json[i];
        var compType = jsr.compType;
        if(compType =="time"){
            $( ".fz-datepicker" ).datetimepicker({
                minView: 2,
                format: jsr.format,
                language: "zh-CN",
                todayBtn: "linked",
                changeMonth: true,
                autoclose: true,
                startDate:jsr.min,
                endDate: jsr.max,
                todayHighlight: true
            }).on('hide', function(event) {
                event.preventDefault();
                event.stopPropagation();
            });
        }
    }

}
function validForm() {
    var rules = {};
    var message = {};
    var json = jsonstr.options;
    for(var i=0;i<json.length;i++) {
        var ruletemp={};
        var messagetemp={};
        var jsr = json[i];
        var compType = jsr.compType;
        var valueCode = jsr.valueCode;
        switch (compType) {
            case "time":
                ruletemp = {
                    dateISO:true
                };
                rules[valueCode]=ruletemp;
                break;
            case "number":
                var integer = jsr.integer;
                if(integer){
                    ruletemp = {
                        max:jsr.max,
                        min:jsr.min
                    };
                }else{
                    ruletemp = {
                        digits:true,
                        max:jsr.max,
                        min:jsr.min
                    };
                    messagetemp ={
                        digits:"只能输入整数"
                    };
                }
                rules[valueCode]=ruletemp;
                message[valueCode]=messagetemp;
                break;
            case "text":
                ruletemp = {
                    number:false,
                    maxlength:jsr.max,
                    minlength:jsr.min
                };
                rules[valueCode]=ruletemp;
                break;
            default:break;
        }
    }
    $("#comp_form").validate({
        onfocusout: function(element) {
            $(element).valid();
        },
        rules: rules,
        messages: message
    });
}