<template>
  <transition name="fade">
     <router-view></router-view>
  </transition>
</template>

<script>

export default {
  name: 'app',
  data () {
    return {
      msg: 'Welcome to Your Vue.js App'
    }
  },
  mounted(){
  	 window.onload=function(){
    		// alert("ok");
    		var node = document.getElementById('load')
    		// console.log(node)
            node.removeChild(node.childNodes[0])
    	}
  }
}
</script>

<style>
@import url('/static/font-awesome/css/font-awesome.min.css');
</style>
