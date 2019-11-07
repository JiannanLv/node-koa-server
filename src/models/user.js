/*
 * @Description: 
 * @Author: jiannan.lv
 * @Date: 2019-11-06 19:46:22
 * @LastEditTime: 2019-11-07 19:50:53
 * @LastEditors: jiannan.lv
 */
// 引入 sequelize 包，创建 sequelize 实例
const Sequelize = require('sequelize');
const dbConn = require('../controllers/dbConn');

// 创建 Model
const userList = dbConn.define('userlist', {
  // 指定映射的字段类型，字段名，例如数据库中 user 表中的 username 字段映射成 username
  id: {
    type: Sequelize.INTEGER(10), // 数据类型
    allowNull: false, // 是否为 null
    primaryKey: true, // 是否为 主键
    autoIncrement: true // 是否 自动填值
  },
  // 如果不指定 field，会自动映射相同名称的字段
  name: {
    type: Sequelize.STRING(255),
    allowNull: false,
    defaultValue: 'admin' // 默认值
  },
  passward: {
    type: Sequelize.STRING(255),
    allowNull: false,
    defaultValue: '123456' // 默认值
  },
  department: {
    type: Sequelize.STRING(255),
    allowNull: false,
    defaultValue: '研发部' // 默认值
  },
  mark: {
    type: Sequelize.STRING(255),
    allowNull: true,
    defaultValue: '初始化数据' // 默认值
  }
}, {
  // 是否 自动添加数据的 创建、更新 时间戳
  timestamps: true,
  // 是否 硬删除数据
  paranoid: false,
  // 访问数据库 user 表
  tableName: 'userlist',
  // freezeTabelName 为 true 时不会在库中映射表时增加复数表名
  // 该选项为 true 时，user 在映射时映射成 user，而为 false 时会映射成users
  freezeTableName: true
});

export default userList;