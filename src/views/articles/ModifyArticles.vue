<script setup>
import { TextSharp } from "@vicons/ionicons5";
import WangEditor from "/src/components/WangEditor.vue";
import { ref, watchEffect } from "vue";
import axios from "axios";
import { useRoute } from "vue-router";

const data_Html = ref("");
const route = useRoute();
const router = useRoute();
const data = ref([]);

// 存储请求回来的富文本内容

const getData = async () => {
  const response = await axios
    .get(`/api/article_data?_id=${route.query._id}`)
    .then((res) => {
      data.value = res.data.result;
      data_Html.value.valueHtml = data.value.content;
    })
    .catch((err) => {
      console.error(err);
      alert("get 请求失败，请查看控制台错误信息！");
    });
};

// 提交
const submitForm = async () => {
  if (!confirm("请确认更新吗！")) return;
  data.value.content = data_Html.value.valueHtml;
  const response = await axios
    .patch(
      `/api/article_updata_one?_id=${route.query._id}`,
      data.value
    )
    .then((res) => {
      alert("已提交成功l ！");
    })
    .catch((err) => {
      console.error(err);
      alert("提交失败！");
    });
};

onMounted(() => {
  getData();
});
</script>

<template>
  <div>
    <form>
      <h1>文章-修改:</h1>
      <div class="container">
        <div class="tianjia">
          <h2 class="myh2">标题</h2>
          <n-input v-model:value="data.title" type="text" placeholder="标题" />
          <h2 class="myh2">--作者</h2>
          <n-input v-model:value="data.author" type="text" placeholder="作者" />

          <h2 class="myh2">诗歌主体文本：</h2>
          <WangEditor ref="data_Html" />
          <n-button @click="submitForm">点击修改</n-button>
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
