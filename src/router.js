import Vue from 'vue'
import VueRouter from 'vue-router'
import Login from './views/Login.vue'
import store from "./store/index"
import Form from './components/DataForm.vue'
Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    redirect: '/login'
  },
  {
    path: '/login',
    name: 'login',
    component: Login
  },
  {
    path: '/home',
    name: 'home',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about"  */'./views/Home.vue'),
    children:[
      {
        path:'form/:table',
        name: 'form',
        component: Form
      }
    ]
  },
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

/* router.beforeEach((to, from, next) => {
  const state = store.state
  const token = sessionStorage.getItem('token')
  if(to.path == "/login") next()
  else if(state.alreadyLogin && token) next()
  else next('/login')
}) */
export default router
