import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'home',
    component: () => import(/* webpackChunkName: "Home" */ '@/views/Home.vue')
  },
  {
    path: '/leagues/:league/teams',
    name: 'teams',
    component: () => import(/* webpackChunkName: "Teams" */ '@/views/Teams.vue')
  },
  {
    path: '/teams/:teamId/players',
    name: 'players',
    component: () => import(/* webpackChunkName: "Players" */ '@/views/Players.vue')
  },
  {
    path: '/teams/players/:playerId',
    name: 'player',
    component: () => import(/* webpackChunkName: "Player" */ '@/views/Player.vue')
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
