<template>
  <div id="app">
    <img src="./assets/logo.png">
    <router-view/>
    <router-view class='page1' name='page1'/>
    <router-view class='page2' name='page2'/>
  </div>
</template>

<script>
export default {
  name: 'App'
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}

.page1 {
  display: inline-block;
  background: #ccc;
}

.page2 {
  display: inline-block;
  background: #999;
}
</style>
