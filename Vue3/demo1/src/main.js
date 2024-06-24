import { createApp } from 'vue'
import App from './App.vue'

// createApp(App).mount('#app')
// 创建实例
const app = createApp(App)
console.log(app);
// 挂载,返回根组件的实例
const vm = app.mount('#app')
console.log(vm);
