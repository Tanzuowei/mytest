const express = require('express')
const register = require('../../controller/register')
const registerRouter = express.Router()

registerRouter
        .post('/register', async(req, res)=>{ 
		     const result = await register.add_register(req, res)
		     res.json(result)
	    })
module.exports = registerRouter
