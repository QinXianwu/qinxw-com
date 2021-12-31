import mask from "@/components/Base/Mask/mask.js";
import loading from "@/components/Base/Loading/loading.js";

import { createApp } from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";
import api from "@/api/module";

import "@/assets/styles/common.less";

const app = createApp(App);
// 添加到全局中
app.config.globalProperties.$http = api;
app.config.globalProperties.$mask = mask();
app.config.globalProperties.$loading = loading();

app.use(store);
app.use(router);
// eslint-disable-next-line no-unused-vars
const vm = app.mount("#app");
