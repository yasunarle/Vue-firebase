import Vue from 'vue'
import Router from 'vue-router'
// Views
import Home from './views/Home.vue'
import firestore from './views/Firestore.vue'
import Shunta from './views/Shunta.vue'
import Stripe from './views/Stripe.vue'
import Shun from './views/Shun.vue'
import Storage from './views/Storage.vue'
import Gio from './views/Gio.vue'

// Componets
import Signup from '@/components/Signup'
import Signin from '@/components/Signin'

// import firebase from 'firebase'

Vue.use(Router)

export default new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [
    {
      path: '*',
      redirect: 'signin'
    },    
    {
      path: '/',
      name: 'home',
      component: Home,
      meta: { requiresAuth: true }
    },
    {
      path: '/stripe',
      name: 'stripe',
      component: Stripe,
    },    
    {
      path: '/database',
      name: 'database',
      // route level code-splitting
      // this generates a separate chunk (about.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import(/* webpackChunkName: "about" */ './views/Database.vue')
    },
    {
      path: '/signup',
      name: 'Signup',
      component: Signup
    },
    {
      path: '/signin',
      name: 'Signin',
      component: Signin
    },
    {
      path: '/firestore',
      name: 'Firestore',
      component: firestore
    },
    {
      path: '/shunta',
      name: 'Shunta',
      component: Shunta
    },    
    {
      path: '/shun',
      name: 'Shun',
      component: Shun
    },    
    {
      path: '/storage',
      name: 'Storage',
      component: Storage
    },        
    {
      path: '/gio',
      name: 'Gio',
      component: Gio
    },            

  ]
})


// Router.beforeEach((to, from, next) => {
//   const requiresAuth = to.matched.some(record => record.meta.requiresAuth)
//   if (requiresAuth) {
//     // このルートはログインされているかどうか認証が必要です。
//     // もしされていないならば、ログインページにリダイレクトします。
//     firebase.auth().onAuthStateChanged(function (user) {
//       var user = firebase.auth().currentUser;
//       if (user) {
//         next()
//       } else {
//         next({
//           path: '/signin',
//           query: { redirect: to.fullPath }
//         })
//       }
//     })
//   } else {
//     next() // next() を常に呼び出すようにしてください!
//   }
// })