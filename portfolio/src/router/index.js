import { createRouter, createWebHistory } from 'vue-router'
const routes = [
  {
    path: '/about',
    name: 'Home',
    component: () => import(/* webpackChunkName: "Home" */ '../views/Home.vue')

  },
  {
    path: '/resume',
    name: 'Resume',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "Resume" */ '../views/Resume.vue')
  }
  ,
  {
    path: '/portfolio',
    name: 'Portfolio',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "Portfolio" */ '../views/Portfolio.vue')
  },
  {
    path: '/contact',
    name: 'Contact',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "Contact" */ '../views/Contact.vue')
  },
  {
    path: '/tabs',
    name: 'tabs',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "Contact" */ '../views/Tabs.vue')
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
