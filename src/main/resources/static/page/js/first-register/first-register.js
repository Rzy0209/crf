$(function () {
    FIRST_REGISTER.loadCrfId();
    FIRST_REGISTER.init();
    FIRST_REGISTER.menuArr('screeningsubjects');
    $('#btn-audio-upload').off('click').on('click',AUDIO_UPLOAD.open);
    $('#fileSong').off('change').on('change',AUDIO_UPLOAD.upload);
    VIDEO_UPLOAD.init();
});
var FIRST_REGISTER = function () {
    var _REG_FLAG={};
    //生成多表单菜单的数组，结构["表单title:code:id"]
    var toFormArr = [];
    //权限
    var auth = LoginInfo.auth();
    //填报表单titleText
    var titleText = {
        101: "第一部分：多中心诊断准确性试验",
        102: "第二部分：多中心前瞻性队列研究",
        103: "第三部分：随机双盲平行对照多中心前瞻性队列研究",
    };
    //表单分类分组关联关系
    var fieldTemp = {};
    //表单详情
    var templates = {};
    // 新建与编辑
    var addOrEdit = "";
    // 当前表格code
    var nowFormToCommitCode = "";
    // 当前表单ID
    var nowFormId = "";
    //填报类别
    var rptTypeCodeSelectCode;
    // 全局的表格编辑缓存
    var formCache = {};
    //录音功能开关
    var soundSwitch = "off";
    var titleid = "screeningsubjects";

    function changeContent(id) {
        //展示按钮
        $(`#${id}`).show();
        $(`#${id}`).prev().show();

        if (titleid != "") {
            $("#" + titleid).css("color", "#000");
            $("#" + titleid).css("background", "#EAE9E6");
            $("#" + titleid).css("border-radius", "5px");
        }
        $("#" + id).css("color", "#000");
        $("#" + id).css("background", "#059FD6");
        $("#" + id).css("border-radius", "5px");
        titleid = id;
        switch (id) {
            case "screeningsubjects":
                // FIRST_REGISTER.menuArr('screeningsubjects');
                FIRST_REGISTER.menuArr('screeningsubjects');
                break;
            //填写基本信息
            case "basicinformation":
                FIRST_REGISTER.menuArr('basicinformation');
                // FIRST_REGISTER.load('basicinformation');
                BASE.init();
                break;
            //病史采集
            case "historycollection":
                FIRST_REGISTER.menuArr('historycollection');
                break;
            //基线评估
            case "baselineassessment":
                FIRST_REGISTER.menuArr('baselineassessment');
                break;
            default:break;
        }


    }
    // 打开form
    function formList(index, type) {
        // 存入上一个form缓存
        toFormCache();
        $('#formUlList>li').removeClass('active');
        $('.ful-' + index).addClass('active');
        // 赋值当前表格code
        var formStr = toFormArr[index];
        var split = formStr.split(":");
        nowFormToCommitCode = split[1];
        nowFormId = split[2];
        $('#tableName').val(nowFormToCommitCode);
        // 加载form表格
        if (nowFormId == "0003") {
            // $("#contentRight").css("padding-top","50px");
            $('#selectDiv').css("display", "block");
            $('#selectDiv').css("margin-bottom", "10px");
            $('#selectDiv').css("height", "30px");
            var select = $("#selectDiv");
            select.empty();
            select.append("<option value='0'>无</option>");
            select.append("<option value='0025'>既往症状性缺血性脑卒中</option>");
            select.append("<option value='0026'>既往症状性出血性脑卒中</option>");
            select.append("<option value='0027'>无症状性脑卒中</option>");
            // showPastnerve();
            $('#divForm').empty();
            $('#selectDiv').change();
        } else {
            $('#selectDiv').css("display", "none");
            var conf = eval('(' + templates[nowFormId].template + ')');
            $('#divForm').empty();
            $('#divForm').comp(conf.show());
            $('.valid').rules('remove');
            $('.error').rules('remove');
            if (conf.rules()) {
                var rules = conf.rules();
                for (var i = 0, len = rules.length; i < len; i++) {
                    $("#" + rules[i].id).rules("add", rules[i].rules)
                }
            }
        }
        FIRST_REGISTER.openNewForm()
    }
    function openNewForm(index, type) {
        var CRFID = $("#crfId").val();
        if (nowFormToCommitCode == 'pastnerve') {
            var select = $('#selectDiv').val();
            if (select == "0025") {
                nowFormToCommitCode = "symptomaticIschemicStroke"
            } else if (select == "0026") {
                nowFormToCommitCode = "symptomaticHemorrhagicStroke"
            } else if(select == '0027'){
                nowFormToCommitCode = "asymptomatIcstroke"
            } else {
                nowFormToCommitCode="";
            }
        }
        $.ajax({
            url: "../api/common/formdataEs",
            type: 'post',
            data: {crfId: CRFID, formCode: nowFormToCommitCode},
            dataType: 'text',
            success: function (msg) {
                if (msg == "数据读取失败") {
                    alert(msg);
                    return;
                }
                if (msg && msg != "null") {
                    FIRST_REGISTER.showForm(msg);
                } else {
                    // 回显缓存
                    if (formCache.hasOwnProperty(nowFormToCommitCode)) {
                        var formCache2 = formCache[nowFormToCommitCode];
                        var idx=0;
                        for(var i in formCache2){
                            if(_.includes(notVali,i)){
                                continue;
                            }
                            idx++;
                        }
                        if(idx>0){
                            $('#divForm input[type=checkbox]').removeAttr('checked');
                        }
                        FIRST_REGISTER.showForm(JSON.stringify(formCache2));
                    }
                }
            }
        });

    }

    function showPastnerve() {
        nowFormId = $('#selectDiv').val();
        if(!templates[nowFormId]){
            return;
        }
        var conf = eval('(' + templates[nowFormId].template + ')');
        if (nowFormId == "0025") {
            nowFormToCommitCode = "symptomaticIschemicStroke"
        } else if (nowFormId == "0026") {
            nowFormToCommitCode = "symptomaticHemorrhagicStroke"
        } else if(nowFormId == '0027') {
            nowFormToCommitCode = "asymptomatIcstroke"
        }else {
            nowFormToCommitCode="";
        }
        $('#divForm').empty();
        $('#divForm').comp(conf.show());
        $('.valid').rules('remove');
        $('.error').rules('remove');
        if (conf.rules()) {
            var rules = conf.rules();
            for (var i = 0, len = rules.length; i < len; i++) {
                $("#" + rules[i].id).rules("add", rules[i].rules)
            }
        }
        FIRST_REGISTER.openNewForm()
    }
    function createPid(pid) {
        $('#patiengId').val(pid);
        $('document').data('curUid', pid);
    }

    //菜单列表
    function menuArr(id) {
        $("#formUlList").empty();
        $('#divForm').empty();
        toFormArr = [];
        var typeCode = FIRST_REGISTER.getQueryString("typeCode");
        fieldTemp = JSON.parse(LoginInfo.subFiledTemp().fieldTemp);
        templates = JSON.parse(LoginInfo.subFiledTemp().templates);
        if (fieldTemp[typeCode]) {
            var curFieldTempList = fieldTemp[typeCode];
            for (var i = 0; i < curFieldTempList.length; i++) {
                var curFieldTemp = curFieldTempList[i];
                if (id == "screeningsubjects") {
                    if (curFieldTemp == "0011" || curFieldTemp == "0010") {
                        var curTemp = templates[curFieldTemp];
                        toFormArr.unshift(curTemp.title + ":" + curTemp.code + ":" + curTemp.id);
                    }
                } else if (id == "basicinformation") {
                    if (curFieldTemp == "0002") {
                        var curTemp = templates[curFieldTemp];
                        toFormArr.push(curTemp.title + ":" + curTemp.code + ":" + curTemp.id)
                    }
                } else if (id == "historycollection") {
                    if (curFieldTemp == "0003" || curFieldTemp == "0004" || curFieldTemp == "0005"
                        || curFieldTemp == "0006") {
                        var curTemp = templates[curFieldTemp];
                        toFormArr.push(curTemp.title + ":" + curTemp.code + ":" + curTemp.id)
                    }
                } else if (id == "baselineassessment") {
                    if (curFieldTemp == "0028") {
                        var curTemp = templates[curFieldTemp];
                        toFormArr.push(curTemp.title + ":" + curTemp.code + ":" + curTemp.id)
                    }
                }
                FIRST_REGISTER.load();
            }
        }
    }
    function load() {
        $("#formUlList").empty();
        $('#divForm').empty();
        var typeCode = FIRST_REGISTER.getQueryString("typeCode");
        $.each(toFormArr, function (index, value) {
            var split = value.split(":");
            var formName = split[0];
            if (index == 0) {
                $("#formUlList").append('<li onclick="FIRST_REGISTER.formList(' + index + ',' + typeCode + ')"  class="list-group-item ful-' + index + ' active"><div id="div_a_' + index + '"><a data-toggle="table" aria-expanden="true" title="' + formName + '">' + formName.substring(0, 18) + '</a></div></li>');
            } else {
                $("#formUlList").append('<li onclick="FIRST_REGISTER.formList(' + index + ',' + typeCode + ')"  class="list-group-item ful-' + index + '"><div id="div_a_' + index + '"><a data-toggle="table" aria-expanden="false" title="' + formName + '">' + formName.substring(0, 18) + '</a></div></li>');
            }
        });
        $('#formUlList>li:first').click();
        $('#formUlList>li').each(function (i,v) {
            //console.log(arguments);
        })
    }

    function getQueryString(name) {
        var reg = new RegExp("(^|&)" + name + "=([^&]*)(&|$)", "i");
        var r = window.location.search.substr(1).match(reg);
        if (r != null) return unescape(r[2]);
        return null;
    }

    function setCurTitleText() {
        var curTitleText = titleText[rptTypeCodeSelectCode];
        $("#titleText").html(curTitleText)
    }
    // 回显
    function showForm(msg) {
        var options = {jsonValue: msg, isDebug: false};
        $("#screeningsubjectsdetails form").initForm(options);
        //回显触发checkbox
        $('input[type=checkbox]').change();
        var button = '&nbsp;&nbsp;<button type="button" id="subButton" class="btn btn-primary" onclick="FIRST_REGISTER.save()" >提交当前表格</button>';
        $('#adds').html(button);
    }
    //存入缓存
    function toFormCache() {
        var data = $("#screeningsubjectsdetails form").serializeJSON();
        if (!!data && nowFormToCommitCode != "") {
            formCache[nowFormToCommitCode] = data;
        }
    }
// 序列化后的表单值转换成Json
    $.fn.extend({
        serializeJSON: function () {
            var _this = $(this);
            var arr = _this.serializeArray();
            var json = {};
            $.each(arr, function (i, d) {
                var name = this.name, val = this.value;
                var kl = name.indexOf('['), kr = name.indexOf(']');
                if ("" === val || null === val || undefined === val) {
                    return;
                }
                if (kl > 0 && kr > 0) {
                    var rname = name.substring(0, kl),
                        rindex = parseInt(name.substring(kl + 1, kr)),
                        rsubname = name.substring(kr + 2);
                    if (!json[rname]) {
                        json[rname] = [];
                    }
                    if (!json[rname][rindex]) {
                        json[rname][rindex] = {};
                    }
                    json[rname][rindex][rsubname] = val;
                } else {
                    json[name] = val;
                }
            });
            return json;
        }
    });

    function init() {
        subjectList();
        //按钮隐藏
        btnInit();
        //触发录音
        soundRecording('on');
    }
    function btnInit() {
        $('#basicinformation').hide();
        $('#historycollection').hide();
        $('#baselineassessment').hide();
        $('#basicinformation').prev().hide();
        $('#historycollection').prev().hide();
        $('#baselineassessment').prev().hide();
    }
    function subjectList() {
        var subId = $('#subjectId').val();
        $.ajax({
            url: `../api/subjectresfield/sid/${subId}`,
            type: 'get',
            dataType: 'json',
            scriptCharset: 'utf-8',
            success: function (res) {
                var select = $("#researchChoose");
                select.empty();
                for (var i = 0; i < res.length; i++) {
                    var resi = res[i];
                    select.append(`<option value="${resi.id}">${resi.name}</option>`);
                }
                var fieldType=getFiledType();
                select.val(fieldType);
                select.change();
            },
            async: true
        });
    }

    //录音功能
    function soundRecording(key) {
        if(key==soundSwitch){
            return;
        }
        if (soundSwitch == "off") {
            // $('#sound').html("正在录音");
            $('#soundImg').css("color", "red");
            REC.start();
            soundSwitch = "on";
        } else {
            // $('#sound').html("");
            $('#soundImg').css("color", "black");
            REC.stop();
            soundSwitch = "off";
        }

    }



    // 赋值
    function toVal(jsonObj, keycode) {
        if (jsonObj.hasOwnProperty(keycode)) {
            var table = jsonObj[keycode];
            if (table) {
                for (var i = 0; i < table.length; i++) {
                    var tablejson = table[i];
                    for (key in tablejson) {
                        $("#" + keycode + "_" + i + "_" + key).val(tablejson[key]);
                    }
                }
            }
        }
        // 特殊处理medicas的checkbox
        if (keycode == "changes") {
            var table = jsonObj[keycode];
            if (table) {
                for (var i = 0; i < table.length; i++) {
                    var tablejson = table[i];
                    for (key in tablejson) {
                        if (tablejson[key] == false) {
                            $("input[name='changes[" + i + "]." + key + "'][value=0]").attr("checked", "checked");
                        } else if (tablejson[key] == true) {
                            $("input[name='changes[" + i + "]." + key + "'][value=1]").attr("checked", "checked");
                        }
                    }
                }
            }
        }
    }
    var notVali=['subjectId','crfId'];
    var checkExCri = function (data) {
        switch (nowFormToCommitCode) {
            case 'exclusionCriteria':
                return checkRule.ex(data);
            case 'creiteria':
                return checkRule.in(data);
            case 'base':
                return checkRule.base(data);
            default:
                return true;
        }
    };
    var checkRule=function (notVali) {
        return {
            //入选规则
            in:function (data) {
                for (var i in data) {
                    if(_.includes(notVali,i)){
                        continue;
                    }
                    var o = data[i];
                    if (0 == o) {
                        alert('该受试者入选标准有"否"选项,不能进入该研究');
                        return false;
                    }
                }
                return true;
            },
            //排除规则
            ex:function (data) {
                for (var i in data) {
                    if(_.includes(notVali,i)){
                        continue;
                    }
                    var o = data[i];
                    if (1 == o) {
                        alert('该受试者排除标准有"是"选项,不能进入该研究');
                        return false;
                    }
                }
                return true;
            },
            //基本信息
            base:function (data) {
                if (!!data.age) {
                    if (data.age < 45 || data.age > 80) {
                        alert("该受试者年龄不在[45,80]之间,不能进入该研究");
                        return false;
                    }
                } else {
                    alert("身份证不能为空");
                    return false;
                }
                if (!!data.height) {
                    if (data.height < 100 || data.height > 200) {
                        alert("身高填写错误");
                        return false;
                    }
                } else {
                    alert("身高不能为空");
                    return false;
                }
                if (!!data.weight) {
                    if (data.weight < 30 || data.weight > 150) {
                        alert("体重填写错误");
                        return false;
                    }
                } else {
                    alert("体重不能为空");
                    return false;
                }
                if(!!data.sp){
                    if (  data.sp < 60 || data.sp > 250) {
                        alert("收缩压填写错误");
                        return false;
                    }
                }else{
                    alert("收缩压不能为空");
                    return false;
                }
                if(!!data.dp){
                    if (  data.dp < 30 && data.dp > 150) {
                        alert("舒张压填写错误");
                        return false;
                    }
                }else{
                    alert("舒张压不能为空");
                    return false;
                }
                return true;
            }
        }
    }(notVali);

    var loadCrfId = function () {
        var url = '/ecrf/api/es/uid/' + 1;
        $.ajax({
            url: url,
            method: 'get',
            type: 'text',
            success: function (msg) {
                $("#crfId").val(msg);
                FIRST_REGISTER.createPid(msg);
            }
        });
    };
    var getFiledType = function () {
        var typeCode = getQueryString("typeCode");
        if (typeCode) {
            return typeCode;
        }
        return $("#rptTypeCodeSelect").val();
    };
    var save = function () {
        //校验保存内容
        if (!$("#screeningsubjectsdetails .form").valid()) {
            return
        }
        // 未填写信息 不保存
        if (nowFormToCommitCode == null || nowFormToCommitCode == "") {
            alert("未填写信息，无法保存！");
            return;
        }
        //校验是否入选
        var data = $("#screeningsubjectsdetails form").serializeJSON();
        //检查入选标准
        if (!checkExCri(data)) {
            return;
        }
        //提交提示
        if(nowFormToCommitCode!='baselineassessment'||(nowFormToCommitCode=='baselineassessment'&&confirm("请确定CRF表单已全部填写完成，如需修改请在24小时内完成。"))){
            ajaxSave(data);
        }
    };
    function ajaxSave(data) {
        var typeCode = getFiledType();
        var url = '../api/es/saveEdit';
        $.ajax({
            url: url,
            type: 'post',
            data: {
                "data": JSON.stringify(data),
                "tableName": nowFormToCommitCode,
                "subjectId": $("#subjectId").val(),
                "fieldTypeId": typeCode
            },
            dataType: 'text',
            success: function (msg) {
                switch (nowFormToCommitCode) {
                    case 'creiteria':
                        FIRST_REGISTER.formList(1, typeCode);
                        break;
                    case 'exclusionCriteria':
                        changeContent("basicinformation");
                        break;
                    case 'base':
                        changeContent("historycollection");
                        break;
                    case 'physicalExamination':
                        changeContent("baselineassessment");
                        break;
                    case 'pastsystem':
                        FIRST_REGISTER.formList(2, typeCode);
                        break;
                    case 'medicalHistory':
                        FIRST_REGISTER.formList(3, typeCode);
                        break;

                    case 'symptomaticIschemicStroke':
                    case 'symptomaticHemorrhagicStroke':
                    case 'asymptomatIcstroke':
                        FIRST_REGISTER.formList(1, typeCode);
                        break;
                     //基线调查
                    case 'baselineassessment':
                        var _crfid=$("#crfId").val();
                        //bootbox.alert();
                        //停止录音
                        soundRecording('off');
                        $('#divForm>.container').empty().html(`<div class="row"><div class="col mt-5 text-center">您已完成ID为&nbsp;<b style="color:red">${_crfid}</b>&nbsp;的病人信息登记<br/>请点击<b style="color:red">上传录音文件</b>按钮上传对应MP3录音文件<br/>请使用<b style="color:red">脑血管病智能神经功能评估系统</b>进行智能筛查</div></div>`);
                        break;
                    default:break;
                }
                //标记完成
                _REG_FLAG[nowFormToCommitCode]=true;
            }
        });
    }

    function soundRecordOff() {
        soundSwitch = "off";
        $('#soundImg').css("color", "black");
    }

    return {
        createPid: createPid,
        menuArr: menuArr,
        soundRecording: soundRecording,
        load: load,
        showForm: showForm,
        formList: formList,
        getQueryString: getQueryString,
        init: init,
        setCurTitleText: setCurTitleText,
        changeContent: changeContent,
        showPastnerve: showPastnerve,
        save: save,
        toVal: toVal,
        openNewForm: openNewForm,
        loadCrfId: loadCrfId,
        soundRecordOff: soundRecordOff,
        filedType: getFiledType
    };
}();