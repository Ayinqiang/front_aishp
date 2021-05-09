import axios from "axios";
import QS from "qs"; //引入qs模块，为post型数据提供序列化（非常重要）

const apiBaseUrl = "http://localhost:8500";
const dev = "";

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
