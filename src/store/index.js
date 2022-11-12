import Vue from 'vue'
import Vuex from 'vuex'
import mutations from './mutations'
import actions from './actions'
Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    loading:false,
    user:null,
    connecting:false,
    isLogin:false,
    alreadyLogin:false,
    database:'',
    inquiry: false,
    table: ''
  },
  mutations, 
  actions,
  getters: {
  },
})
