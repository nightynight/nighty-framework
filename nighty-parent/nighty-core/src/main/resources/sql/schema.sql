-- 使用Mysql数据库

-- 数据库初始化脚本

-- 创建数据库
CREATE DATABASE db_nighty;
-- 使用数据库
use db_nighty;

-- 创建表
DROP TABLE t_user;
CREATE TABLE t_user(
  uuid BIGINT NOT NULL AUTO_INCREMENT COMMENT '用户ID',
  nickname NVARCHAR(50) NOT NULL COMMENT '登录后显示的昵称，可以为中文',
  username VARCHAR(50) NOT NULL UNIQUE COMMENT '登录时的用户名，不能包含中文',
  password VARCHAR(120) NOT NULL COMMENT '登录密码，存的是MD5加密后的密码',
  salt VARCHAR(120) NOT NULL COMMENT '密码盐',
  email VARCHAR(30) NOT NULL UNIQUE COMMENT '邮箱，可以用来登录或重置密码',
  phone VARCHAR(20) NOT NULL COMMENT '手机号码',
  role VARCHAR(50) DEFAULT '20170326164711' COMMENT '角色ID，默认为guest的id，如果有多个角色，用逗号隔开',
  register_time TIMESTAMP DEFAULT CURRENT_TIMESTAMP COMMENT '注册时间',
  last_login_time TIMESTAMP DEFAULT CURRENT_TIMESTAMP COMMENT '最近一次登录的时间',
  PRIMARY KEY (uuid)
)AUTO_INCREMENT = 1000 DEFAULT CHARSET = utf8 COMMENT '用户表';

DROP TABLE t_role;
CREATE TABLE t_role(
  id BIGINT NOT NULL COMMENT '角色ID',
  name VARCHAR(50) NOT NULL COMMENT '角色名',
  authority VARCHAR(120) COMMENT '权限ID，如果有多个权限，用逗号隔开',
  PRIMARY KEY (id)
) DEFAULT CHARSET = utf8 COMMENT '角色表，一个角色对应多个权限';

DROP TABLE t_authority;
CREATE TABLE t_authority(
  id BIGINT NOT NULL COMMENT '权限ID',
  name VARCHAR(50) NOT NULL COMMENT '权限名',
  PRIMARY KEY (id)
) DEFAULT CHARSET = utf8 COMMENT '权限表';



-- 初始化数据

-- 初始化权限表
INSERT INTO t_authority (id,name) VALUES ('20170326164700','readSystemInfo');
INSERT INTO t_authority (id,name) VALUES ('20170326164701','writeSystemInfo');

-- 初始化角色表
INSERT INTO t_role (id,name, authority) VALUES ('20170326164710','admiin','201703261647000,201703261647001');
INSERT INTO t_role (id,name, authority) VALUES ('20170326164711','guest','201703261647000');

-- 初始化用户表
INSERT INTO t_user (nickname,username,password,salt,email,phone,role)
VALUES ('aa','aa','24C1FD38DB4B717D4E4B4A838A812102','salt001','nightynight_cc@163.com','15522331234','20170326164710');

-- 查询
SELECT
  t_authority.name
FROM
  t_authority;

SELECT
  t_role.name,
  t_role.authority
FROM
  t_role;

SELECT
  t_user.nickname,
  t_user.username,
  t_user.password,
  t_user.salt,
  t_user.email,
  t_user.phone,
  t_user.role,
  t_user.register_time,
  t_user.last_login_time
FROM
  t_user;