import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Card',
    component: () => import(/* webpackChunkName: "Card" */ '../components/Card.vue')
  },
  {
    path: '/signup-form',
    name: 'SignupForm',
    component: () => import(/* webpackChunkName: "SignupForm" */ '../components/SignupForm.vue')
  },
  {
    path: '/pricing',
    name: 'Pricing',
    component: () => import(/* webpackChunkName: "Pricing" */ '../components/pricing/Pricing.vue')
  },
  {
    path: '/slider',
    name: 'Slider',
    component: () => import(/* webpackChunkName: "Slider" */ '../components/Slider.vue')
  },
  {
    path: '/pierre-papier-ciseaux',
    name: 'PierrePapierCiseaux',
    component: () => import(/* webpackChunkName: "PierrePapierCiseaux" */ '../components/PierrePapierCiseaux.vue')
  },

]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
