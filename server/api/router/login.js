const express = require('express')
const login = require('../../controller/login')

const loginRouter = express.Router()

loginRouter
        .get('/:user/:pwd', async(req, res)=>{ 
		     const result = await login.login(req, res)
		     res.json(result)
	    })
module.exports = loginRouter
