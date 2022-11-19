import http from './index'

async function getTableData(table){
 const res = await http.post('/field',null,{
        params: { table }
     })
    return res
  }

export default getTableData

