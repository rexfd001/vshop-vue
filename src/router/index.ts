import { createRouter, createWebHistory } from 'vue-router'
import { useAppStore } from '../stores/app'
import routes from './routes'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: routes
})


router.beforeEach((to, from, next) => {
  const appStore = useAppStore();
  // instead of having to check every route record with
  // to.matched.some(record => record.meta.requiresAuth)
  if (to.meta.requiresAuth && !appStore.isLogin) {
    // this route requires auth, check if logged in
    // if not, redirect to login page.
    next({
      path: '/login',
      // save the location we were at to come back later
      query: { redirect: to.fullPath },
    });
  } else {
    next();
  }
});

export default router
