const { getTableData } = require('../server/manageDatabase')
async function TableDataController(ctx){
    const { table } = ctx.query
   try{
      const tableData = await getTableData(table)
      ctx.body = {
        success: true,
        data:{
            tableData
        }
    }
    }catch(err){
      ctx.body = {
        success: false,
        data:{
            msg:"数据获取失败"
        }
      }
    }
    
}

module.exports = {
  TableDataController
}