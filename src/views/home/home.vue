<template>
    <div ref="scroll">
      <div>
        <h1>{{ msg }}</h1>
        <button @click="test">test</button>
      </div>
    </div>
</template>

<script>
import BScroll from 'better-scroll'
export default {
  name: 'home',
  data () {
    return {
      msg: '1234'
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
      // this.$store.dispatch('increase')
      this.$http.get('/topics').then((data) => {
        console.log(data)
      })
    }
  }
}
</script>
<style lang="stylus" rel="stylesheet/stylus">

</style>
