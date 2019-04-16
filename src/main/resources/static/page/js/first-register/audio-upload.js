var AUDIO_UPLOAD=function () {
    // 打开录音modal
    function openSongModal(){
        //清空上传信息
        $('#fileUploadSongForm')[0].reset();
        $("#uploadSongModal").modal("show");
        $("#crfIdUploadSong").val($("#crfId").val());
        $("#subjectIdUploadSong").val($('#subjectId').val());
        $("#typeIdUploadSong").val(FIRST_REGISTER.filedType());
        $('#fileSong').click();
    };
    // 录音提交
    function songcommit() {
        //判断是否选中文件夹
        var file = $("#fileSong").val();
        if (file == '') {
            alert('请选择要上传的文件');
            return;
        }
        var userId=$('patiengId').val();
        //判断文件名称
        if(file.indexOf(userId)==-1){
         alert('选择语音文件与当前病人不符，请重新选择！');
         return;
        }
        return;
        var options = {
            url: '../api/common/uploadSong',
            type: 'post',
            success: function (data) {
                if (data) {
                    alert("上传成功");
                    $("#uploadSongModal").modal("hide");
                    $('#crfList').bootstrapTable('refresh');
                }
            }
        }
        $("#fileUploadSongForm").ajaxSubmit(options);
    };
    return {
        open:openSongModal,
        upload:songcommit
    };
}();
// 关闭图片上传
function closeUploadSong() {
    $("#uploadSongModal").modal("hide");
};