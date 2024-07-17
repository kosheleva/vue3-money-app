import { createApp } from 'vue'
import { createRouter, createWebHistory } from 'vue-router'
import Notifications from '@kyvg/vue3-notification'

import './style.css'
import App from './App.vue'
import Home from './containers/home.vue'
import Auth from './containers/auth.vue'
import Contact from './containers/contact.vue'

import store from './store';

import i18n from './locales/i18n';

const router = createRouter({
    history: createWebHistory(),
    routes: [
      { path: '/', component: Home },
      { path: '/home', component: Home },
      { path: '/auth', component: Auth },
      { path: '/contacts/:id', component: Contact }
    ],
  })

i18n.global.locale = 'ua'

createApp(App)
    .use(router)
    .use(store)
    .use(i18n)
    .use(Notifications)
    .mount('#app')

    
