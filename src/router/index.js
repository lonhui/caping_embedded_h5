import Vue from 'vue'
import Router from 'vue-router'

//loading效果
// import NProgress from 'nprogress'
// import 'nprogress/nprogress.css'

Vue.use(Router)

const router = new Router({
  routes: [
    {
        path: '/',
        name: 'faqNew',
        meta:{
            title:'FAQ',
            scrollToTop: true
        },
        component: () => import('@/pages/Home/index')
    },
    {
      path: '/faq',
        name: 'home',
        meta:{
            title:'FAQ',
            scrollToTop: true
        },
        component: () => import('@/pages/Home/faqNew')
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
        title:'Tentang Level',
        scrollToTop: true,
      },
      component: () => import('@/pages/Level/level')
    },
    {
      path:'/medal',
      name:'medal',
      meta:{
        title:'Tentang Medali',
        scrollToTop: true,
      },
      component: () => import('@/pages/Medal/medalList')
    },
  ]
})

// router.beforeEach((to, from, next) => {
//   NProgress.start()
//   next()
// })

// router.afterEach(() => {
//   NProgress.done()
// })

export default router