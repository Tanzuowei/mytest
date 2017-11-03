<template>
<div class="wrapper">
	<div class="goBack"><i class="fa fa-angle-left" @click="goBack"></i> <span>用户注册</span></div>
  <div class="login">
  	<div class="login-top">
  		<img src="../../assets/images/logo.png">
  	</div>
  	<div class="formLogin">
  		<div><input type="text" v-model="userinfo.user" placeholder="请填写用户名" name="" value=""></div>
  		<div><input type="password" v-model="userinfo.pwd" placeholder="设置密码" name="" value=""></div>
      <div><input type="text" v-model="userinfo.invitecode" placeholder="邀请码:12345" name="" value=""></div>
  		<div><button @click="register">注 册</button></div>
  		<div class="pro clearfix"><a href="" class="pro-left l">登录遇到问题</a><a href="/login" class="pro-right r">已有账户登录</a></div>
  		<!-- <div class="reg-user"><a href="">立即注册</a></div> -->
  	</div>
  </div>
</div>
</template>

<script>
// import mod from "@/components/front/Item.vue";
import {mapGetters} from 'vuex'
import { add_register } from "../../api/register"
export default {
  data () {
    return {
      userinfo:{
        user:'',
        pwd:'',
        invitecode:''
      },
      msg: 'Welcome to Your Vue.js App'
    }
  },
  created () {

  },
  methods:{
    goBack (){
      this.$router.replace({name: 'list'})
      // window.history.go(-1);
    },
    //登录
    async register () {
      console.log(this.userinfo);
      let vm = this;
      const data = await add_register(vm.userinfo).catch((res)=>{console.log(res)})

      this.callback(data)
    },
    //登陆后的回调
    callback({code,data,message}){
      if(code==1){
        this.$store.commit('SET_LOGIN',data)
        this.$router.push('/list')
      }else{
        alert("错了哦");
        // this.$store.dispatch('setShowWarn',message)
      }
    }
  }
}
</script>

<style>
.wrapper{
	width:100%;
	height:100%;
	background: #f5f5f5;
}

.login{
  padding:0 15px;
  height:400px;
  margin:0 auto;
  overflow: hidden;
}
.login .login-top{
  margin-bottom: 20px;

}
.login .login-top img,.login .login-top span{
  display: block;
  text-align: center;
}
.login .login-top img{
  width:50px;
  height:auto;
  margin:0 auto;
  padding-top:40px;
}

.formLogin{
  
}
.formLogin input{
  display: block;
  border:0;
  height:30px;
  padding:10px 4%;
  background: #fff;
  width:92%;
  font-size: 16px;
  margin:2px 0;
}
.formLogin button{
  width:100%;
  font-size: 16px;
  margin-top:20px;
  display: block;
  border:0;
  height:50px;
  border-radius: 4px;
  cursor: pointer;
  color:#90b6ff;
  background: #3c76ff;
  outline: none;
}
.formLogin button:hover{
  color: #fff;
  box-sizing: border-box;
  -webkit-box-sizing: border-box;
  -o-box-sizing: border-box;
  -ms-box-sizing: border-box;
  -moz-box-sizing: border-box;
}
.pro{
	margin-top: 30px;
	font-size: 12px;
}
.goBack{
  /*padding:10px 0;*/
  text-align: center;
  line-height: 50px;
  height:50px;
  background: #fff;
  position: relative;
  border-bottom: 1px solid #ccc;
}
.goBack i, .goBack span{
  display: block;
  position: absolute;
  top:0;
  left:0;
  width:100%;
}
.goBack i{
  line-height: 50px;
  width:20px;
  z-index: 2;
  padding: 0 14px;
  font-size: 24px;
}
.goBack span{
}
</style>
