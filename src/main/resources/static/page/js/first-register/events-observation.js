var EVENTS_OBSERVATION = function () {
    var _data = {
        eoPid: "",
        templates: {},
        el: {
            modal: $("#eventsObservationModal"),
            form: $("#eventsObservationForm"),
            formDiv: $("#eventsObservationFormDiv"),
            stageSelect: $("#stageSelect"),
            pid: $("#eoPid"),
            patiengId: $("#patiengId"),
            queryId: $("#eoQueryPid"),
            crfId: $("#eoCrfId"),
            subjectId: $("#subjectId")
        },
        url: {},
        stageSelectData: {
            101: "第一部分：多中心诊断准确性试验",
            102: "第二部分：多中心前瞻性队列研究",
            103: "第三部分：随机双盲平行对照多中心前瞻性队列研究",
        }
    }

    var modalShow = function () {
        _data.el.form.resetForm()
        _data.eoPid = _data.el.patiengId.val()
        _data.el.pid.val(_data.eoPid)
        _data.el.crfId.val(_data.eoPid)
        _data.el.modal.modal("show");

    }
    var modalHide = function () {
        _data.el.modal.modal("hide");
    }

    var formInit = function () {
        var nowFormId = "0019"
        _data.templates = JSON.parse(LoginInfo.subFiledTemp().templates);
        var conf = eval('(' + _data.templates[nowFormId].template + ')');
        _data.el.formDiv.empty();
        _data.el.formDiv.comp(conf.show());
    }

    var selectInit = function () {
        var option = _data.stageSelectData
        _data.el.stageSelect.html("")
        optionHtml = ""
        for (var key in option) {
            optionHtml += '<option value="' + key + '">' + option[key] + '</option>'
        }
        _data.el.stageSelect.html(optionHtml)
    }

    var queryCrfId = function () {
        $.ajax({
            url: "../api/es/getValue",
            type: 'post',
            data: {
                key: _data.el.queryId.val(),
                subjectId: _data.el.subjectId.val()
            },
            dataType: 'json',
            success: function (data) {
                if (data && data.crfId) {
                    _data.el.crfId.val(data.crfId)
                    _data.el.pid.val(data.crfId)
                }
            }
        });
    }

    var saveForm = function () {
        var data = _data.el.form.serializeJSON();
        if (confirm("确定提交？")) {
            var url = '../api/es/saveEdit';
            $.ajax({
                url: url,
                type: 'post',
                data: {
                    "data": JSON.stringify(data),
                    "tableName": "eventsObservation",
                    "subjectId": _data.el.subjectId.val(),
                    "fieldTypeId": _data.el.stageSelect.val()
                },
                dataType: 'text',
                success: function (msg) {
                    modalHide()
                    alert("保存成功！")
                }
            });
        }
    }

    var init = function () {
        selectInit()
        formInit()
    }

    return {
        modalShow: modalShow,
        modalHide: modalHide,
        saveForm: saveForm,
        queryCrfId: queryCrfId,
        init: init
    }
}();

$(function () {
    EVENTS_OBSERVATION.init()
})