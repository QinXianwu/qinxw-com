import { createRouter, createWebHistory } from "vue-router";
import beforeEachFun from "./beforeEachFun";
import afterEachFun from "./afterEachFun";
import routerList from "./routerList";

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes: routerList,
});

//进入路由前
router.beforeEach(beforeEachFun);
//进入路由后
router.afterEach(afterEachFun);
// 处理路由报错
router.onError((error) => {
  const pattern = /Loading chunk (\d)+ failed/g;
  const isChunkLoadFailed = error.message.match(pattern);
  const targetPath = router.history.pending.fullPath;
  if (isChunkLoadFailed) {
    try {
      console.log("当前网络不稳定或不安全，请更换网络再点击<确定>试试");
    } catch (err) {
      console.error(err);
      router.replace(targetPath);
    }
  }
});

export default router;
