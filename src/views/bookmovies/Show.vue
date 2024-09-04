<script setup>
import { onMounted, ref, watchEffect } from "vue";
import axios from "@/api/request";
import { RouterLink, RouterView } from "vue-router";
const data = ref([]);

const category = ref("all");

function fn_books() {
  category.value = "books_1";
}
function fn_movies() {
  category.value = "movies_2";
}
// 分类
const stopwatch = watchEffect(() => {
  if (category.value != "all") {
    postData();
  }
});

// 存储请求回来的富文本内容
// const richTextContent = ref("");

const postData = async () => {
  const response = await axios
    .get(
      `/api/bookmovies_alldata?category=${category.value}`
    )
    .then((res) => {
      data.value = res.data;
      // richTextContent.value = data.value.myreflections;
      // console.log(data.value);
    })
    .catch((err) => {
      console.error(err);
      // alert("get 请求失败，请查看控制台错误信息！");
    });
};
function deleteOne(_id) {
  if (!confirm("请确认删除吗！")) return;

  axios
    .delete(`/api/deleteone_bookmovies/${_id}`)
    .then((res) => {
      alert("删除成功");
      postData();
      // richTextContent.value = data.value.myreflections;
      // console.log(data.value);
    })
    .catch((err) => {
      console.error(err);
      alert(" 请求失败，请查看控制台错误信息！");
    });
}
onMounted(() => {
  postData();
});
</script>

<template>
  <div>
    <!-- <h1>展示</h1> -->
    <div class="fenlei">
      <n-button color="#fff" @click="fn_books">书籍</n-button
      ><n-button @click="fn_movies">电影</n-button>
    </div>

    <div class="bookmovies">
      <n-card :title="item.title" v-for="(item, index) in data" :key="index">
        <p>
          {{ item.summary }}
        </p>
        <div class="button">
          <router-link
            :to="{
              path: '/bookmovies/modify',
              query: {
                _id: item._id,
              },
            }"
            >修改</router-link
          ><button @click="deleteOne(item._id)">删除</button>
        </div></n-card
      >
    </div>
  </div>
</template>

<style scoped>
.n-card {
  max-width: calc(381px + 1vw);
  margin-left: calc(0.1em + 1vw);
  margin-top: 1em;
  position: relative;
}
::v-deep(.n-card-header) {
  padding: 1em 0.5em 0 0.8em;
}
.n-card p {
  margin-bottom: 1.8em;
}
.button {
  position: absolute;
  bottom: 0.8em;
  right: 1em;
}

.button a {
  color: aliceblue;
  text-decoration: dashed;
  border-bottom: 1px solid red;
  padding: 1.8px;
}

.button a:hover {
  color: red;
  border-bottom: 1px solid #fff;
}

button {
  margin-left: 0.5em;
}

.fenlei {
  /* color: orange; */
  margin: 0.5em 0.5em 0 0.5em;
  text-align: end;
}

.fenlei .n-button:first-child {
  margin-right: 0.5em;
}
.bookmovies {
  display: flex;
  flex-wrap: wrap;
}
</style>
