<template>
    <div class="main">
      <h2>欢迎</h2>
      <div class="login">
      <h2>登录</h2>
      <form @submit.prevent="throttledpostData">
        <div class="form-group">
          <label for="username">用户名</label>
          <input type="text" id="username" v-model="username" required>
        </div>
        <div class="form-group">
          <label for="password">密码</label>
          <input type="password" id="password" v-model="password" required>
        </div>
        <button type="submit">登录</button>
      </form>
      <p v-if="loginError" class="error">{{ loginErrorMessage }}</p>
    </div>
    </div>
  </template>
  
  <script setup>
    import { ref } from 'vue';
    import axios from 'axios';
    import router from '@/router'; // 假设有一个 Vue Router 的实例
    import { throttle } from "lodash-es"; // 防抖


    const username = ref('');
    const password = ref('');
    const loginError = ref(false);
    const loginErrorMessage = ref('');
  

    // 节流

    const login = async () => {
        // console.log('Attempting to log in...'); // 确认登录函数被调用
        // console.log('Username:', username.value);
        // console.log('Password:', password.value);
      try {
        const response = await axios.post('/api/login', {
          username: username.value,
          password: password.value
        });

        //解析用户角色！
        const parts = response.data.token.split('.');
    const payload = JSON.parse(atob(parts[1]));
    const role = payload.role;
    // console.log('Role:', role);


        // console.log(response);
        if (response.data.token) {
          console.log('登录成功');
          loginError.value = false;
  
          localStorage.setItem('token', response.data.token);
  
          const userInfoResponse = await axios.get('/api/userInfo', {
            headers: {
              Authorization: `Bearer ${response.data.token}`
            }
          });
  
          const userInfo = userInfoResponse.data;
          handleUserPermissions(userInfo);
  
             // 根据角色跳转
      if (role === 'admin') {
        router.push('/notepages');
      } else if (role === 'user') {
        router.push('/mingyans');
      } else {
        console.log('未知角色');
        loginError.value = true;
        loginErrorMessage.value = '角色未知，无法跳转';
        alert(loginErrorMessage.value);
      }
        } else {
          console.log('登录失败');
          alert('登录失败,请三十分钟后再试');
          loginError.value = true;
        //   loginErrorMessage.value = '用户名或密码错误';
        }
      } catch (error) {
        loginErrorMessage.value = error.response.data.message;
        console.error('登录请求出错:', error);
        alert('登录失败，,请三十分钟后再试');
        loginError.value = true;
      }
    };
    const throttledpostData = throttle(login, 36000);
    const handleUserPermissions = (userInfo) => {
      // 处理用户权限逻辑，此处省略具体实现
      console.log('处理用户权限:', userInfo);
    };
  </script>
  
  <style scoped>

.main{
  padding: 1em;
  background-color:#413c3cf8;
  height: 100vh;
}

    .login {
      max-width: 300px;
      margin: 0 auto;
      padding: 20px;
      /* border: 1px solid red; */
      border-radius: 5px;
      background: #494949;
      box-shadow: 0 0 10px rgba(0, 0, 0, 0.5);
    }
  
    .form-group {
      margin-bottom: 10px;
    }
  
    label {
      display: block;
      margin-bottom: 5px;
    }
  
    input[type="text"],
    input[type="password"],
    button {
      width: 100%;
      padding: 8px;
      font-size: 16px;
      border-radius: 3px;
      border: 2px solid #494949;
      box-sizing: border-box;
      background-color: #9b9898;
    }
  
    button {
      margin-top: 10px;
      background-color: #007bff;
      color: black;
      cursor: pointer;
    }
  
    button:hover {
      background-color: #0056b3;
    }
  
    .error {
      color: red;
      font-size: 14px;
      margin-top: 5px;
    }
  </style>
  