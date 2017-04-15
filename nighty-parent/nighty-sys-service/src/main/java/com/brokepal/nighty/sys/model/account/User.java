package com.brokepal.nighty.sys.model.account;

import javax.persistence.*;
import java.io.Serializable;
import java.util.Date;

/**
 * Created by Administrator on 2016/11/3.
 */
public class User implements Serializable {
    private static final long serialVersionUID = 1L;

    private long uuid;
    private String nickname;
    private String username;
    private String password;
    private String salt;
    private String email;
    private String phone;
    private String role;
    private Date registerTime;//注册时间

    public User() {
    }

    public long getUuid() {
        return uuid;
    }

    public void setUuid(long uuid) {
        this.uuid = uuid;
    }

    public String getNickname() {
        return nickname;
    }

    public void setNickname(String nickname) {
        this.nickname = nickname;
    }

    public String getUsername() {
        return username;
    }

    public void setUsername(String username) {
        this.username = username;
    }

    public String getPassword() {
        return password;
    }

    public void setPassword(String password) {
        this.password = password;
    }

    public String getSalt() {
        return salt;
    }

    public void setSalt(String salt) {
        this.salt = salt;
    }

    public String getEmail() {
        return email;
    }

    public void setEmail(String email) {
        this.email = email;
    }

    public String getPhone() {
        return phone;
    }

    public void setPhone(String phone) {
        this.phone = phone;
    }

    public String getRole() {
        return role;
    }

    public void setRole(String role) {
        this.role = role;
    }


    public Date getRegisterTime() {
        return registerTime;
    }

    public void setRegisterTime(Date registerTime) {
        this.registerTime = registerTime;
    }


    @Override
    public String toString() {
        return "User{" +
                "uuid=" + uuid +
                ", nickname='" + nickname + '\'' +
                ", username='" + username + '\'' +
                ", password='" + password + '\'' +
                ", salt='" + salt + '\'' +
                ", email='" + email + '\'' +
                ", phone='" + phone + '\'' +
                ", role='" + role + '\'' +
                ", registerTime=" + registerTime +
                '}';
    }

    public static class Builder{
        private String nickname;
        private String username;
        private String password;
        private String salt;
        private String email;
        private String phone;
        private String role;
        private Date registerTime;

        public Builder nickname(String val){
            nickname = val;
            return this;
        }
        public Builder username(String val){
            username = val;
            return this;
        }
        public Builder password(String val){
            password = val;
            return this;
        }
        public Builder salt(String val){
            salt = val;
            return this;
        }
        public Builder email(String val){
            email = val;
            return this;
        }
        public Builder phone(String val){
            phone = val;
            return this;
        }
        public Builder role(String val){
            role = val;
            return this;
        }
        public Builder registerTime(Date val){
            registerTime = val;
            return this;
        }

        public User build(){
            User user = new User();
            user.nickname = this.nickname;
            user.username = this.username;
            user.password = this.password;
            user.salt = this.salt;
            user.email = this.email;
            user.phone = this.phone;
            user.role = this.role;
            user.registerTime = this.registerTime;
            return user;
        }
    }
}
