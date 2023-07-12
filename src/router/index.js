import { createRouter, createWebHistory } from 'vue-router'
import Home from '../views/Home.vue'
import LoginForm from '../views/LoginForm.vue'
import IntroductionFruit from '../views/IntroductionFruit.vue'
import Grop from '../views/GroupProducts.vue'
const routes = [
  {
    path:'/',
    name:'Home',
    component:Home
  },
  {
    path : '/Login',
    name : 'LoginFrom',
    component : LoginForm
  },
  {
    path : '/:id?/:group?',
    name : 'Fruit',
    component : IntroductionFruit,
    props : true
  },
  // {
  //   path : '/groupFilter/:groupName?',
  //   name : 'groupFilter',
  //   component : GruopFilter,
  //   props : true
  // },
  {
    path : '/Gruop/:id?',
    name : 'GrUop',
    component : Grop,
    parops : true
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
