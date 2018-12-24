import Vue from 'vue'
import Router from 'vue-router'
import Axios from 'axios'
import Login from '@/views/login/login'
import Home from '@/views/login/home'
import mainpage from '@/views/commonComponent/mainpage'
import common from '@/views/commonComponent/common'
// vue-cli
/*
npm install vue 
npm install --global vue-cli
vue init webpack snow-web
cd snow-web
npm install
npm run dev
npm install axios -S
*/
Vue.use(Router)
Vue.prototype.$ajax = Axios
//Axios.defaults.baseURL = '/api'
Axios.defaults.baseURL = 'http://127.0.0.1:9090'
//Axios.defaults.baseURL = 'https://easy-mock.com/mock/5c05e8af119ec9640d826e9c/datacenter'//'http://127.0.0.1:8081'
Axios.defaults.headers.post['Content-Type'] = 'application/json';
Axios.defaults.headers.common['Authorization'] = "Bearer eyJhbGciOiJIUzUxMiJ9.eyJzdWIiOiJhZG1pbiIsInJvbGVzIjpbXSwiY2xpZW50X2lwIjoiMTAuNTAuMTQ2LjcwIiwiZXhwIjoxNTQ1Mzg3MDU2LCJpYXQiOjE1NDUzODM0NTZ9.RDF2yspZBZ_6IafCu3hAuMoIG8vq-AuUvgQ6yBn_VVmzqWjwb1GFNyDgie5w47SEeEmhB7wniaPZhkSY0A2Q2A";

export default new Router({
  routes: [
    {
			// 每个路由应该映射一个组件。 其中"component" 可以是通过 Vue.extend() 创建的组件构造器，
			// 或者，只是一个组件配置对象。我们晚点再讨论嵌套路由。
      name: 'login', path: '/login', component: Login
    },
		{
			name: 'home', path: '/', component: Home
		},
		{
			path: '/mainpage', name: 'mainpage', component: mainpage, children:[
				{name:'common',path:'common/:differId',component:common},
			]
		}
  ]
})
