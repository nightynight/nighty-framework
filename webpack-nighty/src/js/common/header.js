/**
 * Created by chenchao on 17/4/16.
 */


App.initializeHeader = function (headerId, needLogin) {
    var storage = window.localStorage;
    var username = storage.getItem('username');
    var sessionId = storage.getItem('sessionId');
    var token = storage.getItem('token');
    $.ajax({
        type: 'GET',
        async: false,
        url: AppConst.BASE_URL + "/static/isLogin?username=" + username + "&sessionId=" + sessionId + "&token=" + token,
        success: function (result) {
            if (result.type == "success") {
                $(function () {
                    new Component.Header(result.message).render(headerId);
                });
            }
            else {
                if (needLogin){
                    if (storage.getItem('keepPassword')){
                        alert(result.message);
                    }
                    storage.removeItem('sessionId');
                    storage.removeItem('token');
                    storage.removeItem('keepPassword');
                    window.location.href = AppConst.WEB_ROOT + "page/module/login/login.html";
                }
                else {
                    $(function () {
                        new Component.Header().render(headerId);
                    });
                }
            }
        }
    });
};