const Sequelize = require('sequelize')
const sequelize = new Sequelize('wdy','root',null,{
  host: '127.0.0.1',
  port: 3306,
  dialect: 'mysql',
  define: {
    "createdAt": "created_at",
    "updatedAt": "updated_at"
  }
})

module.exports = sequelize
