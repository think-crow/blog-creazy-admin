<script setup>
import { onMounted, reactive, ref } from "vue";
import axios from "axios";

const suggests_data = ref([]);

const postData = async () => {
  const response = await axios
    .get("http://127.0.0.1:3000/api/suggests_data")
    .then((res) => {
      suggests_data.value = res.data;
      // console.log(suggests_data.value);
      // alert("get 请求成功！返回数据：");
    })
    .catch((err) => {
      console.error(err);
      alert("get 请求失败，请查看控制台错误信息！");
    });
};

onMounted(() => {
  postData();
});

const formatDate = (timestamp) => {
  const date = new Date(parseInt(timestamp));
  return date.toLocaleDateString();
};
</script>

<template>
  <h2>建议列表:</h2>
  <div class="container">
    <div v-for="(item, index) in suggests_data" :key="index">
      {{ index }} 、{{ item.jianyi }}
      <span>{{ formatDate(item.submi_date) }}</span>
    </div>
  </div>
</template>

<style scoped>
.container {
  margin: 2em 1em;
  background-color: #20211e;
  padding: 1em;
  display: flex;
  flex-direction: column-reverse;
}

.container div {
  border-bottom: 1px solid;
  margin-top: 1em;
  text-indent: 2em;
}

.container div span {
  float: right;
  color: rgb(183, 126, 41);
}
</style>
