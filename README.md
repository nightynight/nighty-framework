# nighty-framework
前后端分离框架，分为两个项目，nighty-parent为后端框架，webpack-nighty为前端框架

## 关于后端
后端不用启动，我电脑上启动，你们连我的电脑就行了。
具体步骤：
找到前端项目根路径/src/js/AppConstent.js，将BASE_URL中的localhost改为192.168.0.110

## 关于前端
首先需要node环境，具体步骤为：
1）下载安装nodejs
node-v7.6.0-x64.msi
2）设置环境变量
3）设置npm registry为淘宝registry
npm config set registry https://registry.npm.taobao.org/
npm config list

配置好环境后用控制台进到项目目录，运行npm start运行程序，在浏览器中输入localhost:5000/page/home.html就可以看到页面。

## 关于数据库
可以直接连我的，用户名、密码都为root

## 关于登录
目前只有一个账号，用户名、密码都是aa

