const mysql = require('mysql2/promise')
let connection = null

async function connectMysql(){
    if(connection){
        return connection
    }
    connection = await mysql.createConnection({
        host: "192.168.61.130",
        user: "root",
        password:"275083",
        database: "nodejs-mysql"
    })
    return connection
}

module.exports = {
    connectMysql
} 
