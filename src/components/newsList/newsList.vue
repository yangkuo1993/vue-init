<template>
  <div class="scroll-out" ref="scroll">
    <div>
      <div class="list" v-for="item in news" :key="item.id" >
        <div class="img">
          <img v-lazy="item.author.avatar_url" alt="">
        </div>
        <div class="list-info">
          <div class="title">{{item.title}}</div>
          <div class="describe">
            <div>
              <span>{{item.reply_count}}/{{item.visit_count}}</span>
              <span class="share">{{item.tab | newsType}}</span>
              <span class="top" v-if="item.top">顶</span>
              <span class="good" v-if="item.good">精</span>
            </div>
            <time>
              {{item.last_reply_at | dateAgo}}
            </time>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import BScroll from 'better-scroll'
export default {
  name: 'newsList',
  props: {
    news: {
      type: Array,
      required: true
    }
  },
  data () {
    return {}
  },
  mounted () {
    this.$nextTick(() => {
      // betterscroll 初始化
      this.scroll = new BScroll(this.$refs.scroll, {
        bounce: false
      })
    })
  }
}
</script>
<style lang="stylus" scoped rel="stylesheet/stylus">
  @import "./newsList.styl";
</style>
