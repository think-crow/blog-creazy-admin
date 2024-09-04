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
            name: "topics",
          },
        },
        { default: () => "话题列表" }
      ),
    key: "go-topics",
    icon: renderIcon(HomeIcon),
  },
  {
    label: () =>
      h(
        RouterLink,
        {
          to: {
            path: "/topics/topicsadd",
          },
        },
        { default: () => "添加" }
      ),
    key: "go-topics-topicsadd",
    icon: renderIcon(WorkIcon),
  },
];
</script>

<template>
  <n-config-provider :theme="darkTheme">
    <div class="containe">
      <div class="aside">
        <n-menu :options="menuOptions" mode="horizontal" />
      </div>
      <div class="main-content">
        <div class="mycontent"><RouterView></RouterView></div>
      </div>
    </div>
  </n-config-provider>
</template>

<style scoped>
.containe {
  width: 100%;
  height: 100%;

  background-color: #101014;
  color: #d8d8d8;
}

.aside {
  border: 1px solid rgb(107, 96, 96);

  padding: 0.4em;

  /* margin-left: 1em; */
}

.n-menu {
  margin: 0 auto;
  /* border: 1px solid rgb(107, 96, 96); */
  padding: 0 auto;
  border-radius: 0.5em;
}

::v-deep(.n-menu-item-content) {
  border-right: 1px solid rgb(107, 96, 96);
}


@media (max-width: 768px) {
  .aside {
  border-right: none;
  /* border-left: none; */
  border-top-left-radius: .5em;

  padding: 0em;

  /* margin-left: 1em; */
}
}

.mycontent {
  min-height: 896px;
}
</style>
