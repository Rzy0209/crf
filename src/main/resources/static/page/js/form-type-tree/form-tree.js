// tree数据
var treeData=[];
// 树操作相关的所有方法集合
var treeOptFuns = {
    // 构造tree
    initTree : function () {
        var setting = {
            view: {
                addHoverDom: null,
                removeHoverDom: null,
                selectedMulti: false
            },
            check: {
                enable: false
            },
            data: {
                simpleData: {
                    enable: true
                }
            },
            edit: {
                enable: false
            },
            callback : {
                onClick : clickNode
            }
        };

        var zNodes = treeData;

        $(document).ready(function() {
            $.fn.zTree.init($("#treeDemo"), setting, zNodes);
        });

        var newCount = 1;
        // 添加节点
        function addHoverDom(treeId, treeNode) {
            var sObj = $("#" + treeNode.tId + "_span");
            if (treeNode.editNameFlag || $("#addBtn_" + treeNode.tId).length > 0) return;
            var addStr = "<span class='button add' id='addBtn_" + treeNode.tId +
                "' title='add node' onfocus='this.blur();'></span>";
            sObj.after(addStr);
            var btn = $("#addBtn_" + treeNode.tId);
            if (btn) btn.bind("click", function() {
                var zTree = $.fn.zTree.getZTreeObj("treeDemo");
                zTree.addNodes(treeNode, {
                    id: (100 + newCount),
                    pId: treeNode.id,
                    name: "new node" + (newCount++)
                });
                return false;
            });
        };
        // 删除节点
        function removeHoverDom(treeId, treeNode) {
            $("#addBtn_" + treeNode.tId).unbind().remove();
        };
        // 点击节点
        function clickNode(treeId, treeNode) {
           console.log(treeId, treeNode);
        };
    },
    // tree数据查询
    initAllFormData : function () {
        $.ajax({
            url:"../api/subjectform/gettree",
            type:'post',
            data:{param:""},
            async:false,
            dataType:'json',
            success:function (msg) {
                if(msg){
                    treeData = msg;
                    // 初始化树列表
                    treeOptFuns.initTree();
                }
            }
        });
    }
};
// 初始化方法
$(function() {
    //初始化数据
    treeOptFuns.initAllFormData();
});