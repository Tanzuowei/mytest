const Sequelize = require('sequelize')
const sequelize = new Sequelize('wdy','root',null,{
  host: 'localhost',
  port: 3306,
  dialect: 'mysql',
  define: {
    "createdAt": "created_at",
    "updatedAt": "updated_at"
  }
})

module.exports = sequelize
