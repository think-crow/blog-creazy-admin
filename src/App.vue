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
            name: "home",
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
        { default: () => "工具" }
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
</script>

<template>
  <n-config-provider :theme="darkTheme">
    <nav>后台管理系统</nav>
    <div class="containe">
      <div class="aside">
        <n-menu :options="menuOptions" />
      </div>
      <div class="main-content">
        <!-- <div class="header">头部</div> -->
        <div class="mycontent"><RouterView></RouterView></div>
        <div class="footer">页脚</div>
      </div>
    </div>
  </n-config-provider>
</template>

<style scoped>
.containe {
  display: flex;
  width: 100%;
  height: 100%;
  /* border: 1px solid red; */
  background-color: #101014;
  color: #d8d8d8;
}

.aside {
  flex-basis: 15%;
  border-right: 1px solid rgb(178, 170, 170);
  color: black;
  padding-top: 1em;
}

.main-content {
  flex-basis: 85%;
  /* background-color: #d8d8d8; */
}

.mycontent {
  min-height: 896px;
}

nav {
  padding: 0.5em;
  background-color: #101014;
  border-bottom: 1px solid rgb(116, 110, 110);
  color: #d8d8d8;
  text-align: center;
  font-size: calc(0.6em + 1vw);
}
</style>
