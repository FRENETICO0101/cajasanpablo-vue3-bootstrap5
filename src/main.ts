import './assets/main.css'
import './assets/transitions.css'

import { createApp } from 'vue'
import App from './App.vue'
import router from './router'

import 'bootstrap/dist/css/bootstrap.min.css'
import 'bootstrap' // This imports Bootstrap's JavaScript bundle

const app = createApp(App)

app.use(router)
app.mount('#app')
