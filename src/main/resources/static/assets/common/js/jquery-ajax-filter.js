!function ($) {
    $.ajaxSetup({
        contentType:"application/x-www-form-urlencoded;charset=utf-8",
        dataFilter:function (data,type) {
            if("json"==type||"text"==type|| !type){
                var result=JSON.parse(data);
                if(result.success){
                    if(typeof result.data === 'string'){
                        result=result.data;
                    }else {
                        result=JSON.stringify(result.data);
                    }
                }else {
                    alert(result.errMsg);
                    return;
                }
                return result;
            }
            return data;
        }
    });
}(jQuery);