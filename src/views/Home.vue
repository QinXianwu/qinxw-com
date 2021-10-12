<template>
  <div id="home">
    <div id="topBg" class="loaded"></div>
    <div id="bgDarkMask"></div>
    <!-- 导航栏 -->
    <Nav />
    <!-- 遮挡层 -->
    <Mask
      :showMask="showMenu"
      @onEventClick="
        showMenu ? $store.commit('page/setShowMenu', !showMenu) : ''
      "
    />
    <Menu />
    <div id="topTitle">
      <h1>知行合一.</h1>
      <span class=""></span>
    </div>
    <div id="scrollDown"><span id="scrollDownIcon"></span></div>
  </div>
  <div class="main">
    <div id="about">
      <h3>关于我</h3>
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
    </div>
    <div id="work">
      <h3>我的作品</h3>
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
    </div>
    <div id="log">1111</div>
    <footer>123</footer>
  </div>
</template>

<script>
import Mask from "@/components/Mask.vue";
import Nav from "@/components/Nav.vue";
import Menu from "@/components/Menu.vue";

export default {
  name: "Home",
  components: { Mask, Nav, Menu },
  data() {
    return {};
  },
  methods: {},
  computed: {
    showMenu() {
      return this.$store.state.page.showMenu;
    },
  },
};
</script>
<style lang="less">
#topBg.loaded {
  transform: scale(1);
  opacity: 1;
}

#topBg {
  z-index: -100;
  position: fixed;
  width: 100%;
  height: 100%;
  background-repeat: no-repeat; // 背景图像将仅显示一次
  background-size: cover; // 把背景图像扩展至足够大，以使背景图像完全覆盖背景区域
  background-position: center; // 定位背景图像
  background-image: url(../assets/image/Home_TopBg0.jpg);
  transition: transform 1.5s, opacity 1s;
  transform: scale(1.05);
  opacity: 0;
}

#topTitle {
  position: absolute;
  top: 28%;
  width: 100%;
  text-align: center;
  color: #fff;

  h1 {
    line-height: 4rem;
    padding: 2rem;
    font-family: "Microsoft Yahei", PingFangSC-Regular;
    font-size: 4rem;
    font-weight: 400;
    color: #fff;
    background: #a1a1a16f;
  }
}
#scrollDown {
  position: absolute;
  bottom: 6rem;
  width: 100%;
  #scrollDownIcon {
    position: absolute;
    top: 3rem;
    left: calc(50% - 0.8rem);
    border-right: 0.2rem solid;
    border-top: 0.2rem solid;
    border-color: rgba(255, 255, 255, 0.5);
    border-radius: 0.1rem;
    box-sizing: unset;
    height: 1.3rem;
    width: 1.3rem;
    -webkit-transform: rotate(135deg);
    transform: rotate(135deg);
    cursor: pointer;
    transition: 0.25s;
    animation: twinkle 2s 2s;
  }
}

.main {
  position: absolute;
  top: 100%;
  width: 100%;
}

#about,
#log {
  background-color: #fff;
}

#work {
  background-color: rgb(245, 245, 245);
}
#about,
#log,
#work,
footer {
  width: 100%;
  padding-top: 80px;
  padding-bottom: 100px;
  text-align: center;
  transition: 0.25s;
}
</style>
