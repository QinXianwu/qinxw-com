<template>
  <div id="topBg" class="loaded"></div>
  <div id="bgDarkMask"></div>
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
    console.log(`
    https://qinxw.cn

    秦贤武的个人网站
    原创作品，保留所有权利。`);
    console.log("Last updated: Oct 11, 2021");
  },
};
</script>
<style lang="less">
@import url("./assets/styles/index.less");

#topBg.loaded {
  transform: scale(1);
  opacity: 1;
}

#topBg {
  z-index: -100;
  position: fixed;
  width: 100%;
  height: 100%;
  background-repeat: no-repeat; // 背景图像将仅显示一次
  background-size: cover; // 把背景图像扩展至足够大，以使背景图像完全覆盖背景区域
  background-position: center; // 定位背景图像
  background-image: url(./assets/image/Home_TopBg0.jpg);
  transition: transform 1.5s, opacity 1s;
  transform: scale(1.05);
  opacity: 0;
}

.flex {
  display: flex;
}

.column {
  display: flex;
  flex-direction: column;
}
</style>
