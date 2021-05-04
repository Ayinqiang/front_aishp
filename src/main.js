// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from "vue";
import App from "./App";
import router from "./router";

import axios from "axios";

axios.defaults.baseURL = "http://localhost:7500";
Vue.prototype.$axios = axios;

//引入 Vuetify
import Vuetify from "vuetify";
import vuetify from "@/plugins/vuetify";
Vue.use(Vuetify);

//引入 js-Cookie
import jsCookie from "js-cookie";
Vue.prototype.$cookie = jsCookie;

Vue.config.productionTip = false;

/* eslint-disable no-new */
new Vue({
  vuetify,
  el: "#app",
  router,
  components: { App },
  template: "<App/>"
});
