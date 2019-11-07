/*
 * @Description: 
 * @Author: jiannan.lv
 * @Date: 2019-11-07 10:34:45
 * @LastEditTime: 2019-11-07 19:50:24
 * @LastEditors: jiannan.lv
 */
import * as ResponseCode from './code'

class ResponseFactory {
  static makeResponse (code, msg, result) {
    if (result === undefined && msg === undefined && typeof code === 'object') {
      result = code
      code = 0
    }
    msg = msg || ''
    const message = ResponseFactory.getMsg(code) + msg
    return { code, message, result }
  }

  static getMsg (code) {
    switch (code) {
      case ResponseCode.FAILURE:
        return 'Failure '
      case ResponseCode.SUCCESS:
        return 'Success'
      default:
        return 'Failure '
    }
  }
}

export default ResponseFactory