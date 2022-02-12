import { createRouter, createWebHistory } from 'vue-router'
import Home from '../views/Home.vue'

const routes = [
  {
    path: '/',
    name: 'home',
    component: Home,
    props: { currentColorIs: 'none' },
  },
  {
    path: '/red',
    name: 'red',
    component: Home,
    props: { currentColorIs: 'red', time: 10000 },
  },
  {
    path: '/yellow',
    name: 'yellow',
    component: Home,
    props: { currentColorIs: 'yellow', time: 3000 },
  },
  {
    path: '/green',
    name: 'green',
    component: Home,
    props: { currentColorIs: 'green', time: 15000 },
  },
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

router.beforeEach((to, from, next) => {
  if (to.name === 'home') {
    router.push('red');
  } else {
    next();
  }
});

export default router
