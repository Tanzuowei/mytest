<template>
  <div class="body-warp">
   <top></top>

     <transition name="fade">
     <router-view></router-view>
  </transition>
    <div class="write-word"><a href="/write"><i class="fa fa-pencil"></i>发文</a></div>

</div>
</template>

<script>
import top from "./Top.vue";
import { mapState, mapGetters, mapMutations } from 'vuex'
import alist from "./AAd.vue";
export default {
  data () {
    return {
      uer:'1',
      msg: 'Welcome to Your Vue.js App'
    }
  },
  created () {

  },
  computed: {
    ...mapGetters(['isLogin','userInfo'])
  },
  methods: {
    loginInfo(){
      if(!this.isLogin){
        this.$router.push('/login')
      }else{
        this.$router.push('/myself/'+this.userInfo.id)
      }
    }
  },
  components: {
  	top
  }
}
</script>

<style>
.body-warp{
  /*max-width: 1000px;*/
  height: 100%;
  /*background: #fff;*/
}
/*.top {
  height:60px;
  width:100%;
  background: #fff;
  position: relative;
  overflow: hidden;
}*/
/*.header {
  text-align: center;
  height:40px;
  padding:10px 0;
  width:100%;
  position: fixed;
  background: #fff;
  top:0;
  left:0;
  z-index: 99;
  -moz-box-shadow: 0px 1px 5px #eaeaea; 
  box-shadow: 0px 1px 5px #eaeaea;
}
.header a{
  padding:0 6%;
  height:40px;
  line-height:40px;
  color:#888;
  display: inline-block;
  margin:0;
}
.header a:nth-child(2){
  border-left: 1px solid #ccc;
  border-right: 1px solid #ccc;
}*/
.write-word{
  position: fixed;
  right: 10px;
  bottom: 50px;
  padding:2px;
  /*background: #fff;*/
}
.write-word a{
  padding:5px 10px;
  background: #0095ea;
  color:#fff;
  border-radius: 5px;
  font-size:15px;
  -webkit-border-radius: 5px;
}
.write-word a i{
  margin-right: 8px;
}
.banner{
  /*max-width: 1024px;*/
  width:100%;
  color: #fff;
  /*padding:10px 0;*/
  /*margin:10px auto;*/
 background: #fff;
}
.banner-box{
  height:200px;
  background: #0095ea;
  text-align: center;
  font-size: 20px;
  line-height: 180px;
}
.index-menu  {
  cursor: pointer;
  width:50px;
  height:50px;
/*   line-height:50px;*/
  text-align: center;
  /*border-radius: 50%;*/
  /*background: #1E90FF;*/
  font-size: 22px;
  color:#fff;
  outline: none;
  position: fixed;
  right: 20px;
  bottom: 68px;
/*  transform:scale(1);
  -ms-transform:scale(1);
  -webkit-transform:scale(1);
  -o-transform:scale(1);
  -moz-transform:scale(1);
  transition:all ease 0.3s;
  -webkit-transition:all ease 0.3s;*/
}
.menu-item{
  position: relative;
}
.index-menu .btn{
  cursor: pointer;
  width:50px;
  height:50px;
  line-height:50px;
  text-align: center;
  border-radius: 50%;
  background: #1E90FF;
  font-size: 22px;
  color:#fff;
  outline: none;
  position: absolute;
  right: 0;
  transform:scale(1);
  -ms-transform:scale(1);
  -webkit-transform:scale(1);
  -o-transform:scale(1);
  -moz-transform:scale(1);
  transition:all ease 0.3s;
  -webkit-transition:all ease 0.3s;
}
.index-menu  .btn:active {
  transform:scale(0.4);
  -ms-transform:scale(0.4);
  -webkit-transform:scale(0.4);
  -o-transform:scale(0.4);
  -moz-transform:scale(0.4);
}

.items{
  position: absolute;
  bottom: 0px;
  color:#000;
  display: block;
  width:100%;
}
.article-items li{
  display: block;
}
.items a{
  font-size:16px;
  display: block;
  padding:15px 0;
  color: #000;

}
.items li:active{
  transform:scale(0.8);
  -ms-transform:scale(0.8);
  -webkit-transform:scale(0.8);
  -o-transform:scale(0.8);
  -moz-transform:scale(0.8);
  background: #fff;
}
.items li{
  text-align: center;
  background: rgba(255,255,255,0.5);
  margin:5px 0;
  border-radius: 50%;
  transform:scale(1);
  -ms-transform:scale(1);
  -webkit-transform:scale(1);
  -o-transform:scale(1);
  -moz-transform:scale(1);
  transition:all ease 0.3s;
  -webkit-transition:all ease 0.3s;
}
.no-more{
  font-size: 14px;
  color:#ccc;
  text-align: center;
  padding:6px 0;
}


</style>
