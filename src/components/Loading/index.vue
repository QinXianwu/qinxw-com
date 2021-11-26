<template>
  <!-- 自定义加载组件 -->
  <div
    class="mask"
    :class="{
      maskShow: showMask,
    }"
    @click="onEventClick"
  ></div>
</template>
<script>
//自定义函数组件无法使用全局组件，需要单独引入
export default {
  name: "Loading",
  props: {
    show: { type: Boolean, default: false }, // loading.js传入
    success: {
      type: Function, //成功回调
      default: null,
    },
    error: {
      type: Function, //失败回调
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
    setTimeout(() => {
      this.showMask = this.show;
    });
  },
  methods: {
    // 点击遮遮挡层响应事件
    onEventClick() {
      if (this.showMask) {
        setTimeout(() => {
          // 保证关闭动效/300ms后关闭
          if (this.remove) this.remove();
        }, 300);
      }
      if (this.error) this.error();
      if (this.close) this.close();
      if (this.success) this.success();
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
  background-color: rgba(0, 0, 0, 0.3);
  opacity: 1;
}
</style>
