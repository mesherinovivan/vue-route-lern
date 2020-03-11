import Vue from 'vue'
import App from './App.vue'
import VueRouter from 'vue-router'
import routes from './routes';

Vue.use(VueRouter)

Vue.config.productionTip = true

new Vue({
  router: routes,  
  render: h => h(App),
  
}).$mount('#app')
