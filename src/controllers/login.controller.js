/*
 * @Description: 
 * @Author: jiannan.lv
 * @Date: 2019-11-06 19:19:09
 * @LastEditTime: 2019-11-07 19:49:18
 * @LastEditors: jiannan.lv
 */
const md5 = require('blueimp-md5');
import { User } from '../models'
export async function login (ctx, next) {
  const { name, passward } = ctx.request.body;
  const allUsers = await User.findAll({
    'attributes': ['name', 'passward']
  });
  const userArr = allUsers.filter(item => item.name === name);
  if (userArr && userArr.length > 0 && userArr[0].passward === passward) {
    ctx.body = { code: '000000', data: { id: userArr[0].id, token: md5(`${name.toLowerCase()}@100credit${passward.toUpperCase()}com`), userName: name, userType: 1 }, message: '登录成功' };
  } else if (userArr.length === 0) {
    ctx.body = { code: '000001', message: '该用户不存在' };
  } else if (userArr && userArr.length > 0 && userArr[0].passward !== passward) {
    ctx.body = { code: '000001', message: '密码不正确' };
  }
}