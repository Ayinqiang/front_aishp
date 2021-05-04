import Vue from "vue";
import Router from "vue-router";

//引入 cookie
import jsCookie from "js-cookie";
Vue.prototype.$cookie = jsCookie;

Vue.use(Router);

/* 网站首页 */
const HomePage = () =>
  import(/*webpackChunkName: "gourp-Home-page */ "@/pages/Home/Page");
/* 网站首页 */

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

export default new Router({
  routes: [...Home],
  mode: "history"
});
