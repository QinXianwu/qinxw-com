<!-- 播放器 -->
<template>
  <div class="Player">
    <div class="head">
      <!-- <div class="poster" :style="`background-image: url(${url})`"></div> -->
      <div class="poster_img">
        <img :src="url" />
      </div>
    </div>
    <audio controls>
      <source
        src="https://c.y.qq.com/soso/fcgi-bin/client_search_cp?aggr=1&cr=1&flag_qc=0&p=1&n=30&w=简单爱"
      />
    </audio>
  </div>
</template>

<script>
export default {
  name: "Player",
  components: {},
  data() {
    return {
      url: "https://y.qq.com/music/photo_new/T001R500x500M000001fNHEf1SFEFN.jpg",
    };
  },
  computed: {},
};
</script>
<style lang="less" scoped>
.Player {
  .head {
    display: flex;
    align-items: center;
    justify-content: center;
  }
  .poster,
  .poster_img {
    width: 10rem;
    height: 10rem;
    border-radius: 1rem;
    position: relative;
    img {
      width: 100%;
      height: 100%;
      object-fit: cover; // 进行缩放 解决图片被压缩
      border-radius: 1rem;
    }
  }
  .poster {
    position: absolute;
    background-repeat: no-repeat;
    background-size: cover;
    background-position: center;
    filter: blur(0.3rem);
  }
}
</style>
