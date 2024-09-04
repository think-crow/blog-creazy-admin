<script setup>
import { darkTheme } from "naive-ui";

import { RouterLink, RouterView } from "vue-router";
import { h } from "vue";
import { NIcon } from "naive-ui";





// 富文本

import {
  LaptopOutline as WorkIcon,
  LogOutOutline as HomeIcon,
} from "@vicons/ionicons5";

function renderIcon(icon) {
  return () => h(NIcon, null, { default: () => h(icon) });
}

const menuOptions = [
  {
    label: () =>
      h(
        RouterLink,
        {
          to: {
            name: "homeview",
          },
        },
        { default: () => "建议" }
      ),
    key: "go-back-home",
    icon: renderIcon(HomeIcon),
  },
  {
    label: () =>
      h(
        RouterLink,
        {
          to: {
            path: "/bookmovies",
          },
        },
        { default: () => "书影" }
      ),
    key: "go-to-bookmovies",
    icon: renderIcon(WorkIcon),
  },
  {
    label: () =>
      h(
        RouterLink,
        {
          to: {
            path: "/poetrys",
          },
        },
        { default: () => "诗歌" }
      ),
    key: "go-to-poetrys",
    icon: renderIcon(WorkIcon),
  },
  {
    label: () =>
      h(
        RouterLink,
        {
          to: {
            path: "/topics",
          },
        },
        { default: () => "话题" }
      ),
    key: "go-to-huati",
    icon: renderIcon(WorkIcon),
  },
  {
    label: () =>
      h(
        RouterLink,
        {
          to: {
            path: "/notepages",
          },
        },
        { default: () => "便笺" }
      ),
    key: "go-to-notepages",
    icon: renderIcon(WorkIcon),
  },
  {
    label: () =>
      h(
        RouterLink,
        {
          to: {
            path: "/articles",
          },
        },
        { default: () => "文章" }
      ),
    key: "go-to-articles",
    icon: renderIcon(WorkIcon),
  },
  {
    label: () =>
      h(
        RouterLink,
        {
          to: {
            path: "/gongju",
          },
        },
        { default: () => "访客记录" }
      ),
    key: "go-to-gongju",
    icon: renderIcon(WorkIcon),
  },

  {
    label: () =>
      h(
        RouterLink,
        {
          to: {
            path: "/mingyans",
          },
        },
        { default: () => "名言" }
      ),
    key: "go-to-mingyan",
    icon: renderIcon(WorkIcon),
  },
];

import { useRouter } from 'vue-router';

const router = useRouter();


const isActive = (routeName) => {
  // 使用当前路由对象来判断是否匹配
  // console.log(router.currentRoute.value.path, routeName)
  return router.currentRoute.value.path === routeName;
};


const logout = () => {
  // 清除本地存储中的登录状态（示例中使用 token 作为登录状态的标识）
  localStorage.removeItem('token');

  // 在退出后重定向到登录页面
  router.push({ path: '/login' });
};
</script>

<template>
  <n-config-provider :theme="darkTheme">
    <nav>后台管理系统  <button @click="logout">退出</button></nav>

    <div class="containe">
      <div class="aside">
        <!-- <n-menu :options="menuOptions" /> -->
        <router-link :to="{ name: 'homeview' }" :class="{ 'active-link': isActive('/homeview') }">建议</router-link>
        <router-link :to="{ path: '/bookmovies' }" :class="{ 'active-link': isActive('/bookmovies/show') }">书影</router-link>
        <router-link :to="{ path: '/poetrys' }" :class="{ 'active-link': isActive('/poetrys/poetrysshow') }">诗歌</router-link>
        <router-link :to="{ path: '/topics' }" :class="{ 'active-link': isActive('/topics/topicsshow') }">话题</router-link>
        <router-link :to="{ path: '/notepages' }" :class="{ 'active-link': isActive('/notepages/notepagesshow') }">便笺</router-link>
        <router-link :to="{ path: '/articles' }" :class="{ 'active-link': isActive('/articles/articlesshow') }">文章</router-link>
        <router-link :to="{ path: '/gongju' }" :class="{ 'active-link': isActive('/gongju') }">访客记录</router-link>
        <router-link :to="{ path: '/mingyans' }" :class="{ 'active-link': isActive('/mingyans') }">博客留言</router-link>
      </div>
      <div class="main-content">
        <!-- <div class="header">头部</div> -->
        <div class="mycontent"><RouterView></RouterView></div>
      
      </div>
    </div>
  </n-config-provider>
</template>
<style scoped>
.containe {
  display: flex;
  flex-direction: column; /* 小屏幕下以列方式显示 */
  width: 100%;
  height: 100%;
  background-color: #101014;
  color: #d8d8d8;
}
button{
  /* float: right; */
}


.main-content {

  flex-basis: 80%; /* 设置侧边菜单宽度 */
}

.aside{
  /* border: 1px solid red; */

  text-align: center;
  flex-basis: 0%; /* 设置侧边菜单宽度 */
  padding: 1em 0;
}

.aside a {
/* display: block; */
 
  font-size:small;
  text-decoration: none;
  color: rgba(240, 248, 255, 0.925); /* 默认链接颜色 */
  border-bottom: 1px solid black; /* 分隔线 */
  margin: .5em .2em;
  padding: 0.5em; /* 增加内边距 */
}

/* 活动链接样式 */
.aside a.active-link {
  border-radius: 5px; /* 活动链接圆角 */
 
  font-size: small;
  color: #ffffff; /* 活动链接颜色 */
  background-color: #2c2c2c; /* 活动链接背景颜色 */
  border-bottom: 1px solid red; /* 分隔线 */
  margin: .5em .2em;
  padding: 0.5em; /* 增加内边距 */
}

/* 悬停状态 */
.aside a:hover {
  color: #c72828; /* 悬停链接颜色 */
  background-color: #333; /* 悬停背景颜色 */
  border-radius: 5px; /* 悬停状态圆角 */
}

.mycontent {
  min-height: 896px; /* 根据需要调整 */

}

nav {
  padding: 0.5em;
  background-color: #101014;
  border-bottom: 1px solid rgb(116, 110, 110);
  color: #d8d8d8;
  text-align: center;
  font-size: calc(1em + 1vw);
}

@media (min-width: 768px) {
  .containe {
    flex-direction: row; /* 大屏幕上切换为行布局 */
  }

  .aside {
    display: block; /* 显示侧边菜单 */
    flex-basis: 10%; /* 设置侧边菜单宽度 */
    border-right: 1px solid rgb(178, 170, 170);
    color: black;
    padding-top: 1em;
  }
  .aside a {
display: block;

  font-size: large;
  text-decoration: none;
  color: rgba(240, 248, 255, 0.89); /* 默认链接颜色 */
  border-bottom: 1px solid black; /* 分隔线 */
  margin: .5em .2em;
  padding: 0.5em; /* 增加内边距 */
}

  .main-content {
    flex-basis: 90%; /* 设置主内容区宽度 */
  }

  .aside a.active-link {
  border-radius: 5px; /* 活动链接圆角 */
 
  font-size: large;
  color: #ffffff; /* 活动链接颜色 */
  background-color: #2c2c2c; /* 活动链接背景颜色 */
  border-bottom: 1px solid red; /* 分隔线 */
  margin: .5em .2em;
  padding: 0.5em; /* 增加内边距 */
}
}



@media (max-width: 767px) {



}

/* 调整菜单链接样式 */

</style>
