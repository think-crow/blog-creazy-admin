<script setup>
import { TextSharp } from "@vicons/ionicons5";

import { ref, watchEffect } from "vue";
import axios from "axios";

const myformData = ref({
  title: "",
  content: "",
});

const submitForm = async () => {
  const response = await axios
    .post("http://127.0.0.1:3000/api/notepapers", myformData.value)
    .then((res) => {
      if (res.status == 200) alert("已提交成功！");
    })
    .catch((err) => {
      console.error(err);
      alert("提交失败！");
    });
};
</script>

<template>
  <div>
    <form>
      <h1 style="font-weight: 600">话题->添加:</h1>
      <div class="container">
        <div class="tianjia">
          <h2 class="myh2">个人便笺-Come On！</h2>
          <n-input
            v-model:value="myformData.content"
            type="textarea"
            placeholder="注释"
            name="content"
            maxlength="3000"
            show-count
            clearable
            minlength="10"
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
