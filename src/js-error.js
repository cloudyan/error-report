
export default function(errorReport) {
  window.onerror = (msg, url, lineNo, columnNo, error) => {
    // 没有URL不上报！上报也不知道错误
    if (msg != "Script error." && !url){
      return true;
    }
    // 采用异步的方式
    // 我遇到过在 window.onunload 进行ajax的堵塞上报
    // 由于客户端强制关闭 webview 导致这次堵塞上报有 Network Error
    // 我猜测这里 window.onerror 的执行流在关闭前是必然执行的
    // 而离开文章之后的上报对于业务来说是可丢失的
    // 所以我把这里的执行流放到异步事件去执行
    // 脚本的异常数降低了10倍
    setTimeout(() => {
      const data = {};
      //不一定所有浏览器都支持col参数
      col = col || (window.event && window.event.errorCharacter) || 0;

      data.url = url;
      data.line = line;
      data.col = col;
      if (!!error && !!error.stack){
        //如果浏览器有堆栈信息
        //直接使用
        data.msg = error.stack.toString();
      }else if (!!arguments.callee){
        //尝试通过callee拿堆栈信息
        const ext = [];
        const f = arguments.callee.caller, c = 3;
        //这里只拿三层堆栈信息
        while (f && (--c>0)) {
          ext.push(f.toString());
          if (f === f.caller) {
            break;//如果有环
          }
          f = f.caller;
        }
        ext = ext.join(",");
        data.msg = ext;
      }
      // 把data上报到后台！
      errorReport.notifyError(data);
  }, 0);

  return true;
};


// old
/*
window.onerror = (msg, url, lineNo, columnNo, error) => {
  const string = msg.toLowerCase();
  const substring = 'script error';
  if (string.indexOf(substring) > -1) {
    console.error('Script Error: See Browser Console for Detail');
  } else {
    jsReport({
      value: msg,
      position: [
        'Message: ' + msg,
        'URL: ' + url,
        'Line: ' + lineNo,
        'Column: ' + columnNo,
        'Error object: ' + JSON.stringify(error),
      ],
    });
  }
  return false;
};
*/
