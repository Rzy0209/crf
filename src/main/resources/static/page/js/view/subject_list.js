// 当前表格code
var nowFormToCommitCode = "";
// 新建与编辑
var addOrEdit = "";
var validate;
var dictList = {
    leader: [],
    type: [],
    level: [],
    belong: [],
    status: []
}
$(function () {

    initDateRangePicker()
    buildSelect(1)
    buildSelect(2)
    buildSelect(3)
    buildSelect(4)
    buildSelect(5)

    //初始化Table
    var oTable = new TableInit();
    oTable.Init();

    validate = $("#subjectForm").validate({
        focusInvalid: true, //当为false时，验证无效时，没有焦点响应
        onkeyup: false,
        rules: {
            name: {
                required: true
            }
        },
        messages: {
            name: {
                required: "请输入课题名称"
            }
        }
        // ,
        // errorPlacement: function (error, element) {
        //     // if (element.is(":checkbox") || element.is(":radio")) {
        //         error.appendTo(element.parent().parent());
        //     // } else {
        //     //     error.insertAfter(element);
        //     // }
        // }
    });

});

// 打开课题表单
function showModal(id) {
    resetForm();
    $('#subjectModal').modal('show');
    // 查看或编辑时回显
    if (!!id) {
        $.ajax({
            url: "../api/subject/id/" + id,
            type: 'GET',
            dataType: 'text',
            success: function (msg) {
                if (msg) {
                    var options = {jsonValue: msg, isDebug: false};
                    $("form").initForm(options);
                    var json = JSON.parse(msg);
                    console.log(json);
                   var dateCtrl=$('#ctrl-date input:first').data('daterangepicker');

                   var ymdhms='YYYY-MM-DD';
                    if (json.startDate){
                        dateCtrl.setStartDate(moment(json.startDate));
                    }
                    if(json.endDate){
                        dateCtrl.setEndDate(moment(json.endDate));
                    }
                    if (json.leader)
                        $('#leader').selectpicker('val', json.leader);
                    if (json.type)
                        $('#type').selectpicker('val', json.type);
                    if (json.level)
                        $('#level').selectpicker('val', json.level);
                    if (json.belong)
                        $('#belong').selectpicker('val', json.belong);
                    if (json.status)
                        $('#status').selectpicker('val', json.status);
                    $("form input[type=hidden]").change();
                }
            }
        });
    }
};
function resetForm(){
    var form=$('form');
    form[0].reset();
    var sel=form.find('select');
    sel.trigger('change');
}
// 添加表格信息
function save() {

    if (!$("form").valid()) {
        return
    }

    if (confirm("确定提交？")) {
        // 提交的信息
        var data = $("form").serialize();
        // 提交路径
        var url = '../api/subject/save';
        $.ajax({
            url: url,
            type: 'post',
            data: data,
            dataType: 'text',
            success: function (msg) {
                if (msg.indexOf("保存失败") > -1) {
                    alert(msg);
                } else if (msg.indexOf("保存成功") > -1) {
                    alert(msg);
                    closeModal();
                }
            }
        });
    }
};

function deleteSubject(id) {
    var isConfirm = confirm("确认删除:");
    if (isConfirm) {
        $.ajax({
            url: "../api/subject/delete/" + id,
            type: 'get',
            dataType: 'text',
            success: function (msg) {
                alert(msg);
                $('#subjectList').bootstrapTable('refresh');
            }
        });
    }
}


var TableInit = function () {
    var oTableInit = new Object();
    //初始化Table
    oTableInit.Init = function () {
        $('#subjectList').bootstrapTable({
            url: '../api/subject/page',         //请求后台的URL（*）
            method: 'get',                      //请求方式（*）
            toolbar: '#toolbar',                //工具
            striped: true,                      //是否显示行间隔色
            cache: false,                       //是否使用缓存，默认为true，所以一般情况下需要设置一下这个属性（*）
            pagination: true,                   //是否显示分页（*）
            sortable: false,                     //是否启用排序
            queryParams: oTableInit.queryParams,//传递参数（*）
            sidePagination: "server",           //分页方式：client客户端分页，server服务端分页（*）
            pageSize: 10,                       //每页的记录行数（*）
            pageList: [10, 25, 50, 100],        //可供选择的每页的行数（*）
            showRefresh: true,                  //是否显示刷新按钮
            clickToSelect: true,                //是否启用点击选中行
            height: 500,                        //行高，如果没有设置height属性，表格自动根据记录条数觉得表格高度
            uniqueId: "crfId",                     //每一行的唯一标识，一般为主键列
            columns: [{
                field: 'name',
                title: '课题名称'
            }, {
                field: 'startDate',
                title: '开始时间',
                formatter: function (value, row, index) {
                    if (value) {
                        return new Date(value.time).format('yyyy-MM-dd')
                    }
                }
            }, {
                field: 'endDate',
                title: '截止时间',
                formatter: function (value, row, index) {
                    if (value) {
                        return new Date(value.time).format('yyyy-MM-dd')
                    }
                }
            }, {
                field: 'leader',
                title: '负责人',
                formatter: function (value, row, index) {
                    return formatDictValue(value, dictList.leader)
                }
            }, {
                field: 'type',
                title: '类型',
                formatter: function (value, row, index) {
                    return formatDictValue(value, dictList.type)
                }
            }, {
                field: 'level',
                title: '级别',
                formatter: function (value, row, index) {
                    return formatDictValue(value, dictList.level)
                }
            }, {
                field: 'belong',
                title: '专病',
                formatter: function (value, row, index) {
                    return formatDictValue(value, dictList.belong)
                }
            }, {
                field: 'status',
                title: '状态',
                formatter: function (value, row, index) {
                    return formatDictValue(value, dictList.status)
                }
            }, {
                title: '操作',
                formatter: function (val, row, index) {
                    return '<button type="button" onclick="showModal(\'' + row.id + '\')" class="btn btn-default">编辑</button>&nbsp;&nbsp;'
                        + '<button type="button" onclick="deleteSubject(\'' + row.id + '\')" class="btn btn-default">删除</button>'
                }
            }]
        });
    };
    //查询参数
    oTableInit.queryParams = function (params) {
        var temp = {
            limit: params.limit,   //每页条数
            offset: params.offset,  //页码
            testNumber: $("#testNumber").val()
        };
        return temp;
    };

    return oTableInit;
};

function queryTable() {
    $('#subjectList').bootstrapTable('refresh');
}

function formatDictValue(code, dict) {
    var value = code
    var dictArray = dict[0]
    if (code && dictArray) {
        for (var i = 0; i < dictArray.length; i++) {
            if (dictArray[i].code == code.toString()) {
                value = dictArray[i].name;
            }
        }
    }
    return value
}

// 关闭modal
function closeModal() {
    validate.resetForm()
    $("#subjectModal").modal("hide");
    $('#subjectList').bootstrapTable('refresh');
}

function buildSelect(type) {
    var code;
    $.ajax({
        url: '../api/dict/type/' + type,
        type: 'get',
        dataType: 'json',
        scriptCharset: 'utf-8',
        success: function (e) {
            switch (type) {
                case 1:
                    code = "leader"
                    dictList.leader.push(e)
                    break;
                case 2:
                    code = "type"
                    dictList.type.push(e)
                    break;
                case 3:
                    code = "level"
                    dictList.level.push(e)
                    break;
                case 4:
                    code = "belong"
                    dictList.belong.push(e)
                    break;
                case 5:
                    code = "status"
                    dictList.status.push(e)
                    break;
                default:
                    break;
            }
            for (var i = 0; i < e.length; i++) {
                $('#' + code).append("<option value='" + e[i].code + "'>" + e[i].name + "</option>");
            }
            $('#'+code).selectpicker();
        },
        async: true
    });
}

function initDateRangePicker() {
    $('#ctrl-date input:first').daterangepicker({
        "locale": {
            "format": 'YYYY-MM-DD',
            "separator": ' ~ ',
            "applyLabel": "应用",
            "cancelLabel": "取消",
            "resetLabel": "重置",
            "fromLabel": "起始时间",
            "toLabel": "结束时间'",
            "customRangeLabel": "自定义",
            "weekLabel": "W",
            "daysOfWeek": ["日", "一", "二", "三", "四", "五", "六"],
            "monthNames": ["一月", "二月", "三月", "四月", "五月", "六月", "七月", "八月", "九月", "十月", "十一月", "十二月"],
            "firstDay": 1
        }
    },daterangepickercallbak);
    $('#ctrl-date span').click(function () {
        $('#ctrl-date input:first').click();
    });
}

/**
 * 日期范围回显触发
 * @param start
 * @param end
 */
function daterangepickercallbak(start,end){
    var fmt='YYYY-MM-DD',sdate=start.format(fmt),edate=end.format(fmt);
    console.log(fmt,sdate,edate);
    $('#ctrl-date input:first').val(sdate + ' ~ ' + edate);
    $('#startDate').val(sdate);
    $('#endDate').val(edate);
}

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
}
