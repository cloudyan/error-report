# js-error-report

错误上报

undebug 的 Vue 错误监控插件
实时监控前端 JavaSript 应用的错误，助您提升用户体验

## 安装

npm install js-error-report

## 使用

import * as jsErrorReport from "js-error-report";
import vueErr from "vue-error-report";
fundebug.apikey = "YOUR-APIKEY";
fundebugVue(fundebug, Vue);
其中，获取apikey需要免费注册帐号并且创建项目。

参考：

- [监控 Vue.js](https://docs.fundebug.com/notifier/javascript/framework/vuejs.html)
- [前端代码异常监控](http://rapheal.sinaapp.com/2014/11/06/javascript-error-monitor/)
- [【数据可视化之采集】如何设计一个前端监控系统](https://www.cnblogs.com/yexiaochai/p/6246490.html)
