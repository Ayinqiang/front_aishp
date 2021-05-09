import request from "../../utils/request/commonRequest";

//获取列表接口

const getNavList = () => {
  return request.get("/NavList");
};

export { getNavList };
