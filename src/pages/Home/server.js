import request from "../../utils/request/userRequest";

// 注册接口
const registerUser = data => {
  return request.post("/serverForAishop/registerUser", data);
};

//登录接口
const loginUser = data => {
  const uid = data.uid;
  const psw = data.psw;
  const params = {
    uid: uid,
    psw: psw
  };
  return request.get("/serverForAishop/login", params);
};
export { registerUser, loginUser };
