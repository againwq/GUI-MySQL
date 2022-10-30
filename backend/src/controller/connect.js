
const { getTables } = require('../server/manageDatabase')
const { setConnection, getConnection } = require('../server/connection')
async function ConnectController(ctx) {
    const { host, user, password, database } = ctx.query
    try {
        await setConnection({ host, user, password, database})
        const connection = getConnection()
        const tables = await getTables(connection)
        ctx.body = {
            success: true,
            data: {
                msg: "数据库连接成功！",
                tables,
            }
        }
    } catch (err) {
        ctx.body = {
            success: false,
            data: {
                msg: "无法连接到此数据库！"
            }
        }
        console.log(err)
    }
}

module.exports = {
    ConnectController
}



