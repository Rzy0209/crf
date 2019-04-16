!function ($, _) {
    var exArray = []; //存储设备源ID
    var videoDevice = null,tracks=null,version='1.0.0';
    $.fn.extend({
        shoot: function (options) {
            var $this = $(this);
            var args = Array.prototype.slice.call(arguments, 1);
            var defaults = {};
            var methods = ['start', 'stop', 'close', 'snap','upload', 'chose', 'check','version'];

            if (options != null && typeof options == 'string') {
                if (_.includes(methods, options)) {
                    options = {method: options}
                }
            }
            var _options = $.extend({}, defaults, options);
            $this.each(function () {
                this._options = _options;
                if (_options.method) {
                    _methods.apply(this, args);
                }
            });
            return $this;
        }
    });

    function _methods(params,callback) {
        var args = Array.prototype.slice.call(arguments, 0);
        var _methods = {
            start: function () {
                getMedia.call(this);
            },
            stop: function () {
                stopMedia.call(this);
            },
            close:function () {
                clearMedia.call(this);
            },
            snap:function (el,param,callback) {
                getPhoto.call(this,el,param,callback);
            },
            upload:function(ajax,el){
                $.ajax.call(this,ajax);
            },
            version:function () {
                return version;
            }
        };
        _methods[this._options.method]&&_methods[this._options.method].apply(this, args);
    }


    /**
     * 获取视频输入设备
     */
    function getVideos(callback) {
        var $this = this,_opt=$this._options;
        if (navigator.mediaDevices) {
            navigator.mediaDevices.enumerateDevices().then(function (sources) {
                exArray = _.filter(sources, function (source) {
                    return source.kind === 'videoinput';
                });
                if(_opt.filter){
                    videoDevice=_opt.filter.call($this,exArray);
                }
                videoDevice =videoDevice||_.findLast(exArray);
                if (_.isEmpty(exArray)) {
                    alert("未检测到摄像头，请检查！");
                } else {
                    callback.call($this);
                }
            }).catch(function (reason) {
                alert(reason)
            });
        } else {
            alert("浏览器不支持摄像头拍照，请使用chrome浏览器！")
        }
    }

    function getMedia(params) {
        var _this = this;
        if (_.isEmpty(exArray)) {
            getVideos.call(this, getMedia);
            return;
        }
        var defaults={'deviceId': videoDevice.deviceId,width:$(this).width(),height:$(this).height()};
        var opt=$.extend({},defaults,params);
        if (navigator.mediaDevices) {
            navigator.mediaDevices.getUserMedia({
                'video':opt
            }).then(function (stream) {
                tracks=stream.getVideoTracks();
                fillVideo.call(_this, stream);
            }).catch(errorFunc);    //success是获取成功的回调函数
        } else {
            alert("浏览器不支持摄像头拍照，请使用chrome浏览器！");
        }
    }

    /**
     * 停止摄像
     */
    function stopMedia() {
        if (!videoDevice) {
            getVideos.call(this, stopMedia);
            return;
        }
        tracks&&_.each(tracks,function (val) {
            val.stop();
        });
        $(this)[0].pause();
    }
    function clearMedia() {
        var video = $(this)[0];
        if (video.mozSrcObject !== undefined) {
            video.mozSrcObject = null;
        } else {
            video.srcObject = null;
        }
    }

    function fillVideo(stream) {
        var video = $(this)[0];
        if (video.mozSrcObject !== undefined) {
            //Firefox中，video.mozSrcObject最初为null，而不是未定义的，我们可以靠这个来检测Firefox的支持
            video.mozSrcObject = stream;
        } else {
            video.srcObject = stream;
        }
        video.play();
    }

    function errorFunc(e) {
        alert('Error！' + e);
    }
    //截屏
    function getPhoto(el,params,callback) {
        var cxt=el.getContext("2d");
        var defaults={
            dx:0,
            dy:0,
            dw:$(el).width(),
            dh:$(el).height()
        };
        var _options=$.extend({}, defaults, params);
        cxt.drawImage(this, _options.dx, _options.dy, _options.dw, _options.dh); //将video对象内指定的区域捕捉绘制到画布上指定的区域，实现拍照。
        callback&&callback.call(this,el);
    }

}(jQuery, _);