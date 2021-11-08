import ajax from "@/utils/ajaxForPromise";
import { createApp } from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";

import "@/assets/styles/common.less";

const app = createApp(App);
// 添加到全局中
app.config.globalProperties.$http = ajax;
app.use(store);
app.use(router);
// eslint-disable-next-line no-unused-vars
const vm = app.mount("#app");
