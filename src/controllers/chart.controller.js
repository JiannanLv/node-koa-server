/*
 * @Description: 
 * @Author: jiannan.lv
 * @Date: 2019-11-07 14:59:25
 * @LastEditTime: 2019-11-08 11:15:43
 * @LastEditors: jiannan.lv
 */
import { Chart } from '../models'
const Sequelize = require('sequelize');
const Op = Sequelize.Op;
/**
 * @description: 获取列表数据
 * @param : page： 查询页 pageSize： 当前条数 key：模糊查询关键字
 * @return: 
 */
export async function getChartList (ctx, next) {
  const { page = 1, pageSize = 10, key = "" } = ctx.request.body;
  // 查询总数
  const counts = await Chart.count();
  // 查询列表
  const chartList = await Chart.findAll({
    where: {
      [Op.or]: [
        {
          chName: {
            [Op.like]: `%${key}%`
          }
        },
        {
          enName: {
            [Op.like]: `%${key}%`
          }
        }
      ]
    },
    order: Sequelize.col('created_at'),
    limit: Number(pageSize),
    offset: Number(pageSize) * (page - 1),
    attributes: ['chartId', 'chName', 'enName', 'createTime', 'mark']
  });
  const data = {
    page: Number(page),
    pageSize: Number(pageSize),
    total: counts,
    list: chartList
  }
  ctx.body = { code: '000000', message: 'success', data: data };
}
/**
 * @description: 新增 / 编辑流程
 * @param : 
 * @return: 
 */
export async function editChart (ctx, next) {
  const { chartId, chName, enName, createTime, design, mark, type } = ctx.request.body;
  const addChartItem = {
    chartId: chartId,
    chName: chName,
    enName: enName,
    createTime: createTime,
    design: design,
    mark: mark
  };
  const updateChartItem = {
    design: design
  };
  const result = type === 'update' ? await Chart.update(updateChartItem, {
    where: {
      chartId: {
        [Op.like]: chartId
      }
    }
  }) : await Chart.create(addChartItem);
  const dataMessage = result ? type === 'update' ? '保存成功' : '新建成功' : result;
  ctx.body = { code: '000000', message: 'success', data: dataMessage };
}
/**
 * @description: 获取流程详情
 * @param : chartId 流程id
 * @return:
 */
export async function getFlowDetail (ctx, next) {
  const { chartId } = ctx.request.body;
  const flowItem = await Chart.findOne({
    where: {
      chartId: {
        [Op.like]: chartId
      }
    }
  });
  ctx.body = { code: '000000', message: 'success', data: flowItem };
}
/**
 * @description: 删除流程, 根据流程id进行删除
 * @param : chartId 流程id
 * @return:
 */
export async function deleteFlow (ctx, next) {
  const { chartId } = ctx.request.body;
  const deleteResult = await Chart.destroy({
    where: {
      chartId: {
        [Op.like]: chartId
      }
    }
  });
  const data = deleteResult ? '删除成功' : deleteResult;
  ctx.body = { code: '000000', message: 'success', data: data };
}
