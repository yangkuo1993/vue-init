import * as types from './mutations_types'
console.log(types)
const mutations = {
  [types.INCREASE] (state) {
    state.demo1++
  }
}
export default mutations
