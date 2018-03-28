<template>
    <div class="full-content">
      <swiper :options="swiperOption" ref="mySwiper">
        <swiper-slide>
          <header-tab title-name="精华"></header-tab>
        </swiper-slide>
        <swiper-slide>
          <header-tab title-name="问答"></header-tab>
        </swiper-slide>
        <swiper-slide>
          <header-tab title-name="主页"></header-tab>
          <div class="scroll-out" ref="scroll">
            <news-list :news="list"></news-list>
          </div>
        </swiper-slide>
        <swiper-slide>
          <header-tab title-name="分享"></header-tab>
        </swiper-slide>
        <swiper-slide>
          <header-tab title-name="招聘"></header-tab>
        </swiper-slide>
      </swiper>
    </div>
</template>

<script>
import BScroll from 'better-scroll'
import urlConfig from '@/config/urlConfig'
import headerTab from '@/components/header/header'
import newsList from '@/components/newsList/newsList'
export default {
  name: 'home',
  data () {
    return {
      msg: '1234',
      swiperOption: {
        autoplay: false, // 可选选项，自动滑动
        initialSlide: 2 // 初始化选择第三个
      },
      list: []
    }
  },
  components: {
    headerTab,
    newsList
  },
  mounted () {
    // 初始化调用获取所有接口
    const topics = {
      page: 1,
      tab: '',
      limit: 20,
      mdrender: true
    }
    this.$store.dispatch('getTopics', topics).then(data => {
      console.log(data)
      this.list = data.data
      this.$nextTick(() => {
        // betterscroll 初始化
        this.scroll = new BScroll(this.$refs.scroll, {
          bounce: false
        })
      })
    })
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
