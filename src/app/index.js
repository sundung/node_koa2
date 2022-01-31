const Koa = require('koa');
const app = new Koa();
const userRouter = require('../router/users');



app.use(userRouter.routes());

module.exports = app;