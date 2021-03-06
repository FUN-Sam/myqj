import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
//引入axios
import Axios from "axios"
Vue.prototype.$axios = Axios

Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
