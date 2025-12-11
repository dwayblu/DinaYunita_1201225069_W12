import { createRouter, createWebHistory } from 'vue-router'

import Todo from '@/views/Todo.vue'
import Completed from '@/views/Completed.vue'
import Favorites from '@/views/Favorites.vue' // kalau ada

const router = createRouter({
  history: createWebHistory(),
  routes: [
    { path: '/todo', component: Todo },
    { path: '/completed', component: Completed },
    { path: '/favorites', component: Favorites },
    { path: '/', redirect: '/todo' }
  ]
})

export default router
