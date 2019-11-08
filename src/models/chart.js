/*
 * @Description: 
 * @Author: jiannan.lv
 * @Date: 2019-11-07 14:55:00
 * @LastEditTime: 2019-11-08 10:46:12
 * @LastEditors: jiannan.lv
 */
// 引入 sequelize 包，创建 sequelize 实例
const Sequelize = require('sequelize');
const dbConn = require('../controllers/dbConn');

// 创建 Model
const chartList = dbConn.define('chartlist', {
  // 指定映射的字段类型，字段名，例如数据库中 user 表中的 username 字段映射成 username
  chartId: {
    type: Sequelize.STRING(255), // 数据类型
    allowNull: false, // 是否为 null
    primaryKey: true  // 是否为 主键
  },
  // 如果不指定 field，会自动映射相同名称的字段
  chName: {
    type: Sequelize.STRING(255),
    allowNull: false
  },
  enName: {
    type: Sequelize.STRING(255),
    allowNull: false
  },
  createTime: {
    type: Sequelize.STRING(255),
    allowNull: false
  },
  mark: {
    type: Sequelize.STRING(255),
    allowNull: true
  },
  design: {
    type: Sequelize.TEXT(),
    allowNull: true
  }
}, {
  // 是否 自动添加数据的 创建、更新 时间戳
  timestamps: true,
  // 是否 硬删除数据
  paranoid: false,
  // 访问数据库 user 表
  tableName: 'chartlist',
  // freezeTabelName 为 true 时不会在库中映射表时增加复数表名
  // 该选项为 true 时，user 在映射时映射成 user，而为 false 时会映射成users
  freezeTableName: true
});

export default chartList;