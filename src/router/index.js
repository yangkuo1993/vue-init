import Vue from 'vue'
import Router from 'vue-router'
const Home = () => import(/* webpackChunkName: "home" */ '@/views/home/home')
Vue.use(Router)

const router = new Router({
  routes: [
    {
      path: '/',
      name: 'Home',
      component: Home
    }
  ]
})
router.beforeEach((to, from, next) => {
  // ...
  next()
})
router.afterEach((to, from) => {
  // ...
})
export default router
