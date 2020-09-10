import Vue from "vue";
import App from "./App.vue";
import router from "./router";
// firebase ---
import { firestorePlugin } from "vuefire";
import firebase from "firebase/app";
import "firebase/firestore";
// Bootstrap --- under codes is needed to use that...
import BootstrapVue from "bootstrap-vue";
import "bootstrap/dist/css/bootstrap.css";
import "bootstrap-vue/dist/bootstrap-vue.css";
// tailwind
import "./assets/css/tailwind.css";

Vue.config.productionTip = false;

// Vue.use ---
Vue.use(firestorePlugin);
Vue.use(BootstrapVue);

// Your web app's Firebase configuration
var firebaseConfig = {
  apiKey: "AIzaSyAeyX-XeQTnO38l3oScZeSqIdJsOUzvrBY",
  authDomain: "ex-vue-be4d7.firebaseapp.com",
  databaseURL: "https://ex-vue-be4d7.firebaseio.com",
  projectId: "ex-vue-be4d7",
  storageBucket: "ex-vue-be4d7.appspot.com",
  messagingSenderId: "118975470",
  appId: "1:118975470:web:73184711670534bb0bfcff",
  measurementId: "G-0Q6W1F9KW7",
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);
export const db = firebase.firestore();

// default ---
new Vue({
  router,
  render: (h) => h(App),
}).$mount("#app");
