<script setup>
import { onMounted, reactive, ref } from "vue";
import axios from "axios";

const suggests_data = ref([]);

const postData = async () => {
  const response = await axios
    .get("/api/contact-data")
    .then((res) => {
      suggests_data.value = res.data;
      // console.log(suggests_data.value);
      // alert("get 请求成功！返回数据：");
    })
    .catch((err) => {
      console.error(err);
      // alert("get 请求失败，请查看控制台错误信息！");
    });
};


function deleteOne(_id) {
  if (!confirm("请确认删除吗！")) return;
  axios
    .delete(`/api/deleteone-contact/${_id}`)
    .then((res) => {
      alert("删除成功");
      // console.log(res.result);
      postData();
    })
    .catch((err) => {
      console.error(err);
      alert(" 请求失败，请查看控制台错误信息！");
    });
}


const formatDate = (dateTime) => {
  const dateObj = new Date(dateTime);
  dateObj.setHours(dateObj.getHours()); // Add 8 hours
  const formattedDate = `${dateObj.getFullYear()}-${padZero(dateObj.getMonth() + 1)}-${padZero(dateObj.getDate())} ${padZero(dateObj.getHours())}:${padZero(dateObj.getMinutes())}`;
  return formattedDate;
};

const padZero = (num) => {
  return num.toString().padStart(2, '0');
};

onMounted(() => {
  postData();
});
</script>

<template>
  <h2>晓龙博客留言:</h2>
  <div class="container">
    <div v-for="(item, index) in suggests_data" :key="index">
            <p> 姓名：{{ item.name }}   -------邮箱：{{item.email}} <button @click="deleteOne(item._id)">删除</button></p> 留言：{{ item.message}}
      <span>{{ formatDate(item.updatedAt) }}</span>
    </div>
  </div>
</template>

<style scoped>
.container {
  margin: 2em 1em;

  padding: em;
  display: flex;
  flex-direction: column-reverse;
}

.container div {
  background-color: #20211e;
  border-bottom: 1px solid red;
  margin-bottom: 1em;
  /* text-indent: 2em; */
}

.container div span {
  float: right;
  color: rgb(183, 126, 41);
}

button{
  float: right;
}

@media (max-width: 768px) {
  h2{
    font-size: medium;
    color: rgba(255, 228, 196, 0.521);
  }

  .container {
  margin: 0;

  padding: .5em;
  display: flex;
  flex-direction: column-reverse;
  /* border: 1px solid red; */
}

.container div {
  background-color: #20211e;
  border-bottom: 1px solid red;
  margin-top: 1em;
  text-indent: .5em;
  font-size:smaller;
}

.container div span {
  float: right;
  color: rgb(183, 126, 41);
}
}
</style>
