import { route } from 'quasar/wrappers'
import { createRouter, createMemoryHistory, createWebHistory, createWebHashHistory } from 'vue-router'





const routes = [
  {
    path: '/home',
    component: () => import('layouts/MainLayout.vue'),
    children: [
      { path: '', component: () => import('pages/IndexPage.vue') , name:"home"}
    ],
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
