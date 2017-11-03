require("babel-core/register")
const express = require('express')
const path = require('path')
const http = require('http')
const bodyParser = require('body-parser')
const Seq = require('sequelize')
const sequelize = require('./mysql/sql.js')
const apiRouter = require('./api')

// 设置为全局数据库连接句柄
// global.sequelize = sequelize
// global.Seq = Seq

const app = express()
app.use(express.static(path.join(__dirname,'static')))
const server = http.createServer(app)
server.listen(3000)

// 解析表单post数据
app.use(bodyParser.urlencoded({
  extended: true
}))
app.use(bodyParser.json())

app.all('*', function(req, res, next) {
    res.header("Access-Control-Allow-Origin", "*");
    res.header('Access-Control-Allow-Methods', 'PUT, GET, POST, DELETE, OPTIONS');
    res.header("Access-Control-Allow-Headers", "X-Requested-With");
    res.header('Access-Control-Allow-Headers', 'Content-Type');
    next();
});
// 使用路由
app.use('/api', apiRouter)


// require("babel-core").transform("code", {
//     plugins: ["transform-runtime"]
// });

console.log("okokok ....")

module.exports = app


