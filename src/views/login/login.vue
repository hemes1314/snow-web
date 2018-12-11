
<template>
		<div id="vue_det">
			<!-- <div th:if="${param.error}"> 
				Invalid username and password.
			</div>
			<div th:if="${param.logout}">
				You have been logged out.
			</div>-->
				<div><label> User Name : <input v-model="username" placeholder="用户名"/> </label></div>
				<div><label> Password: <input type="password" v-model="password" placeholder="密码"/> </label></div>
				<div><input type="button" v-on:click="login" value="Sign In" /></div>
		</div>
</template>
<script>
export default {
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
				this.$ajax({
						method: 'post',
						url: '/login',
						data: {
							username:this.username,
							password:this.password
						}
				 })
				.then(resp => {
						console.log(resp.data);
						if(resp.data.status == 1) {
							location.href="/home";
						} else {
							alert(resp.data.message);
						}
				}).catch(err => {             //
						console.log('请求失败：'+err.status+','+err.statusText);
				});
				
			}
	}
}
</script>
