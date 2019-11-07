/*
 * @Description: 
 * @Author: jiannan.lv
 * @Date: 2019-11-07 10:43:43
 * @LastEditTime: 2019-11-07 19:50:13
 * @LastEditors: jiannan.lv
 */

import Router from 'koa-router'
import * as userCtrl from '../controllers/user.controller'
// import auth from '../middleware/auth'

// const router = new Router({
//   prefix: '/api'
// });
const router = new Router();

// 获取用户列表
router.post('/user/userlist', userCtrl.getUserList);
//  新增 / 编辑用户
router.post('/user/addUser', userCtrl.editUser);
// 删除用户
router.post('/user/deleteUser', userCtrl.deleteUser);

export default router