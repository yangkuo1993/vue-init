<template>
  <div class="hello" ref="scroll">
    <div>
      <h1>{{ msg }}</h1>
      <button @click="test">test</button>
    </div>
  </div>
</template>

<script>
import BScroll from 'better-scroll'
export default {
  name: 'HelloWorld',
  data () {
    return {
      msg: 'Welcome to Your Vue.js App'
    }
  },
  mounted () {
    this.$nextTick(() => {
      this.scroll = new BScroll(this.$refs.scroll, {
        bounce: false
      })
    })
  },
  methods: {
    test () {
      this.$store.dispatch('increase')
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="stylus" scoped rel="stylesheet/stylus">
  .hello
    height: 100%
    h1
      color: red
</style>
