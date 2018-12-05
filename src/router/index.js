import Vue from 'vue'
import Router from 'vue-router'
import Resource from 'vue-resource'
import login from '@/views/login/login'

Vue.use(Router)
Vue.use(Resource)

export default new Router({
  routes: [
    {
			// 每个路由应该映射一个组件。 其中"component" 可以是通过 Vue.extend() 创建的组件构造器，
			// 或者，只是一个组件配置对象。我们晚点再讨论嵌套路由。
      name: 'login', path: '/', component: login
    }
  ]
})
