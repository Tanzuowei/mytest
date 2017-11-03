const express = require('express')
const fs = require('fs')
const multer  = require('multer')
const upload = multer({ dest: 'dist/' })
const path = require('path')
const article = require('../../controller/article')

const articleRouter = express.Router()

articleRouter
        .post('/addArticle',upload.array('images', 12), async (req, res) =>{
             const result = await article.addArticle(req, res)
		     res.json(result)
        }).get('/findOneArticle/:id', async (req, res) =>{
             const result = await article.findOneArticle(req, res)
		     res.json(result)
        }).get('/selectAllArticle/usersid:id&nownum:nowNum&pagenum:pageNum&type:type', async (req, res) =>{
             const result = await article.selectAllArticle(req, res)
		     res.json(result)
        }).get('/findNewOneArticle/:id', async (req, res) =>{
             const result = await article.findNewOneArticle(req, res)
             res.json(result)
        }).get('/selectUserAllArticle/usersid:id&nownum:nowNum&pagenum:pageNum&type:type', async (req, res) =>{
             const result = await article.selectUserAllArticle(req, res)
             res.json(result)
        })

module.exports = articleRouter
