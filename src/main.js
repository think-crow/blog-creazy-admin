

import { createApp } from 'vue'
import { createPinia } from 'pinia'

import App from './App.vue'
import router from './router'

const app = createApp(App)

const token = localStorage.getItem('token');
if (token) {
  // 在实际应用中，你可能需要验证 token 的有效性，这里简单示例为存在即为已登录
  app.config.globalProperties.$isAuthenticated = true;
} else {
  app.config.globalProperties.$isAuthenticated = false;
}


app.use(createPinia())
app.use(router)

app.mount('#app')
