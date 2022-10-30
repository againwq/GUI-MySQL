const Router = require('@koa/router')
const { LoginController } = require('./controller/login')
const { ConnectController } = require('./controller/connect')
const { TableDataController } = require("./controller/field")

const router = new Router()

router.post("/login", LoginController)
router.post("/connect", ConnectController)
router.post("/field", TableDataController)

module.exports = {router}