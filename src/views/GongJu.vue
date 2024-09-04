<script setup>
import { onMounted, ref, watchEffect } from "vue";
import axios from "axios";
import { RouterLink, RouterView } from "vue-router";
const resdata = ref([]);


const postData = async () => {
  const response = await axios
    .get(
      `/api/ip_alldata`
    )
    .then((res) => {
      resdata.value = res.data;
      // console.log(resdata.value);
    })
    .catch((err) => {
      console.error(err);
      // alert("get 请求失败，请查看控制台错误信息！");
    });
};




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
  <div class="container">
    <n-table :bordered="false" :single-line="false" size="small">
    <thead>
      <tr>
        <th>IP地址</th>
        <th>归属地</th>
        <th>浏览器</th>
        <th>访问页面数量</th>
        <th>创建时间</th>
        <th>最后访问时间</th>
      </tr>
    </thead>
    <tbody>
 
      <tr :title="item.title" v-for="(item, index) in resdata" :key="index">
        <td>{{ item.ip }}</td>
        <td>{{ item.address }}</td>
        <td>{{ item.browser }}</td>
        <td>{{ item.viewNum }}</td>
        <td>{{ formatDate(item.createdAt) }}</td>
        <td>{{ formatDate(item.updatedAt) }}</td>
      </tr>
    </tbody>
  </n-table>
  </div>
</template>

<style scoped>

.container{
  padding: 1em;
}

h2{
  text-align: center;
  color:aquamarine;
}
</style>