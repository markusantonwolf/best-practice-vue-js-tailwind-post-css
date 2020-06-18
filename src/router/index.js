import Vue from 'vue'
import VueRouter from 'vue-router'
import store from '@/store'
import Home from '@/views/Home.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    redirect: { name: 'Home' },
    name: 'Start',
  },
  {
    path: '/home',
    name: 'Home',
    component: Home,
  },
  {
    path: '/audio',
    name: 'Audio',
    component: () => import(/* webpackChunkName: "audio" */ '../views/Audio.vue'),
  },
  {
    path: '/Icon',
    name: 'icon',
    component: () => import(/* webpackChunkName: "icon" */ '../views/Icon.vue'),
  },
  {
    path: '/Notification',
    name: 'notification',
    component: () => import(/* webpackChunkName: "notification" */ '../views/Notification.vue'),
  },
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  linkExactActiveClass: 'is-exact-active',
  linkActiveClass: 'is-active',
  routes,
})

router.beforeEach((to, from, next) => {
  store.dispatch('navigation/popupHide')
  next()
})

export default router
