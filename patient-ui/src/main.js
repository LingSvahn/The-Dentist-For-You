import './assets/main.css'

import { createApp } from 'vue'
import { createBootstrap } from 'bootstrap-vue-next'

import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue-next/dist/bootstrap-vue-next.css'
import 'bootstrap'

import App from './patientApp.vue'
import router from './router'

const app = createApp(App)
app.use(createBootstrap())
app.use(router)

app.mount('#app')
