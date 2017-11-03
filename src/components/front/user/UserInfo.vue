<template>
  <div>
    <div class="create-model textc base-info-title">查看更多资料</div>
    <div class="create-model clearfix"><span class="new-title l">最新发布</span><a href="" class="r">更多 <i class="fa fa-chevron-right" aria-hidden="true"></i></a></div>
   <ul>
    <item v-for="(item,index) in items" :key="index":items="item"></item>
  </ul>
  <div class="create-model">
    <div class="new-model">模块更新中.....</div>
  </div>
  <div class="logout" v-if="userid == myselfid"><button class="logout-btn" @click="logout">退出登录</button></div>
  </div>
</template>

<script>
import { mapGetters } from 'vuex'
import { select_new_one_article } from "../../../api/article"
import item from "../Item.vue"
export default {
  data () {
    return {
      num: 10,
      items: [],
      myselfid:0,
      userid:1,
      msg: 'Welcome to Your Vue.js App'
    }
  },
  components: {
    item
  },
  created () {
    const that = this
    if(this.isLogin && this.isNumber(parseInt(this.$route.params.id))){
      this.myselfid = parseInt(this.userInfo.id)
      this.userid = parseInt(this.$route.params.id)
    }
    if(this.isNumber(parseInt(this.$route.params.id))){
      select_new_one_article(that.$route.params.id).then(res=>{
        that.items = res
      })
    }
     
  },
  computed: {
     ...mapGetters(['isLogin','userInfo'])
  },
  methods: {
    isNumber (num) {
       const reg = new RegExp(/^[0-9]/)
       return reg.test(num)
    },
    logout () {
      let that = this
      if(true === confirm("你确定？")){
        this.$store.commit('LOGOUT')
        alert("成功退出")
      }
      if(!this.isLogin){
        setTimeout(function(){that.$router.replace({name: 'login'})},1000)
      }
    }
  },
  watch: {
    '$route' (to, from) {
      console.log(to, from);
      const that = this
      this.myselfid = parseInt(this.userInfo.id)
      this.userid = parseInt(to.params.id)
      select_new_one_article(to.params.id).then(res=>{
        that.items = res
      })
      console.log(this.myselfid,this.userid );
    }
  }
}
</script>


<style>
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
.user-title a i{
  color:#FF9900 !important;
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

.logout{
  padding:20px 0;
  background: #fff;
}
.logout-btn{
  width:70%;
  height:30px;
  border:0;
  border:none;
  color:#fff;
  font-size: 14px;
  background: #EE3B3B;
  -moz-box-shadow: 0px 2px 2px #888888; 
  box-shadow: 0px 2px 2px #888888;
  margin: 0 auto;
  display: block;
  /*margin-bottom: 30px;*/
}
.new-title{
  font-size:14px;
  padding:2px 14px;
  border-left: 3px solid #1E90FF;
  color:#666;
  /*background: #FFFF99*/
}

.create-model{
  width:100%;
  background: #fff;
  padding:8px 0;
  border-bottom: 1px solid #eaeaea;
  /*margin-bottom: 10px;*/
}
.create-model a{
  font-size:14px;
  color:#666;
  margin-right: 4px;
}
.create-model a i{
  font-size: 12px;
  color:#1E90FF !important;
}
.new-model{
  font-size: 14px;
  padding:2px 10px;
  border-left: 3px solid #FF9900
}
.base-info-title{
  color:#888;
  font-size: 14px;
  margin-bottom: 10px;
}
</style>
