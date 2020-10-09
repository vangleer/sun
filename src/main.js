import Vue from 'vue'
import App from './App.vue'
import router from './router'
// 引入sun-ui
import Sun from 'vue-sun-ui'
import {Toast,Message} from 'vue-sun-ui'
// 引入sun-ui样式文件
import 'vue-sun-ui/dist/vue-sun-ui.css'
// 引入基础样式
import './assets/css/base.css'
Vue.config.productionTip = false
Vue.use(Sun)
Vue.prototype.$toast = Toast
Vue.prototype.$message = Message
new Vue({
  router,
  render: h => h(App)
}).$mount('#app')