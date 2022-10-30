const Jwt = require("jsonwebtoken");
//设置不需要token的白名单
const whiteList = ["/login"];
const cuSecret = '123456'

//TODO:jwt的验证
async function jwtValidateMd(ctx, next) {
    //校验token
    const url = ctx.url.split('?')[0]
    if (!whiteList.includes(url)) {
        const token = ctx.header.token;
        if (jwtDecodeSv(token, cuSecret)) {
            await next()
        } else {
            ctx.body = {
                success:false,
                data:{
                    msg: 'token校验失败,请重新登录'
                }
            }
        }
    } else {
        await next()
    }

}

//加密得到token
function jwtCreateSv(content) {
    //content是要加密的内容，secret是密钥，函数返回一个token
    return Jwt.sign(
        { ...content, exp: Math.floor(Date.now() / 1000) + 60 * 60 },
        cuSecret
    );
    //exp设置token生效时长（60*60代表token创建后生效的时间（秒））
}

//解码token
function jwtDecodeSv(token) {
    const date = Jwt.verify(token, cuSecret);
    return date;
}

module.exports = {
    jwtValidateMd,
    jwtCreateSv,
    jwtDecodeSv,
};
