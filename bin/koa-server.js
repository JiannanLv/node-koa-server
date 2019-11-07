/*
 * @Description: 
 * @Author: jiannan.lv
 * @Date: 2019-11-06 18:11:37
 * @LastEditTime: 2019-11-07 19:49:51
 * @LastEditors: jiannan.lv
 */
'use strict';
import Koa from 'koa';
import parser from 'koa-bodyparser';
import logger from 'koa-logger';
import RootRouter from '../src/routers/index';

// 初始化koa
const app = new Koa();

const PORT = 8800;

// koa-static
app.use(require('koa-static')('.', {
  hidden: false,
  defer: true,
  gzip: true
}));

// fetch body 参数支持
app.use(parser({
  jsonLimit: '50mb'
}));

// logger
app.use(logger());

// RootRouter
// RootRouter.routes(app);
app.use(RootRouter.routes(), RootRouter.allowedMethods());
// listen
app.listen(PORT, () => {

  console.log(`--====> 💻 Listening at Open http://localhost:${PORT} 💻 <====----`);

});
