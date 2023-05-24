import { createRouter, createWebHistory } from 'vue-router'
import Login from '@/views/login/index.vue'
import Layout from '@/views/Layout/index.vue'
import Home from '@/views/home/index.vue'
import Category from '@/views/category/index.vue'
import subCategory from '@/views/subCategory/index.vue'
import detail from '@/views/detail/index.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {path:'/',component:Layout,children:[
      {path:'',component:Home},
      {path:'category/:id',component:Category},
      {path:'category/sub/:id',component:subCategory},
      {path:'detail/:id',component:detail}
    ]},
    {path:'/login',component:Login}
  ],
  //路由行为
  scrollBehavior(){
    return {
      top:0
    }
  }
})

export default router
