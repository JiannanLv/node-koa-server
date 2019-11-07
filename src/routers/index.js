/*
 * @Description: 
 * @Author: jiannan.lv
 * @Date: 2019-11-06 18:12:27
 * @LastEditTime: 2019-11-07 19:50:02
 * @LastEditors: jiannan.lv
 */
import Router from 'koa-router';
import user from './user.router';
import login from './login.router';
import chart from './chart.router';

const router = new Router();

router.use('/api', login.routes(), login.allowedMethods());
router.use('/api', user.routes(), user.allowedMethods());
router.use('/api', chart.routes(), chart.allowedMethods());

export default router