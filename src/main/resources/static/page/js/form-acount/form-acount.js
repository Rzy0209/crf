$(function () {
    //初始化Table
    var oTable = new TableInit();
    oTable.Init();
});

var TableInit = function () {
    var oTableInit = new Object();
    //初始化Table
    oTableInit.Init = function () {
        $('#acountTable').bootstrapTable({
            url: '../api/common/acount',         //请求后台的URL（*）
            method: 'get',                      //请求方式（*）
            toolbar: '#toolbar',                //工具按钮用哪个容器
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
            uniqueId: "orgCode",                     //每一行的唯一标识，一般为主键列
            columns: [{
                field: 'orgCode',
                title: '机构编码'
            }, {
                field: 'personAcount',
                title: '患者数量'
            }, {
                field: 'formAcount',
                title: '填写表单数量'
            }, {
                title: '操作',
                // events: operateEvents,
                formatter: function (val, row, index) {
                   /* var button = '<button type="button" onclick="showView(\'' + row.crfId + '\')" class="btn btn-default">查看</button>' +
                        '&nbsp;&nbsp;<button type="button" onclick="updateCrf(\'' + row.crfId + '\')" class="btn btn-default">编辑</button>';
                    if (auth != '' && auth != null && auth != undefined && $.inArray("topic_delete", auth) > -1) {
                        button += '&nbsp;&nbsp;<button type="button" onclick="deleteCrf(\'' + row.crfId + '\')" class="btn btn-default">删除</button>';
                    }*/
                    return '&nbsp;&nbsp;<button type="button" onclick="yuliu(\'' + row.crfId + '\')" class="btn btn-default">预留操作</button>';;
                }
            }]
        });
    };
    //查询参数
    oTableInit.queryParams = function (params) {
        var temp = {
            limit: params.limit,   //每页条数
            offset: params.offset  //页码
        };
        return temp;
    };
    return oTableInit;
};