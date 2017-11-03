const fs = require('fs')
const path = require('path')
const article = require('../../model/article')

function ReplaceStr(str){
  // let str = str
  str = str.replace(/<span([^>])*>(&nbsp;)*\s*<\/span>/gi, '');
  str = str.replace(/<span[^>]*>/gi, '');
  str = str.replace(/<\/span[^>]*>/gi, '');
  str = str.replace(/<p([^>])*>(&nbsp;)*\s*<\/p>/gi, '<p>');
  str = str.replace(/<p[^>]*>/gi, '<p>');
  str = str.replace(/<\/p[^>]*>/gi, '</p>');
  str = str.replace(/<h([^>])[0-9]>(&nbsp;)*\s*<\/h>/gi, '');
  str = str.replace(/<h[^>][0-9]>/gi, '');
  str = str.replace(/<\/h[^>][0-9]>/gi, ''); 
  str = str.replace (/<B [^>]*>/ig, '<b>');
  str = str.replace (/<DIV[^>]*>/ig, '');
  str = str.replace (/<\/DIV>/gi, '');
  str = str.replace (/<[\/\w?]+:[^>]*>/ig, '');
  str = str.replace (/(&nbsp;){2,}/ig, '&nbsp;');
  str = str.replace (/<STRONG>/ig, '');
  str = str.replace (/<\/STRONG>/ig, '');
  str = str.replace (/<TT>/ig, '');
  str = str.replace (/<\/TT>/ig, '');
  str = str.replace (/<FONT [^>]*>/ig, '');
  str = str.replace (/<\/FONT>/ig, '');
  str = str.replace (/STYLE=\"[^\"]*\"/ig, '');
  str = str.replace(/<([\w]+) class=([^ |>]*)([^>]*)/gi, '<$1$3');
  str = str.replace(/<([\w]+) style="([^"]*)"([^>]*)/gi, '<$1$3'); 
  str = str.replace(/width=([^ |>]*)([^>]*)/gi, '');
  str = str.replace(/classname=([^ |>]*)([^>]*)/gi, '');
  str = str.replace(/align=([^ |>]*)([^>]*)/gi, '');
  str = str.replace(/valign=([^ |>]*)([^>]*)/gi, '');
  str = str.replace(/<\\?\??xml[^>]>/gi, '');
  str = str.replace(/<\/?\w+:[^>]*>/gi, '');
  str = str.replace(/<st1:.*?>/gi, '');
  str = str.replace(/o:/gi, ''); 

  str = str.replace(/<!--([^>])*>(&nbsp;)*\s*<\/-->/gi, '');
  str = str.replace(/<!--[^>]*>/gi, '');
  str = str.replace(/<\/--[^>]*>/gi, '');
  return str
}

module.exports = class Article {
  /*
   * 上传 
  */
  static async addArticle (req,res) {
    const paths=[]
    const filesLength = req.files.length
    const upload_path = path.resolve(__dirname, '../../../static/uploads') + "/" + req.body.username;
    
    const checkpath = await this.checkUpload(upload_path)
    if(0 === checkpath){
      return {
        "message": "发布失败！",
        "code": 0
      }
    }else{
      if(filesLength > 0){
        Object.keys(req.files).forEach((key) =>{
          //拼接文件夹路径，到该用户的文件夹下面
          const des_file = upload_path +"/"+ req.files[key].originalname
          // console.log(req.files[key])
          //把上传的图片路径保存下来
          paths[paths.length]=`/static/uploads/${req.body.username}/${req.files[key].originalname}`;
           fs.readFile( req.files[key].path, (err, data) =>{
             fs.writeFile(des_file, data, (err) =>{
              if( err ){
                console.log( err )
              }
            })
          })
        })
      }
    }
    const uploadRows = await this.Upload(req, paths)
    return {
      "data": uploadRows,
      "message": upload_path,
      "code": 1
    }
   
  }

  /*
   * 检测上传路径的文件夹是否存在
   * upload_path  = [string]
  */

  static async checkUpload (upload_path) {

    let res = 1;
    fs.exists( upload_path, (exists)=>{
      if(!exists){
        fs.mkdir(upload_path, 777, (err)=>{
          if(err){
            res = 0;
          }
        })
      }
    })
    return res
  }

  /*
   * sql添加
   * imgPath  = [array] 
  */

  static async Upload (req, imgPath) {
    const pathStr = imgPath.join("|");
    console.log(pathStr);
    // const sql = `insert into wdy_article(id, users_id,users_name,article_name,tags, bg_img,article_desc,article_detail,article_state,addtime) values (0, ?,?, ?,?,?,?,?,?,?)`
    const params = req.body;
    let context = params.context; //await this.htmlspecialchars()
    let rows = await article.create({
        article_name: params.title,
        users_name: params.username,
        users_id: params.usersid,
        article_desc: ReplaceStr(params.desc),
        tags: params.tags,
        article_detail: params.context,
        bg_img: pathStr,
        addtime: Date.parse(new Date()),
        article_state: 1,
        cat_id: 1
    });
    // console.log(rows);

    // const rows = await query(sql, [params.usersid,params.username,params.title, params.tags,pathStr,context.substring(0,200)+'...',params.context,'1','123456']).catch((err) =>{
    //     console.log(err)
    // })

    return rows
  }
   
  /*
   * 获取文章列表
  */
  
  static async selectAllArticle(req,res){
    
    const { id,nowNum,pageNum,type } = req.params
    // console.log(0 === Number(nowNum))
    // let sql = `select id,article_name,article_desc,tags,bg_img,addtime,users_name,users_id from wdy_article order by id desc limit ?,?`;
    let rows = [];
    if(0 === Number(nowNum)){
      rows = await article.findAll({
        order: [['id', 'DESC']],
        offset: Number(nowNum),
        limit: 10
      }).catch((err) =>{
        console.log(err)
    })
        // rows = await query(sql, [Number(nowNum),Number(pageNum)]).catch((err) =>{
        //   console.log(err)
        // })
        // return rows.length>0?rows:0
        // console.log(rows)
    }else{
        // rows = await query(sql, [Number(nowNum),Number(pageNum)]).catch((err) =>{
        //   console.log(err)
        // })
        rows = await article.findAll({
          order: [['id', 'DESC']],
          offset: Number(nowNum),
          limit: 10
        }).catch((err) =>{
        console.log(err)
    })
    }
    return rows.length>0?rows:0
    
  }
   /*
   *条件查询某个用户的记录
  */
  static async selectUserAllArticle(req,res){
    const { id,nowNum,pageNum,type } = req.params
    console.log(id,nowNum,pageNum,type)
    // let sql = `select id,article_name,article_desc,tags,bg_img,addtime,users_name,users_id from wdy_article where users_id =? order by id desc limit ?,?`;
    let rows = [];
    if(1 === Number(nowNum)){
        // rows = await query(sql, [Number(id),Number(nowNum),Number(pageNum)]).catch((err) =>{
        //   console.log(err)
        // })
        rows = await article.findAll({
          offset: Number(nowNum), limit: Number(pageNum)
        }).catch((err) =>{
        console.log(err)
    })
    }else{
        // rows = await query(sql, [Number(id),Number(nowNum),Number(pageNum)]).catch((err) =>{
        //   console.log(err)
        // })
        rows = await article.findAll({
          offset: Number(nowNum), limit: Number(pageNum)
        }).catch((err) =>{
            console.log(err)
        })
    }
    return rows.length>0?rows:0
  }
  
  /*
   *条件查询最新一条记录
  */
  static async findNewOneArticle(req,res){
    const {id} = req.params
    // let sql = `select id,article_name,article_desc,tags,bg_img,addtime,users_name,users_id from wdy_article where users_id =? order by id desc limit 1`;
    // const rows = await query(sql, [id]).catch((err) =>{
    //     console.log(err)
    // })
     let rows = await article.findAll({
        where:{
          'users_id': id
        },
        limit:1
    });

    return rows.length>0?rows:0
  }

  /*
   *  条件查询某条记录 
  */
  static async findOneArticle(req,res){
    // console.log(req.params);
    const {id} = req.params
    // const sql = `select * from wdy_article where id=${id} limit 1`
   
    // const rows = await query(sql, [id]).catch((err) =>{
    //     console.log(err)
    // })
    let rows = await article.findAll({
        where:{
          'id': id
        },
        limit:1
    });
    return rows.length>0?rows:0
  }

  /*
   * 用户id条件查询某些记录
  */
  static async selectSomeArticle(id){
    
  }

}

