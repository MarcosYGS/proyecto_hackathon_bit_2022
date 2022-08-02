import { route } from 'quasar/wrappers'
import { createRouter, createMemoryHistory, createWebHistory, createWebHashHistory } from 'vue-router'

import { useUserStore } from '../stores/user'


///script para autentificar la valides para las rutas
const requireAuth = async (to, from, next) =>{

  const userStore = useUserStore();
  userStore.loadingSession=true;
  const user = await userStore.currentUser();
  if(user){
      next()
  }else {
      next("/login")
  }
  userStore.loadingSession=false;
}



const routes = [
  {
    path: '/home',
    component: () => import('layouts/MainLayout.vue'),
    children: [
      { path: '', component: () => import('pages/IndexPage.vue') , name:"home"}
    ],beforeEnter: requireAuth,
  },

  {
    path: '/:catchAll(.*)*',
    component: () => import('pages/ErrorNotFound.vue')
  },

  { path: '/', component: () => import('pages/inicio.vue') },
  { path: '/registro', component: () => import('pages/registro.vue') },


]
const router = createRouter({
    routes,
    history: createWebHistory()
})

export default router;
