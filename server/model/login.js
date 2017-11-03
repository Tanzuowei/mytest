const Sequelize = require('sequelize')
const sequelize = require('../mysql/sql')

const login = sequelize.define('wdy_users', {
    id: {
      type: Sequelize.INTEGER,
      primaryKey: true
    },
    users_name: Sequelize.STRING(30),
    password:  Sequelize.STRING(30),
    reg_time: Sequelize.INTEGER(10),
})
module.exports = login


