<template>
  <div class="home-container">
    <MyHeader></MyHeader>
    <div class="main">
      <div class="nav">
        <div class="table" v-for="(table, index) in tables" 
        :key="index" 
        @click="showData(table)" 
        :class="{active: table == nowTable}">
        {{ table }}</div>
      </div>
      <div class="container">
        <router-view/>
      </div>
    </div>
  </div>
</template>

<script>
import { mapState } from 'vuex'
import DataForm from '../components/DataForm.vue'
import MyHeader from '../components/MyHeader.vue'
import EventBus, {EventType} from '../event'
export default {
  components: { MyHeader,DataForm },
  name: 'home',
  data: function () {
    return {  
      tables:[],
    }
  },
  computed:{
    ...mapState(['nowTable'])
  },
  mounted(){
     EventBus.$on(EventType.connect, (data) => {
      this.tables = data
     })
  },
  methods:{
    showData(table){
       EventBus.$emit(EventType.showData,table)
       if(this.$route.path != `/home/form/${table}`)
       this.$router.push(`/home/form/${table}`)
    }
  }
}
</script>

<style lang="scss">
.home-container {
  width: 100%;
  height: 100%;
  background-color: white;
  position: relative;
}



.main {
  width: 100%;
  display: flex;
  height: 650px;

  .nav {
    width: 270px;
    height: 650px;
    border:none;
    border-right: 1px solid #dcd8d8;
    overflow-y: auto;
    overflow-x: auto;
    .table{
      width: 220px;
      text-align: center;
      padding: 7px 15px 7px 15px;
      font-size: 20px;
      font-weight: 500;
      border-bottom: 1px solid #dcd8d8;
      line-height: 30px;
      cursor: pointer;
      word-break: break-word;
      white-space: pre-line;
    }
    .table:hover{
      background-color: #ecf5ff;
      color: #409eff;
    }
  }

  .container {
    width: 1240px;
    height: 650px;
    overflow: auto;
  }
}
.active{
  background-color: #409eff;
}
</style>