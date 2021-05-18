import Vue from 'vue'
import App from './App'
import router from "./router";

// 设置 false 以阻止 Vue 在启动时生成生产提示  , true 提示 npm run build
Vue.config.productionTip = false


// 创建一个新的 Vue 实例
new Vue({
  router,
  render: h => h(App),
}).$mount('#app')
