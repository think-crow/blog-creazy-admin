<script setup>
import { TextSharp } from "@vicons/ionicons5";
import WangEditor from "/src/components/WangEditor.vue";
import { ref, watchEffect } from "vue";
import axios from "axios";
import { useRoute } from "vue-router";

const route = useRoute();
const router = useRoute();
// console.log(route.query);取出来传过来的id

// 富文本返回内容data_Html.value.valueHtml
const data_Html = ref("");

const modifyData = ref([]);

// 定义文件表单对象
const formData = new FormData();
// 把图片文件追加到表单对象身上
function handleFileChange(event) {
  const file = event.target.files[0];
  formData.append("img_file", file);
}

const config = {
  headers: {
    "Content-Type": "multipart/form-data",
  },
};

// 存储请求回来的富文本内容
const richTextContent = ref("");
const getData = async () => {
  const response = await axios
    .get(`http://127.0.0.1:3000/api/bookmovies_alldata?_id=${route.query._id}`)
    .then((res) => {
      modifyData.value = res.data;
      data_Html.value.valueHtml = modifyData.value.myreflections;
    })
    .catch((err) => {
      console.error(err);
      alert("get 请求失败，请查看控制台错误信息！");
    });
};
// watchEffect(() => {
//   console.log(data_Html.value.valueHtml);
// });

// 提交
const submitForm = async () => {
  if (!confirm("请确认更新吗！")) return;
  formData.append("category", modifyData.value.category);
  formData.append("title", modifyData.value.title);
  formData.append("summary", modifyData.value.summary);
  formData.append("myreflections", data_Html.value.valueHtml);
  // console.log(data_Html.value.valueHtml);

  const response = await axios
    .patch(
      `http://127.0.0.1:3000/api/updata_one?_id=${route.query._id}`,
      formData,
      config
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
    <form enctype="multipart/form-data">
      <h1>书籍/电影-修改:</h1>
      <div class="container">
        <div class="tianjia">
          <!-- <h2 class="myh2">选择</h2> -->

          <h2 class="myh2">标题</h2>
          <n-input
            v-model:value="modifyData.title"
            type="text"
            placeholder="标题"
          />
          <h2 class="myh2">添加图片</h2>
          <input type="file" name="book_img" @change="handleFileChange" />
          <h2 class="myh2">书籍或电影描述：</h2>

          <n-input
            v-model:value="modifyData.summary"
            type="textarea"
            placeholder="电影或书籍简介"
            name="jianjie"
            maxlength="3000"
            show-count
            clearable
            minlength="10"
          />

          <h2 class="myh2">描述：</h2>
          <WangEditor ref="data_Html" />

          <n-button @click="submitForm">点击保存</n-button>
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
