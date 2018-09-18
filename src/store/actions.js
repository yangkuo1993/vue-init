import topics from '@/api/topics/topics'
export default {
  increase (context) {
    context.commit('increase')
  },
  // 获取主题
  async getTopics ({ commit, state }, payload) {
    let result = await topics.getTopics(payload)
    return result
  }
}
