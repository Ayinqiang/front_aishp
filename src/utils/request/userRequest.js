import axios from "axios";
import QS from "qs"; //引入qs模块，为post型数据提供序列化（非常重要）

const apiBaseUrl = "http://localhost:7500";
const dev = "";

const Axios = axios.create({
  baseURL: apiBaseUrl,
  withCredentials: true,
  timeout: 15000
});

Axios.interceptors.request.use(config => {
  if (localStorage.getItem("AishopToken") != null) {
    // 让每个请求携带令牌——['Has-Token']作为自定义密钥。
    // 请根据实际情况修改。
    config.headers["AishopToken"] = localStorage.getItem("AishopToken");
  }
  return config;
});

Axios.interceptors.response.use(res => {
  const data = res.data;
  const { config } = res;

  if (config.headers["aishop-userInfo"] != null) {
    console.log(config.headers["aishop-userInfo"]);
    localStorage.setItem("aishop-userInfo", config.headers["aishop-userInfo"]);
  }
  console.log(
    "%c接口名",
    "background:#00b38a;color:#fff",
    config.method,
    apiBaseUrl + config.url
  );
  console.log("入参", config.inParams);
  console.log("出参", data);
  return res;
});

const request = () => ({
  get(url, params) {
    return Axios({
      method: "get",
      url: url,
      params: params
    });
  },
  post(url, params) {
    return Axios({
      method: "POST",
      url: url,
      params: params
    });
  },
  postJson(url, data) {
    return Axios({
      method: "POST",
      url: url,
      data: data,
      header: {
        "Content-Type": "application/json" //如果写成contentType会报错
      }
    });
  },
  postFile(url, data) {
    return Axios({
      method: "POST",
      url: url,
      data: data,
      header: {
        "Content-Type": "multipart/form-data" //如果写成contentType会报错
      }
    });
  }
});

//自定义不同类型请求
export default request();
