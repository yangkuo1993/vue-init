import axios from '../index'
import urlConfig from '@/config/urlConfig'
export default {
  // get /topics 主题首页
  getTopics (keywords) {
    return axios.get(`${urlConfig.topics}?page=${keywords.page}&tab=${keywords.tab}&limit=${keywords.limit}&mdrender=${keywords.mdrender}`)
  }
}
