import { createRouter, createWebHistory } from 'vue-router'
import App from '/src/App.vue'
import LandingPage from '/src/components/pages/LandingPage.vue'
import TentangPage from '/src/components/pages/TentangPage.vue'
import TimDokterPage from '../components/pages/TimDokterPage.vue'
import LayananPage from '../components/pages/LayananPage.vue'
import VennerGigiPages from '../components/pages/VennerGigiPages.vue'
const routes = [
  {
    path: '/',
    name: LandingPage,
    component: LandingPage,
  },
  {
    path: '/tentang-kami',
    name: TentangPage,
    component: TentangPage,
  },
  {
    path: '/tim-dokter',
    name: TimDokterPage,
    component: TimDokterPage,
  },
  {
    path: '/layanan',
    name: LayananPage,
    component: LayananPage,
  },
  {
    path: '/venner-gigi',
    name:VennerGigiPages,
    component: VennerGigiPages,
  }
]

const router = createRouter({
  history: createWebHistory(),
  routes,
})

export default router
