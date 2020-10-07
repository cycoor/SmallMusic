import Vue from 'vue'
import VueRouter from 'vue-router'


Vue.use(VueRouter)

const Home = () => import('views/home/Home')
const Recommend = () => import('views/home/HomeComps/recommend/Recommend')

const routes = [
  {
    path: '/',
    redirect: '/home'
  },
  {
    path: '/home',
    component: Home,
    children: [
      {
        path: '/',
        redirect: '/home/recommend'
      },
      {
        path: '/home/recommend',
        component: Recommend
      }
    ]
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
