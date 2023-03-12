import { createApp } from 'vue'
import App from './App.vue'
import { createRouter, createWebHistory } from 'vue-router'
import "./assets/reset.css";
import routes from './router'

import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'
// eslint-disable-next-line no-unused-vars
import library from './icons'

const router = new createRouter({
    history: createWebHistory(),
    routes
})

createApp(App)
.component('font-awesome-icon', FontAwesomeIcon)
.use(router)
.mount('#app')
