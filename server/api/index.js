const express = require('express')

const loginRouter = require('./router/login')
const articleRouter = require('./router/article')
// const registerRouter = require('./router/register')

const apiRouter = express.Router()

apiRouter.use('/login',loginRouter)
apiRouter.use('/article',articleRouter)
// apiRouter.use('/register',registerRouter)
module.exports = apiRouter
