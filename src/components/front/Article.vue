<template>
  <div>
    <div class="banner">
    <div class="banner-box"><h1 class="article-title">{{item[0].article_name}}</h1></div>
   </div>

  	<div class="article-detail" v-if="item.length>0" >
  	
  	<div class="article-info">
  		<a class="info-head"><img src="http://upload.jianshu.io/users/upload_avatars/2385632/b21daade-f9b2-4e97-9b11-15f97a38d11c.jpg?imageMogr2/auto-orient/strip|imageView2/1/w/120/h/120"></a>
        <div class="info-title">
        	 作者：<a :href="'/userinfo/'+item.users_id">{{item[0].users_name}}</a>
        </div>
        <div class="info-desc">原文链接：<a href="">http://baidu.com</a></div>
  	</div>
  	<div class="article-content" id="article-content" v-html="item[0].article_detail"></div>
    <br/>
    END---
    <br/>
    <br/>
    <div><span class="format">发布时间： {{item[0].addtime}}</span></div>
    <div class="article-tags"><i class="fa fa-bookmark"></i> <a class="follow" href="">{{item[0].tags}}</a><a class="follow" href="">{{item[0].tags}}</a></div>
    <div class="comments">评 <i class="fa fa-long-arrow-down"></i> 论 </div>
    <div class="article-comments">
        <form>
          <div class="field">
            <label>昵称</label><input type="text" placeholder="好听的名字" name="nickname">
          </div>
          <div class="field">
            <label>邮箱</label><input type="email" placeholder="联系你的邮箱" name="nickname">
          </div>
          <div class="field">
            <textarea class="comment-context" name="context" placeholder="你想要说点什么？"></textarea>
          </div>
          <div class="field text-r">
            <button>提交</button>
          </div>
        </form>
        
    </div>
    <div class="comments-text">暂时还没评论哦~</div>
</div>
  </div>
</template>

<script>
/*
 查询表，用sql 的 join 链表查询
*/
import { select_one_article } from "../../api/article"
export default {
   
  data () {
    return {
      item:[],
      msg: 'Welcome to Your Vue.js App',
      top: 0,
      state: 0,
      startY: 0,
      touching: false,
      infiniteLoading: false
    }
  },
  // mounted(){
  //   // this.getArticle().then(txt=>{that.item = txt})
  // },
  mounted(){
      let that =this
      
    // console.log(ctxt)
      let text = select_one_article(that.$route.params.id).then(txt=>{
        that.item = txt;
        // console.log(txt)
        // that.msg= txt[0].article_detail
      }).then(()=>{
        // let ctxt = document.getElementById('article-content')
        // ctxt.innerHTML=that.item[0].article_detail
      })
     
      
      // this.callback(text)
    // let that = this
    // select_one_article(this.$route.params.id).then(txt=>{that.item = txt})
    // console.log(this.item)
  },
  methods:{

  }
}
</script>

<style>
.article-detail{
  max-width: 1140px;
  margin-left: auto;
  margin-right: auto;
  margin-top: 20px;
  display: block;
  /*width: 100%;*/
	padding:20px 18px;
  height:100%;
  background: #fff;
}
.article-title{
  margin:0;
  padding:10px 0;
  font-size: 26px;
  color:#fff;
}
.article-info{
  height:60px;
	position: relative;
  padding:2px 0;
  margin-bottom: 10px;
	padding-left:74px;
  /*overflow: hidden;*/
	/*min-height: 60px;*/
}
.info-head{
	position: absolute;
	left:2px;
  top:2px;
}
.info-head img{
	width:60px;
	height:60px;
	border-radius: 50%;
  -webkit-border-radius: 50%;
}
.info-title{
  /*width:70%;*/
  margin-top:10px;
  font-size: 14px;
  padding: 3px 0;
  display: -webkit-box;
  -webkit-line-clamp: 1;
  -webkit-box-orient: vertical;
  overflow: hidden;
  text-overflow: ellipsis;
  font-weight: 700;
}
.info-title a{
	color: #888;
	font-weight: 700
}
.info-desc{
  /*width:70%;*/
  font-weight: 400;
  font-size: 12px;
  line-height: 1.5;
  color: #3f3f3f;
  display: -webkit-box;
  -webkit-line-clamp: 1;
  -webkit-box-orient: vertical;
  overflow: hidden;
  text-overflow: ellipsis;
}
.article-tags{
  font-size: 26px;
}
.article-tags i{
  vertical-align: middle;
  color: #0095ea;
}
.follow{
  vertical-align: middle;
  position: relative;
  /*float: left;*/
  padding: 3px 4px;
  margin-left: 10px;
  font-size: 14px;
  line-height: 1;
  display: inline-block;
  color: #0095ea;
}

.format{
	font-size: 13px;
  color: #b1b1b1;
}
.article-content{
	margin:20px auto; 
}
.article-content img{
	max-width: 100%;
	width: auto;
	height:auto;
	margin:0 auto;
	display: block;
}
.comments{
  padding:40px 0;
  text-align: center;
  font-size: 24px;
  color:#0095ea;
  border-top: 1px solid #ccc;
  margin-top:30px;
}
.field{
  width:100%;
  /*max-width: 640px;*/
  margin-top: 10px;
  display: -webkit-box;
  display: -ms-flexbox;
  display: flex;
  -ms-flex-wrap: nowrap;
  flex-wrap: nowrap;
  min-height: 28px;
}
.field label{
  border:1px solid #ccc;
  width:90px;
  font-size: 14px;
  height:28px;
  line-height:28px;
  border-right:0;
  border-right:none;
  text-align: center;
}
.field input[type="text"],input[type="email"]{
   max-width:400px;
   padding:0 10px;
   flex: 1 auto;
   border:1px solid #ccc;
}
.field button{
  cursor: pointer;
  display: block;
  width:90px;
  height:30px;
  background: #0095ea;
  border:0;
  border:none;
  border:1px solid #0895fd;
  color:#fff;
  font-size: 14px;
  /*display: inline-block;*/
}
.text-r{
      /*justify-content: right;*/
  /*text-align: right;*/
}
.comment-context{
    width: 100%;
    height: 10em;
    min-height: 10em;
    outline: none;
    font-family: inherit;
    -moz-box-sizing: border-box;
    -webkit-box-sizing: border-box;
    box-sizing: border-box;
    text-rendering: auto;
    color: initial;
    letter-spacing: normal;
    word-spacing: normal;
    text-transform: none;
    text-indent: 0px;
    text-shadow: none;
    display: inline-block;
    text-align: start;
    margin: 0;
    font: 14.3333px Arial;
    padding:6px;
    line-height: 1.3em;
    letter-spacing:1px;
    border: 1px solid #ccc;
    overflow-y:auto; 
    resize:none;
}
.comments-text{
  min-height: 200px;
  width:100%;
  margin-top: 20px;
  text-align: center;
}
@media screen and (max-width: 701px){
.field label{
    display: none;
  }

}
</style>
