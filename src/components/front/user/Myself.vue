<template>
  <div>
    <div class="users">
    <div class="main-top clearfix">
    	<div class="mian-user">
    		<a class="user-head"><img src="http://upload.jianshu.io/users/upload_avatars/2385632/b21daade-f9b2-4e97-9b11-15f97a38d11c.jpg?imageMogr2/auto-orient/strip|imageView2/1/w/120/h/120"></a>
	        <div class="user-title">
	        	<a href="">人人为我 我为人人 <i class="fa fa-mars" aria-hidden="true"></i></a>
	        </div>
	        <div class="autograph">个性签名：啦啦啦啦啦啦啦啦啦啦啦啦啦啦啦啦啦啦啦啦啦啦啦啦啦啦啦啦啦啦啦啦啦啦</div>
    	</div>
    </div>
    <div class="main-bottom clearfix">
      <div class="info-menu"><a href="javascript:;" @click="setpath('userinfo')">主页</a> <a href="javascript:;" @click="setpath('userarticle')">列表</a></div>
    	<transition name="fade">
     <router-view></router-view>
  </transition>
    </div>
  </div>
  </div>
</template>

<script>
import { mapGetters } from 'vuex'
export default {
  data () {
    return {
      msg: 'Welcome to Your Vue.js App'
    }
  },
  created(){
    console.log(this.isNumber(parseInt("ggg")))
    if(!this.isLogin && !this.isNumber(parseInt(this.$route.params.id))){
      let that = this
      setTimeout(function(){that.$router.replace({name: 'login'})},10)
    }
  },
  computed: {
    ...mapGetters(['isLogin','userInfo'])
  },
  methods: {
    isNumber(num){
       const reg = new RegExp(/^[0-9]/)
       return reg.test(num)
    },
    setpath (path){
      const that = this
      this.$router.replace({name: path,params: { id: this.$route.params.id }})
    },
    userArticle () {
      const that = this
      this.$router.replace({name: 'userarticle',params: { id: this.$route.params.id }})
    }
  }
}
</script>

<style>
.users{
  margin:0 auto;
  max-width: 1000px;
}
.main-top{
	/*height:160px;*/
	/*width:100%;*/
	padding:60px 10px;
	background: #ccc;
}
.mian-user{
  	position: relative;
  	padding-left: 80px;
  	max-width:300px;
  	overflow: hidden;
  	min-height: 70px;
  	margin:0 auto;
}
.user-head{
	position: absolute;
	left: 0px;
}

.user-head img{
	width:70px;
	height:70px;
	border-radius: 50%;
  -webkit-border-radius: 50%;
}
.user-title{
  margin-top:10px;
  margin-bottom: 5px;
}
.user-title a{
	font-size: 15px;
	font-weight: 700;
	color:#333;
}
.autograph{
  font-weight: 400;
  font-size: 13px;
  line-height: 1.5;
  color: #3f3f3f;
  display: -webkit-box;
  -webkit-line-clamp: 2;
  -webkit-box-orient: vertical;
  overflow: hidden;
  text-overflow: ellipsis;
}
.sex-area{
  font-size: 14px;
  margin:0 auto;
  margin-top:10px;
  width:170px;
}

.info-menu{
  background: #fff;
  text-align: center;
  overflow: hidden;
  border-bottom: 1px solid #eaeaea;
  -moz-box-shadow: 0px 2px 0px #888888; 
  box-shadow: 0px 2px 0px #888888;
}
.info-menu a{
  display: inline-block;
  padding:10px 16px;
  color:#888;
  /*margin:0 4px;*/
}
</style>
