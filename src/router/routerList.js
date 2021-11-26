import Home from "@/views/Home/index.vue";
import _404_ from "@/views/error/404.vue";

const routerList = [
  {
    path: "/",
    name: "Home",
    component: Home,
  },
  {
    path: "/:pathMatch(.*)", // 直接 * 会报错
    name: "_404_",
    component: _404_,
  },
];
export default routerList;
