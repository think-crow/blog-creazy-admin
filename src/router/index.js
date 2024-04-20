import { createRouter, createWebHistory } from 'vue-router'
import HomeView   from '../views/HomeView.vue'

import BookMovies   from '../views/bookmovies/BookMovies.vue'
import Show   from '../views/bookmovies/Show.vue'
import Add   from '../views/bookmovies/Add.vue'
import Modify   from '../views/bookmovies/Modify.vue'

import MingYans   from '../views/MingYans.vue'

import NotePages   from '../views/notepages/NotePages.vue'
import NotePagesAdd  from '../views/notepages/NotePagesAdd.vue'
import NotePagesShow  from '../views/notepages/NotePagesShow.vue'
import ModifyNotePages  from '../views/notepages/ModifyNotePages.vue'

import Poetrys   from '../views/poetrys/Poetrys.vue'
import PoetrysAdd   from '../views/poetrys/PoetrysAdd.vue'
import PoetrysShow   from '../views/poetrys/PoetrysShow.vue'
import ModifyPoetrys   from '../views/poetrys/ModifyPoetrys.vue'

import Topics  from '../views/huati/Topics.vue'
import TopicsAdd  from '../views/huati/TopicsAdd.vue'
import TopicsShow  from '../views/huati/TopicsShow.vue'
import ModifyTopics  from '../views/huati/ModifyTopics.vue'

import Articles   from '../views/articles/Articles.vue'
import ArticlesAdd   from '../views/articles/ArticlesAdd.vue'
import ArticlesShow   from '../views/articles/ArticlesShow.vue'
import ModifyArticles   from '../views/articles/ModifyArticles.vue'



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
      component: NotePages,
      redirect:'/notepages/notepagesshow',
      children:[
        {
          path: 'notepagesadd',
          name: 'notepagesadd',
          component: NotePagesAdd
        },
        {
          path: 'notepagesshow',
          name: 'notepagesshow',
          component: NotePagesShow
        },
        {
          path: 'modifynotepages',
          name: 'modifynotepages',
          component: ModifyNotePages
        },
      ]
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
        {
          path: 'modifypoetrys',
          name: 'modifypoetrys',
          component: ModifyPoetrys
        },
   
      ],
    },
    {
      path: '/topics',
      name: 'topics',
      component: Topics,
      redirect:'/topics/topicsshow',
      children:[
        {
          path: 'topicsadd',
          name: 'topicsadd',
          component: TopicsAdd
        },
        {
          path: 'topicsshow',
          name: 'topicsshow',
          component: TopicsShow
        },
        {
          path: 'modifytopics',
          name: 'modifytopics',
          component: ModifyTopics
        },
   
   
      ],
    },
    {
      path: '/articles',
      name: 'articles',
      component: Articles,
      redirect:'/articles/articlesshow',
      children:[
        {
          path: 'articlesadd',
          name: 'articlesadd',
          component: ArticlesAdd
        },
        {
          path: 'articlesshow',
          name: 'articlesshow',
          component: ArticlesShow
        },
        {
          path: 'modifyarticles',
          name: 'modifyarticles',
          component: ModifyArticles
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
