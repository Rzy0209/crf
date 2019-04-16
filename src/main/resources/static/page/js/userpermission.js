var demoTableObj = null;
var orgid = '0';
$(function () {
    //左侧机构树
    userpermission.createTree();
    //清空机构名称
    $('#user').val('');

})

var userpermission = {
        //左侧树
        createTree: function () {
            $.ajax({
                url: "../api/org/findAll",
                type: "POST",
                // async: false,
                success: function (msg) {
                    $("#orgTree").html("");
                    //初始化树
                    userpermission.initOrgTree(msg);
                    //初始化table
                    // userpermission.createTable();
                }
            });
        },
        //查询机构数据
        initOrgTree: function (datas) {
            var result = datas;
            $("#orgTree").jstree({
                'plugins': ["dnd", "state", "search", "wholerow", "types"],
                "core": {
                    "themes": {
                        "responsive": false
                    },
                    "check_callback": false,
                    'data': result
                },
                "types": {
                    "default": {
                        "icon": "fa fa-cubes icon-state-success"
                    },
                    "file": {
                        "icon": "fa fa-cube icon-state-success"
                    }
                },
            }).bind('select_node.jstree', function (event, row) {
                var id = row.node.id;
                orgid = id
                $("#orgid").val(id);
                // $('#dataSetTable').bootstrapTable('refresh')
            });
        },
        //创建table
        createTable: function () {
            $('#dataSetTable').bootstrapTable({
                method: 'POST',
                dataType: 'json',
                contentType: "application/x-www-form-urlencoded",
                cache: false,
                //是否显示行间隔色
                striped: true,
                //分页方式：client客户端分页，server服务端分页（*）
                sidePagination: "server",
                url: '../api/org/findById',
                // showColumns: true,
                // pagination: true,    //显示分页、条数信息
                queryParams: userpermission.queryParams,
                minimumCountColumns: 2,
                pageNumber: 1,        //初始化加载第一页，默认第一页
                pageSize: 20,            //每页的记录行数（*）
                pageList: [10, 25, 50, 100],       //可供选择的每页的行数（*）
                uniqueId: "id",      //每一行的唯一标识，一般为主键列
                showExport: true,
                exportDataType: 'all',
                columns: [
                    {
                        checkbox:true
                    },
                    {
                        field: 'orgnizationname',
                        title: '机构名称'
                    },
                    {
                        field: 'orgid',
                        title: '24小时之后是否可编辑',
                        formatter: function (value, row, index) {
                            return "<i class='fa fa-edit' onclick='userpermission.permission(\"" + row.orgid + "\"'>可编辑</i>&nbsp;&nbsp;&nbsp;&nbsp;<i class='fa fa-ban' onclick='userpermission.dispermission(\"\" + row.orgid + \"\"'>不可编辑</i>";
                        }
                    }]
            });
        },
        //设置查询参数
        queryParams: function (params) {
            var param = {
                // limit: this.limit, // 页面大小
                // offset: this.offset, // 页码
                // pageindex: this.pageNumber,
                // pageSize: this.pageSize,
                orgName: $('#user').val(),
                orgid: orgid
            }
            return param;
        },
        //刷新table
        query: function () {
            $('#dataSetTable').bootstrapTable('refresh')
        },

        permission: function (orgid,orgname) {
            alert(orgid+","+orgname);
        },

        saves : function () {
            var id = $("#orgid").val();
            var isEdit = '';
            $("input[name='edits']:checked").each(function(j) {
                if (j >= 0) {
                    isEdit = $(this).val();
                }
            });
            var data = {"orgCode":id,"isEdit":isEdit};
            $.ajax({
                url:'../api/identifierPower/save',
                type:'post',
                dataType:'text',
                data:{
                    "data":JSON.stringify(data)
                },
                success : function (msg) {
                    if("保存成功".indexOf(msg)>-1){
                        alert(msg);
                    }else{
                        alert("保存失败");
                    }
                }
            });
        }


    }
;