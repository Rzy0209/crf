var Et=function () {
    ace.require("ace/ext/language_tools");
    var editor=ace.edit('code-panel');
    editor.getSession().setMode('ace/mode/javascript');
    //editor.setTheme('ace/theme/clouds');
    editor.setOptions({
        enableBasicAutocompletion: true,
        enableSnippets: true,
        enableLiveAutocompletion: true
    });
    var options=null,layoutKeyDown=false;
    localLoad();
    function hasEditorError() {
        var annotations = editor.getSession().getAnnotations();
        for (var aid = 0, alen = annotations.length; aid < alen; ++aid) {
            if (annotations[aid].type === 'error') {
                return true;
            }
        }
        return false;
    }
    function log(text, type) {

        // log time
        var timeStr = formatTime(new Date());

        if (type !== 'warn' && type !== 'error') {
            type = 'info';
        }

        $('#code-info').html(
            '<span class="code-info-time">' + timeStr + '</span>' +
            '<span class="code-info-type-' + type + '">' + text + '</span>'
        );

    }
    // format time to string
    function formatTime(time) {

        var digits = [time.getHours(), time.getMinutes(), time.getSeconds()];
        var timeStr = '';
        for (var i = 0, len = digits.length; i < len; ++i) {
            timeStr += (digits[i] < 10 ? '0' : '') + digits[i];
            if (i < len - 1) {
                timeStr += ':';
            }
        }
        return timeStr;

    }
    function localSave() {
        window.localStorage.setItem('Et.Val',editor.getValue());
    }
    function localLoad() {
        var localVal=window.localStorage.getItem('Et.Val')||'options = {\r\n};';
        editor.setValue(localVal);
    }
    var run=function () {
      //check code is valid
        if(hasEditorError()){
            log('代码错误，请检查相关位置','error');
            return;
        }
        options=null;
        eval(editor.getValue());
        try{
            $('#view-panel').empty();
            $('#view-panel').comp(options);
            log('创建完毕','info');
            localSave();
        }catch (e) {
            log('内部错误','error');
            throw e;
        }

    };
    $(window).mousemove(function(e) {
        if (layoutKeyDown) {
            var left = e.clientX / window.innerWidth;
            setSplitPosition(left);
        }
    }).mouseup(function() {
        layoutKeyDown = false;
    });
    function setSplitPosition(percentage) {
        percentage = Math.min(0.9, Math.max(0.1, percentage));

        var left = percentage * 100;
        $('#code-container').css('width', left + '%');
        $('.right-container').css('width', (100 - left) + '%')
            .css('left', left + '%');
        $('#h-handler').css('left', left + '%');
    }
    $('#h-handler').mousedown(function() {
        layoutKeyDown = true;
    });
    setSplitPosition(0.3);
    return {
        editor:editor,
        run:run
    }
}();
$(function () {
   Et.run();
});