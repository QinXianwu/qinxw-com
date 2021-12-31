<template>
  <div class="MusicPlayer">
    <div class="content">
      <!-- 海报/歌名 -->
      <div class="content_l"></div>
      <!-- 功能 -->
      <div class="content_r"></div>
    </div>
  </div>
</template>
<script>
export default {
  name: "MusicPlayer",
  data: function () {
    return {};
  },
};
</script>
<style lang="less" scoped>
.MusicPlayer {
  width: 15rem;
  height: 20rem;
  border-radius: 2rem;
  background: @--b-alpha-40;
}
</style>
