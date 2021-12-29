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
    show: { type: Boolean, default: false },
    success: {
      type: Function, //成功回调
      default: null,
    },
    remove: {
      type: Function, //传入移除节点方法,这里是createApp中的方法
      default: null,
    },
    close: {
      type: Function, //关闭回调
      default: null,
    },
  },
  data() {
    return {
      showMask: false,
    };
  },
  created() {
    this.showMask = this.show;
    if (this.success) this.success();
  },
  methods: {
    // 点击遮遮挡层响应事件
    onEventClick() {
      if (this.showMask) {
        setTimeout(() => {
          // 产生延误，实现渐出
          if (this.remove) this.remove();
        }, 300);
      }
      if (this.close) this.close();
      this.showMask = !this.showMask;
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
  opacity: 0;
  transition: 0.3s;
}

.maskShow {
  z-index: 888;
  background-color: rgba(0, 0, 0, 0.479);
  opacity: 1;
}
</style>
