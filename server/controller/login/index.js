const login = require('../../model/login')

module.exports = class Login {
  
  static async login (req,res) {
    const {user,pwd} = req.params

    const userNum = await this.checkUser(user, 'users_name')
    if(0 === userNum){
      return {
      	'code': 0,
      	'message': '此用户不存在'
      }
    }

    const userPwd = await this.checkPwd(user, 'users_name', pwd)
    if(0 === userPwd){
      return {
      	'code': 0,
      	'message': '密码错误,请检查'
      }
    }

   const userInfo = await this.getUserInfo(userPwd)
   const loginStatus = {}
   loginStatus.isLogin = 1
   loginStatus.userId = userPwd
    return {
    	'code': 1,
		  'message': '登陆成功',
    	'data': {
        userInfo,
        loginStatus
      }
    }
  }


  /*
   检测用户是否存在
  */
  static async checkUser (user,field) {
    // let rows = 0
    // let res = []
    let rows = await login.findAll({
        where:{
          'users_name': user
        }
    })
    // await sequelize.query(`select * from wdy_users  WHERE users_name = ${user}`).spread((results, metadata)=>{
    //   res = results
    //   rows = metadata
    // })
    // const rows = await query(sql,user)
    return rows.length > 0 ? 1 : 0
  }
   
   /*
     检测密码是否正确
   */
  static async checkPwd (user,field,pwd) {
    // console.log("this is mima")
    // const sql = `select id from wdy_users where ${field} = ? and password = ? limit 1`
    // const rows = await query(sql,[user,pwd]).catch((err) =>{
    //     console.log(err)
    // })
    let rows = await login.findAll({
        where:{
          'users_name': user,
          'password': pwd
        }
    })
    return rows.length > 0 ? rows[0].id : 0
  }

  /*
     检测密码是否正确
   */
  static async getUserInfo (userId) {
    // const sql = `select * from wdy_users where id = ? limit 1`
    // const rows = await query(sql,userId).catch((err) =>{
    //     console.log(err)
    // })
    let rows = await login.findAll({
        where:{
          'id': userId
        },
        limit: 1
    })
    return rows[0]
  }
}

