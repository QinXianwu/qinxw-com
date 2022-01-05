<template>
  <div class="CloseButton">
    <div class="close_btn" @click="$emit('close')">
      <div class="close_btn_main" :style="`font-size:${size}px;`"></div>
    </div>
  </div>
</template>
<script>
export default {
  name: "CloseButton",
  props: {
    size: [String, Number],
  },
};
</script>
<style lang="less" scoped>
.CloseButton {
  // width: min-content;
  min-height: 1.5rem;
  .close_btn {
    display: flex;
    justify-content: flex-end;
    padding: 0.5rem 1rem;

    &_main {
      display: flex;
      flex-direction: column;
      cursor: pointer;
      font-size: 1.2rem;
      transition: all 0.5s;
    }
    &_main::before {
      content: "\2716";
      color: @--txt-b-pure;
    }
    &_main:hover {
      -webkit-animation: spin 1s linear; // 定义动画
      animation: spin 1s linear infinite;
    }
  }
}
</style>
