const Koa = require('koa');

const userRouter = require('../router/users');

const app = new Koa();

app.use(userRouter.routes());

module.exports = app;