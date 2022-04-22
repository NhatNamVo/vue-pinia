import Vue from 'vue'
import App from './App.vue';
import router from './routes/routes';
import { PiniaVuePlugin, createPinia } from 'pinia';
import VueCompositionApi from "@vue/composition-api";

Vue.use(VueCompositionApi);
Vue.use(PiniaVuePlugin);


Vue.config.productionTip = false;

const pinia = createPinia();

new Vue({
  router,
  pinia,
  render: h => h(App),
}).$mount('#app')
