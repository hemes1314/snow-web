<template>
 <div class="hello">
 <h1>{{ msg }}</h1>
 <h2>Essential Links</h2>
 <div class="btn">
  <router-link :to="{name:'common',params:{differId:'con1'}}">内容按钮1</router-link>
  <router-link :to="{name:'common',params:{differId:'con2'}}">内容按钮2</router-link>
 </div>
 <router-view></router-view>
 </div>
</template>
<script>
export default {
 name: 'mainpage',
 data () {
 return {
 msg: 'Welcome to Your Vue.js App'
 }
 }
}
</script>
<style scoped>
h1, h2 {
 font-weight: normal;
}
ul {
 list-style-type: none;
 padding: 0;
}
li {
 display: inline-block;
 margin: 0 10px;
}
a {
 color: #42b983;
}
</style>
