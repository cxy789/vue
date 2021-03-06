// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import'../static/mui/css/mui.min.css'
import mui from "../static/mui/js/mui.min.js"
import store from "./store/store"

Vue.config.productionTip = false
Vue.prototype.$mui=mui

/* eslint-disable no-new */
new Vue({
  el: '#app',
  store,
  router,
  components: { App },
  template: '<App/>'
})
