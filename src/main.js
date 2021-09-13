import Vue from 'vue'
import App from './App.vue'
// import 'lib-flexible/flexible'
import VueAwesomeSwiper from 'vue-awesome-swiper'
import 'swiper/swiper-bundle.min.css'

Vue.use(VueAwesomeSwiper)
Vue.config.productionTip = false

new Vue({
    render: h => h(App),
}).$mount('#app')