<template>
  <div id="list-warp">
 <!--    <div class="top">
      <div class="header clearfix">
        <a href="">最新</a>
        <a href="">热门</a>
        <a href="">推荐</a>
      </div>
    </div> -->
   <div class="banner"><div class="banner-box">暂时没想好</div></div>
  <!-- <ul class="article-items"> -->
    
       <!-- <v-scroll :on-refresh="onRefresh" :on-infinite="onInfinite"> -->
       <ul>
         <item v-if="listdata" v-for="(item,index) in listdata" :key="index":items="item"></item>
         <li v-for="(item,index) in downdata" >{{item.name}}</li>
         <li v-if="noMore"><div class="no-more">没有更多了</div></li>
       </ul>
    <!-- </v-scroll> -->
  <!-- </ul> -->
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
      console.log("ok");
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
          // alert(res)
          // let d = document.createElement('div')
          // d.innerHTML="没有更多了"
          // d.className="no-more"
          // document.getElementById("list-warp").appendChild(d)
          return ;
        }
        vm.listdata.push(...res)
        window.addEventListener("scroll",vm.scroll)
      })
    },
    getList(){
       // let vm = this;
       //    select_all_article({"usersid":2,"nowNum":vm.counter,"pageNum":vm.num,"type":1}).then((response) => {
       //             vm.listdata = response.data.slice(0,15);
       //           }, (response) => {
       //              console.log('error');
       //          });
    },
    onRefresh(done) {
       // this.getList();
 
       // done() // call done
    },
    onInfinite(done) {
   //    let vm = this;
   //    vm.$http.get('https://api.github.com/repos/typecho-fans/plugins/contents/').then((response) => {
   //        vm.counter++;
   //        vm.pageEnd = vm.num * vm.counter;
   //        vm.pageStart = vm.pageEnd - vm.num;
   //        let arr = response.data;
   //           let i = vm.pageStart;
   //           let end = vm.pageEnd;
   //           for(; i<end; i++){
   //              let obj ={};
   //              obj["name"] = arr[i].name;
   //              vm.downdata.push(obj);
   //               if((i + 1) >= response.data.length){
   //                this.$el.querySelector('.load-more').style.display = 'none';
   //                return;
   //              }
   //              }
   //        done() // call done
   //         }, (response) => {
   //          console.log('error');
   //      });
    }
  }
}
</script>

<style>

</style>
