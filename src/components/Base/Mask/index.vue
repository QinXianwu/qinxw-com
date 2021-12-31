<template>
  <!-- 自定义遮罩组件 -->
  <div class="mask" :class="{ maskShow: showMask }" @click="eventClick"></div>
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
  },
  data() {
    return {
      showMask: false,
      close: null,
    };
  },
  created() {
    this.showMask = this.show;
    if (this.success) this.success();
  },
  methods: {
    target({ close }) {
      this.showMask = !this.showMask;
      if (close && typeof close === "function") this.close = close; // 开启时存入关闭回调的函数
    },
    hiedMask() {
      this.eventClick();
    },
    // 点击遮挡层响应事件
    eventClick() {
      if (!this.showMask) return;
      if (this.close && typeof this.close === "function") {
        this.close();
        this.close = null; // 清空关闭回调函数 弊处 只能开一层遮罩
      }
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
  transition: 0.5s;
}

.maskShow {
  z-index: 888;
  background-color: rgba(0, 0, 0, 0.479);
  opacity: 1;
}
</style>
