import request from "../../utils/request/userServer";
import QS from "qs";

const registerUser = (data, config) => {
  return request.post("/registerUser", data, config);
};

const loginUser = (data, header) => {
  return request.post("/login", data, config);
};

export { registerUser, loginUser };
