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

export default new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [{
      path: "",
      redirect: "/context"
    },
    {
      path: '/',
      name: 'home',
      component: Home,
      children: [{
          path: '/context',
          component: Context
        },
        {
          path: '/step01/:id',
          component: Step01
        },
        {
          path: '/step02/:id',
          component: Step02
        },
        {
          path: '/step03/:id',
          component: Step03
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
})