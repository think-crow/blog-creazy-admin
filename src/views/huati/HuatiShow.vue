<script setup>
import { Icon } from "@vicons/utils";
import { IosSearch } from "@vicons/ionicons4";
// 输入框
const value = ref(null);
</script>

<template>
  <div>
    <!-- <h1>展示</h1> -->
    <div class="fenlei">
      <n-input v-model:value="value" type="text" placeholder="搜索" />
      <n-button
        ><Icon size="24"><IosSearch /></Icon
      ></n-button>
    </div>

    <div class="bookmovies">
      <n-card>
        <p>
          （一）乌克兰危机升级-->乌克兰危机升级-->乌克兰危机升级-->乌克兰危机升级-->乌克兰危机升级-->乌克兰危机升级-->
        </p>
        <div class="button">
          <button>修改</button><button>删除</button>
        </div></n-card
      >
    </div>
  </div>
</template>

<style scoped>
.n-card {
  max-width: 300px;
  margin-left: calc(0.1em + 1vw);
  margin-top: 1em;
  position: relative;
}

.n-card p {
  margin-bottom: 1.8em;
}
.button {
  position: absolute;
  bottom: 0.8em;
  right: 1em;
}
button {
  margin-left: 0.5em;
}

.fenlei {
  /* color: orange; */
  margin: 0.5em 0.5em 0 0.5em;

  display: flex;
  /* width: 50%; */
  /* border: 1px solid red; */
  justify-content: end;
}

.n-input {
  width: 40%;
}

.bookmovies {
  display: flex;
  flex-wrap: wrap;
}
</style>
