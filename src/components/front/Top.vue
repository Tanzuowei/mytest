<template>
	<div class="w-top">
    <div class="top clearfix">
     <a href="/" class="logo">Wdy Blog</a>
     <nav class="app-nav" id="nav-bar">
     	<ul>
     		<li><a href="/">首页</a></li>
     		<li><a href="/blog">文章</a></li>
     		<li><a href="/message">留言</a></li>
     		<li><a href="/test">耕地</a></li>
     		<li><a href="/user">关于</a></li>
     	</ul>
     </nav>
     <a href="javascript:;" class="mobile-bar" @click="clickBar"><i></i><i></i><i></i></a>
	</div>
 
    <!--    <div class="index-menu">
    <div class="menu-item">
      <div class="btn"><i class="fa fa-send"></i></div>
      <ul class="items">
        <li><a href="/write"><i class="fa fa-pencil"></i></a></li>
        <li><a href="javascript:;" @click="loginInfo"><i class="fa fa-user"></i></a></li>
        <li><a href="/"><i class="fa fa-home"></i></a></li>
      </ul>
    </div>
  </div>
   -->
  </div>
</template>

<script>
export default {
  data () {
    return {
       bar: 1
    }
  },
  created(){
  	let vm = this
 //    window.addEventListener("resize",function(){
 //     document.body.clientWidth>700?vm.bar=1:0;
 //    // console.log(document.body.clientWidth,vm.bar)
 // })
  },
  methods:{
  	clickBar(){
       let nav = document.getElementById('nav-bar')
       if(this.bar){
       	  this.bar=0;
       	  nav.style.height="auto";
       }else{
       	  this.bar=1;
       	  nav.style.height="0px";
       }
       
  	}
  }
}
</script>

<style>
.w-top{
	height:60px;
	/*padding:0 10px;*/
	/*background: #fff;*/
}
.top{
  width:100%;
  background-color: hsla(0,0%,100%,.9);
  box-shadow: 0 0.0625rem 0.3125rem rgba(0,0,0,.09);
  position: fixed;
  z-index: 99;
  height:60px;
  background: rgba(255,255,255,0.8);
  /*overflow: hidden;*/
}
.logo{
	float: left;
	margin-left: 30px;
	line-height:50px;
	color:blue;
	font-size: 20px;
}
.app-nav{
  float: right;
  /**/
  padding-right: 30px
}
.app-nav li{
	display: inline-block;
/*       display: list-item;
    text-align: -webkit-match-parent;*/
}
.app-nav li>a{
	font-size: 16px;
	display: block;
	padding: 15px 20px;
	transition: color .2s;
	-webkit-transition: color .2s;
	color:#000;
}
.app-nav li>a:hover{
	color:blue;
}
.mobile-bar{
    position: absolute;
    right: 0;
    width: 45px;
    height: 40px;
    line-height: 0.5em;
    opacity: 0;
    text-align: center;
    top:10px;
    z-index: -99;
}
.mobile-bar i{
    display: inline-block;
	width: 25px;
	height: 2px;
	padding:0;
	background-color: #80817f;
	-webkit-backface-visibility: hidden;
	backface-visibility: hidden;
	transition: all .6s cubic-bezier(.165,.84,.44,1);
}
@media screen and (max-width: 721px){
	.mobile-bar{
		opacity: 1;
	}
	.app-nav {
		background: rgba(255,255,255,0.8);
		position: fixed;
		width:100%;
		height:0px;
		top:60px;
		z-index: 99;
		overflow: hidden;
        /*opacity: 0;*/
	}
	.app-nav ul{
		display: block;
	}
	.app-nav li{
	   display: block;
	   width:100%;
       border-top: .0625rem solid hsla(0,0%,83%,.6);
	}
	.app-nav li>a{
       display: block;
	}
}
</style>
