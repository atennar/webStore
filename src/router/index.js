import { createRouter, createWebHistory } from 'vue-router'
import Home from '../views/Home.vue'
import LoginForm from '../views/LoginForm.vue'
import IntroductionFruit from '../views/IntroductionFruit.vue'
import test from '../views/test.vue'
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
    path : '/Fruit/:id?',
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
    path : '/test/:id?',
    name : 'test',
    component : test,
    parops : true
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
