import { createApp } from 'vue'
import { createPinia } from 'pinia'
import { authentication } from './plugins/authentications'
import App from './App.vue'
import router from './router'

import "bootstrap/dist/css/bootstrap.css"
import "bootstrap"
import 'material-icons/iconfont/material-icons.css'

const app = createApp(App)

app.use(createPinia())

authentication.install().then(() =>{
    app.use(router)
    app.mount('#app')
})



