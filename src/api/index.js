import axios from 'axios'
const $http = axios.create({
  baseURL: 'https://cnodejs.org/api/v1',
  timeout: 1000,
  headers: {'X-Custom-Header': 'foobar'}
})
// 请求拦截
$http.interceptors.request.use((config) => {
  return config
}, (error) => {
  return Promise.reject(error)
})

// 响应拦截
$http.interceptors.response.use((response) => {
  return response.data
}, (error) => {
  return Promise.reject(error)
})
export default $http
