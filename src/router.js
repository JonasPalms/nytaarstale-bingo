import Bingo from './components/Bingo.vue'
import Auth from './components/Auth.vue'
import Account from './components/Account.vue'
import { createWebHistory, createRouter } from 'vue-router'
import { supabase } from './supabase'
import Home from './components/Home.vue'

const routes = [
  { path: '/', name: 'Home', component: Home },
  { path: '/login', name: 'Login', component: Auth },
  { path: '/profil', name: 'Account', component: Account },
  { path: '/:name', name: 'Bingo', component: Bingo, props: true },
]

const router = createRouter({
  history: createWebHistory('/nytaarstale-bingo/'),
  routes,
})

// router.beforeEach(async (to, from) => {
//   const {
//     data: { session },
//   } = await supabase.auth.getSession()

//   if (
//     // make sure the user is authenticated
//     !session &&
//     // ❗️ Avoid an infinite redirect
//     to.name !== 'Login'
//   ) {
//     // redirect the user to the login page
//     return { name: 'Login' }
//   }
// })

export default router
