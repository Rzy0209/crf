function saveTemplet(params) {

    $.ajax({
        url: "../api/crfTemplet/save"
        , type: 'post'
        ,contentType: 'application/json'
        , data: json.stringify()
        , success: function (result) {

        }
    });
}