import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

export default new Router({
  routes: [
    {
        path: '/',
        name: 'home',
        meta:{
            title:'FAQ',
            scrollToTop: true
        },
        component: () => import('@/pages/Home/index')
    },
    {
        path: '/privacy',
        name: 'privacy',
        meta:{
            title:'Aturan Privasi',
            scrollToTop: true
        },
        component: () => import('@/pages/Privacy/privacy')
    },
    {
      path:'/level',
      name:'level',
      meta:{
        title:'Level Introduction',
        scrollToTop: true,
      },
      component: () => import('@/pages/Level/level')
    },
    {
      path:'/medal',
      name:'medal',
      meta:{
        title:'Me Dals',
        scrollToTop: true,
      },
      component: () => import('@/pages/Medal/medalList')
    },
  ]
})
