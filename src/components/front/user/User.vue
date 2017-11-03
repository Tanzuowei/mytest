<template>
  <div>
    <div class="users">
        <div class="head-img">
          <img src="http://upload.jianshu.io/users/upload_avatars/2385632/b21daade-f9b2-4e97-9b11-15f97a38d11c.jpg?imageMogr2/auto-orient/strip|imageView2/1/w/120/h/120">
        </div>
        <div class="user-info">
          <h3>名字：谭作维</h3>
          <p>爱好：跑步、羽毛球、玩王者</p>
          <div class="user-git"><a href="https://github.com/Tanzuowwei/mytest"><i class="fa fa-github" aria-hidden="true"></i> <span>我的GitHub</span></a></div>
        </div>
        <div class="user-recommend">
          <h3>学习经历</h3>
          <p>2016年毕业</p>
           <h3>现在从事的职业</h3>
          <p>web前端</p>
        </div>
  </div>
  </div>
</template>

<script>
import { mapGetters } from 'vuex'
import { select_new_one_article } from "../../../api/article"
export default {
  data () {
    return {
      msg: 'Welcome to Your Vue.js App',
      item:[]
    }
  },
  created(){
    if(!this.isLogin && !this.isNumber(parseInt(this.$route.params.id))){
      let that = this
      setTimeout(function(){that.$router.replace({name: 'login'})},10)
    }else{
      
    }
  },
  mounted(){
    let vm = this
    console.log(vm.$route.params.id)
    if(this.isNumber(parseInt(this.$route.params.id))){
      select_new_one_article(vm.$route.params.id).then(res=>{
        console.log(res)
        vm.item = res[0]
      })
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
 max-width: 1140px;
  margin-left: auto;
  margin-right: auto;
  margin-top: 20px;
  width: 100%;
  background: #fff;
}
.main-top{
	padding:60px 10px;
	background: #ccc;
}
.head-img{
  padding:20px 0;
  text-align: center;
}
.head-img img{
  border-radius: 50%;
  -webkit-border-radius: 50%;
}
.user-git{
  position: relative;
  z-index: 999;
  padding:20px 0;
  text-align: center;
   /*line-height: 100%*/
}
.user-git a{
  display: inline-block;
  padding:10px 20px;
  border-radius: 5px;
  -webkit-border-radius: 5px;
  border:1px solid #5eb4f0;
  /*margin:0 5px;*/
  background: #fff;
  color:#5eb4f0;
  transition: all 2s;
  -webkit-transition: all .2s;
  -o-transition: all .2s;
}
.user-git a i{
  font-size: 26px;
  vertical-align: middle;
  color:#333;
}
.user-git a span{
  vertical-align: middle;
}
.user-git a:hover{
  color:#888;
  border:1px solid #fff;
}
.user-info{
  text-align: center;
}
.user-info h3{
  font-weight: normal;
  margin:8px auto;
  color:#555;
}
.user-info p{
  margin:5px auto;
  color:#999;
  font-size: 14px;
}
.user-recommend{
  padding:20px;
}
.user-recommend h3{
  font-size: 20px;
  font-weight: normal;
  border-left: 4px solid #0095ea;
  padding-left:10px 
}
.user-recommend p{
  padding-left:16px 
}
</style>
