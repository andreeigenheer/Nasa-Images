
import i18n from '././i18n/i18n.ts'
import { createApp } from 'vue'
import { createPinia } from 'pinia'
import 'bootstrap/dist/css/bootstrap.min.css'
import 'bootstrap/dist/js/bootstrap.bundle.min.js'


import App from './App.vue'

const app = createApp(App)
app.use(i18n)
app.use(createPinia())

app.mount('#app')
