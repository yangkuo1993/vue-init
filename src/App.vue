<template>
  <div id="app">
    <router-view/>
  </div>
</template>

<script>
export default {
  name: 'App'
}
</script>

<style lang="stylus" rel="stylesheet/stylus">
  @import "assets/css/reset.css";
  @import "assets/css/common.styl";
  html,body,#app
    height: 100%
    width: 100%
</style>
