<template>
    <div class="full-content">
      <swiper :options="swiperOption" ref="mySwiper" @slideChangeTransitionEnd="slideChangeTransitionEnd">
        <swiper-slide>
          <header-tab title-name="精华"></header-tab>
          <news-list :news="good.goodList"></news-list>
        </swiper-slide>
        <swiper-slide>
          <header-tab title-name="问答"></header-tab>
          <news-list :news="ask.askList"></news-list>
        </swiper-slide>
        <swiper-slide>
          <header-tab title-name="主页"></header-tab>
          <news-list :news="home.homeList"></news-list>
        </swiper-slide>
        <swiper-slide>
          <header-tab title-name="分享"></header-tab>
          <news-list :news="share.shareList"></news-list>
        </swiper-slide>
        <swiper-slide>
          <header-tab title-name="招聘"></header-tab>
          <news-list :news="job.jobList"></news-list>
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
      home: {
        page: 1,
        tab: '',
        limit: 20,
        mdrender: true,
        homeList: []
      },
      ask: {
        page: 1,
        tab: '',
        limit: 20,
        mdrender: true,
        askList: []
      },
      good: {
        page: 1,
        tab: '',
        limit: 20,
        mdrender: true,
        goodList: []
      },
      share: {
        page: 1,
        tab: '',
        limit: 20,
        mdrender: true,
        shareList: []
      },
      job: {
        page: 1,
        tab: '',
        limit: 20,
        mdrender: true,
        jobList: []
      }
    }
  },
  components: {
    headerTab,
    newsList
  },
  mounted () {
    this.lists().then(data => {
      this.home.homeList = data.data
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
          if (!this.good.time || (new Date().getTime() - this.good.time > 60000)) {
            this.$set(this.good, 'time', new Date().getTime())
            this.lists({tab: 'good'}).then(data => {
              this.good.goodList = data.data
            })
          }
          break
        case 1:
          if (!this.ask.time || (new Date().getTime() - this.ask.time > 60000)) {
            this.$set(this.ask, 'time', new Date().getTime())
            this.lists({tab: 'ask'}).then(data => {
              this.ask.askList = data.data
            })
          }
          break
        case 2:
          if (!this.home.time || (new Date().getTime() - this.home.time > 60000)) {
            this.$set(this.home, 'time', new Date().getTime())
            this.lists({tab: ''}).then(data => {
              this.homeList = data.data
            })
          }
          break
        case 3:
          if (!this.share.time || (new Date().getTime() - this.share.time > 60000)) {
            this.$set(this.share, 'time', new Date().getTime())
            this.lists({tab: 'share'}).then(data => {
              this.share.shareList = data.data
            })
          }
          break
        case 4:
          if (!this.job.time || (new Date().getTime() - this.job.time > 60000)) {
            this.$set(this.job, 'time', new Date().getTime())
            this.lists({tab: 'job'}).then(data => {
              this.job.jobList = data.data
            })
          }
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
