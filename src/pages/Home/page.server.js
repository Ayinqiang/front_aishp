import request from "../../utils/request/userServer";
import QS from "qs";

const registerUser = data => {
  return request.post("/serverForAishop/registerUser", data);
};

const loginUser = data => {
  const uid = data.uid;
  const psw = data.psw;
  return request.get("/serverForAishop/login?uid=" + uid + "&psw=" + psw);
};

export { registerUser, loginUser };
