async function getTables(connection) {
    const [result, fields] = await connection.execute('show tables')
    let tables = []
    result.forEach((table) => {
        tables.push(Object.values(table)[0])
    })
    return tables
}

async function getTableData(table){
    const { getConnection } = require('./connection')
    const connection = getConnection()
    const [result, fields] = await connection.execute(`select * from ${table}`)
    return result
}

module.exports = {
    getTables, getTableData
}

