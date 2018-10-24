import Vue from 'vue'
import App from './App.vue'
import router from './router'

// using vuetify - DevLee
import Vuetify from 'vuetify'
Vue.use(Vuetify)
import 'vuetify/dist/vuetify.min.css' // Ensure you are using css-loader
//


Vue.config.productionTip = false

new Vue({
  router,
  render: h => h(App)
}).$mount('#app')
