import Vue from "vue";
import axios from "axios";
import Cookies from "js-cookie";
import router from "../../router";

const apiBaseUrl = "http://localhost:7500";
const dev = "";

const AXIOS = axios.create({
  baseURL: apiBaseUrl,
  headers: {
    "Content-Type": "application/json"
  },
  timeout: 20000
});

// //添加拦截器自动携带token
// AXIOS.interceptors.request.use(
//   config => {
//     /*
//      判断是否存在token，如果存在，则每个header上都加上token
//     */

//     //微信小程序使用asesstoken
//     // const token = localStorage.getItem("token");
//     // if (token !== null) {
//     //   config.headers.accessToken = token;
//     // }
//     let token = sessionStorage.getItem("token");
//     if (token && token !== "") {
//       config.headers["token"] = token; // 让每个请求携带自定义token 请根据实际情况自行修改
//     }
//     return config;
//   },
//   error => {
//     console.log("request-.error :", error);
//     return Promise.reject(error);
//   }
// );

//添加响应拦截器
AXIOS.interceptors.response.use(res => {
  const data = res.data;
  const { config } = res;

  console.log(
    "%c接口名",
    "background:#00b38a;color:#fff",
    config.method,
    apiBaseUrl + config.url
  );
  console.log("入参", config.inParams);
  console.log("出参", data);
  if (res.status == 200) {
    //未登录跳转至登录界面
    if (data.code === -1000) {
      let ouathUrl = apiBaseUrl + "/home";
      sessionStorage.removeItem("token");
      window.location.replace(ouathUrl);
    }
    return data;
  }
});

//定义get 和 post请求
const request = () => ({
  get(path, data = {}, config = {}) {
    return AXIOS.get(path, data, config);
  },
  post(path, data = {}, headers = {}) {
    return AXIOS.post(path, data, headers);
  },
  postForm(path, data = {}, headers = {}) {
    const keys = Object.keys(headers);
    if (keys.length) {
      headers["headers"]["Content-Type"] = "application/x-www-form-urlencoded";
    } else {
      headers["headers"] = {};
      headers["headers"]["Content-Type"] = "application/x-www-form-urlencoded";
    }
    return AXIOS.post(path, data, headers);
  }
});

export default request();
