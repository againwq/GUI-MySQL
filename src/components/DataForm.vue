<template>
  <div class="form-container">
    <el-table
    :data="fieldData"
    max-height="650"
    border
    style="width: 100%">
    <el-table-column  width="150" v-for="(field, index) in fieldsName" :key="index" :prop="field" :label="field">
    </el-table-column>
  </el-table>
  </div>
</template>

<script>
import { mapActions } from 'vuex'
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
         const tableData = res.data.tableData 
         if(tableData.length != 0){
          this.fieldsName = JSON.parse(JSON.stringify(Object.keys(tableData[0])))
          this.fieldData = JSON.parse(JSON.stringify(tableData))
         }else{
          this.fieldData.splice(0)
          this.fieldsName.splice(0)
         }
      })
    },
    methods:{
      ...mapActions(['getDataLimit']),
    }
    
}
</script>

<style>
.form-container{
  width: 100%;
  overflow: auto;
  
}
</style>