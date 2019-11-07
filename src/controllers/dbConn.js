/*
 * @Description: 
 * @Author: jiannan.lv
 * @Date: 2019-11-06 19:26:00
 * @LastEditTime: 2019-11-07 19:49:02
 * @LastEditors: jiannan.lv
 */
const Sequelize = require('sequelize');
// 数据库配置文件
const sqlConfig = {
  host: "localhost",
  user: "root",
  password: "123456",
  database: "sequelize_study",
  port: 3306
};

const dbConn = new Sequelize(sqlConfig.database, sqlConfig.user, sqlConfig.password, {
  dialect: 'mysql',
  host: sqlConfig.host,
  port: sqlConfig.port,
  timestamp: false,
  charset: 'utf8',
  define: {
    'underscored': true, // 字段以下划线（_）来分割（默认是驼峰命名风格）
    'charset': 'utf8'
  },
  pool: {
    max: 10,
    min: 0,
    idle: 10000
  }
});
module.exports = dbConn;