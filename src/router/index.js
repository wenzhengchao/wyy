import Vue from 'vue'
import VueRouter from 'vue-router'
import recommend from '../components/index/recommend.vue'
import rank from '../components/index/rank.vue'
import singer from '../components/index/singer.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    redirect: '/recommend'
  },
  {
    path: '/recommend',
    component: recommend
  },
  {
    path: '/rank',
    component: rank
  },
  {
    path: '/singer',
    component: singer
  }
]

const router = new VueRouter({
  routes
})

export default router
