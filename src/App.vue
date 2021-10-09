<template>
  <div id="topBg" class="loaded"></div>
  <div id="bgDarkMask"></div>
  <router-view />
</template>

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
</style>
