import { createRouter, createWebHistory } from 'vue-router'

import Home from '../pages/Home.vue'
import Jobs from '../pages/Jobs.vue'
import Login from '../pages/Login.vue'
import Registraion from '../pages/Registration.vue'

const routes = [
  {
    path: '/cvhold-frontend/',
    name: 'bootstrap',
    component: Home
  },
  {
    path: '/cvhold-frontend/jobs',
    name: 'jobs',
    component: Jobs
  },
  {
    path: '/cvhold-frontend/signin',
    name: 'signin',
    component: Login
  },
  {
    path: '/cvhold-frontend/signup',
    name: 'signup',
    component: Registraion
  },
]

const router = createRouter({
  history: createWebHistory(),
  routes
})

export default router