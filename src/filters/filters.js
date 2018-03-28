import Vue from 'vue'

/**
 * 新闻类型
 * @param {[type]} 'newsType' [description]
 * @param {[type]} 'data'     [description]
 * return {[type]}  [description]
 */
Vue.filter('newsType', (data) => {
  if (data) {
    const result = data === 'share' ? '分享' : data === 'ask' ? '问答' : data === 'good' ? '精华' : data === 'job' ? '招聘' : ''
    return result
  }
})
/**
 * 剩余时间
 * @param {[type]} 'newsType' [description]
 * @param {[type]} formater      [description]
 * return {[type]}  [description]
 */
Vue.filter('dateAgo', (date) => {
  if (date) {
    const ago = new Date(date)
    const now = new Date()
    const agoYear = ago.getFullYear()
    const agoMounth = ago.getMonth() + 1
    const agoDay = ago.getDate()
    const agoHour = ago.getHours()
    const agoMinutes = ago.getMinutes()
    const agoSeconds = ago.getSeconds()
    const nowYear = now.getFullYear()
    const nowMounth = now.getMonth() + 1
    const nowDay = now.getDate()
    const nowHour = now.getHours()
    const nowMinutes = now.getMinutes()
    const nowSeconds = now.getSeconds()
    if (nowYear - agoYear > 0) {
      return `${nowYear - agoYear}年前`
    } else if (nowMounth - agoMounth > 0) {
      return `${nowMounth - agoMounth}月前`
    } else if (nowDay - agoDay > 0) {
      return `${nowDay - agoDay}天前`
    } else if (nowHour - agoHour > 0) {
      return `${nowHour - agoHour}小时前`
    } else if (nowMinutes - agoMinutes > 0) {
      return `${nowMinutes - agoMinutes}分钟前`
    } else if (nowSeconds - agoSeconds > 0) {
      return `${nowSeconds - agoSeconds}秒前`
    }
  }
})
