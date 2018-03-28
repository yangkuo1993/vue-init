import Vue from 'vue'

/**
 * 新闻类型
 * @param {[type]} 'newsType' [description]
 * @param {[type]} (data,       formater      [description]
 * return {[type]}  [description]
 */
Vue.filter('newsType', (data) => {
  if (data) {
    const result = data === 'share' ? '分享' : data === 'ask' ? '问答' : data === 'good' ? '精华' : data === 'job' ? '招聘' : ''
    return result
  }
})
