import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '@/views/HomeView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    { path: '/', name: 'home', component: HomeView },
    { path: '/about', name: 'about', component: () => import('@/views/AboutView.vue') },
    { path: '/ethics', name: 'ethics', component: () => import('@/views/EthicsView.vue') },
    { path: '/journeys', name: 'journeys', component: () => import('@/views/JourneysView.vue') },
    { path: '/what-we-do', name: 'whatwedo', component: () => import('@/views/WhatWeDoView.vue') },
    { path: '/support', name: 'support', component: () => import('@/views/SupportView.vue') },
  ],
})

export default router
