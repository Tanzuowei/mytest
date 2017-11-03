<template>
  <div id="user-article">
    <div class="create-model clearfix"><span class="new-title l">文章列表</span><!-- <a href="" class="r">更多 <i class="fa fa-chevron-right" aria-hidden="true"></i></a> --></div>
    <ul>
    <item v-if="listdata" v-for="(item,index) in listdata" :key="index":items="item"></item>
    <li v-if="noMore"><div class="no-more">没有更多了</div></li>
  </ul>
  </div>
</template>

<script>
import item from "../Item.vue"
import { select_users_all_article } from "../../../api/article"

export default {
  data () {
    return {
      num: 5,
      counter : 0, //默认已经显示出15条数据 count等于一是让从16条开始加载
      // num : 15,  // 一次显示多少条
      pageStart : 0, // 开始页数
      pageEnd : 0, // 结束页数
      listdata: [], // 下拉更新数据存放数组
      downdata: [],  // 上拉更多的数据存放数组,
      noMore: 0
    }
  },
  created () {
    // const that = this
    // if(this.isNumber(parseInt(this.$route.params.id))){
    //   selectAllArticle(that.$route.params.id).then(res=>{
    //     that.items = res
    //   })
    // }
     
  },
  mounted(){
    this.loadin()
  },
  components: {
    item
  },
  methods: {
    isNumber (num) {
       const reg = new RegExp(/^[0-9]/)
       return reg.test(num)
    },
    loadin(){
      let vm = this
      console.log(vm.$route.params.id)
      if(this.isNumber(parseInt(this.$route.params.id))){
        select_users_all_article({"usersid":vm.$route.params.id,"nowNum":0,"pageNum":5,"type":1}).then(res=>{
            if(res.length<=5){
               vm.noMore = 1
            }
            vm.listdata.push(...res)
          })
        window.addEventListener("scroll",vm.scroll)
      }
    },
    scroll(){
      let vm = this
      let oH = document.getElementById("user-article").offsetHeight
      let iH = document.body.clientHeight
      let dT = document.documentElement.scrollTop
      let sH = dT/(oH-iH)
      if( sH >= 0.95){
        window.removeEventListener("scroll",vm.scroll)
        this.counter++
        let counts = this.counter*this.num
        let num=counts+this.num
        this.getData({"counter": counts,"num":num})
      }
    },
    getData({counter,num}){
      let vm = this
      select_users_all_article({"usersid":vm.$route.params.id,"nowNum":counter,"pageNum":num,"type":0}).then(res=>{
        if(res === 0){
          vm.noMore = 1
          return ;
        }
        vm.listdata.push(...res)
        window.addEventListener("scroll",vm.scroll)
      })
    },
  }
}
</script>

<style>

.main-top{
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
