var url = '../assets/js/page/jqtreegrid/treegrid.json';
var tableData=[];
// 表格对象
var $table = $('#formgroup');
// 初始化方法
$(function() {
    // 获取所有表单数据
    initAllFormData();
});
// 获取所有数据
function initAllFormData(){
    // 关联参数(预留的参数 为了搜索功能)
    //var param = $("#formName").val();
    //param = param.trim();
    $.ajax({
        url:"../api/subjectform/getall",
        type:'post',
        data:{param:""},
        async:false,
        dataType:'json',
        success:function (msg) {
            if(msg){
                tableData = msg;
                // 清空选项
                $("#pid").empty();
                for(var i = 0;i<msg.length;i++){
                    if(msg[i].type==0){
                        $("#pid").append("<option value=" + msg[i].id + ">" + msg[i].title + "</option>")
                    }
                }
                // 重新渲染 缺一不可
                $('#pid').selectpicker('refresh');
                $('#pid').selectpicker('render');
                // 初始化树列表
                initFormTreeTable();
            }
        }
    });
};
// 初始化treeTable
function initFormTreeTable() {
    $table.bootstrapTable({
        data:tableData,
        idField: 'id',
        dataType:'jsonp',
        //在哪一列展开树形
        treeShowField: 'title',
        //指定父id列
        parentIdField: 'pid',
        columns: [
            {
                field: 'title',
                title: '名称'
            },
            {
                field: 'status',
                title: '状态',
                sortable: false,
                align: 'center',
                formatter: function (value, row, index) {
                    if (value === 1) {
                        return '<span class="label label-success">正常</span>'
                    }
                    return '<span class="label label-default">锁定</span>'
                }
            },
            {
                field: 'type',
                title: '表单类型',
                align: 'center',
                formatter: function (value, row, index) {
                    if (value === 0) {
                        return '分组'
                    }
                    if (value === 1) {
                        return '表单'
                    }
                    return '-'
                }
            },
            {
                title: '操作',
                align: 'center',
                formatter: function (value, row, index) {
                    var buttonStr = '<button type="button" onclick="update(\'' + row.id + '\',\'' + row.title + '\',\'' + row.type+'\',\''+ row.pid+'\',\''+row.remark+'\')" class="btn btn-primary">编辑</button>&nbsp;&nbsp;'
                        + '<button type="button" onclick="del(\'' + row.id + '\')" class="btn btn-primary">删除</button>';
                    if(row.type == 0){
                        buttonStr += '<button type="button" onclick="newchild(\'' + row.id + '\')" class="btn btn-primary">新建子集</button>';
                    }
                    return buttonStr;

                }
            }
        ],
        onResetView: function(tableData) {
            $table.treegrid({
                initialState: 'collapsed',// 所有节点都折叠
                //initialState: 'expanded',// 所有节点都展开，默认展开
                treeColumn: 0,
                 //expanderExpandedClass: 'glyphicon glyphicon-minus',  //图标样式
                 //expanderCollapsedClass: 'glyphicon glyphicon-plus',
                onChange: function() {
                    $table.bootstrapTable('resetWidth');
                }
            });
            //只展开树形的第一级节点
           // $table.treegrid('getRootNodes').treegrid('expand');
        },
        onCheck:function(row){
            var datas = $table.bootstrapTable('getData');
            // 勾选子类
            selectChilds(datas,row,"id","pid",true);

            // 勾选父类
            selectParentChecked(datas,row,"id","pid")

            // 刷新数据
            $table.bootstrapTable('load', datas);
        },
        onUncheck:function(row){
            var datas = $table.bootstrapTable('getData');
            selectChilds(datas,row,"id","pid",false);
            $table.bootstrapTable('load', datas);
        }
    });
};
// 搜索
function search() {

};
// 新建
function newform() {
    $("#myModal").modal("show");
    $("#id").val("");
    $("#title").val("");
    $("#remark").val("");
    initAllFormData();
};
// 新建子集
function newchild(pid) {
    $("#myModal").modal("show");
    $("#id").val("");
    $("#title").val("");
    $("#remark").val("");
    initAllFormData();
    $("#pid").selectpicker('val', pid);
};
// 关闭modal
function closeModal() {
    $("#myModal").modal("hide");
};
// 提交data
function dataSub() {
    // 提交的信息
    var data = $("form").serialize();
    $.ajax({
        url:"../api/subjectform/save",
        type:'post',
        data:data,
        dataType:'text',
        success:function (msg) {
            if(msg){
                optFinish(msg)
            }
        }
    });
};
// 编辑
function update(id,title,type,pid,remark) {
    $("#id").val(id);
    $('#pid').selectpicker('val', pid);
    $("#title").val(title);
    $("#type").selectpicker('val', 1);
    $("#remark").val(remark);
    $("#myModal").modal("show");
};
function del(id) {
    $.ajax({
        url:"../api/subjectform/del",
        type:'post',
        data:{id:id},
        dataType:'text',
        success:function (msg) {
            if(msg){
                optFinish(msg)
            }
        }
    });
};
// 操作执行完成后
function optFinish(msg){
    $table.bootstrapTable('destroy');
    initAllFormData();
    alert(msg);
    closeModal();
};
// 搜索
function search() {
    initAllFormData();
};