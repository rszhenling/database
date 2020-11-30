import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import './plugins/element.js'
import "./assets/css/common.css"
import api from "./api"
import Storage from "./utils/Storage"

Vue.prototype.$api = api
Vue.config.productionTip = false


if(Storage.getItem("token") && Storage.getItem("username")){
  store.dispatch("seUserInfoActions",{
    username:Storage.getItem("username"),
    token:Storage.getItem("token")
  })
}

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
