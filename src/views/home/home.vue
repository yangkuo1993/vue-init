<template>
    <div class="full-content">
      <swiper :options="swiperOption" ref="mySwiper" @slideChangeTransitionEnd="slideChangeTransitionEnd">
        <swiper-slide>
          <header-tab title-name="精华"></header-tab>
          <news-list :news="goodList"></news-list>
        </swiper-slide>
        <swiper-slide>
          <header-tab title-name="问答"></header-tab>
          <news-list :news="askList"></news-list>
        </swiper-slide>
        <swiper-slide>
          <header-tab title-name="主页"></header-tab>
          <news-list :news="homeList"></news-list>
        </swiper-slide>
        <swiper-slide>
          <header-tab title-name="分享"></header-tab>
          <news-list :news="shareList"></news-list>
        </swiper-slide>
        <swiper-slide>
          <header-tab title-name="招聘"></header-tab>
          <news-list :news="jobList"></news-list>
        </swiper-slide>
      </swiper>
    </div>
</template>

<script>
import headerTab from '@/components/header/header'
import newsList from '@/components/newsList/newsList'
export default {
  name: 'home',
  data () {
    return {
      swiperOption: {
        autoplay: false, // 可选选项，自动滑动
        initialSlide: 2 // 初始化选择第三个
      },
      homeList: [],
      askList: [],
      goodList: [],
      shareList: [],
      jobList: []
    }
  },
  components: {
    headerTab,
    newsList
  },
  mounted () {
    this.lists().then(data => {
      this.homeList = data.data
    })
  },
  methods: {
    // 调用列表接口
    lists ({page = 1, tab = '', limit = 20, mdrender = true} = {}) {
      const topics = {
        page: page,
        tab: tab,
        limit: limit,
        mdrender: mdrender}
      return this.$store.dispatch('getTopics', topics)
    },
    slideChangeTransitionEnd () {
      const newType = this.swiper.activeIndex // 0:精华，1：问答，2：主页，3：分享，4：招聘
      switch (newType) {
        case 0:
          this.lists({tab: 'good'}).then(data => {
            this.goodList = data.data
          })
          break
        case 1:
          this.lists({tab: 'ask'}).then(data => {
            this.askList = data.data
          })
          break
        case 2:
          this.lists({tab: ''}).then(data => {
            this.homeList = data.data
          })
          break
        case 3:
          this.lists({tab: 'share'}).then(data => {
            this.shareList = data.data
          })
          break
        case 4:
          this.lists({tab: 'job'}).then(data => {
            this.jobList = data.data
          })
          break
        default:
          this.lists()
      }
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
