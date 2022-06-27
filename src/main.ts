import { createApp } from 'vue'
import { createPinia } from 'pinia'

import App from './App.vue'
import router from './router'

import { NavBar } from 'vant'
import 'vant/es/nav-bar/style/index'

const app = createApp(App)

app.use(createPinia())
app.use(router)

app.use(NavBar)

app.mount('#app')
