import Vue from 'vue'
import Router from 'vue-router'

import Index from '@/page/index/index'
import ImgInfo from '@/page/imginfo/imgInfo'
import VueApi from '@/page/vuetips/vueTips'
import LifeCycle from '@/page/lifecycle/lifecycle'
import Compute from '@/page/compute/compute'
import ClassBind from '@/page/classbind/classbind'
import IfElse from '@/page/ifelse/ifelse'
import ListRander from '@/page/listrander/listrander'
import MyMock from '@/page/mymock/mymock'
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
    },
    {
      path: '/lifecycle',
      name: 'LifeCycle',
      component: LifeCycle
    },
    {
      path: '/compute',
      name: 'Compute',
      component: Compute
    },
    {
      path: '/classbind',
      name: 'ClassBind',
      component: ClassBind
    },
    {
      path: '/ifelse',
      name: 'IfElse',
      component: IfElse
    },
    {
      path: '/listrander',
      name: 'ListRander',
      component: ListRander
    },
    {
      path: '/mymock',
      name: 'MyMock',
      component: MyMock
    }
  ]
})
