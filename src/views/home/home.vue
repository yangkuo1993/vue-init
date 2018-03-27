<template>
    <div class="full-content" ref="scroll">
      <swiper :options="swiperOption" ref="mySwiper">
        <!-- slides -->
        <swiper-slide>I'm Slide 1</swiper-slide>
        <swiper-slide>I'm Slide 2</swiper-slide>
        <swiper-slide>I'm Slide 3</swiper-slide>
        <swiper-slide>I'm Slide 4</swiper-slide>
        <swiper-slide>I'm Slide 5</swiper-slide>
        <swiper-slide>I'm Slide 6</swiper-slide>
        <swiper-slide>I'm Slide 7</swiper-slide>
      </swiper>
    </div>
</template>

<script>
import BScroll from 'better-scroll'
import urlConfig from '@/config/urlConfig'
export default {
  name: 'home',
  data () {
    return {
      msg: '1234',
      swiperOption: {
        autoplay: true // 可选选项，自动滑动
      }
    }
  },
  mounted () {
    this.$nextTick(() => {
      this.scroll = new BScroll(this.$refs.scroll, {
        bounce: false
      })
    })
    this.swiper.slideTo(3, 1000, false)
  },
  methods: {
    test () {
      // this.$store.dispatch('increase')
      this.$http.get(urlConfig.topics).then((data) => {
        console.log(data)
      })
    }
  },
  computed: {
    swiper () {
      return this.$refs.mySwiper.swiper
    }
  }
}
</script>
<style lang="stylus" rel="stylesheet/stylus">
  @import "./home.styl";
</style>
