module.exports = class Register {
   /*
     注册
   */
  static async add_register (req,res) {
    console.log(req.body)
    const { user , pwd, invitecode } = req.body
    console.log(user , pwd, invitecode )
    const field = 'users_name'
    const checkUserRow = await this.checkUser(user,field)
    if(1 === checkUserRow){
       return {
         "code": 0,
         "message": "该用户名已存在"
       }
    }
    if(12345!== invitecode){
      return {
         "code": 2,
         "message": "邀请码错误"
       }
    }
    const insertRow = await this.insert(user,pwd)
    return {
      "code": 1,
      "message": "注册成功",
      "data": insertRow
    }
  }
 
  /*
   检测用户是否存在
  */
  static async checkUser (user,field) {
    const sql = `select id from wdy_users where ${field} = ? limit 1`
    const rows = await query(sql,user).catch((err) =>{
        console.log(err)
    })
    return rows.length > 0 ? 1 : 0
  }
   
   /*
     检测密码是否正确
   */
  static async checkPwd (user,field,pwd) {
    console.log("this is mima")
    const sql = `select id from wdy_users where ${field} = ? and password = ? limit 1`
    const rows = await query(sql,[user,pwd]).catch((err) =>{
        console.log(err)
    })
    return rows.length > 0 ? rows[0].id : 0
  }

  /*
   * sql 写入
  */
  static async insert(user, pwd) {
    const sql = 'insert into wdy_users (id, users_name, password) value(0,?,?)'
    const res = await query(sql, [user,pwd]).catch((err) => {
      console.log(err)
    })
    // if (res.affectedRows == 1) {
    //   const user_detail = {
    //     "user_id": res.insertId, //用户的id
    //     "nick_name": nickname // 昵称
    //   }
      return res
  }

  /*
    * 检测密码是否正确
   */
  static async getUserInfo (userId) {
    const sql = `select * from wdy_users where id = ? limit 1`
    const rows = await query(sql,userId).catch((err) =>{
        console.log(err)
    })
    return rows[0]
  }
}

