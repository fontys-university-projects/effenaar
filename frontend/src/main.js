import { createApp } from 'vue'
import App from './App.vue'
import './registerServiceWorker'
import router from './router'
import './index.css'
import Particles from "particles.vue3";

createApp(App).use(router, Particles).mount('#app')
