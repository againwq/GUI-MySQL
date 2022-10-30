const { getUserInfo } = require('../server/getUserInfo')
async function LoginController(ctx){
    const {username, password} = ctx.query

    const userInfo = await getUserInfo(username, password)

    if(userInfo.exist){
        if(userInfo.token) ctx.body = {success:true,data:userInfo}
        else ctx.body = {success: false, data:{msg:"密码错误"}}
    }else {
        ctx.body = {
            success:false,
            data:{
                msg:"没有此用户"
            }
        }
    }
}

module.exports = {
    LoginController
}