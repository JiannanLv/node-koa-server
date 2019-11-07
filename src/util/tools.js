/*
 * @Description: 
 * @Author: jiannan.lv
 * @Date: 2019-11-06 19:21:59
 * @LastEditTime: 2019-11-07 19:50:28
 * @LastEditors: jiannan.lv
 */
export const splitParams = url => {
  const search = url.split('?')[1]
  if (!search) {
    return {}
  }
  return JSON.parse('{"' + decodeURIComponent(search).replace(/"/g, '\\"').replace(/&/g, '","').replace(/=/g, '":"') + '"}')
}
