<template>
  <div class="MusicPlayer">
    <div class="content">
      <transition name="player" mode="out-in" appear>
        <!--
          music_icon 不能与 player_main同层节点，
          music_icon存在动画，在切换组件时，会延迟显示
         -->
        <div v-if="!showPlayer">
          <div class="music_icon" @click="showPlayer = !showPlayer">
            <img :src="require('./image/music_player.svg')" />
          </div>
        </div>
        <div class="player" v-else>
          <div class="player_content">
            <CloseButton @close="showPlayer = !showPlayer" />
            <Player />
          </div>
        </div>
      </transition>
      <!-- <audio muted controls>
        <source :src="musicList[0]" />
      </audio> -->
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
      musicList: [
        "http://music.163.com/song/media/outer/url?id=65766.mp3",
        "http://m801.music.126.net/20220105214028/859757b4e52a4a1f7cdf8067d1486fea/jdymusic/obj/wo3DlMOGwrbDjj7DisKw/11983356173/ed2f/6024/be41/2dc456563c5f9c9535b75ecb066c0325.mp3",
        "http://music.163.com/song/media/outer/url?id=66285.mp3",
      ],
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
    &_content {
      min-width: 26rem;
      height: 16.5rem;
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
