import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store/index.js'

/**引入字体图标库**/
import "./assets/css/font-awesome.min.css"
import "./assets/css/weui.css"

Vue.config.productionTip = false

// 设置服务器地址
Vue.prototype.serveRoot = "http://api.niyinlong.com";

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
