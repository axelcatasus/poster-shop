import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import About from '../views/About.vue'
import ProductView from '../views/ProductView.vue'
import MenuBar from '../components/MenuBar.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/about',
    name: 'About',
    component: About
  },
  {
    path: '/product/:id',
    name: 'ProductView',
    component: ProductView
  },
  {
    path: '/MenuBar',
    name: 'MenuBar',
    component: MenuBar
  }
]

const router = new VueRouter({
  routes
})

export default router