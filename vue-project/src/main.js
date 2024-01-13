import './assets/main.css'

import { createApp } from 'vue'
import App from './App.vue';
import router from './router';

//if(localStorage.token){
  //  setAuthHeader(localStorage.token) ;
//}else{
 //  setAuthHeader(false);
//}
const app = createApp(App)

app.use(router)

app.mount('#app')


