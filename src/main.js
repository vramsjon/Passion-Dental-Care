import './assets/main.css'

import { createApp } from 'vue'
import { createPinia } from 'pinia'
import router from "./router";
import VueSweetalert2 from 'vue-sweetalert2'
// Import CSS bawaan SweetAlert2
import 'sweetalert2/dist/sweetalert2.min.css'

import App from './App.vue'

const app = createApp(App)

app.use(createPinia())
app.use(router)

app.mount('#app')
app.use(VueSweetalert2)