
var VIDEO_UPLOAD=function () {
    var _model=$('#video-upload-model'),_video=$('#video-cam'),canvas=$('#canvas-cam'),_snap=$('#video-snap'),_upload=$('#upload-snap'),_uploadSnap=$('#upload-and-snap'),_data,_cur_btn;
    function init() {
        _snap.off('click').on('click',function () {
            _video.shoot('snap',canvas[0]);
        });
        _upload.off('click').on('click',function () {
            upload(_video,canvas);
        });
        _uploadSnap.off('click').on('click',function () {
           _video.shoot('snap',canvas[0],null,upload);
        });
        _model.off('hide.bs.modal').on('hide.bs.modal',function () {
            reInit();
        });
        $('#btn-video').off('click').on('click',function () {
            _data=$(this).data('data')||{};
            _cur_btn=$(this);
           show();
        });
        $('#form-info').off('click','.btn-video').on('click','.btn-video',function () {
            _data=$(this).data('data')||{};
            _cur_btn=$(this);
            show.call(this);
        });
    }
    function show() {
        if(_data.title){
            _model.find('.modal-title').text(_data.title);
        }
        _model.modal('show');
        _video.shoot({method:'start',filter:function (devices) {
                var dev=null;
                for(var i=0;i<devices.length;i++){
                    var label=devices[i].label;
                    if(label.indexOf('Web')==0){
                        dev=devices[i];
                    }
                }
                return dev;
            }});
    }
    function upload() {
        var img=canvas[0].toDataURL("image/png");
        var imgData=img.substr(22);
        $.post('../api/common/upload/pic',{img:imgData,crfId:$('#patiengId').val(),fieldType:FIRST_REGISTER.filedType(),subjectId:1,type:_data.type},function (res) {
            alert("图片上传完成！");
            _cur_btn.next().val(1);
        });
    }
    function reInit() {
        _video.shoot('stop');
        _video.shoot('snap',canvas[0]);
        _video.shoot('close');
    }
    return {
        show:show,
        init:init
    };
}();