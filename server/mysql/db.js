const mysql = require('mysql')

const pool = mysql.createPool({
  host: 'localhost',
  user: 'root',
  password: '',
  database: 'wdy'
})

/*
 * 用于解决链接数据库，异步链接
*/
module.exports = (sql,values) => {
  return new Promise((resolve, reject) => {
  	pool.getConnection((err,connection) => {
  	  if(err) {
  	  	reject(err)
  	  } else{
  	    connection.query(sql, values, (err, rows) => {
          if(err) {
            reject(err)
          }else{
          	resolve(rows)
          }
          // 释放连接
          connection.release()
        })
      }
  	})
  })
}
