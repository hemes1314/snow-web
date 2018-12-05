
<template>
		<div id="vue_det">
			<div th:if="${param.error}">
				Invalid username and password.
			</div>
			<div th:if="${param.logout}">
				You have been logged out.
			</div>
				<div><label> User Name : <input v-model="username" placeholder="用户名"/> </label></div>
				<div><label> Password: <input type="password" v-model="password" placeholder="密码"/> </label></div>
				<div><input type="button" v-on:click="login" value="Sign In" /></div>
		</div>
</template>
<script>
export default {
  name: 'login',
  data () {
    return {
      username: 'admin',
			password: 'admin'
    }
  },
	methods: {
			login(){
				// `this` 在方法里指当前 Vue 实例
				console.log('Hello ' + this.msg + '!')
				// `event` 是原生 DOM 事件
				if (event) {
					console.log(event.target.tagName)
				}
				//发送 post 请求
				this.$http.post('http://127.0.0.1:8081/login',{username:this.username,password:this.password},{emulateJSON:true}).then(function(res){
						document.write(res.body);    
				},function(res){
						console.log('请求失败处理');
						console.log(res.status);
				});
			}
	}
}
</script>
