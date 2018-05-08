<template>
  <div>
    <h1>{{msg}}</h1>
    <p>{{$route.params.goodsId}}</p>
    <router-link to='/goods/page1'>跳转page1</router-link>
    <router-link to='/goods/page2'>跳转page2</router-link>
    <div>
      <router-view></router-view>
    </div>
  </div>
</template>

<style scoped>

</style>

<script>
  export default {
    name: 'goodsList',
    data () {
      return {
        msg: '这是一个测试'
      }
    }
  }
</script>
