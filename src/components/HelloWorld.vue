<template>
  <div class="hello" ref="scroll">
    <div>
      <game :width="width" :height="height"></game>
    </div>
  </div>
</template>

<script>
import BScroll from 'better-scroll'
import Game from './Game'
export default {
  name: 'HelloWorld',
  data () {
    return {
      msg: 'Welcome to Your Vue.js App',
      width: document.documentElement.clientWidth,
      height: document.documentElement.clientHeight
    }
  },
  components: {
    Game
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
      font-size: 32px
</style>
