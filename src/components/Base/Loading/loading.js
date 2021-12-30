import { createApp } from "vue";
import LoadingComponent from "./index.vue";

export default function Loading(options) {
  // 创建一个节点，并将组件挂载上去
  const mountNode = document.createElement("div");
  document.body.appendChild(mountNode);
  const app = createApp(LoadingComponent, {
    show: true,
    ...options,
    remove() {
      app.unmount(mountNode); //创建完后要进行销毁
      document.body.removeChild(mountNode);
    },
  });
  return app.mount(mountNode);
}
