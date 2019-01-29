# js-error-report

实现 js 错误上报，可用于以下场景

- web
- vue
- 小程序

## 安装

```bash
npm install js-error-report
```

## 使用

```js
import * as errorReport from "error-report";
import vueErr from "vue-error-report";

errorReport.init({
  reportURI: '', // 上报 url 信息
  appName: 'xxx', // 平台项目标识
  systemInfo: {}, // 系统信息
});

errorReport.notifyError(err);
errorReport.notify('test', '测试是否通顺');
```

参考：

- [监控 Vue.js](https://docs.fundebug.com/notifier/javascript/framework/vuejs.html)
- [前端代码异常监控](http://rapheal.sinaapp.com/2014/11/06/javascript-error-monitor/)
- [【数据可视化之采集】如何设计一个前端监控系统](https://www.cnblogs.com/yexiaochai/p/6246490.html)
