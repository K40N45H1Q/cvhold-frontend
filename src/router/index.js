import { createRouter, createWebHistory } from 'vue-router'

import Home from '../pages/Home.vue'
import Jobs from '../pages/Jobs.vue'

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
]

const router = createRouter({
  history: createWebHistory(),
  routes
})

export default router