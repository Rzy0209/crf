var Login = function() {

    var handleForgetPassword = function () {

        jQuery('#forget-password').click(function () {
            jQuery('.login-form').hide();
            jQuery('.forget-form').show();
        });

        jQuery('#back-btn').click(function () {
            jQuery('.login-form').show();
            jQuery('.forget-form').hide();
        });
    }

 
  

    return {
        //main function to initiate the module
        init: function() {
            handleForgetPassword();
            // init background slide images
            $('.login-bg').backstretch([
                "assets/global/css/img/login/bg1.jpg",
                "assets/global/css/img/login/bg2.jpg",
                "assets/global/css/img/login/bg3.jpg"
                ], {
                  fade: 1000,
                  duration: 8000
                }
            );
            $('.forget-form').hide();

        }

    };

}();

jQuery(document).ready(function() {
    Login.init();
});