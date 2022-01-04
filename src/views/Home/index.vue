<template>
  <div class="home" ref="home">
    <div class="top_bg loaded"></div>
    <!-- 导航栏 -->
    <Nav @navTo="navTo" ref="nav" />
    <!-- 菜单 -->
    <Menu @navTo="navTo" />
    <!-- 主内容 -->
    <div class="content">
      <!-- 播放器 -->
      <MusicPlayer />
    </div>
    <div class="scroll_down">
      <div class="scroll_down_cell">
        <span class="scroll_down_icon" @click="navTo('about')"></span>
      </div>
    </div>
  </div>
  <div class="main">
    <div ref="about">
      <About />
    </div>
    <div ref="work">
      <Work />
    </div>
    <div ref="log">
      <Log />
    </div>
    <footer>123</footer>
  </div>
</template>

<script>
import smoothscroll from "smoothscroll-polyfill"; // 解决移动端滚动失效bug
import Nav from "./components/Nav/index"; // 导航条
import Menu from "./components/Menu/index"; // 导航条-菜单
import About from "./components/About/index"; // 关于
import Work from "./components/Work/index"; // 作品
import Log from "./components/Log/index"; // 日志
import MusicPlayer from "./components/MusicPlayer/index"; // 播放器

export default {
  name: "Home",
  components: { Nav, Menu, About, Work, Log, MusicPlayer },
  async created() {
    let res = await this.$http.muxiaoguo.GetTianQi({
      type: "2",
      city: "广州",
    });
    if (!res) return;
    res = JSON.parse(res);
    console.log(res);
  },
  methods: {
    navTo(name) {
      let component = null;
      if (name === "about") component = this.$refs.about;
      if (name === "work") component = this.$refs.work;
      if (name === "log") component = this.$refs.log;
      let scrollTop = component ? component.getBoundingClientRect().top : 0;
      let scrollTo = document.documentElement.scrollTop + scrollTop;
      window.scrollTo({
        top: name ? scrollTo : 0,
        behavior: "smooth", // 有缓冲-过渡效果
      });
    },
    // 监听滚动条配合 导航栏显示效果
    eventScroll() {
      let scrollTop = document.documentElement.scrollTop;
      let isSticky = this.$refs.nav && this.$refs.nav.isSticky;
      let about_scrollTop =
        (this.$refs.about && this.$refs.about.getBoundingClientRect().top) || 0;
      if (scrollTop > scrollTop + about_scrollTop - 84) {
        if (!isSticky) this.$refs.nav.isSticky = !isSticky;
      } else {
        if (isSticky) this.$refs.nav.isSticky = !isSticky;
      }
    },
  },
  mounted() {
    // 解决移动端 scrollTo 的 behavior: "smooth" 无效的问题
    smoothscroll.polyfill();
    window.addEventListener("scroll", this.eventScroll, true);
  },
  unmounted() {
    // 离开该页面需要移除这个监听的事件，不然会报错
    window.removeEventListener("scroll", this.eventScroll);
  },
};
</script>
<style lang="less" scoped>
.top_bg.loaded {
  transform: scale(1);
  opacity: 1;
}

.top_bg {
  z-index: -100;
  position: fixed;
  width: 100%;
  height: 100%;
  background-repeat: no-repeat; // 背景图像将仅显示一次
  background-size: cover; // 把背景图像扩展至足够大，以使背景图像完全覆盖背景区域
  background-position: center; // 定位背景图像
  background-image: url(./image/Home_TopBg0.jpg);
  transition: transform 1.5s, opacity 1s;
  transform: scale(1.05);
  opacity: 0;
}

.content {
  position: absolute;
  top: 25%;
  width: 100%;
  text-align: center;
  color: @--txt-b-pure;
}

.scroll_down {
  position: absolute;
  bottom: 6rem;
  width: 100%;
  &_cell {
    display: flex;
    justify-content: center;
  }
  &_cell .scroll_down_icon {
    position: absolute;
    top: 3rem;
    border-right: 0.2rem solid;
    border-top: 0.2rem solid;
    border-color: @--txt-b-tip;
    border-radius: 0.1rem;
    box-sizing: unset;
    height: 1.3rem;
    width: 1.3rem;
    -webkit-transform: rotate(135deg);
    transform: rotate(135deg);
    cursor: pointer;
    transition: 0.25s;
    animation: twinkle 2s 2s;
    &:hover {
      border-color: @--txt-b-pure;
    }
  }
}

.main {
  position: absolute;
  top: 100%;
  width: 100%;
}
footer {
  padding-top: 5rem;
  padding-bottom: 2rem;
  text-align: center;
}
</style>
