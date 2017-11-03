<template>
 <div class="list">
  <div class="banner">
    <div class="banner-box">暂时没想好</div>
   </div>
  <div id="list-warp">
   <div class="post-list">
       <ul>
         <item v-if="listdata" v-for="(item,index) in listdata" :key="index":items="item"></item>
         <li v-for="(item,index) in downdata" >{{item.name}}</li>
         <li v-if="noMore"><div class="no-more">没有更多了</div></li>
       </ul>
   </div>
   <div class="aside-right">
     <div class="aside-right-item">
       <h4>热门标签</h4>
       <div class="aside-hot-tags">
         <a href="/blog/t/mo" class="" style="color: rgb(92, 184, 92);">mo</a><a href="/blog/t/audio" class="" style="color: rgb(107, 195, 13);">audio</a><a href="/blog/t/dom" class="" style="color: rgb(212, 68, 101);">dom</a><a href="/blog/t/smusic" class="" style="color: rgb(107, 195, 13);">smusic</a><a href="/blog/t/mongodb" class="" style="color: rgb(2, 117, 216);">mongodb</a><a href="/blog/t/html5" class="" style="color: rgb(121, 93, 163);">html5</a><a href="/blog/t/react.js" class="" style="color: rgb(241, 89, 66);">react.js</a><a href="/blog/t/github" class="" style="color: rgb(158, 158, 158);">github</a><a href="/blog/t/git" class="" style="color: rgb(212, 68, 101);">git</a><a href="/blog/t/css3" class="" style="color: rgb(212, 68, 101);">css3</a><a href="/blog/t/vue" class="" style="color: rgb(212, 68, 101);">vue</a><a href="/blog/t/npm" class="" style="color: rgb(242, 182, 32);">npm</a><a href="/blog/t/angular" class="" style="color: rgb(241, 89, 66);">angular</a><a href="/blog/t/javascript" class="" style="color: rgb(92, 184, 92);">javascript</a><a href="/blog/t/koa" class="" style="color: rgb(241, 89, 66);">koa</a><a href="/blog/t/gulp" class="" style="color: rgb(158, 158, 158);">gulp</a>
       </div>
     </div>
     <!-- <div class="aside-right-item">
       <h4>热门标签</h4>
       <div class="aside-hot-tags">
         <a href="/blog/t/mo" class="" style="color: rgb(92, 184, 92);">mo</a><a href="/blog/t/audio" class="" style="color: rgb(107, 195, 13);">audio</a><a href="/blog/t/dom" class="" style="color: rgb(212, 68, 101);">dom</a><a href="/blog/t/smusic" class="" style="color: rgb(107, 195, 13);">smusic</a><a href="/blog/t/mongodb" class="" style="color: rgb(2, 117, 216);">mongodb</a><a href="/blog/t/html5" class="" style="color: rgb(121, 93, 163);">html5</a><a href="/blog/t/react.js" class="" style="color: rgb(241, 89, 66);">react.js</a><a href="/blog/t/github" class="" style="color: rgb(158, 158, 158);">github</a><a href="/blog/t/git" class="" style="color: rgb(212, 68, 101);">git</a><a href="/blog/t/css3" class="" style="color: rgb(212, 68, 101);">css3</a><a href="/blog/t/vue" class="" style="color: rgb(212, 68, 101);">vue</a><a href="/blog/t/npm" class="" style="color: rgb(242, 182, 32);">npm</a><a href="/blog/t/angular" class="" style="color: rgb(241, 89, 66);">angular</a><a href="/blog/t/javascript" class="" style="color: rgb(92, 184, 92);">javascript</a><a href="/blog/t/koa" class="" style="color: rgb(241, 89, 66);">koa</a><a href="/blog/t/gulp" class="" style="color: rgb(158, 158, 158);">gulp</a>
       </div>
     </div>
   </div> -->
  </div>
</div>
</div>
</template>

<script>
import { select_all_article } from "../../api/article"
// import { mapState, mapGetters, mapMutations } from 'vuex'
import item from "./Item.vue"
export default {
  data () {
    return {
      num: 10,
      items: [],
      msg: 'Welcome to Your Vue.js App',
      counter : 0, //默认已经显示出15条数据 count等于一是让从16条开始加载
      // num : 15,  // 一次显示多少条
      pageStart : 0, // 开始页数
      pageEnd : 0, // 结束页数
      listdata: [], // 下拉更新数据存放数组
      downdata: [],  // 上拉更多的数据存放数组,
      noMore: 0
    }
  },
  components: {
    item
  },
  created () {
  },
  mounted(){
    let vm = this
    select_all_article({"usersid":0,"nowNum":0,"pageNum":vm.num,"type":1}).then(res=>{
        vm.listdata.push(...res)
      }).catch(res=>{console.log("ok")})
    window.addEventListener("scroll",vm.scroll)
  },
  computed: {
    locaStore () {
       return 45;
    },
  },
  methods: {
    scroll(){
      let vm = this
      let oH = document.getElementById("list-warp").offsetHeight
      // document.scrollTop=90
      let iH = document.body.clientHeight
      let dT = document.documentElement.scrollTop
      let sH = dT/(oH-iH)
      // console.log(sH)
      if( sH >= 0.95){
        window.removeEventListener("scroll",vm.scroll)
        this.counter++
        let counts = this.counter*this.num
        let num=counts+this.num
        // console.log(counts,num)
        this.getData({"counter": counts,"num":num})
      }
    },
    getData({counter,num}){
      let vm = this
      select_all_article({"usersid":0,"nowNum":counter,"pageNum":num,"type":1}).then(res=>{
      console.log(res)
        if(res === 0){
          vm.noMore = 1
          return ;
        }
        vm.listdata.push(...res)
        window.addEventListener("scroll",vm.scroll)
      })
    },
    getList(){

    },
    onRefresh(done) {
    },
    onInfinite(done) {

    }
  }
}
</script>

<style>
.list{
}
#list-warp{
  max-width: 1140px;
  margin-left: auto;
  margin-right: auto;
  margin-top: 20px;
  width: 100%;
  display: -webkit-box;
  display: -ms-flexbox;
  display: flex;
  -ms-flex-wrap: wrap;
  flex-wrap: wrap;
}

.aside-right{
    width: 300px;
    margin-left: 1.25rem;
    -ms-flex-negative: 0;
    flex-shrink: 0;
}
.post-list{
   width: 1%;
  -webkit-box-flex: 1;
  -ms-flex: 1 0 auto;
   flex: 1 0 auto;
}
.aside-hot-tags a{
  display: inline-block;
  margin-right: 12px;
}
.aside-right-item{
  background: #fff;
  padding:14px;
  margin-bottom: 20px;
}
.aside-right-item h4{
  display: block;
  font-size: 20px;
  font-weight: 500;
  margin:0;
  margin-bottom: 15px;
  padding:5px 0 5px 15px;
  border-left: 4px solid #0095ea;
}
@media screen and (max-width: 601px){
  .aside-right{
    display: none
  }
}
@media screen and (max-width: 801px){
.aside-right{
    width: 260px;
  }
}
@media screen and (max-width: 721px){
.aside-right{
    width: 240px;
  }
}
</style>
