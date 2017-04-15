/**
 * Created by chenchao on 17/4/16.
 */

$(function () {
    App.initializeHeader('header', false);

    var storage = window.localStorage;
    var sessionId = CommonUtil.generateOnlyString();
    var publicKey;
    $.ajax({
        type: 'GET',
        url: AppConst.BASE_URL + "/static/getPublicKey?sessionId=" + sessionId,
        success: function (result) {
            if (result.type == "success") {
                publicKey = result.message;
            }
        }
    });

    $("#password").blur(function () {
        var checkNum = /.+/;
        if (checkNum.test($(this).val())) {
            $("#passwordPass").removeClass("gray");
            $("#passwordPass").addClass("green");
        } else {
            $("#passwordPass").removeClass("green");
            $("#passwordPass").addClass("gray");
        }
    });

    $("#passwordConfirm").blur(function () {
        if ($(this).val() == $("#password").val()) {
            $("#passwordConfirmPass").removeClass("gray");
            $("#passwordConfirmPass").addClass("green");
        } else {
            $("#passwordConfirmPass").removeClass("green");
            $("#passwordConfirmPass").addClass("gray");
        }
    });

    $("#btn_send_validate_code").click(function () {
        $(this).attr("disabled", true);
        $.ajax({
            type: 'POST',
            url: AppConst.BASE_URL + "/static/sendValidateEmail",
            data: {"email": $("#email").val()},
            dataType: 'json',
            contentType: "application/x-www-form-urlencoded; charset=utf-8",
            success: function (result) {
                if (result.type == "success") {
                    $("#resetPasswordFailInfo").text("");
                    $(".countdown").show();
                    $('.countdown').countDown({
                        startNumber: 30,
                        callBack: function () {
                            $("#btn_send_validate_code").attr("disabled", false);
                            $(".countdown").hide();
                        }
                    });
                } else {
                    $("#resetPasswordFailInfo").text(result.message);
                    $("#btn_send_validate_code").attr("disabled", false);
                }
            }
        });
    });

    $("#reset_password_form").submit(function (e) {
        e.preventDefault();
        $("#btn_reset").attr("disabled", "disabled");
        var password = $("#password").val();
        var passwordConfirm = $("#passwordConfirm").val();
        var email = $("#email").val();
        var validateCode = $("#validateCode").val();

        var encrypt = $.jCryption.crypt;
        encrypt.setPublicKey(publicKey);
        var encryptedPasswd = encrypt.encrypt(password);
        var encryptedPasswdConfirm = encrypt.encrypt(passwordConfirm);
        $.ajax({
            type: 'POST',
            url: AppConst.BASE_URL + "/static/resetPassword",
            data: {
                sessionId: sessionId,
                password: encryptedPasswd,
                passwordConfirm: encryptedPasswdConfirm,
                email: email,
                validateCode: validateCode,
            },
            success: function (result) {
                if (result.type == "success") {
                    alert("修改密码成功");
                    window.location.href = AppConst.WEB_ROOT + "/pages/login.html";
                } else {
                    $.ajax({
                        type: 'GET',
                        url: AppConst.BASE_URL + "/static/getPublicKey?sessionId=" + sessionId,
                        success: function (result) {
                            if (result.type == "success") {
                                publicKey = result.message;
                            }
                        }
                    });
                    $("#btn_reset").attr("disabled",false);
                    $("#resetPasswordFailInfo").html(result.message);
                }
            }
        });
    });
});