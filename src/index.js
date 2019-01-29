// 上报错误
// 附带上报平台相关信息
// JavaScript执行错误的type属性值分为caught或者uncaught两种，caught为notifyError发送的错误，而uncaught为自动捕获的错误。
class ErrorReport {
  constructor() {

  }

  /**
   * 使用notifyError，可以将主动捕获的错误发送到服务端
   *
   * @param {*} error 抛出的错误对象，参数类型为Error
   * @param {*} option 可选对象，参数类型为对象，用于发送一些额外信息，比如：
   *   - metaData: 其他自定义信息
   * @memberof ErrorReport
   */
  notifyError(error, option) {

  }

  /**
   * notify 主要用于测试，它发送的错误每次都会报警邮件
   * 为了避免重复报警，请使用notifyError记录错误，这样同一个错误将只会在错误数达到阈值(10, 100,...)的时候报警
   *
   * @param {*} name 错误名称，参数类型为字符串
   * @param {*} message 错误信息，参数类型为字符串
   * @param {*} option 可选对象，参数类型为对象，用于发送一些额外信息，比如:
   *   - metaData: 其他自定义信息
   * @memberof ErrorReport
   */
  notify(name, message, option) {
    // 错误名称，错误信息
    // errReport.notify('Test', 'Hello, jsError!');
  }

}
