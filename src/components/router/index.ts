import { createRouter, createWebHistory } from 'vue-router'
import HomeView from "../../view/HomeView.vue"

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: "/",
      name: "home",
      component: HomeView
    }
  ],

  // Atur perilaku smooth scroll untuk navigasi #home, #katalog, #fitur
  scrollBehavior(to, from, savedPosition) {
    if (to.hash) {
      return {
        el: to.hash,
        behavior: "smooth",
      }
    }
    return { top: 0 }
  }
})

export default router