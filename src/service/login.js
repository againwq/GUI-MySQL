import http from './index'

async function getResult(username, password){
    const res = await http.post('/login',null,{
        params:{username, password}
    })
    return res
}

export default getResult