const cors = require('@koa/cors')
const Koa = require('koa')
const { jwtValidateMd } = require('./middleware/jwt')
const {router} = require('./router')

const server = new Koa()

server.use(cors())
     // .use(jwtValidateMd)
      .use(router.routes())
      .use(router.allowedMethods())
      
server.listen('3000', () => console.log('server is listening on http://localhost:3000')) 