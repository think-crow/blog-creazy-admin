import { createRouter, createWebHistory } from 'vue-router'
import HomeView   from '../views/HomeView.vue'

import BookMovies   from '../views/bookmovies/BookMovies.vue'
import Show   from '../views/bookmovies/Show.vue'
import Add   from '../views/bookmovies/Add.vue'
import Modify   from '../views/bookmovies/Modify.vue'



import MingYans   from '../views/MingYans.vue'
import NotePages   from '../views/notepages/NotePages.vue'

import Poetrys   from '../views/poetrys/Poetrys.vue'
import PoetrysAdd   from '../views/poetrys/PoetrysAdd.vue'
import PoetrysShow   from '../views/poetrys/PoetrysShow.vue'

import HuaTi  from '../views/huati/HuaTi.vue'
import HuatiAdd  from '../views/huati/HuatiAdd.vue'
import HuatiShow  from '../views/huati/HuatiShow.vue'

import Tools   from '../views/GongJu.vue'
import GongJu from '../views/GongJu.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView
    },
    {
      path: '/bookmovies',
      name: 'bookmovies',
      component: BookMovies,
      redirect:'/bookmovies/show',
      children:[
        {
          path: 'add',
          name: 'add',
          component: Add
        },
        {
          path: 'show',
          name: 'show',
          component: Show
        },
        {
          path: 'modify',
          name: 'modify',
          component: Modify
        },

      ],
    },
    {
      path: '/mingyans',
      name: 'mingyans',
      component: MingYans
    },
    {
      path: '/notepages',
      name: 'notepages',
      component: NotePages
    },
    {
      path: '/poetrys',
      name: 'poetrys',
      component: Poetrys,
      redirect:'/poetrys/poetrysshow',
      children:[
        {
          path: 'poetrysadd',
          name: 'poetrysadd',
          component: PoetrysAdd
        },
        {
          path: 'poetrysshow',
          name: 'poetrysshow',
          component: PoetrysShow
        },
   
      ],
    },
    {
      path: '/huati',
      name: 'huati',
      component: HuaTi,
      redirect:'/huati/huatishow',
      children:[
        {
          path: 'huatiadd',
          name: 'huatiadd',
          component: HuatiAdd
        },
        {
          path: 'huatishow',
          name: 'huatishow',
          component: HuatiShow
        },
   
      ],
    },
    {
      path: '/gongju',
      name: 'gongju',
      component: GongJu
    },

  ]
})

export default router
