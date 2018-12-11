
<template>
		<div id="vue_det">
				<div><label> User Name : <input v-model="username" placeholder="用户名"/> </label></div>
				<div><label> Password: <input type="password" v-model="password" placeholder="密码"/> </label></div>
				<div><input type="button" v-on:click="login" value="Sign In" /></div>
				<div v-if="login_status===1" style="color:red;"> 
					Invalid username and password.
				</div>
		</div>
</template>
<script>
export default {
  data () {
    return {
      username: 'admin',
			password: 'admin',
			login_status: 0
    }
  },
	methods: {
			login(){
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
						this.login_status = resp.data.status;
						console.log(this.login_status);
						if(resp.data.status == 0) {
							location.href="/home";
						}
				}).catch(err => {             //
						console.log('请求失败：'+err.status+','+err.statusText);
				});
				
			}
	}
}
</script>
