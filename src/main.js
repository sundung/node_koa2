const {APP_PORT} = require('./config')

const app = require('./app')

app.listen(APP_PORT,()=>{
    console.log(`启动成功,端口 ${APP_PORT}`)
})