<template>
    <div class="full-content">
      <swiper :options="swiperOption" ref="mySwiper" @slideChangeTransitionEnd="slideChangeTransitionEnd">
        <swiper-slide>
          <header-tab title-name="精华"></header-tab>
        </swiper-slide>
        <swiper-slide>
          <header-tab title-name="问答"></header-tab>
        </swiper-slide>
        <swiper-slide>
          <header-tab title-name="主页"></header-tab>
          <news-list :news="homeList"></news-list>
        </swiper-slide>
        <swiper-slide>
          <header-tab title-name="分享"></header-tab>
        </swiper-slide>
        <swiper-slide>
          <header-tab title-name="招聘"></header-tab>
          <news-list :news="homeList"></news-list>
        </swiper-slide>
      </swiper>
    </div>
</template>

<script>
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
      homeList: []
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
      this.homeList = data.data
    })
  },
  methods: {
    test () {
      // this.$store.dispatch('increase')
      this.$http.get(urlConfig.topics).then((data) => {
        console.log(data)
      })
    },
    slideChangeTransitionEnd () {
      console.log(this.swiper.activeIndex)
    }
  },
  computed: {
    swiper () {
      return this.$refs.mySwiper.swiper
    }
  }
}
</script>
<style scoped lang="stylus" rel="stylesheet/stylus">
  @import "./home.styl";
</style>
