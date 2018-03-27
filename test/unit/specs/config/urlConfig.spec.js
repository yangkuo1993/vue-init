import urlConfig from '@/config/urlConfig'
describe('urlConfig.js', () => {
  it('test urlConfig type', () => {
    expect(typeof urlConfig.topics).toBe('string')
  })
})
