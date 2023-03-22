import Vue from 'vue'
import VueRouter from 'vue-router'
import Page1 from '@/views/Page1'
import Page2 from '@/views/Page2'
import Page3 from '@/views/Page3'
import PageNoteFound from '@/views/PageNoteFound'


Vue.use(VueRouter)

const routes = [
  {
    path: '*',
    name: 'PageNoteFound',
    component: PageNoteFound
  },
  {
    path: '/',
    redirect: '/page/1'
  },
  {
    path: '/page/1',
    name: 'Page1',
    component: Page1,
    meta: {
      id: 1
    }
  },
  {
    path: '/page/2',
    name: 'Page2',
    component: Page2,
    meta: {
      id: 2
    }
  },
  {
    path: '/page/3',
    name: 'Page3',
    component: Page3,
    meta: {
      id: 3
    }
  }
  

]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
