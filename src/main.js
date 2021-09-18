import animejs from 'animejs'
import { createApp } from 'vue'
import Antd from 'ant-design-vue';
import { createRouter, createWebHistory } from 'vue-router'
import App from './App.vue'
import { routes } from './routes.js'
import '@/store'
import './index.css'
import 'ant-design-vue/dist/antd.css';

const app = createApp(App)

const router = createRouter({
  history: createWebHistory(),
  routes,
})

app.config.productionTip = false;

app.use(Antd);
app.use(router)
app.use(animejs)
app.mount('#app')