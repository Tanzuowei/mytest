const Sequelize = require('sequelize')
const sequelize = require('../mysql/sql')

const article = sequelize.define('wdy_articles', {
    id: {
      type: Sequelize.INTEGER,
      primaryKey: true
    },
    article_name: Sequelize.STRING(30),
    users_name: Sequelize.STRING(30),
    users_id:  Sequelize.STRING(30),
    article_desc: Sequelize.STRING(30),
    tags: Sequelize.STRING(30),
    article_detail: Sequelize.TEXT,
    bg_img: Sequelize.TEXT,
    addtime: Sequelize.INTEGER,
    article_state: Sequelize.INTEGER,
    cat_id: Sequelize.INTEGER
})
module.exports = article
