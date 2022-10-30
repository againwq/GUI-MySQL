import http from './index'

async function setConnect({ host, user, password, database }){
    const res = await http.post('/connect',null,{
        params:{ host, user, password, database }
    })
    return res
}

export default setConnect