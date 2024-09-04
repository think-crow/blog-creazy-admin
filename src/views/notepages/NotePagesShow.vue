<script setup>
import { onMounted, ref, watchEffect } from "vue";
import axios from "@/api/request";
import { RouterLink, RouterView } from "vue-router";
const resdata = ref([]);
const category = ref("all");


const data = ref({ visible: null, _id: null });
// 

function yes_no_show(visible, _id) {

  data.value.visible = visible ? false : true;
  data.value._id = _id;
  // console.log(data.value);
  // console.log(visible);


const submitForm = async () => {
  const response = await axios
    .patch(
      `/api/notepapers_updata_one?_id=${_id}`,
      data.value
    )
    .then((res) => {
      console.log("已更新成功 ！");
      postData();
    })
    .catch((err) => {
      console.error(err);
      alert("提交失败！");
    });
};

submitForm();

}




const postData = async () => {
  const response = await axios
    .get(
      `/api/notepapers_alldata?category=${category.value}`
    )
    .then((res) => {
      resdata.value = res.data;
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
    .delete(`/api/deleteone_notepapers/${_id}`)
    .then((res) => {
      alert("删除成功");
      postData();
    })
    .catch((err) => {
      console.error(err);
      // alert(" 请求失败，请查看控制台错误信息！");
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
  const hours = date.getHours();
  const minutes = date.getMinutes();
  return `${year}/${month}/${day} ${hours}:${minutes}`;
};
onMounted(() => {
  postData();
});
</script>

<template>
  <div>
    <div class="bookmovies">
      <n-card :title="item.title" v-for="(item, index) in resdata" :key="index">
        <p>
          {{ item.content }}
        </p>
        <div class="adddate">{{ formatDate(item.submi_date) }}</div>
        <div class="button">
          <router-link
            :to="{
              path: '/notepages/modifynotepages',
              query: {
                _id: item._id,
              },
            }"
            >修改</router-link
          ><button @click="deleteOne(item._id)">删除</button>
          <button @click="yes_no_show(item.visible, item._id)">{{item.visible}}</button>
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
