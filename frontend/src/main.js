import { createApp } from 'vue'
import App from './App.vue'
import './registerServiceWorker'
import router from './router'
import Particles from "particles.vue3";
import './index.css'

createApp(App).use(router).use(Particles).mount('#app')
