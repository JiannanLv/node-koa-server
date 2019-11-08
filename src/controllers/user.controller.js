/*
 * @Description: 
 * @Author: jiannan.lv
 * @Date: 2019-11-07 10:32:27
 * @LastEditTime: 2019-11-08 11:06:06
 * @LastEditors: jiannan.lv
 */
// import Validation from '../util/validation'
// import Auth from '../middleware/auth'
import { User } from '../models'
import Sequelize from 'sequelize';
const Op = Sequelize.Op;
/**
 * @description: 获取列表数据
 * @param : page： 查询页 pageSize： 当前条数 key：模糊查询关键字
 * @return: 
 */
export async function getUserList (ctx, next) {
  const { page = 1, pageSize = 10, key = "" } = ctx.request.body;
  // 查询总数
  const counts = await User.count();
  // 查询列表
  const userList = await User.findAll({
    where: {
      [Op.or]: [
        {
          name: {
            [Op.like]: `%${key}%`
          }
        },
        {
          department: {
            [Op.like]: `%${key}%`
          }
        }
      ]
    },
    limit: Number(pageSize),
    offset: Number(pageSize) * (page - 1)
    // attributes: ['chartId', 'chName', 'enName', 'createTime', 'mark']
  });
  const data = {
    page: Number(page),
    pageSize: Number(pageSize),
    total: counts,
    list: userList
  }
  ctx.body = { code: '000000', message: 'success', data: data };
}
/**
 * @description: 新增 / 编辑用户
 * @param : 
 * @return: 
 */
export async function editUser (ctx, next) {
  const { name, passward, department, mark, id = '' } = ctx.request.body;
  const userItem = {
    name: name,
    passward: passward,
    department: department,
    mark: mark
  };
  const result = id ? await User.update(userItem, {
    where: {
      id: {
        [Op.like]: id
      }
    }
  }) : await User.create(userItem);
  const dataMessage = result ? id ? '编辑成功' : '新增成功' : result;
  ctx.body = { code: '000000', message: 'success', data: dataMessage };
}
/**
 * @description: 删除流程, 根据流程id进行删除
 * @param : id 用户id
 * @return:
 */
export async function deleteUser (ctx, next) {
  const { id } = ctx.request.body;
  const deleteResult = await User.destroy({
    where: {
      id: {
        [Op.like]: id
      }
    }
  });
  const data = deleteResult ? '删除成功' : deleteResult;
  ctx.body = { code: '000000', message: 'success', data: data };
}