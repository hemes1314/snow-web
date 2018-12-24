<template>
	<div id="vue_det">
		<h1>Welcome!</h1>
		<p>Click <a href="/#/login">here</a> to login.</p>
		<p>Click <a href="javascript:void(0);" v-on:click="hello">here</a> to ajax get request demo.</p>
		<p>Click <a href="javascript:void(0);" v-on:click="winopen">here</a> to window open demo.</p>
		<p>Click <router-link :to="{name:'mainpage'}">here</router-link> to common component demo demo.</p>
	</div>
</template>
<script>
export default {
	created() {
		console.log('token: ' + this.$route.query.token);
	},
  data () {
    return {
      msg: 'msg...'
    }
  },
	methods: {
			hello(){
				// `this` 在方法里指当前 Vue 实例
				console.log('Hello ' + this.msg + '!')
				// `event` 是原生 DOM 事件
				if (event) {
					console.log(event.target.tagName)
				}
				
				//发送 post 请求
				this.$ajax({
						method: 'get',
						url: '/demo/hello',
						data: {
						},
						headers: {
							'Authorization': 'Bearer '+this.$route.query.token
						}
				 })
				.then(resp => {
						console.log(resp.data);
				}).catch(err => {             //
						console.log('请求失败：'+err);
						console.log('请求失败：'+err.response.data.status);
						console.log('请求失败：'+err.response.data.message);
				});
				
			},
			winopen() {
				window.open("http://127.0.0.1:9090/demo/downloadTemplate");
			}
	}
}
</script>
