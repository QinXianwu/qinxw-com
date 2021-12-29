<template>
  <router-view />
</template>
<script>
// html禁止使用右键
// function click() {
//   if (event.button == 2) {
//     alert("右键已经被禁用了喔！");
//   }
// }
// document.onmousedown = click;
//禁止使用F12
window.onkeydown =
  window.onkeyup =
  window.onkeypress =
    function (event) {
      // 判断是否按下F12，F12键码为123
      if (event.keyCode === 123) {
        event.preventDefault(); // 阻止默认事件行为
        window.event.returnValue = false;
      }
    };
export default {
  created() {
    // console.info(
    //   "%c 欢迎光临秦贤武的个人网站 \n\n",
    //   `background:#2858f4d1;color:#FFF;font-size: 15px;padding: 7px 0 6px;border-radius: 10px;`,
    //   `https://qinxw.cn \n\n 原创作品，保留所有权利。\n Last updated: Oct 11, 2021`
    // );
  },
};
</script>
<style lang="less">
@import url("./assets/styles/index.less");
.flex {
  display: flex;
}

.column {
  display: flex;
  flex-direction: column;
}
</style>
