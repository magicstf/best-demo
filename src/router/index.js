import Vue from 'vue'
import Router from 'vue-router'

import Index from '@/page/index/index'
import ImgInfo from '@/page/imginfo/imgInfo'
import VueApi from '@/page/vuetips/vueTips'

// const Index = () => import('@/page/index/index')
// const ImgInfo = () => import('@/page/imginfo/imgInfo')
// const VueApi = () => import('@/page/vuetips/vueTips')

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Index',
      component: Index
    },
    {
      path: '/imgInfo',
      name: 'ImgInfo',
      component: ImgInfo
    },
    {
      path: '/vuetips',
      name: 'VueApi',
      component: VueApi
    }
  ]
})
