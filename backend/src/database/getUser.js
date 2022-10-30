const { connectMysql } = require('./UserData')

async function getUserByUsername(username){
    const ins = await connectMysql()
    const [rows, fields] = await ins.execute('SELECT * FROM `user` WHERE `username` = ?', [username])
    return rows
}

module.exports = { getUserByUsername }