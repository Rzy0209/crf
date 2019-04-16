/**
 * 录音支持
 */
var REC = function () {
    var url = 'ws://127.0.0.1:65103/', optput = $('#output'),wsFlag=true,_ws;

    function gws() {
        try {
            if(!wsFlag){
                return null;
            }
            if ("WebSocket" in window){
                var ws=new WebSocket(url);
                ws.onerror=function () {
                    alert("未打开录音程序，请先打开录音程序再进行录音。");
                    FIRST_REGISTER.soundRecordOff();
                };
            }else{
                alert("您的浏览器不支持录音功能,请使用chrome浏览器打开此页面!");
            }
            return  ws;
        } catch (e) {
            alert(e);
            wsFlag=false;
            return null;
        }
    }

    function uid() {
        return $('#crfId').val();
    }

    function info(msg) {
        $('#lbl-rcd').html(msg);
    }

    /**
     * 开始录音
     */
    var start = function () {
        _ws= gws();
        if (!_ws)return;
        _ws.onopen=function (e) {
            var data = {action: 'startRecord', uid: uid()};
            _ws.send(JSON.stringify(data));
            info('录音中..');
        };
        _ws.onmessage=function (e) {
            var data=e.data;
            if('OK'!=data){
                alert("录音程序内部错误，请执行以下步骤重启录音系统。\n1、关闭录音程序 2、拔掉录音设备重新插入 3、重新打开录音程序");
                FIRST_REGISTER.soundRecordOff();
            }
            //关闭连接
            _ws.close();
        }
    };
    /**
     * 停止录音
     */
    var stop = function () {
        _ws= gws();
        if (!_ws) return;
        _ws.onopen=function (e) {
            var data = {action: 'stopRecord', uid: uid()};
            _ws.send(JSON.stringify(data));
            info('已停止录音');
        };
        _ws.onmessage=function (e) {
            _ws.close();
        }
    };
    /**
     * 关闭链接
     */
    var close = function () {
        if (!_ws) return;
        _ws.close();
    };
    /**
     * 初始化信息
     */
    var init = function () {
        //信息重置
        info('');
        //关闭录音
        close();

    };
    return {
        start: start,
        stop: stop,
        close: close,
        init: init
    };
}();