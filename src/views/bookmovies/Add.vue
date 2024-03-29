<script setup>
import { TextSharp } from "@vicons/ionicons5";
import WangEditor from "/src/components/WangEditor.vue";
import { ref, watchEffect } from "vue";
import axios from "axios";

// 富文本返回内容data_Html.value.valueHtml
const data_Html = ref("<h1>你好</h1>");

// watchEffect(() => {
//   if (data_Html.value.valueHtml != null) {
//     console.log("父组件接收：" + data_Html.value.valueHtml);
//   }
// });
// 定义输入文本数据存储地方
const myformData = ref({
  category: "",
  title: "",
  img_file: null,
  summary: "",
  myreflections: "",
});

// 上传图片文件保存
const formData = new FormData();
function handleFileChange(event) {
  const file = event.target.files[0];
  // console.log(file);

  formData.append("img_file", file);
}

// 请求头  增加字段 达成文件正常上传
const config = {
  headers: {
    "Content-Type": "multipart/form-data",
  },
};

const submitForm = async () => {
  // 这里不能提交myformData，不然后台使用multer解析不出来
  formData.append("category", myformData.value.category);
  formData.append("title", myformData.value.title);
  formData.append("summary", myformData.value.summary);
  formData.append("myreflections", data_Html.value.valueHtml);

  const response = await axios
    .post("http://127.0.0.1:3000/api/book_movies", formData, config)
    .then((res) => {
      myformData.value.category = "";
      myformData.value.title = "";
      myformData.value.summary = "";
      data_Html.value.valueHtml = "";
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
    <form enctype="multipart/form-data">
      <h1>书籍/电影-添加:</h1>
      <div class="container">
        <div class="tianjia">
          <!-- <h2 class="myh2">选择</h2> -->
          <n-radio-group v-model:value="myformData.category" name="radiogroup1">
            <n-space>
              <n-radio value="books_1">书籍 </n-radio>
              <n-radio value="movies_2">电影</n-radio>
            </n-space>
          </n-radio-group>
          <h2 class="myh2">标题</h2>
          <n-input
            v-model:value="myformData.title"
            type="text"
            placeholder="标题"
          />
          <h2 class="myh2">添加图片</h2>
          <input type="file" name="book_img" @change="handleFileChange" />
          <h2 class="myh2">书籍或电影描述：</h2>

          <n-input
            v-model:value="myformData.summary"
            type="textarea"
            placeholder="电影或书籍简介"
            name="jianyi"
            maxlength="3000"
            show-count
            clearable
            minlength="10"
          />

          <h2 class="myh2">描述：</h2>
          <WangEditor ref="data_Html" />

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
