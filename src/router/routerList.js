import Home from "@/views/Home.vue";
import _404_ from "@/views/error/404.vue";

const routerList = [
  {
    path: "/",
    name: "Home",
    component: Home,
  },
  {
    path: "/:pathMatch(.*)",
    name: "_404_",
    component: _404_,
  },
];
export default routerList;
