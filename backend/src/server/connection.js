const mysql = require('mysql2/promise')
var connection = null
function getConnection(){
    return connection
}
async function setConnection({ host, user, password, database }){
    connection = await mysql.createConnection({
        host,
        user,
        password,
        database
    });
}
module.exports = {
    getConnection,setConnection
}