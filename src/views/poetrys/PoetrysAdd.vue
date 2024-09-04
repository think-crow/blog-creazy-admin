<script setup>
import { TextSharp } from "@vicons/ionicons5";

import { ref, watchEffect } from "vue";
import axios from "axios";
import router from '@/router'; 

const myformData = ref({
  category: "",
  title: "",
  author: "",
  content: "",
  annotation: "",
});



const submitForm = async () => {
  const response = await axios
    .post("/api/poetry", myformData.value)
    .then((res) => {
      alert("已提交成功！");
    })
    .catch((err) => {
      // console.error(err);
      alert("提交失败！");
    });
};
</script>

<template>
  <div>
    <form>
      <h1>诗歌-添加:</h1>
      <div class="container">
        <div class="tianjia">
          <!-- <h2 class="myh2">选择</h2> -->
          <n-radio-group v-model:value="myformData.category" name="radiogroup1">
            <n-space>
              <n-radio value="poetrys_1">诗集 </n-radio>
              <n-radio value="songs_2">歌曲</n-radio>
            </n-space>
          </n-radio-group>
          <h2 class="myh2">标题</h2>
          <n-input
            v-model:value="myformData.title"
            type="text"
            placeholder="标题"
          />
          <h2 class="myh2">--作者</h2>
          <n-input
            v-model:value="myformData.author"
            type="text"
            placeholder="作者"
          />

          <h2 class="myh2">诗歌主体文本：</h2>
          <n-input
            v-model:value="myformData.content"
            type="textarea"
            placeholder="诗歌主体文本"
            name="content"
            maxlength="3000"
            show-count
            clearable
            minlength="10"
            :autosize="{
        minRows: 12,
      }"
          />

          <h2 class="myh2">注释：</h2>
          <n-input
            v-model:value="myformData.annotation"
            type="textarea"
            placeholder="注释"
            name="annotation"
            maxlength="3000"
            show-count
            clearable
            minlength="10"
            :autosize="{
        minRows: 6,
      }"
          />

          <n-button @click="submitForm">点击添加</n-button>
        </div>
      </div>
    </form>
  </div>
</template>

<style scoped>
.container {
  width: 100;
  /* border: 1px solid red; */
  padding: 0 1em;
}

.n-button {
  margin: 1em auto;
  float: right;
}

.myh2 {
  margin-bottom: 0;
}
</style>
