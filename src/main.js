import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import store from './vuex/store'

import axios from 'axios'
import VueAxios from 'vue-axios'

let app = createApp(App).use(router)

app.use(VueAxios, axios)
app.provide('axios', app.config.globalProperties.axios) 
app.mount('#app')
app.use(store)
