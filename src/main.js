import Vue from 'vue'
import App from './App.vue'
import router from './router'
// firebase ---
import { firestorePlugin } from 'vuefire'
import firebase from 'firebase/app'
import 'firebase/firestore'
// Bootstrap --- under codes is needed to use that...
import BootstrapVue from 'bootstrap-vue'
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'

Vue.config.productionTip = false

// Vue.use ---
Vue.use(firestorePlugin)
Vue.use(BootstrapVue)

// firebase config ---
var firebaseConfig = {
  apiKey: "AIzaSyBMbyOJesAwUZzvV8PuiW_wp0BdnoJ5Wfk",
  authDomain: "identimal5.firebaseapp.com",
  databaseURL: "https://identimal5.firebaseio.com",
  projectId: "identimal5",
  storageBucket: "identimal5.appspot.com",
  messagingSenderId: "364343127920",
  appId: "1:364343127920:web:e3e57b8fa7b05548"
};
firebase.initializeApp(firebaseConfig);
export const db = firebase.firestore()

// default ---
new Vue({
  router,
  render: h => h(App)
}).$mount('#app')
