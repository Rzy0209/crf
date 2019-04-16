var jsonstr ="";
$(function () {
    var crfId =  window.location.search.substring(1).split("=");
    $.ajax({
        url:'../api/crf/comp/findOne',
        type:'get',
        data:{
            "crfId":crfId[1]
        },
        async:false,
        dataType: 'json',
        success:function (result) {
            jsonstr = result;
            //组装页面
            compPage();
        }
    });
    $('#selectDiv').click(function () {
        $('#showOption').css('display','block');
    });
    function compPage() {
        var context="";
        context +='<div style="height: 100%; width: 100%;">' +
            '<div class="" style="height: 100%; width: 100%;">' +
            '<div id="groupShowArea" class="groupPage">' +
            '<div id="questionRight" class="questionContent WidgetPreview">' +
            '<div class="qcLoading"></div>' +
            '<div class="fromInsideArea">' +
            '<div class="contentTilte">' +
            '<span class="prviewForm">'+jsonstr.name+'</span>' +
            '</div>' +
            '<div class="contentText">' +
            '<div class="noFillIn outerText">' +
            '<div class="newGridLayout">';
            '<form class="form-horizontal form-row-seperated" id="comp_form" style="min-height: 200px;">';
        var json = jsonstr.options;
        for(var i=0;i<json.length;i++){
            var jsr = json[i];
            var compType = jsr.compType;
            switch (compType){
                case "time":
                    context +='<div data-id="'+jsr.id+'" id="'+jsr.id+'" name="'+jsr.id+'" class="questionArea notGroup visibility-SHOW question-body-focus-false ">' +
                        '<div class="ant-row-flex ant-row-flex-middle"><div class="ant-col-1"></div>' +
                        '<div class="ant-col-5"><div class="collect-title"><span class="stem">'+jsr.title+'</span></div>' +
                        '<div class="richtext"></div></div><div class="ant-col-13 ant-col-offset-1"><div class="question-body-lock-false">' +
                        '<div><div style="margin: 10px 0px;"><div class="time-set">' +
                        '<input name="min" id="min" class="time-set-input fz-datepicker"' +
                        'autocomplete="off" placeholder="时间选择" value="" type="text"></div></div></div></div></div>' +
                        '<div class="ant-col-4"><div class="btn-contents"><span class="detailbtn"></span></div></div></div></div>';
                    break;
                case "label":
                    var labelType = jsr.labelType;
                    if(labelType =="text"){
                        context +='<div class="questionArea visibility-SHOW ">' +
                            '<div class="ant-row"><div class="ant-col-1"></div><div class="ant-col-22"><div class="collect-title "><span class="stem">'+jsr.title+'</span></div>' +
                            '<div class="collect-title "></div></div><div class="ant-col-1"></div></div>';
                    }else{
                        context+='<div class="questionArea visibility-SHOW questionMode-slice">' +
                            '<div class="ant-row"><div class="ant-col-1"></div><div class="ant-col-22"><div class="collect-title divisionLabel">' +
                            '<span class="stem">'+jsr.title+'</span></div><div class="collect-title divisionLabel"></div></div>' +
                            '<div class="ant-col-1"></div></div></div>';
                    }
                    break;
                case "radio":
                    var optionGroup = jsr.optionGroup;
                    var optionLayout = optionGroup.optionLayout;
                    context +='<div data-id="'+jsr.id+'" id="'+jsr.id+'" name="'+jsr.id+'" class="questionArea notGroup visibility-SHOW question-body-focus-false ">' +
                        '<div class="ant-row-flex ant-row-flex-middle">' +
                        '<div class="ant-col-1"></div>' +
                        '<div class="ant-col-5">' +
                        '<div class="collect-title"><span class="stem">'+jsr.title+'</span></div>' +
                        '<div class="richtext"></div>' +
                        '</div>' +
                        '<div class="ant-col-13 ant-col-offset-1">' +
                        '<div class="question-body-lock-false">';
                    if(optionLayout =="v"){
                        //纵着排
                        context +='<ul class="imgul">';
                        if(optionGroup != undefined){
                            var options = optionGroup.options;
                            if(options && options.length>0){
                                for(var j=0;j<options.length;j++){
                                    context +='<li class="">' +
                                        '<label class="defLabel" for="'+options[j].id+'">' +
                                        '<input type="radio" name="'+jsr.id+'" id="'+options[j].id+'" value="">' +
                                        '<span class="replaceInput"><i></i></span><span class="selectText">'+options[j].label+'</span></label>' +
                                        '<div class="media-body singleArea open-show-undefined" title="" style="width: 0px;"></div>' +
                                        '</li>';
                                }
                            }
                        }
                        context +='</ul></div></div><div class="ant-col-4"><div class="btn-contents"></div></div></div></div>';
                    }else if(optionLayout == "h"){
                        //横着排
                        context +='<ul class="noimgul">';
                        if(optionGroup != undefined){
                            var options = optionGroup.options;
                            if(options && options.length>0){
                                for(var j=0;j<options.length;j++){
                                    context +='<li class="">' +
                                        '<label class="defLabel" for="'+options[j].id+'">' +
                                        '<input type="radio" name="'+jsr.id+'" id="'+options[j].id+'" value="">' +
                                        '<span class="replaceInput"><i></i></span><span class="selectText">'+options[j].label+'</span></label>' +
                                        '<div class="media-body singleArea open-show-undefined" title="" style="width: 0px;"></div>' +
                                        '</li>';
                                }
                            }
                        }
                        context +='</ul></div></div><div class="ant-col-4"><div class="btn-contents"></div></div></div></div>';
                    }else{
                        context+=
                            '<select style="font-size:12px;height:24px;width:100px;">';
                        if(optionGroup != undefined){
                            var options = optionGroup.options;
                            if(options && options.length>0){
                                for(var j=0;j<options.length;j++){
                                    context +='<option value="'+options[j].valueCode+'">'+options[j].label+'</option>';
                                }
                            }
                        }
                        context +='</select></div></div></div><div></div></div><div class="ant-col-4"><div class="btn-contents">' +
                            '</div></div>';
                            // '</div></div>';
                    }
                    break;
                case "check":
                    var optionGroup = jsr.optionGroup;
                    var optionLayout = optionGroup.optionLayout;
                    context +='<div data-id="'+jsr.id+'" id="'+jsr.id+'" name="'+jsr.id+'" class="questionArea notGroup visibility-SHOW question-body-focus-false ">' +
                        '<div class="ant-row-flex ant-row-flex-middle">' +
                        '<div class="ant-col-1"></div>' +
                        '<div class="ant-col-5">' +
                        '<div class="collect-title"><span class="stem">'+jsr.title+'</span></div>' +
                        '<div class="richtext"></div>' +
                        '</div>' +
                        '<div class="ant-col-13 ant-col-offset-1">' +
                        '<div class="question-body-lock-false">';
                    if(optionLayout =="v"){
                        //纵着排
                        context +='<ul class="imgul">';
                        if(optionGroup != undefined){
                            var options = optionGroup.options;
                            if(options && options.length>0){
                                for(var j=0;j<options.length;j++){
                                    context +='<li class="">' +
                                        '<label class="defLabel" for="'+options[j].id+'">' +
                                        '<input type="checkBox" name="'+jsr.id+'" id="'+options[j].id+'" value="">' +
                                        '<span class="replaceInput"><i></i></span><span class="selectText">'+options[j].label+'</span></label>' +
                                        '<div class="media-body singleArea open-show-undefined" title="" style="width: 0px;"></div>' +
                                        '</li>';
                                }
                            }
                        }
                        context +='</ul></div></div><div class="ant-col-4"><div class="btn-contents"></div></div></div></div>';
                    }else{
                        //横着排
                        context +='<ul class="noimgul">';
                        if(optionGroup != undefined){
                            var options = optionGroup.options;
                            if(options && options.length>0){
                                for(var j=0;j<options.length;j++){
                                    context +='<li class="">' +
                                        '<label class="defLabel" for="'+options[j].id+'">' +
                                        '<input type="checkBox" name="'+jsr.id+'" id="'+options[j].id+'" value="">' +
                                        '<span class="replaceInput"><i></i></span><span class="selectText">'+options[j].label+'</span></label>' +
                                        '<div class="media-body singleArea open-show-undefined" title="" style="width: 0px;"></div>' +
                                        '</li>';
                                }
                            }
                        }
                        context +='</ul></div></div><div class="ant-col-4"><div class="btn-contents"></div></div></div></div>';
                    }
                    break;
                case "text":
                    var displayType = jsr.displayType;
                    context +='<div data-id="'+jsr.id+'" id="'+jsr.id+'" name="'+jsr.id+'" class="questionArea notGroup visibility-SHOW question-body-focus-false ">' +
                        '<div class="ant-row-flex ant-row-flex-middle">' +
                        '<div class="ant-col-1"></div>' +
                        '<div class="ant-col-5"><div class="collect-title"><span class="stem">'+jsr.title+'</span></div><div class="richtext"></div></div>' +
                        '<div class="ant-col-13 ant-col-offset-1"><div class="question-body-lock-false">' +
                        '<div class="controls"><div>';
                    if(displayType =="0"){
                        //单行文本
                        context += '<input type="text" class="form-control opentext-input" value="" placeholder="">';
                    }else{
                        //多行文本
                        context += '<textarea maxlength="15000" class="addTestHalfOpen" rows="3" placeholder=""></textarea>';
                    }
                    context +='</div></div></div>' +
                        '</div><div class="ant-col-4"><div class="btn-contents"><span class="detailbtn"></span></div></div></div></div>';
                    break;
                case "number":
                    context +='<div data-id="'+jsr.id+'" id="'+jsr.id+'" name="'+jsr.id+'" class="questionArea notGroup visibility-SHOW question-body-focus-false ">' +
                        '<div class="ant-row-flex ant-row-flex-middle">' +
                        '<div class="ant-col-1"></div>' +
                        '<div class="ant-col-5"><div class="collect-title"><span class="stem">'+jsr.title+'</span></div><div class="richtext"></div></div>' +
                        '<div class="ant-col-13 ant-col-offset-1"><div class="question-body-lock-false">' +
                        '<div class="controls"><div><input type="text" class="form-control opentext-input" value="" placeholder=""></div></div></div>' +
                        '</div><div class="ant-col-4"><div class="btn-contents"><span class="detailbtn"></span></div></div></div></div>';
                    break;
                case "table":
                    var row = jsr.row;
                    var col = jsr.col;
                    var title = jsr.tableTitle;
                    context +='<div style="padding-left:100px;"><table border=1 width="1000px">' +
                        '<tr>' +
                        '<td colspan='+col+'>'+title+'</td>' +
                        '</tr>';
                    for(var a=0;a<row;a++){
                        context +='<tr>';
                        for(var j=0;j<col;j++){
                            context += '<td>第'+j+'列</td>';
                        }
                        context +='</tr>';
                    }
                    context +='</table></div>';
                    break;
                default: break;
            }

        }
        context +='</form></div></div></div></div></div></div></div>';
        $('#preview').html(context);
        $( ".fz-datepicker" ).datetimepicker({
            minView: 2,
            format: "yyyy-mm-dd",
            language: "zh-CN",
            todayBtn: "linked",
            changeMonth: true,
            autoclose: true,
            todayHighlight: true
        }).on('hide', function(event) {
            event.preventDefault();
            event.stopPropagation();
        });
    }
})
