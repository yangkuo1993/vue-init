import Vue from 'vue'
import HelloWorld from '@/components/HelloWorld'
describe('HelloWorld.vue', () => {
  it('should render correct contents', () => {
    const Constructor = Vue.extend(HelloWorld)
    const vm = new Constructor().$mount()
    expect(vm.$el.querySelector('.hello h1').textContent)
      .toEqual('Welcome to Your Vue.js App')
  })
  // 检查原始组件选项
  it('has a mounted hook', () => {
    expect(typeof HelloWorld.mounted).toBe('function')
  })
  // 检查函数test
  it('test function test', () => {
    expect(typeof HelloWorld.methods.test()).toBe('undefined')
  })
})
