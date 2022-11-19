<template>
  <div class="form-container">
    <el-table
    v-loading="inquiry"
    :data="fieldData"
    max-height="650"
    border
    style="width: 100%">
    <el-table-column  width="150" v-for="(field, index) in fieldsName" :key="index" :prop="field" :label="field">
    </el-table-column>
    <el-table-column fixed="left" label="操作" width="150">
      <template slot-scope="scope">
        <el-button
          size="mini"
          @click="handleEdit(scope.$index, scope.row)">编辑</el-button>
        <el-button
          size="mini"
          type="danger"
          @click="handleDelete(scope.$index, scope.row)">删除</el-button>
      </template>
    </el-table-column>
  </el-table>
  </div>
</template>

<script>
import { mapActions,mapState } from 'vuex'
import EventBus, {EventType} from '../event'
export default {
    name: 'dataform',
    data:function(){
      return{
         fieldsName:[],
         table: '',
         columns:0,
         fieldData: []
      }
    },
     mounted(){
     EventBus.$on(EventType.showData, async (data) => {
         this.table = data
         const res = await this.getDataLimit(this.table)
         if(!res.success){
          this.$message({ message: res.data.msg, type: 'info' })
         }
         else{
         const tableData = res.data.tableData 
         if(tableData.length != 0){
          this.fieldsName = JSON.parse(JSON.stringify(Object.keys(tableData[0])))
          this.fieldData = JSON.parse(JSON.stringify(tableData))
         }else{
          this.fieldData.splice(0)
          this.fieldsName.splice(0)
         }
        }
      })
    },
    computed:{
      ...mapState(['inquiry'])
    },
    methods:{
      ...mapActions(['getDataLimit']),
      handleEdit(index, row) {
        console.log(index, row);
      },
      handleDelete(index, row) {
        console.log(index, row);
      }
    }
    
}
</script>

<style>
.form-container{
  width: 100%;
  overflow: auto;
}
</style>