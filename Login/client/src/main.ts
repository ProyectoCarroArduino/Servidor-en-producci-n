import { createApp } from 'vue'
import { createPinia } from 'pinia'
import { authentication } from './plugins/authentications'
import App from './App.vue'
import router from './router'

import "bootstrap/dist/css/bootstrap.css"
import "bootstrap"
import 'material-icons/iconfont/material-icons.css'

// Tokens de diseno compartidos (solo variables CSS sobre :root)
import './assets/theme.css'
import './assets/guide-sidebar.css'
// Botones de los ejemplos y ejercicios (clases ec-btn, usan los tokens de theme.css)
import './assets/ejercicios.css'

const app = createApp(App)

app.use(createPinia())

authentication.install().then(() =>{
    app.use(router)
    app.mount('#app')
})



