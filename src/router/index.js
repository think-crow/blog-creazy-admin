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

import Login   from '../views/login/Login.vue'
import Houtai   from '../Houtai.vue'




import Tools   from '../views/GongJu.vue'
import GongJu from '../views/GongJu.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: Houtai,
      meta: { requiresAuth: true },
      children:[
        {
          path: '/homeview',
      name: 'homeview',
      component: HomeView,
      meta: { requiresAuth: true },
        },
      {
        path: '/bookmovies',
        name: 'bookmovies',
        component: BookMovies,
        redirect:'/bookmovies/show',
        
        meta: { requiresAuth: true },
        children:[
          {
            path: 'add',
            name: 'add',
            component: Add,
            meta: { requiresAuth: true }
          },
          {
            path: 'show',
            name: 'show',
            component: Show,
            meta: { requiresAuth: true }
          },
          {
            path: 'modify',
            name: 'modify',
            component: Modify,
            meta: { requiresAuth: true }
          },
  
        ],
      },
      {
        path: '/mingyans',
        name: 'mingyans',
        component: MingYans,
        meta: { requiresAuth: true }
      },
      {
        path: '/notepages',
        name: 'notepages',
        component: NotePages,
        redirect:'/notepages/notepagesshow',
        meta: { requiresAuth: true },
        children:[
          {
            path: 'notepagesadd',
            name: 'notepagesadd',
            component: NotePagesAdd,
            meta: { requiresAuth: true }
          },
          {
            path: 'notepagesshow',
            name: 'notepagesshow',
            component: NotePagesShow,
            meta: { requiresAuth: true }
          },
          {
            path: 'modifynotepages',
            name: 'modifynotepages',
            component: ModifyNotePages,
            meta: { requiresAuth: true }
          },
        ]
      },
      {
        path: '/poetrys',
        name: 'poetrys',
        component: Poetrys,
        redirect:'/poetrys/poetrysshow',
        meta: { requiresAuth: true },
        children:[
          {
            path: 'poetrysadd',
            name: 'poetrysadd',
            component: PoetrysAdd,
            meta: { requiresAuth: true }
          },
    
          {
            path: 'poetrysshow',
            name: 'poetrysshow',
            component: PoetrysShow,
            meta: { requiresAuth: true }
          },
          {
            path: 'modifypoetrys',
            name: 'modifypoetrys',
            component: ModifyPoetrys,
            meta: { requiresAuth: true }
          },
     
        ],
      },
      {
        path: '/topics',
        name: 'topics',
        component: Topics,
        redirect:'/topics/topicsshow',
        meta: { requiresAuth: true },
        children:[
          {
            path: 'topicsadd',
            name: 'topicsadd',
            component: TopicsAdd,
            meta: { requiresAuth: true }
          },
          {
            path: 'topicsshow',
            name: 'topicsshow',
            component: TopicsShow,
            meta: { requiresAuth: true }
          },
          {
            path: 'modifytopics',
            name: 'modifytopics',
            component: ModifyTopics,
            meta: { requiresAuth: true }
          },
     
     
        ],
      },
      {
        path: '/articles',
        name: 'articles',
        component: Articles,
        redirect:'/articles/articlesshow',
        meta: { requiresAuth: true },
        children:[
          {
            path: 'articlesadd',
            name: 'articlesadd',
            component: ArticlesAdd,
            meta: { requiresAuth: true }
          },
          {
            path: 'articlesshow',
            name: 'articlesshow',
            component: ArticlesShow,
            meta: { requiresAuth: true }
          },
          {
            path: 'modifyarticles',
            name: 'modifyarticles',
            component: ModifyArticles,
            meta: { requiresAuth: true }
          },
     
     
        ],
      },
      {
        path: '/gongju',
        name: 'gongju',
        component: GongJu,
        meta: { requiresAuth: true }
      },],

    },
   
    {
      path: '/login',
      name: 'login',
      component: Login
    },


  ]
})


// 导航守卫设置
router.beforeEach((to, from, next) => {
  // 检查路由是否需要登录权限
  if (to.meta.requiresAuth) {
    // 检查用户是否已经登录
    if (!localStorage.getItem('token')) {
      // 如果未登录，重定向到登录页面，并保存当前页面路径，登录后返回
      next({ path: '/login', query: { redirect: to.fullPath } });
    } else {
      // 如果已经登录，允许访问
      next();
    }
  } else {
    // 如果不需要登录权限，直接允许访问
    next();
    console.log('请登录');
  }
});

export default router
