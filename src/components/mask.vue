<template>
  <div class="mask" id="navMenuMask"></div>
</template>
<script>
export default {
  name: "mask",
};
</script>
<style lang="less" scoped>
#bgDarkMask,
.mask {
  z-index: -99;
  position: fixed;
  left: 0;
  top: 0;
  width: 100%;
  height: 100%;
  transition: 0.25s;
}
</style>
