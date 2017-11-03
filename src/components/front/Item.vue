<template>
  <li class="news-item clearfix" v-if="items">
    <a class="post-item" :href="'/article/'+items.id">
    <div class="item-top">
      <a :href="'/user/'+items.users_id" class="head-url"><img src="http://upload.jianshu.io/users/upload_avatars/2385632/b21daade-f9b2-4e97-9b11-15f97a38d11c.jpg?imageMogr2/auto-orient/strip|imageView2/1/w/120/h/120"></a>
      <a :href="'/user/'+items.users_id" class="user-name">{{items.users_name}}</a><span>{{items.addtime}}</span>
    </div>
    <div class="item-content">
    <!--   <div class="item-img" style="background-image: url(&quot;//upload-images.jianshu.io/upload_images/7264867-5b31ec396d927319.jpg?imageMogr2/auto-orient/strip|imageView2/1/w/690/h/240&quot;);"></div> -->
      <div class="item-title"><a :href="'/article/'+items.id">{{items.article_name}}</a></div>
      <p class="item-abstract"><a :href="'/article/'+items.id" v-html="items.article_desc"></a></p>
      <div class="item-meta"> <div href="/c/yD9GAd" class="collection-tag"><i class="fa fa-bookmark" aria-hidden="true"></i> <a href="">{{items.tags}}</a></div> 1 <i class="fa fa-eye" aria-hidden="true"></i> · 7 <i class="fa fa-commenting" aria-hidden="true"></i></div>
    </div>
  </a>
  </li>
</template>

<script>

export default {
  props: ['items'],
  data () {
    return {
      num: 10,
      msg: 'Welcome to Your Vue.js App'
    }
  },
  created () {
     // console.log("lo ",this.okll);
  },
  computed: {
    // locaStore () {
    //    return 45;
    // },
    // ...mapState({
    //   count: state => state.itemsPerPage+state.testNum,
    //   testNum: 'testNum',
    //   addCount (state) {
    //     return state.itemsPerPage
    //   }
    // }),
    // ...mapGetters({
    //   doneTodos: 'doneTodos',
    //   getTodoById : 'getTodoById'
    // }),
    // ...mapMutations({
    //   ffg: 'zxcv'
    // })
  },
  methods: {
    
  }
}
</script>

<style>

.news-item{
  position: relative;
  /*width: 100%;*/
  border-bottom: 1px solid #f0f0f0;
  word-wrap: break-word;
  padding: 20px 18px 25px;
  background: #fff;
  /*margin: 0 -18px;*/
}
.post-item{
  display: block;
}
.post-item a{
  color:#000;
}
.post-item a:hover{
  color:blue;
}
.item-top {
  /*width:100%;*/
  position: relative;
  height:52px;
  padding-left: 60px;
  padding-top:0px;
}
.head-url img{
  position: absolute;
  left: 0;
  top: 0;
  width: 52px;
  height: 52px;
  border-radius: 50%;
  border: 1px solid #f0f0f0;
  background-size: cover;
  background-repeat: no-repeat;
  background-position: 50%;
}
.item-top span {
  display: block;
  height: 12px;
  line-height: 12px;
  font-size: 12px;
  color: #999;
  margin-top: 4px;
}
.user-name{
  display: block;
  height: 17px;
  line-height: 17px;
  font-size: 15px;
  color: #333;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
  width: 100%;
  padding-top:8px;
  margin-bottom: 8px;
}
.item-content {
  /*width:100%;*/
}
.item-img{
  margin: 15px 0;
  height: 120px;
  background-color: #eaeaea;
  background-repeat: no-repeat;
  background-size: cover;
  background-position: 50%;
}
.item-title {
  margin: 10px 0 0;
  font-size: 18px;
  font-weight: 400;
  line-height: 1.4;
  color: #333;
}
.item-abstract{
  margin: 7px 0 0;
  font-size: 14px;
  line-height: 1.5;
  color: #3f3f3f;
  display: -webkit-box;
  -webkit-line-clamp: 2;
  -webkit-box-orient: vertical;
  overflow: hidden;
  text-overflow: ellipsis;
}
.item-meta {
  margin-top: 12px;
  font-size: 14px;
  color: #999;
  text-align: right;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
  border-bottom: 1px solid #fff;
  transition: border .2s;
  -webkit-transition: border .2s;
  padding:5px;
}
.post-item:hover .item-meta{
  border-bottom: 1px solid #eaeaea;
}
.item-meta .collection-tag{
  position: relative;
  float: left;
  line-height: 1;
}
.item-meta .collection-tag a{
  vertical-align: middle;
  font-size: 13px;
  padding: 5px 8px;
  margin-right: 10px;
  color: #ea6f5a;
}
.item-meta .collection-tag a:hover{
  color: blue;
}
.item-meta .collection-tag i{
  vertical-align: middle;
  display: inline-block;
  font-size: 16px;
}
/*.item-meta .collection-tag:after {
  content: "";
  position: absolute;
  top: 0;
  left: 0;
  width: 200%;
  height: 200%;
  border: 1px solid #ea6f5a;
  border-radius: 8px;
  transform: scale(.5);
  -webkit-transform: scale(.5);
  transform-origin: 0 0;
  -webkit-transform-origin: 0 0;
  box-sizing: border-box;
}*/
</style>
