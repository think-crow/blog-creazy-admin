<script setup>
import { TextSharp } from "@vicons/ionicons5";
import WangEditor from "/src/components/WangEditor.vue";
import { ref, watchEffect, onMounted  } from "vue";
import axios from "axios";
import router from '@/router'; 

const titleInputRef = ref(null);

const data_Html = ref("<h1>你好</h1>");
const myformData = ref({
  category: "",
  title: "",
  author: "任豪爽",
  content: "",
});

const submitForm = async () => {
  myformData.value.content = data_Html.value.valueHtml;
  const response = await axios
    .post("/api/article", myformData.value)
    .then((res) => {
      alert("已提交成功！");
    })
    .catch((err) => {
      // console.error(err);
      alert("提交失败！");
    });
};

onMounted(() => {
  // 组件挂载时将焦点设置在标题输入框上
  titleInputRef.value.focus();
});
</script>

<template>
  <div>
    <form>
      <h1>文章-添加:</h1>
      <div class="container">
        <div class="tianjia">
          <!-- <h2 class="myh2">选择</h2> -->
          <n-radio-group v-model:value="myformData.category" name="radiogroup1">
            <n-space>
              <n-radio value="blog_1">日志 </n-radio>
              <n-radio value="reference_2">技术</n-radio>
              <n-radio value="goodarticles_3">优选文章</n-radio>
            </n-space>
          </n-radio-group>
          <h2 class="myh2">标题</h2>
          <n-input
            v-model:value="myformData.title"
            type="text"
            placeholder="标题"
              ref="titleInputRef"
          />
          <h2 class="myh2">--作者</h2>
          <n-input
            v-model:value="myformData.author"
            type="text"
            placeholder="作者"
          />

          <h2 class="myh2">文章主体内容：</h2>
          <WangEditor ref="data_Html" />
          <!-- <h2 class="myh2">注释：</h2>
          <n-input
            v-model:value="myformData.annotation"
            type="textarea"
            placeholder="注释"
            name="annotation"
            maxlength="3000"
            show-count
            clearable
            minlength="10"
          /> -->

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
