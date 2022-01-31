const Koa = require('koa');

const app = new Koa();

const {APP_PORT} = require('./config')
const useRouter = require('./router/users')

app.use(useRouter.routes())

app.listen(APP_PORT,()=>{
    console.log(`启动成功,端口 ${APP_PORT}`)
})