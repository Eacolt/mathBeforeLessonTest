// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue';
import App from './App';
import router from './router';
import store from './store';
import Preload from './preload';
import 'babel-polyfill'
const VueAwesomeSwiper = require('vue-awesome-swiper');
Vue.config.productionTip = false;
Vue.use(VueAwesomeSwiper);
new Vue({
  el: '#app',
  store,
  router,
  template: '<App/>',
  components: {
    App
  },
  mounted() {
    let preload = new Preload();
    //初始化Preload
    preload.initAdaption();

  }
})
