class UsersController {
    async register(ctx,next){
        ctx.body = '注册成功'
    }
    async login(ctx,next) {
        ctx.body = '登录成功'
    }
}

module.exports = new UsersController();