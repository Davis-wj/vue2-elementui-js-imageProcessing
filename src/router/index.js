import Vue from 'vue'
import Router from 'vue-router'
import Home from '../views/Home.vue'


const Step01 = () => import('../views/step01/Step01.vue')
const Step02 = () => import('../views/step02/Step02.vue')
const Step03 = () => import('../views/step03/Step03.vue')
const Step04 = () => import('../views/step04/Step04.vue')
const Step05 = () => import('../views/step05/Step05.vue')
const Step06 = () => import('../views/step06/Step06.vue')
const Context = () => import('../components/main/Context.vue')
const Drawer = () => import('../views/drawer/Drawer.vue')

Vue.use(Router)

const routes = [{
    path: "",
    redirect: "/context"
  },
  {
    path: '/',
    name: 'home',
    component: Home,
    children: [{
        path: '/context',
        component: Context,
        meta: {
          title: "首页"
        },
      },
      {
        path: '/step01/:id',
        component: Step01,
        meta: {
          title: "图像上传"
        },
      },
      {
        path: '/step02/:id',
        component: Step02,
        meta: {
          title: "灰度处理"
        },
      },
      {
        path: '/step03/:id',
        component: Step03,
        meta: {
          title: "矩形面积计算"
        },
      },
      {
        path: '/step04/:id',
        component: Step04
      },
      {
        path: '/step05/:id',
        component: Step05
      },
      {
        path: '/step06/:id',
        component: Step06
      },
    ]
  },
]

const router = new Router({
  routes,
  mode: 'history',
  base: process.env.BASE_URL,
})
// 导航守卫
// 前置守卫
// router.beforeEach((to, from, next) => {
//   //为每个页面赋予不同title
//   console.log(to.params.id)

//   document.title = to.matched[1].meta.title

//   next()
// })

export default router