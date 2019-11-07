/*
 * @Description: 
 * @Author: jiannan.lv
 * @Date: 2019-11-07 15:36:56
 * @LastEditTime: 2019-11-07 19:49:57
 * @LastEditors: jiannan.lv
 */
import Router from 'koa-router';
import * as chartCtrl from '../controllers/chart.controller';

// const router = new Router({
//   prefix: '/api'
// });
const router = new Router();

// 获取流程列表
router.post('/drag/chartlist', chartCtrl.getChartList);
// 新增流程
router.post('/drag/addchart', chartCtrl.editChart);
// 查询流程详情
router.post('/drag/flowDetail', chartCtrl.getFlowDetail);
// 删除流程
router.post('/drag/deleteChart', chartCtrl.deleteFlow);

export default router