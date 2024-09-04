import axios from 'axios'
// import { error } from 'console';
// import querystring from "querystring"
// const axios = axios.create({ 
//     baseURL:'http://127.0.0.1:3000',
//     timeout:5000,
// });

const errorHandle = (status, info)=>{
	switch(status){
		case 400: console.log("语义有误") 
		break;
		case 401: alert(info.message) 
		break;
		case 403: alert(info.message) 
		break;
		case 404: console.log(info.message) 
		break;
		case 500: console.log("服务器内部异常") 
		break;
		case 502: console.log("服务器无响应") 
		break;

		default: console.log(info);
	}
}

// 2\请求拦截器-
axios.interceptors.request.use((config)=>{

    const token = localStorage.getItem('token');
// console.log(token);
    // 如果 token 存在，则在请求头中添加 Authorization 字段
    if (token) {
      config.headers.Authorization = `Bearer ${token}`;
    }

    return config;
   // if(config.method=="post"){

   // 	config.data=querystring.stringify(config.data)
   // }
   //对响应数据做些什么

   //匹配请求头
   // config.headers.common['Authorization'] = window.sessionStorage.getItem('token') ===null? null:windows.sessionStorage.getItem('token')
   // return config;
   
},(err)=>{


   //对响应错误做些社么
   return Promise.reject(err);
});

// 3、响应拦截器

axios.interceptors.response.use((res)=>{
   // console.log(res.data.message);


   // response => {
   // 	return response.status==200?Promise.resolve(response):Promise.reject(response)
   // }
   //对响应数据做些什么
   return res;
},(err)=>{



   const {response} = err
   // console.log( response.data);
   errorHandle(response.status, response.data)
   //对响应错误做些什么
   return Promise.reject(err );
});


export default axios;
















