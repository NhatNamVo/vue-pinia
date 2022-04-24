import Vue from 'vue'
import App from './App.vue';
import router from './routes/routes';
import unicon from './icons/index';
import Vuelidate from 'vuelidate'
import { PiniaVuePlugin, createPinia } from 'pinia';
import VueCompositionApi from "@vue/composition-api";
import ElementUI from 'element-ui';
import Unicon from "vue-unicons/dist/vue-unicons-vue2.umd";
import firebase from 'firebase/compat/app'
import firebaseConfig from './configs/firebase';





//templates
import './templates/template.scss';
//style element ui
import 'element-ui/lib/theme-chalk/index.css';

Unicon.add(unicon);
console.log(firebase);
firebase.initializeApp(firebaseConfig)

Vue.use(VueCompositionApi);
Vue.use(PiniaVuePlugin);
Vue.use(ElementUI);
Vue.use(Unicon);
Vue.use(Vuelidate);


Vue.config.productionTip = false;

const pinia = createPinia();

new Vue({
  router,
  pinia,
  unicon,
  render: h => h(App),
}).$mount('#app')
