import Vue from 'vue'
import App from './App.vue'
import router from './router'
// 引入sun-ui
import Sun from 'vue-sun-ui'
import Tab from './components/Tab.vue'
import {Toast,Message} from 'vue-sun-ui'
// 引入sun-ui样式文件
import 'vue-sun-ui/dist/vue-sun-ui.css'
// 引入基础样式
import './assets/css/base.css'
import VueI18n from 'vue-i18n'
Vue.use(VueI18n)
Vue.config.productionTip = false
Vue.use(Sun)
Vue.prototype.$toast = Toast
Vue.prototype.$message = Message
Vue.component('sun-tabs',Tab)
const i18n = new VueI18n({
  locale: location.href.indexOf('en-US')===-1?'zh-CN':'en-US', // 定义默认语言为中文 
  messages: {
    'zh-CN': require('./locale/zh'),
    'en-US': require('./locale/en')
  },
});
new Vue({
  router,
  i18n,
  render: h => h(App)
}).$mount('#app')