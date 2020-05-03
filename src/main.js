import Vue from 'vue'
import App from './App.vue'
import router from './router'
import 'mint-ui/lib/style.css'
import axios from 'axios'
import store from './store'
import '../reset.css'
import './css/mui.min.css'
import mintui from 'mint-ui'
Vue.use(mintui)
axios.defaults.withCredentials = true
axios.defaults.baseURL = 'http://localhost:3000/'
Vue.prototype.$http = axios
Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
