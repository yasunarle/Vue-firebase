import Vue from 'vue'
import App from './App.vue'
import router from './router'
import { firestorePlugin } from 'vuefire'
import firebase from 'firebase/app'
import 'firebase/firestore'
// import './plugins/firestore'
Vue.config.productionTip = false

Vue.use(firestorePlugin)
var firebaseConfig = {
  apiKey: "AIzaSyBMbyOJesAwUZzvV8PuiW_wp0BdnoJ5Wfk",
  authDomain: "identimal5.firebaseapp.com",
  databaseURL: "https://identimal5.firebaseio.com",
  projectId: "identimal5",
  storageBucket: "identimal5.appspot.com",
  messagingSenderId: "364343127920",
  appId: "1:364343127920:web:e3e57b8fa7b05548"
};
// Initialize Firebase
// const settings = { timestampsInSnapshots: true };
firebase.initializeApp(firebaseConfig);
// firebase.firestore().settings(settings);
export const db = firebase.firestore()

new Vue({
  router,
  render: h => h(App)
}).$mount('#app')
