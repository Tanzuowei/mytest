
const register = require('../../model/login')
function isNum(num) {
  const reg = new RegExp(/^[0-9]/);
  return reg.test(num);
}
module.exports = class Register {
   /*
     注册
   */
  static async add_register (req,res) {
    console.log(req.method)
    let { user,pwd,invitecode } = req.body
    // console.log(req.params)
    console.log(user , pwd, invitecode )
    if(isNum(invitecode)){
      invitecode = parseInt(invitecode)
    }
    const field = 'users_name'
    const checkUserRow = await this.checkUser(user,field)
    if(1 === checkUserRow){
       return {
         "code": 0,
         "message": "该用户名已存在"
       }
    }
    if(12345 !== invitecode){
      return {
         "code": 2,
         "message": "邀请码错误"
       }
    }
    const userInfo = await this.insertInfo(user,pwd)
    const loginStatus = {}
    loginStatus.isLogin = 1
    loginStatus.userId = userInfo.id
    return {
      'code': 1,
      'message': '注册成功',
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
    let rows = await register.findAll({
        where:{
          'users_name': user
        }
    })
    return rows.length > 0 ? 1 : 0
  }
   /*
     检测密码是否正确
   */
  static async checkPwd (user,field,pwd) {

    let rows = await register.findAll({
        where:{
          'users_name': user
        }
    })
    return rows.length > 0 ? rows[0].id : 0
  }

  /*
   * sql 写入
  */
  static async insertInfo(user, pwd) {
   let rows = await register.create({
        users_name: user,
        password: pwd,
        reg_time: Date.parse(new Date())
    });
    return rows
  }

  /*
    * 检测密码是否正确
   */
  static async getUserInfo (userId) {
    let rows = await register.findAll({
        users_name: user,
        password: pwd,
        reg_time: Date.parse(new Date()),
        limit:1
    });
    return rows[0]
  }
}

