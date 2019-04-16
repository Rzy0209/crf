$(function(){
	var oTable = new TableInit();
    oTable.Init();
});

function showCreateCrfModal(){
    $('#createModal').modal('show');
};
function showTemplet(id){
    location.href="new-crf-templet.html?id="+id;
};

function deleteTemplet(id){
    var isConfirm = confirm("确认删除");
    if (isConfirm){
        $.ajax({
            url:"../api/crfSubjectTemplet/"+id,
            type:"delete",
            success: function (msg) {
                if (msg) {
                    alert("删除成功");
                } else {
                    alert("删除失败");
                }
                $('#crfTempletList').bootstrapTable('refresh');

            }
        })
    }
};


function saveCreateCrfModal(){
    //表单数据处理成json格式
    var params = $("#createCrfForm").serializeArray();
    var jsonParam = {};
    $.each(params, function() {
        if (jsonParam[this.name] !== undefined) {
            if (!jsonParam[this.name].push) {
                jsonParam[this.name] = [jsonParam[this.name]];
            }
            jsonParam[this.name].push(this.value || '');
        } else {
            jsonParam[this.name] = this.value || '';
        }
    });
    var param = JSON.stringify(jsonParam);
    $.ajax({
        url: "../api/crfSubjectTemplet/save",
        type: "post",
        contentType: "application/json",
        data: param,
        success:function(data){
            console.log(data);
            location.href="new-crf-templet.html?id="+data.id;
        }
    });
};
var TableInit = function () {
    var oTableInit = {};
    //初始化Table
    oTableInit.Init = function () {
        $('#crfTempletList').bootstrapTable({
            url: '../api/crfSubjectTemplet/page',        //请求后台的URL（*）
            method: 'get',                      //请求方式（*）
            toolbar: '#toolbar',                //工具按钮用哪个容器
            ajaxOptions: {
                async: false // 如果设置为异步，需要等请求成功后才会生成下面的tr和td，就无法在td中添加按钮
            },
            striped: true,                      //是否显示行间隔色
            cache: false,                       //是否使用缓存，默认为true，所以一般情况下需要设置一下这个属性（*）
            pagination: true,                   //是否显示分页（*）
            sortable: false,                     //是否启用排序
            //queryParams: oTableInit.queryParams,//传递参数（*）
            sidePagination: "server",           //分页方式：client客户端分页，server服务端分页（*）
            pageSize: 10,                       //每页的记录行数（*）
            pageList: [10, 25, 50, 100],        //可供选择的每页的行数（*）
            showRefresh: false,                  //是否显示刷新按钮
            clickToSelect: true,                //是否启用点击选中行
            height: $(document.body).height() > 600 ? $(document.body).height() - 190 : 540,                        //行高，如果没有设置height属性，表格自动根据记录条数觉得表格高度
            uniqueId: "id",                     //每一行的唯一标识，一般为主键列
            columns: [{
                field: 'title',
                title: '标题'
            }, {
                field: 'userAccount',
                title: '创建人员'
            }, {
                field: 'createTime',
                title: '创建时间'
            }, {
                field: 'description',
                title: '模板介绍'
                },{
                title: '操作',
                // events: operateEvents,
                formatter: function (val, row, index) {
                    var button = '<div class="btn-group-sm" role="group" aria-label="操作">';
                    button += '<button type="button" onclick="showTemplet(\'' + row.id + '\')" class="btn blue btn-outline"><i class="fa fa-search"></i>&nbsp;查看</button>' +
                    '<button type="button" onclick="showTemplet(\'' + row.id + '\')" class="btn blue btn-outline"><i class="fa fa-edit"></i>&nbsp;编辑</button>';
                    button += '<button type="button" onclick="deleteTemplet(\'' + row.id + '\')" class="btn blue btn-outline"><i class="fa fa-remove"></i>&nbsp;删除</button>';
                    return button;
                }
            }]
        });
    };
    //查询参数
    /*oTableInit.queryParams = function (params) {
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
    };*/

    return oTableInit;
};