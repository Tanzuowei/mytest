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
  }
}
</script>

<style>
@import url('/static/font-awesome/css/font-awesome.min.css');
</style>
