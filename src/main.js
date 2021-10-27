import "@/utils/ajaxForPromise";
import { createApp } from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";

import "@/assets/styles/common.less";

const app = createApp(App);

app.use(store);
app.use(router);
// app.config.globalProperties.$http
// eslint-disable-next-line no-unused-vars
const vm = app.mount("#app");
