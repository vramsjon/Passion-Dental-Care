import { createRouter, createWebHistory } from 'vue-router'
import App from '/src/App.vue'
import LandingPage from '/src/components/pages/LandingPage.vue'


const routes = [
  {
    path: '/',
    name: LandingPage,
    component: LandingPage,
  },
  
]

const router = createRouter({
  history: createWebHistory(),
  routes,
})

export default router
