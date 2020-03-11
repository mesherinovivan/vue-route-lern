import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
import ListView from '@/components/list'
Vue.use(Router)

export default new Router({
  routes: [
    {
      path: 'hello/:id/:msg',
      name: 'home',
      components:{
          default:ListView,
          headers:HelloWorld   
      },
      props: { default: true, headers: true }
      
    }
  ]
})