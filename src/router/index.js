import { createRouter, createWebHistory } from 'vue-router'
import App from '/src/App.vue'
import LandingPage from '/src/components/pages/LandingPage.vue'
import TentangPage from '/src/components/pages/TentangPage.vue'
import TimDokterPage from '../components/pages/TimDokterPage.vue'
import LayananPage from '../components/pages/LayananPage.vue'
import VennerGigiPages from '../components/pages/VennerGigiPages.vue'
import PromoPage from '../components/pages/PromoPage.vue'
import ArtikelPages from '../components/pages/ArtikelPages.vue'
import LokasiPages from '../components/pages/LokasiPages.vue'
import DetailLokasiPage from '../components/pages/DetailLokasiPage.vue'
import SurveyPage1 from '../components/pages/SurveyPage1.vue'
import SurveyFormPage from '../components/pages/SurveyFormPage.vue'
import SurveyPage2 from '../components/pages/SurveyPage2.vue'

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
  },
  {
    path:'/promo',
    name: PromoPage,
    component: PromoPage
  },
  {
    path: '/artikel',
    name: ArtikelPages,
    component: ArtikelPages
  },
  {
    path:'/lokasi-klinik',
    name: LokasiPages,
    component: LokasiPages
  },
  {
    path:'/lokasi-klinik/:slug',
    name: DetailLokasiPage,
    component: DetailLokasiPage
  },
  {
    path: '/survey',
    name: SurveyPage1,
    component: SurveyPage1
  },
  {
    path: '/survey-form',
    name: SurveyFormPage,
    component: SurveyFormPage
  },
  {
    path: '/survey-page2',
    name: SurveyPage2,
    component: SurveyPage2
  }
]

const router = createRouter({
  history: createWebHistory(),
  routes,
})

export default router
