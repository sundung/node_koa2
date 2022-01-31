const Koa = require('koa');

const app = new Koa();

const {APP_PORT} = require('./config')

app.use((ctx,next)=>{
    ctx.body = '你好111'
})

app.listen(APP_PORT,()=>{
    console.log(`启动成功,端口 ${APP_PORT}`)
})