<script setup>
import { TextSharp } from "@vicons/ionicons5";
import WangEditor from "/src/components/WangEditor.vue";
import { ref } from "vue";

let data_Html = ref();
function test() {
  console.log(data_Html.value.valueHtml);
}

// axios数据提交
const postDataInput = ref("");

const postData = async () => {
  const data = { jianyi: postDataInput.value };
  const response = await axios
    .post("http://127.0.0.1:3000/api/book_movies", data)
    .then((res) => {
      console.log(postDataInput.value);
      alert("已提交成功！");
      postDataInput.value = "";
    })
    .catch((err) => {
      // console.error(err);
      alert("出现错误，麻烦小主留言告知！");
    });
};
</script>

<template>
  <h1>书籍/电影-添加:</h1>
  <div class="container">
    <div class="tianjia">
      <h2>标题</h2>
      <n-input v-model:value="value" type="text" placeholder="标题" />
      <h2>书籍或电影描述：</h2>
      <n-input
        v-model:value="postDataInput"
        type="textarea"
        placeholder="电影或书籍简介"
        name="jianyi"
        maxlength="3000"
        show-count
        clearable
        minlength="10"
      />

      <h2>描述：</h2>
      <WangEditor ref="data_Html" />

      <n-button @click="test">点击添加</n-button>
    </div>
  </div>
</template>

<style scoped>
.container {
  width: 100;
  /* border: 1px solid red; */
  padding-left: 2em;
}

.n-button {
  margin: 1em auto;
  float: right;
}
</style>
