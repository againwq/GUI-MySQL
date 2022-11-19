
import setConnect from '@/service/connect'
import getTableData from '../service/dataManage'
import getResult from '../service/login'

export default {
    async login({ commit }, { username, password }) {
        commit('setIsLogin', true)
        const res = await getResult(username, password)
        sessionStorage.setItem('token', res.data.data.token)
        commit('setUser', {username, password})
        commit('setLogin',true)
        commit('setIsLogin', false)
        return res.data
    },
    loginExit({commit}){
        commit('clearAll')
        sessionStorage.removeItem('token')
    },
    async connect({ commit }, { host, user, password, database }) {
        let res = null
        commit('setConnecting', true)
        try {
            res = await setConnect({ host, user, password, database })
            commit('setDatabase', database)
        } catch (err) {
        }
        commit('setConnecting', false)
        return res.data
    },
    async getDataLimit({commit}, table){
        commit('setInquiry', true)
        const res = await getTableData(table)
        commit('setInquiry', false)
        commit('setTable', table)
        return res.data
    }
}