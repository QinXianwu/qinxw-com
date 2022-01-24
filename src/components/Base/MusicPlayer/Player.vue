<!-- 播放器 -->
<template>
  <div class="Player">
    <div class="content">
      <div class="poster_img">
        <img :src="posterImgUrl" />
      </div>
      <div class="player_main">
        <div class="music-info">
          <div class="music-name">光年之外</div>
          <div class="music-author">邓紫棋</div>
        </div>
        <div class="player-btn">
          <div class="previous">
            <img :src="require('./image/previous.svg')" />
          </div>
          <div
            class="play"
            @click="$store.commit('musicPlayer/setIsPlay', !isPlay)"
          >
            <img :src="require('./image/pause.svg')" v-if="isPlay" />
            <img :src="require('./image/play.svg')" v-else />
          </div>
          <div class="next">
            <img :src="require('./image/next.svg')" />
          </div>
        </div>
      </div>
    </div>
    <div class="lyrics">
      <span>{{ lyrics1 }}</span>
      <span>{{ lyrics2 }}</span>
    </div>
  </div>
</template>

<script>
export default {
  name: "Player",
  computed: {
    isPlay() {
      return this.$store.state.musicPlayer.isPlay;
    },
    lyrics1() {
      return this.$store.state.musicPlayer.lyrics1;
    },
    lyrics2() {
      return this.$store.state.musicPlayer.lyrics2;
    },
    posterImgUrl() {
      return this.$store.state.musicPlayer.posterImgUrl;
    },
  },
};
</script>
<style lang="less" scoped>
.Player {
  .content {
    display: flex;
    align-items: center;
    margin: 0 2rem;
  }
  .poster,
  .poster_img {
    width: 10rem;
    height: 10rem;
    border-radius: 1rem;
    // position: relative;
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
  .player_main {
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    height: 8rem;
    margin: 0 0.5rem 0 1rem;
  }
  .music-info {
    .music-name {
      font-size: 1.5rem;
      line-height: 1.7rem;
      color: @--txt-b-pure;
    }
    .music-author {
      font-size: 0.8rem;
      line-height: 1rem;
      margin: 0.3rem 0;
      color: @--b-alpha-80;
    }
  }
  .player-btn {
    display: flex;
    align-items: center;
    .previous,
    .play,
    .next {
      width: 2rem;
      height: 2rem;
      margin: 0 0.35rem;
      cursor: pointer;
    }
    .previous {
      margin-left: 0;
    }
    .play {
      width: 2.7rem;
      height: 2.7rem;
    }
    img {
      width: 100%;
      height: 100%;
    }
  }
  .lyrics {
    display: flex;
    flex-direction: column;
    max-width: 15.5rem;
    margin: 0.5rem 3rem;
    font-size: 0.8rem;
    line-height: 1.5rem;
    color: @--txt-b-pure;
    letter-spacing: 0.13rem;
    transition: all 0.5s;
    span:nth-child(1) {
      text-align: left;
    }
    span:nth-last-child(1) {
      text-align: right;
    }
  }
}
</style>
