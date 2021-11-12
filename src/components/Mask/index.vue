<template>
  <div
    class="mask"
    :class="showMask ? 'maskShow' : ''"
    @click="onEventClick"
  ></div>
</template>
<script>
export default {
  name: "Mask",
  props: {
    showMask: { type: Boolean, default: false },
  },
  methods: {
    // 点击遮遮挡层响应事件
    onEventClick() {
      this.$emit("onEventClick");
    },
  },
};
</script>
<style lang="less" scoped>
.mask {
  position: fixed;
  z-index: -99;
  left: 0;
  top: 0;
  width: 100%;
  height: 100%;
  transition: 0.3s;
}

.maskShow {
  z-index: 888;
  background-color: rgba(0, 0, 0, 0.3);
}
</style>
