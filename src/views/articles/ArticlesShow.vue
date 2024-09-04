<script setup>
import { onMounted, ref, watchEffect } from "vue";
import axios from "@/api/request";
// import { RouterLink, RouterView } from "vue-router";
const resdata = ref([]);
// const data = ref([]);

const category = ref("all");
const data = ref({ visible: null, _id: null });
// 

function yes_no_show(visible, _id) {

  data.value.visible = visible ? false : true;
  data.value._id = _id;
  // console.log(data.value);
  // console.log(visible);

  const submitForm = async () => {
  // if (!confirm("请确认更新吗！")) return;
  const response = await axios
    .patch(
      `/api/article_updata_one?_id=${_id}`,
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

// 提交



function fn_blog() {
  category.value = "blog_1";
}
function fn_reference() {
  category.value = "reference_2";
}
function fn_goodarticles() {
  category.value = "goodarticles_3";
}
// 分类
const stopwatch = watchEffect(() => {
  if (category.value != "all") {
    postData();
  }
});

const postData = async () => {
  const response = await axios
    .get(`/api/article_alldata?category=${category.value}`)
    .then((res) => {
      // console.log(res.data);
      resdata.value = res.data;
    })
    .catch((err) => {
      console.error(err);
      // alert("get 请求失败，请查看控制台错误信息！");
    });
};
function deleteOne(_id) {
  if (!confirm("请确认删除吗！")) return;

  axios
    .delete(`/api/deleteone_article/${_id}`)
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
// console.log(resdata.value);
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
  <!-- <h1>展示</h1> -->
  <div>
    <div class="fenlei">
      <n-button @click="fn_blog">日志</n-button
      ><n-button @click="fn_reference">技术</n-button>
      <n-button @click="fn_goodarticles">优选文章</n-button>
    </div>

    <div class="bookmovies">
      <div v-for="(item, index) in resdata" :key="index" class="box">
        <p>
          <span>{{ formatDate(item.submi_date) }}</span> {{ item.title }}
        </p>
        <div class="button">
          <router-link
            :to="{
              path: '/articles/modifyarticles',
              query: {
                _id: item._id,
              },
            }"
            >修改</router-link
          ><button @click="deleteOne(item._id)">删除</button>
          <button @click="yes_no_show(item.visible, item._id)">{{item.visible}}</button>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>


.button a {
  color: rgb(95, 169, 233);
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

  /* color: #8006f2; */

}

button:last-child{
    margin-right: 0.5em;
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
  /* border: 1px solid red; */
  padding-left: 1em;
}

.box {
  /* border: 1px solid red; */

  flex-grow: 1;
  position: relative;
  margin: 1em 1em 0 0;
  background-color: #28282c;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0;
}

.box p {
  /* border: 1px solid red; */
  font-size: 1.1em;
  color: rgba(234, 238, 231, 0.708);
  margin: 0.5em;
  white-space: pre-wrap;
  word-break: break-word;
  letter-spacing: 0.05em;
  line-height: 1.2em;
}

.box span {
  color: #7c7c7d;
}

@media (max-width: 768px) {
  .box p {
  /* border: 1px solid red; */
  font-size: 0.9em;
  color: rgba(234, 238, 231, 0.708);
  margin: 0.3em 0.3em;
  white-space: pre-wrap;
  word-break: break-word;
  letter-spacing: 0.05em;
  line-height: 1.8em;
}

.box {
  /* border: 1px solid red; */
/* flex-basis: 70%; */
  margin: 0.7em 0.9em 0 0;

}

.button{
  float: right;
}
.button button {
  margin-left: 0.5em;
  margin-right: 0em;
  /* color: #8006f2; */

}

.button button:last-child{
  margin-right: 0.2em;
  float: right;
}
}
</style>
