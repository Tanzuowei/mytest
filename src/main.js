import 'es6-promise/auto'
import 'babel-polyfill'
import Vue from 'vue'
import router from './router'
import store from './store'
import App from './App.vue'
import Picker from "./components/front/picker.vue"

// import 'babel-polyfill'
// import axios from 'axios'

// Vue.prototype.$http = axios
// Vue.set(Vue.prototype,"okll",233);
Vue.component(Picker.name,Picker)
router.beforeEach((to, from, next) => {
  if (to.matched.some(record => record.meta.requiresAuth)) {
    // this route requires auth, check if logged in
    // if not, redirect to login page.
    if (!auth.loggedIn()) {
      next({
        path: '/login',
        query: { redirect: to.fullPath }
      })
    } else {
      next()
    }
  } else {
    next() // make sure to always call next()!
  }
})
new Vue({
  el: '#app',
  router,
  store,
  render: h => h(App)
})
