/*
 * @Description: 
 * @Author: jiannan.lv
 * @Date: 2019-11-07 14:04:07
 * @LastEditTime: 2019-11-07 19:50:08
 * @LastEditors: jiannan.lv
 */
import Router from 'koa-router';
import * as loginCtrl from '../controllers/login.controller';

// const router = new Router({
//   prefix: '/api'
// });
const router = new Router();

router.post('/login', loginCtrl.login);

export default router