import Vue from "vue";
import Router from "vue-router";

//引入 cookie
import jsCookie from "js-cookie";
Vue.prototype.$cookie = jsCookie;

Vue.use(Router);

/* 网站登录首页 */
const HomePage = () =>
  import(/*webpackChunkName: "gourp-Home-page */ "@/pages/Home/Page");
/* 网站登录首页 */

/* 网站售卖东西首页 */
const SellHomeAishop = () =>
  import(
    /*webpackChunkName: "gourp-SellHome-Aishop */ "@/pages/SellHome/Aishop"
  );

/**
 *  网站首页 Home
 */
const Home = [
  {
    path: "/Home/page",
    name: "HomePage",
    component: HomePage,
    meta: {
      title: "网站首页"
    }
  }
];
/**
 * 网站登录后首页 Aishop
 */
const Aishop = [
  {
    path: "/SellHome/Aishop",
    name: "SellHomeAishop",
    component: SellHomeAishop,
    meta: {
      title: "AiShop"
    },
    children: [
      /**
       * 用户个人售卖数据模块
       */
      {
        path: "/Aishop/Sell/Data/dashBorad",
        name: "dashBorad",
        component: () => import("../pages/SellHome/Data/DashBorad")
      },
      /**
       * 商场主页
       */
      {
        path: "/SellHome/Aishop/Market/Sell",
        name: "Sell",
        component: () => import("../pages/SellHome/Market/Sell")
      },
      /**
       * 订单相关
       */
      {
        path: "/SellHome/Aishop/Order/Management",
        name: "Management",
        component: () => import("../pages/SellHome/Order/Management")
      },
      /**
       * 个人模块  信息
       */
      {
        path: "/SellHome/Aishop/Person/Data",
        name: "Manager",
        component: () => import("../pages/SellHome/Person/Data")
      },
      /**
       * 个人模块 聊天
       */
      {
        path: "/SellHome/Aishop/Person/Chat",
        name: "Chat",
        component: () => import("../pages/SellHome/Person/Chat")
      },
      /**
       * 个人模块 发送email
       */
      {
        path: "/SellHome/Aishop/Person/Email",
        name: "Email",
        component: () => import("../pages/SellHome/Person/Email")
      },
      /**
       * 订单模块
       */
      {
        path: "/SellHome/Aishop/Order/Managemenet",
        name: "Chat",
        component: () => import("../pages/SellHome/Order/Management")
      }
    ]
  }
];

export default new Router({
  routes: [...Home, ...Aishop],
  mode: "history"
});
