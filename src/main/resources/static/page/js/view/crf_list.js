// 当前表格code
var nowFormToCommitCode = "";
// 当前表单ID
var nowFormId = "";
//权限
var auth = LoginInfo.auth();
// 新建与编辑
var addOrEdit = "";
//文件数量限制
var filesCount = 10000;
//文件夹大小限制 2000M
var filesSize = 2147483648;
//实际的文件数量
var actual_filesCount = 0;
//实际的文件夹大小
var actual_filesSize = 0;
// 全局的表格编辑缓存
var formCache = {};
//填报类别
var rptTypeCodeSelectCode;
//填报表单titleText
var titleText = {
    101: "第一部分：智能化神经系统功能评估筛查步态及认知功能障碍的单中心诊断准确性试验",
    102: "第二部分：智能化神经系统功能评估筛查步态及认知功能障碍的多中心诊断准确性试验",
    103: "第三部分：在上海和贵州地区探索智能化神经系统功能评估临床应用的前瞻、随机、对照、多中心队列研究",
    104: "卫生经济学信息",
};
//生成多表单菜单的数组，结构["表单title:code:id"]
var toFormArr = [];
//表单分类分组关联关系
var fieldTemp = {};
//表单详情
var templates = {};
// 初始化
$(function () {
    $('.date-picker').datetimepicker({
        minView: 2,
        language: 'zh-CN',
        autoclose: true,
        format: 'yyyy-mm-dd',
        todayBtn: true
    });
    //填报类别参数判断
    rptTypeCodeSelectCode = $("#rptTypeCodeSelect").val();
    var typeCode = getQueryString("typeCode");
    if (typeCode) {
        rptTypeCodeSelectCode = typeCode
    } else {
        $('#rptTypeDiv').show();
        buildSubjectSelect();
    }
    typeForForm(rptTypeCodeSelectCode);

    //初始化页面操作按钮
    initAuth();

    //初始化Table
    var oTable = new TableInit();
    oTable.Init();

    $(".form").validate({
        focusInvalid: true, //当为false时，验证无效时，没有焦点响应
        onkeyup: false
        // ,
        // errorPlacement: function (error, element) {
        //     if (element.is(":radio"))
        //         error.appendTo(element.parent().next().next());
        //     else if (element.is(":checkbox"))
        //         error.appendTo(element.next());
        //     // else
        //     //     error.appendTo(element.parent().next());
        // }
    });
    bsCustomFileInput.init();
    // 绑定事件
    $('#fileFolder').change(function (e) {
        //判断是否选中文件
        var file = $("#fileFolder").val();
        var files = e.target.files; // FileList
        //文件数量
        actual_filesCount = files.length;
        if (actual_filesCount > filesCount) {
            alert("文件过多，单次最多可上传" + filesCount + "个文件");
            return;
        }
        for (var i = 0, f; f = files[i]; ++i) {
            actual_filesSize += f.size;
            if (actual_filesSize > filesSize) {
                alert("单次文件夹上传不能超过" + filesSize / 1024 / 1024 + "M");
                return;
            }
        }
    });
});

function setCurTitleText() {
    var curTitleText = titleText[rptTypeCodeSelectCode];
    $("#titleText").html(curTitleText)
}

function getQueryString(name) {
    var reg = new RegExp("(^|&)" + name + "=([^&]*)(&|$)", "i");
    var r = window.location.search.substr(1).match(reg);
    if (r != null) return unescape(r[2]);
    return null;
}

// 按类别初始化表格
function typeForForm(type) {
    $("#formUlList").empty();
    toFormArr = [];
    //生成对应类型的表单菜单
    fieldTemp = JSON.parse(LoginInfo.subFiledTemp().fieldTemp);
    templates = JSON.parse(LoginInfo.subFiledTemp().templates);
    if (fieldTemp[type]) {
        var curFieldTempList = fieldTemp[type];
        for (var i = 0; i < curFieldTempList.length; i++) {
            var curFieldTemp = curFieldTempList[i];
            var curTemp = templates[curFieldTemp];
            toFormArr.push(curTemp.title + ":" + curTemp.code + ":" + curTemp.id)
        }
    }
    $.each(toFormArr, function (index, value) {
        var split = value.split(":");
        var formName = split[0];
        if (index == 0) {
            $("#formUlList").append('<li onclick="openForm(' + index + ',' + type + ')"  class="list-group-item ful-' + index + ' active"><div id="div_a_' + index + '"><a data-toggle="table" aria-expanden="true" title="' + formName + '">' + formName.substring(0, 18) + '</a></div></li>');
        } else {
            $("#formUlList").append('<li onclick="openForm(' + index + ',' + type + ')"  class="list-group-item ful-' + index + '"><div id="div_a_' + index + '"><a data-toggle="table" aria-expanden="false" title="' + formName + '">' + formName.substring(0, 18) + '</a></div></li>');
        }
    });
}
function initAuth() {
    if (auth != null && auth != '' && auth != undefined) {
        /*if ($.inArray("topic_create", auth) > -1) {
            var btn = '<button id="addCrf" type="button" class="btn btn-primary" onclick="newForm()"><i class="fa fa-plus" aria-hidden="true"></i>&nbsp;新&nbsp;增</button>';
            $("#toolbar").html(btn);
        } else {
            $("#toolbar").html("");
        }*/
        if ($.inArray("topic_data_export", auth) > -1) {
            var ebtn = $('<button id="btn-export-excel" type="button" class="btn btn-secondary"><i class="fa fa-download"></i>&nbsp;导出</button>');
            $("#optCtxRight").append(ebtn);
            $('#btn-export-excel').on('click', function () {
                var subId = $("#subjectId").val();
                window.open(`../api/es/export/excel?subjectId=${subId}`, '_blank');
            });
        }
    }


}

//modal
function newForm() {
    clearForm();
    addOrEdit = "add";
    $("#myModal").modal("show");
    // $('#subButton').removeAttr("style");
    $('#adds').html('<button type="button" class="btn btn-secondary" onclick="closeModal()">关闭</button><button type="button" id="subButton" class="btn btn-primary" onclick="addForm()" >提交当前表格</button>');
    $("#crfId").val("");
    $('#formUlList li:first').click();
}
//设置默认值
function setForm() {
    setCurTitleText();
    var fmt = 'yyyy-MM-dd';
    var nowDate = new Date();
    switch (nowFormToCommitCode) {
        case 'crfForm':
            if (!$("#testNumber").val()) {
                $.ajax({
                    url: "../api/subject/code/id/" + $("#subjectId").val(),
                    type: 'get',
                    dataType: 'text',
                    success: function (msg) {
                        $("#testNumber").val(msg)
                    }
                });
            }
            if (!$("#actuatorName").val()) {
                $("#actuatorName").val(LoginInfo.user().org);
            }
            if (!$("#researcher").val()) {
                $("#researcher").val(LoginInfo.user().name);
            }
            if (!$("#researchDate").val()) {
                $("#researchDate").val(nowDate.format(fmt));
            } else if (!isNaN($("#researchDate").val())) {
                var researchDate = $("#researchDate").val() * 1;
                var rDate = new Date(researchDate);
                $("#researchDate").val(rDate.format(fmt));
            }
            $("#identityNum").val($("#identityNumber").val());
            $('#identityNumber').bind('input propertychange', function () {
                $('#identityNum').val($(this).val());
            });
            break;
        case 'base':
            if (!$("#age").val() && $("#identityNum").val().length >= 15) {
                var oldYear = $("#identityNum").val().substring(6, 10) * 1;
                var nowYear = nowDate.getFullYear();
                var age = nowYear - oldYear;
                $("#age").val(age);
                var ages = ['', ''];
                age = age + '';
                var len = age.length;
                if (len > 1) {
                    ages[1] = age.substring(len - 1, len);
                    ages[0] = age.substring(len - 2, len - 1)
                } else {
                    ages[0] = age
                }
                $(".el-num-link-age").each(function (i) {
                    $(this).val(ages[i]);
                });
            }
            break;
        default:
            break;
    }

}

// 存入缓存
function toFormCache() {
    var data = $("form").serializeJSON();
    if (!!data && nowFormToCommitCode != "") {
        formCache[nowFormToCommitCode] = data;
    }
}
// 打开form
function openForm(index, type) {
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
    var conf = eval('('+templates[nowFormId].template+')');
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

    // crfId存在 回显示
    var crfId = $("#crfId").val();
    if (!!crfId) {
        $.ajax({
            url: "../api/common/formdataEs",
            type: 'post',
            data: {crfId: crfId, formCode: nowFormToCommitCode},
            dataType: 'text',
            success: function (msg) {
                if (msg == "数据读取失败") {
                    alert(msg);
                    return;
                }
                if (msg && msg != "null") {
                    showForm(msg);
                }else{
                    // 回显缓存
                    if (formCache.hasOwnProperty(nowFormToCommitCode)) {
                        var formCache2 = formCache[nowFormToCommitCode];
                        showForm(JSON.stringify(formCache2));
                    }
                }
                setForm()
            }
        });
    } else {
        $('#adds').html('<button type="button" class="btn btn-secondary" onclick="closeModal()">关闭</button><button type="button" id="subButton" class="btn btn-primary" onclick="addForm()" >提交当前表格</button>');
        // 回显缓存
        if (formCache.hasOwnProperty(nowFormToCommitCode)) {
            var formCache2 = formCache[nowFormToCommitCode];
            showForm(JSON.stringify(formCache2));
        }
        setForm()
    }
}
// 回显
function showForm(msg) {
    var options = {jsonValue: msg, isDebug: false};
    $("form").initForm(options);
    // table的赋值
    var jsonObj = eval('(' + msg + ')');
    toVal(jsonObj, "crfd");
    // 患者接受非计划治疗记录 赋值
    toVal(jsonObj, "changes");
    //toVal(jsonObj,"remark");
    toVal(jsonObj, "medicas");

    $("form input[type=hidden]").change();
    $("form input[type=checkBox]").change();
    // 两次点击
    $("form input[type=checkBox]").change();
    // $("form input[type=checkBox]").click();

    var button = '<button type="button" class="btn btn-secondary" onclick="closeModal()">关闭</button>';
    var flag = '';
    if(addOrEdit.indexOf("show")==-1){
        if (addOrEdit.indexOf("add") > -1) {
            flag = $.inArray("topic_create", auth) > -1;
        } else {
            flag = $.inArray("after24H_is_edit", auth) > -1;
        }
        if (auth != '' && auth != null && auth != undefined && flag) {
            button += '&nbsp;&nbsp;<button type="button" id="subButton" class="btn btn-primary" onclick="addForm()" >提交当前表格</button>';
        } else {
            var obj = eval("(" + msg + ")");
            if (obj != null && obj != '' && obj != undefined && obj != 'null') {
                var createDate = obj.createDate;
                if (createDate != null && createDate != '' && createDate != undefined) {
                    createDate = createDate.replace(/-/g, "/");
                    var start = new Date(createDate).getTime();
                    var end = new Date().getTime();
                    var result = end - start;
                    var pd = 86400000;
                    if (pd > result) {
                        button += '<button type="button" id="subButton" class="btn btn-primary" onclick="addForm()" >提交当前表格</button>';
                    }
                } else if (msg.indexOf("{}") > -1) {
                    button += '<button type="button" id="subButton" class="btn btn-primary" onclick="addForm()" >提交当前表格</button>';
                }
            } else {
                button += '<button type="button" id="subButton" class="btn btn-primary" onclick="addForm()" >提交当前表格</button>';
            }

        }
    }
    $('#adds').html(button);
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
// 添加表格信息
function addForm() {
    if (!$(".form").valid()) {
        return
    }
    // 未填写信息 不保存
    if (nowFormToCommitCode == null || nowFormToCommitCode == "") {
        return;
    }
    if (confirm("确定提交？")) {
        // 提交的信息
        var data = $("form").serializeJSON();
        if (nowFormToCommitCode != "crfForm") {
            if ($("#crfId").val() == "" || $("#crfId").val() == undefined || $("#crfId").val() == null) {
                alert("先保存患者入组建档，在进行此操作");
            }
        } else {
            $("#crfId").val("");
        }
        if (addOrEdit == "add") { // 新增
            var url = '../api/es/save';
            $.ajax({
                url: url,
                type: 'post',
                data: {
                    "data": JSON.stringify(data),
                    "tableName": nowFormToCommitCode,
                    "subjectId": $("#subjectId").val(),
                    "fieldTypeId": rptTypeCodeSelectCode
                },
                dataType: 'text',
                success: function (msg) {
                    if (nowFormToCommitCode == "crfForm") {
                        $("#crfId").val(msg);
                    }
                    alert('保存成功');
                }
            });
        } else if (addOrEdit == "edit") {
            // 修改路径
            var url = '../api/es/edit';
            $.ajax({
                url: url,
                type: 'post',
                data: {
                    "data": JSON.stringify(data),
                    "tableName": nowFormToCommitCode,
                    "subjectId": $("#subjectId").val(),
                    "fieldTypeId": rptTypeCodeSelectCode
                },
                dataType: 'text',
                success: function (msg) {
                    // 患者信息拿crfId
                    if (msg.indexOf("保存失败") > -1) {
                        alert(msg);
                    } else if (msg.indexOf("no anthorization") > -1) {
                        alert("401,该用户无权限进行修改操作");
                    } else if (msg.indexOf("idhave") > -1) {

                    } else {
                        if (nowFormToCommitCode == "crfForm") {
                            $("#crfId").val(msg);
                        }
                        alert("保存成功")
                    }
                }
            });
        }
    }
}
var TableInit = function () {
    var oTableInit = {};
    //初始化Table
    oTableInit.Init = function () {
        $('#crfList').bootstrapTable({
            url: '../api/es/page',         //请求后台的URL（*）
            method: 'get',                      //请求方式（*）
            toolbar: '#toolbar',                //工具按钮用哪个容器
            ajaxOptions: {
                async: false // 如果设置为异步，需要等请求成功后才会生成下面的tr和td，就无法在td中添加按钮
            },
            striped: true,                      //是否显示行间隔色
            cache: false,                       //是否使用缓存，默认为true，所以一般情况下需要设置一下这个属性（*）
            pagination: true,                   //是否显示分页（*）
            sortable: false,                     //是否启用排序
            queryParams: oTableInit.queryParams,//传递参数（*）
            sidePagination: "server",           //分页方式：client客户端分页，server服务端分页（*）
            pageSize: 10,                       //每页的记录行数（*）
            pageList: [10, 25, 50, 100],        //可供选择的每页的行数（*）
            showRefresh: false,                  //是否显示刷新按钮
            clickToSelect: true,                //是否启用点击选中行
            height: $(document.body).height() > 600 ? $(document.body).height() - 190 : 540,                        //行高，如果没有设置height属性，表格自动根据记录条数觉得表格高度
            uniqueId: "crfId",                     //每一行的唯一标识，一般为主键列
            columns: [{
                field: 'testNumber',
                title: '试验编号'
            }, {
                field: 'actuatorName',
                title: '医疗机构'
            }, {
                field: 'subjectsShortName',
                title: '姓名拼音首字'
            }, {
                field: 'researcher',
                title: '研究者'
            }, {
                field: 'researchDate',
                title: '研究日期'
            }, {
                field: 'researchUnit',
                title: '研究单位'
            }, {
                field: 'finishResearch',
                title: '是否完成研究',
                formatter: function (value, row, index) {
                    if (value) {
                        return "是";
                    } else {
                        return "否";
                    }
                }
            }, {
                field: 'finishForm',
                title: '报表填报情况',
                formatter: function (value, row, index) {
                    return '共：' + toFormArr.length + ',已完成：' + value;
                }
            },
            //     {
            //     field: 'uploadPath',
            //     title: '影像上传情况',
            //     formatter: function (value, row, index) {
            //         var tj = row.tj;
            //         if (tj == undefined) {
            //             return '未上传';
            //         } else {
            //            var str = "";
            //             for (var key in tj) {
            //                 str += key + ":" + tj[key] + " ";
            //             }
            //             return str;
            //         }
            //     }
            // },
                {
                title: '操作',
                // events: operateEvents,
                formatter: function (val, row, index) {
                    var button = '<div class="btn-group-sm" role="group" aria-label="操作">';
                    button += '<button type="button" onclick="showView(\'' + row.crfId + '\')" class="btn blue btn-outline"><i class="fa fa-search"></i>&nbsp;查看</button>'
                    //     +
                    //     '<button type="button" onclick="updateCrf(\'' + row.crfId + '\')" class="btn blue btn-outline"><i class="fa fa-edit"></i>&nbsp;编辑</button>';
                    // if (auth != '' && auth != null && auth != undefined && $.inArray("topic_delete", auth) > -1) {
                    //     button += '<button type="button" onclick="deleteCrf(\'' + row.crfId + '\')" class="btn blue btn-outline"><i class="fa fa-remove"></i>&nbsp;删除</button>';
                    // }
                    // if (row.uploadPath == "" || row.uploadPath == null || row.uploadPath == undefined) {
                    //     button += '<button type="button" class="btn blue btn-outline" onclick="uploadShow(\'' + row.crfId + '\',\'' + row.subjectId + '\')"><i class="fa fa-file-movie-o"></i>&nbsp;影像上传</button>';
                    // } else {
                    //     button += '<button type="button" class="btn blue btn-outline" onclick="uploadShow(\'' + row.crfId + '\',\'' + row.subjectId + '\')"><i class="fa fa-file-movie-o"></i>&nbsp;再次上传</button>';
                    // }
                    // button += '<button type="button" class="btn blue btn-outline" onclick="uploadPic(\'' + row.crfId + '\',\'' + row.subjectId + '\')"><i class="fa fa-file-image-o"></i>&nbsp;图片上传</button>';
                    // button += '<button type="button" class="btn blue btn-outline" onclick="filesTable(\'' + row.crfId + '\',\'' + row.subjectId + '\')"><i class="fa fa-files-o"></i>&nbsp;文件下载</button>';
                    // button += '</div>';
                    return button;
                }
            }]
        });
    };
    //查询参数
    oTableInit.queryParams = function (params) {
        var temp = {
            limit: params.limit,   //每页条数
            offset: params.offset,  //页码
            testNumber: $("#testNumberQuery").val(),
            subjectId: $('#subjectId').val(),
            fieldTypeId: rptTypeCodeSelectCode,
            startDate: $('#startDateQuery').val(),
            endDate: $('#endDateQuery').val()
        };
        return temp;
    };

    return oTableInit;
};

// 下载列表
function filesTable(crfId, subjectId) {
    $.ajax({
        url: '../api/common/fileslist',
        type: 'post',
        data: {"crfId": crfId},
        dataType: 'json',
        success: function (res) {
            if (res) {
                var filesList = $('#filesList');
                filesList.html('');
                for (var i = 0; i < res.length; i++) {
                    var str = $(['<tr id="upload-' + res[i].name + '">'
                        , '<td  style="text-align: center;">' + res[i].name + '</td>'
                        , '<td  style="text-align: center;">' + res[i].size + '</td>'
                        , '<td style="text-align: center;">'
                        , '<button class="btn blue btn-outline " onclick="download(\'' + res[i].name + '\',\'' + res[i].crfId + '\')"><i class="fa fa-download"></i>下载</button>'
                        , '</td>'
                        , '</tr>'].join(''));
                    filesList.append(str);
                }
                $("#downloadModal").modal("show");
                $("#filesTable").bootstrapTable();
            } else {
                alert("文件不存在");
            }
        }
    });
}
// 下载
function download(fileName, crfId) {
    window.open("../api/common/download?fileName=" + encodeURI(fileName) + "&crfId=" + crfId);
}
// 图片上传
function uploadPic(crfId, subjectId) {
    //清空上传信息
    $('#fileUploadPicForm')[0].reset();
    $("#uploadPicModal").modal("show");
    $("#crfIdUploadPic").val(crfId);
    $("#subjectIdUploadPic").val(subjectId);
}
// 上传文件夹
function uploadShow(crfId, subjectId) {
    //清空上传信息
    $('#fileUploadForm')[0].reset();
    $("#uploadModal").modal("show");
    $("#crfIdUpload").val(crfId);
    $("#subjectIdUpload").val(subjectId);
}
function commit() {
    $("#typeIdUpload").val(rptTypeCodeSelectCode);
    //判断是否选中文件夹
    var file = $("#fileFolder").val();
    if (file == '') {
        alert('请选择要上传的文件夹');
        return;
    }
    var options = {
        url: '../api/common/uploaddir',
        type: 'post',
        success: function (data) {
            if (data) {
                alert("上传成功");
                $("#uploadModal").modal("hide");
                $('#crfList').bootstrapTable('refresh');
            }
        }
    };
    $("#fileUploadForm").ajaxSubmit(options);
}
// 图片提交
function piccommit() {
    $("#typeIdUploadPic").val(rptTypeCodeSelectCode);
    //判断是否选中文件夹
    var file = $("#filePic").val();
    console.log(file);
    if (file == '') {
        alert('请选择要上传的文件');
        return;
    }
    var options = {
        url: '../api/common/uploadpic',
        type: 'post',
        success: function (data) {
            if (data) {
                alert("上传成功");
                $("#uploadPicModal").modal("hide");
                $('#crfList').bootstrapTable('refresh');
            }
        }
    };
    $("#fileUploadPicForm").ajaxSubmit(options);
}
// 查看
function showView(crfId) {
    clearForm();
    addOrEdit="show";
    $("#crfId").val(crfId);
    $("#myModal").modal("show");
    $('#formUlList li:first').click();
    // $('#subButton').attr("style", "display:none");
    $("#adds").html('<button type="button" class="btn btn-secondary" onclick="closeModal()">关闭</button>');
}

// 编辑
function updateCrf(crfId) {
    clearForm();
    addOrEdit = "edit";
    $("#crfId").val(crfId);
    $("#myModal").modal("show");
    // $('#subButton').removeAttr("style");
    $('#adds').html('<button type="button" class="btn btn-secondary" onclick="closeModal()">关闭</button><button type="button" id="subButton" class="btn btn-primary" onclick="addForm()" >提交当前表格</button>');
    $('#formUlList li:first').click();
}

function deleteCrf(crfId) {
    var isConfirm = confirm("确认删除");
    if (isConfirm) {
        $.ajax({
            url: "../api/common/delete",
            type: 'post',
            data: {crfId: crfId},
            dataType: 'text',
            async: false,
            success: function (msg) {
                if (msg) {
                    alert("删除成功");
                } else {
                    alert("删除失败");
                }
                $('#crfList').bootstrapTable('refresh');

            }
        });
    }
}

// 试验编号查询
function queryTable() {
    $('#crfList').bootstrapTable('refresh');
}
// 关闭modal
function closeModal() {
    $("#myModal").modal("hide");
    $('#crfList').bootstrapTable('refresh');
}
function closeDownload() {
    $("#downloadModal").modal("hide");
    $('#crfList').bootstrapTable('refresh');
}
// 关闭modal
function closeUpload() {
    clearForm();
    $("#uploadModal").modal("hide");
    $('#crfList').bootstrapTable('refresh');
}
// 关闭图片上传
function closeUploadPic() {
    $("#uploadPicModal").modal("hide");
    $('#crfList').bootstrapTable('refresh');
}
// 清空缓存
function clearForm() {
    formCache = {};
    $("form")[0].reset();

}
function buildSubjectSelect() {
    var subId = $('#subjectId').val();
    $.ajax({
        url: `../api/subjectresfield/sid/${subId}`,
        type: 'get',
        dataType: 'json',
        scriptCharset: 'utf-8',
        success: function (res) {
            for (var i = 0; i < res.length; i++) {
                var resi = res[i];
                $('#rptTypeCodeSelect').append(`<option value="${resi.id}">${resi.name}</option>`);
            }
            $('#rptTypeCodeSelect').change();
        },
        async: true
    });
}
function fieldTypeChange() {
    rptTypeCodeSelectCode = $("#rptTypeCodeSelect").val();
    typeForForm(rptTypeCodeSelectCode);
    queryTable()
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

Date.prototype.format = function (fmt) { //author: meizz 
    var o = {
        "M+": this.getMonth() + 1,
        //月份
        "d+": this.getDate(),
        //日
        "h+": this.getHours() == 0 ? 12 : this.getHours(),
        //小时
        "H+": this.getHours(),
        //小时
        "m+": this.getMinutes(),
        //分
        "s+": this.getSeconds(),
        //秒
        "q+": Math.floor((this.getMonth() + 3) / 3),
        //季度
        "S": this.getMilliseconds() //毫秒
    };
    var week = {
        "0": "\u65e5",
        "1": "\u4e00",
        "2": "\u4e8c",
        "3": "\u4e09",
        "4": "\u56db",
        "5": "\u4e94",
        "6": "\u516d"
    };
    if (/(y+)/.test(fmt)) {
        fmt = fmt.replace(RegExp.$1, (this.getFullYear() + "").substr(4 - RegExp.$1.length));
    }
    if (/(E+)/.test(fmt)) {
        fmt = fmt.replace(RegExp.$1, ((RegExp.$1.length > 1) ? (RegExp.$1.length > 2 ? "\u661f\u671f" : "\u5468") : "") + week[this.getDay() + ""]);
    }
    for (var k in o) {
        if (new RegExp("(" + k + ")").test(fmt)) {
            fmt = fmt.replace(RegExp.$1, (RegExp.$1.length == 1) ? (o[k]) : (("00" + o[k]).substr(("" + o[k]).length)));
        }
    }
    return fmt;
};