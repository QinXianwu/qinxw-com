<template>
  <div class="MusicPlayer">
    <div class="content">
      <transition name="player" mode="out-in" appear>
        <!--
          music_icon 不能与 player_main同层节点，
          music_icon存在动画，在切换组件时，会延迟显示
         -->
        <div v-if="!showPlayer">
          <!-- 音符
          <div class="music_note wobble-hor-bottom">
            <img :src="require('./image/music_note.svg')" />
          </div> -->
          <div class="music_icon" @click="showPlayer = !showPlayer">
            <img :src="require('./image/music_player.svg')" />
          </div>
        </div>
        <div class="player" v-else>
          <div class="player_main">
            <CloseButton @close="showPlayer = !showPlayer" />
            <Player />
          </div>
        </div>
      </transition>
    </div>
  </div>
</template>
<script>
import CloseButton from "@/components/Base/CloseButton";
import Player from "./Player";

export default {
  name: "MusicPlayer",
  components: {
    CloseButton,
    Player,
  },
  data: function () {
    return {
      showPlayer: false,
    };
  },
};
</script>
<style lang="less" scoped>
.MusicPlayer {
  position: fixed;
  left: 0;
  bottom: 0.75rem;
  z-index: 7777;
  border-radius: 2rem;
  border-top-left-radius: 0;
  border-bottom-left-radius: 0;
  padding-left: 1rem;
  // background: @--b-alpha-40;
  .music_note {
    width: 1.5rem;
    height: 1.5rem;
    img {
      width: 95%;
      height: 95%;
    }
  }
  .music_icon {
    display: flex;
    align-items: center;
    justify-content: center;
    width: 2.5rem;
    height: 2.5rem;
    cursor: pointer;
    background: @--color-primary;
    border-radius: 50%;
    // 使用 旋转动画
    -webkit-animation: spin 3.25s linear; // 定义动画
    animation: spin 3.25s linear infinite;
    img {
      width: 95%;
      height: 95%;
    }
  }
  .player {
    &_main {
      width: 25rem;
      height: 33rem;
      border-radius: 1rem;
      background-color: @--w-alpha-90;
      backdrop-filter: saturate(180%) blur(20px);
      box-shadow: 0 -0.1rem 0.6rem @--w-alpha-70;
    }
    /deep/ .close_btn_main::before {
      color: white;
    }
  }
}
</style>
