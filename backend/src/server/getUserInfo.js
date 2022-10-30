const { getUserByUsername } = require('../database/getUser')
const { jwtCreateSv } = require('../middleware/jwt')
async function getUserInfo(username, password){
    const userInfo = await getUserByUsername(username)
    if(userInfo.length == 1 )
    {
        if(userInfo[0].password == password){
        const token = jwtCreateSv(userInfo[0])
        return {...userInfo[0], token, exist: true}
        }else return {exist: true}
    }
      
    return {exist: false}
}

module.exports = { getUserInfo }