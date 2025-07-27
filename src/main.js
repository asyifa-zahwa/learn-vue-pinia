import { createApp } from 'vue'
import './style.css'
import App from './App.vue'
import { createPinia } from 'pinia'

import { createRouter, createWebHistory } from 'vue-router'
import Counter from './components/Counter.vue'
import MultipleCounter from './components/MultipleCounter.vue'
const pinia = createPinia()
const router = createRouter({
  history: createWebHistory(),
  routes: [
    {
        path: '/counter',
        name: 'counter',
        component: MultipleCounter
    },
]});


createApp(App).use(pinia).use(router).mount('#app')
