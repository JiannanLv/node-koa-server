/*
 * @Description: 
 * @Author: jiannan.lv
 * @Date: 2019-11-07 10:27:09
 * @LastEditTime: 2019-11-07 19:50:47
 * @LastEditors: jiannan.lv
 */
import User from './user';
import Chart from './chart';
// import Role from './role'
// import UserRole from './user_role'

// 用户角色多对多关系
// User.belongsToMany(Role, {'through': UserRole});
// Role.belongsToMany(User, {'through': UserRole});

// 创建或同步表
// User.sync() 会返回一个 Promise 对象
// force = true 时会把存在的表先 drop 掉再创建，好怕怕
User.sync({ force: false });
Chart.sync({ force: false });

export {
  User,
  Chart
}