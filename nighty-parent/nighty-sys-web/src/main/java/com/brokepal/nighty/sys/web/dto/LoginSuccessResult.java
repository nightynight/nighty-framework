package com.brokepal.nighty.sys.web.dto;

import java.io.Serializable;

/**
 * Created by chenchao on 17/4/12.
 */
public class LoginSuccessResult implements Serializable {
    private static final long serialVersionUID = -201704122355000L;

    private String token;
    private String nickname;

    public LoginSuccessResult() {
    }

    public LoginSuccessResult(String token, String nickname) {

        this.token = token;
        this.nickname = nickname;
    }

    public String getToken() {
        return token;
    }

    public void setToken(String token) {
        this.token = token;
    }

    public String getNickname() {
        return nickname;
    }

    public void setNickname(String nickname) {
        this.nickname = nickname;
    }
}
