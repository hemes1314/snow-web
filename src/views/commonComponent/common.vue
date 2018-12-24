<template>
 <div class="same">
 这个是相同的内容
 <div class="conlist">
  <template v-for="item in items">
  <p>{{item.con}}</p>
  </template>
 </div>
 </div>
</template>
<script>
export default {
 name: 'commonCommponent',
 data () {
	 return {
		 msg: '',
		 differIdType:'',
		 conlist:[
			{'con':'这是第一个内容按钮的内容1'},
			{'con':'这是第一个内容按钮的内容2'}
		 ],
		 items:[], 
	 }
 },
 mounted(){
	  this.differIdType = this.$route.params.differId == 'con1' ? '0' : '1';
	  if(this.differIdType == 0){
		this.items = this.conlist;
	  }else{
		this.items = [];
	  }
 },
 watch:{
 $route:function(to,from){
	  this.differIdType = to.params.differId == 'con1' ? '0' : '1'; 
	  if(this.differIdType == 0){
		this.items = this.conlist;
	  }else{
		this.items = [];
	  } 
 }
 }
}
</script>
<style>
</style>