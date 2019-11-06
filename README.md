# js error report

实现 js 错误跟踪上报，支持以下功能

- 错误跟踪
- 错误上报
- 错误分析

可用于以下场景

- web
- vue
- 小程序

注意：window.onerror 能捕捉到语法错误，但是语法出错的代码块不能跟window.onerror 在同一个块（语法都没过，更别提 window.onerror 会被执行了）

## 安装

```bash
npm install error-report
```

## 使用

```js
import * as jsReport from 'error-report'
import vueErr from 'vue-error-report'

jsReport.init({
  runtime: 'mini', // 运行时
  reportURI: '', // 上报 url 信息
  appName: 'xxx', // 平台项目标识
  systemInfo: {}, // 系统信息
})

// jsReport.notifyError(err)
// jsReport.notify('test', '测试是否通顺')
```

参考：

- [监控 Vue.js](https://docs.fundebug.com/notifier/javascript/framework/vuejs.html)
- [前端代码异常监控](http://rapheal.sinaapp.com/2014/11/06/javascript-error-monitor/)
- [【数据可视化之采集】如何设计一个前端监控系统](https://www.cnblogs.com/yexiaochai/p/6246490.html)
- [monitor error and report](https://github.com/BetterJS/badjs-report)
- https://github.com/getsentry/sentry
- https://github.com/bugsnag/bugsnag-js
- https://github.com/rollbar/rollbar.js
- https://github.com/burakson/sherlogjs
