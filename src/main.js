import { createApp } from 'vue'
import App from './App.vue'
import router from './router'

// Import global styles
import './styles/variables.css'
import './styles/utilities.css'
import './styles/components.css'
import './styles/responsive.css'

const app = createApp(App)

app.use(router)

app.mount('#app')
