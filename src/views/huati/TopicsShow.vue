<script setup>
import { onMounted, ref, watchEffect } from "vue";
import axios from "axios";
import { RouterLink, RouterView } from "vue-router";
const data = ref([]);
const category = ref("all");

const postData = async () => {
  const response = await axios
    .get(`http://127.0.0.1:3000/api/topics_alldata?category=${category.value}`)
    .then((res) => {
      data.value = res.data;
      // console.log(data.value);
    })
    .catch((err) => {
      console.error(err);
      alert("get 请求失败，请查看控制台错误信息！");
    });
};
function deleteOne(_id) {
  if (!confirm("请确认删除吗！")) return;
  axios
    .delete(`http://127.0.0.1:3000/api/deleteone_topics/${_id}`)
    .then((res) => {
      alert("删除成功");
      postData();
    })
    .catch((err) => {
      console.error(err);
      alert(" 请求失败，请查看控制台错误信息！");
    });
}

// const formatDate = (timestamp) => {
//   const date = new Date(parseInt(timestamp));
//   return date.toLocaleDateString();
// };

const formatDate = (timestamp) => {
  const date = new Date(parseInt(timestamp));
  const year = date.getFullYear();
  const month = date.getMonth() + 1;
  const day = date.getDate();
  return `${year}年${month}月${day}日`;
};
onMounted(() => {
  postData();
});
</script>

<template>
  <div>
    <div class="bookmovies">
      <n-card :title="item.title" v-for="(item, index) in data" :key="index">
        <p>
          {{ item.content }}
        </p>
        <div class="adddate">{{ formatDate(item.submi_date) }}</div>
        <div class="button">
          <router-link
            :to="{
              path: '/topics/modifytopics',
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
  margin: 0.5em 0.5em 0 0.5em;
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
  /* border: 1px solid red; */
}

.adddate {
  position: absolute;
  bottom: 0.8em;
  left: 1em;
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
