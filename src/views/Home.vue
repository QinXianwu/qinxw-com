<template>
  <div id="home" ref="home">
    <div id="topBg" class="loaded"></div>
    <div id="bgDarkMask"></div>
    <!-- 导航栏 -->
    <Nav @navTo="navTo" ref="nav" />
    <!-- 遮挡层 -->
    <Mask
      :showMask="showMenu"
      @onEventClick="
        showMenu ? $store.commit('page/setShowMenu', !showMenu) : ''
      "
    />
    <Menu @navTo="navTo" />
    <div id="topTitle" class="column">
      <h1>恰恰相反.</h1>
      <span></span>
      <h2>/* 你永远是唯一的自己，成不了别人 */</h2>
    </div>
    <div id="scrollDown">
      <span id="scrollDownIcon" @click="navTo(1)"></span>
    </div>
  </div>
  <div class="main">
    <div id="about" ref="about">
      <About />
    </div>
    <div id="work" ref="work">
      <Work />
    </div>
    <div id="log" ref="log">1111</div>
    <footer>123</footer>
  </div>
</template>

<script>
import Mask from "@/components/Mask.vue"; // 遮挡层
import Nav from "@/components/Nav.vue"; // 导航条
import Menu from "@/components/Menu.vue"; // 导航条-菜单
import About from "@/components/About.vue"; // 关于
import Work from "@/components/Work.vue"; // 作品

export default {
  name: "Home",
  components: { Mask, Nav, Menu, About, Work },
  data() {
    return {
      curTop: 0,
    };
  },
  methods: {
    navTo(cur) {
      let offsetScrollToList = [
        { name: "home", scrollTop: 0 },
        {
          name: "about",
          scrollTop: this.$refs.about.getBoundingClientRect().top | 0,
        },
        {
          name: "work",
          scrollTop: this.$refs.work.getBoundingClientRect().top | 0,
        },
      ];
      // console.log("滚动条位置", document.documentElement.scrollTop);
      // console.log("目标地址", offsetScrollToList[cur].offsetHeight);
      // window.scrollTo(0, offsetScrollToList[cur].offsetHeight); // 无缓冲
      let scrollTo =
        document.documentElement.scrollTop + offsetScrollToList[cur].scrollTop;
      window.scrollTo({
        top: cur === 0 ? 0 : scrollTo,
        behavior: "smooth", // 有缓冲-过渡效果
      });
    },
    // 监听滚动条配合nav显示效果
    eventScroll() {
      let scrollTop = document.documentElement.scrollTop;
      let isSticky = this.$refs.nav && this.$refs.nav.isSticky;
      let about_scrollTop =
        (this.$refs.about && this.$refs.about.getBoundingClientRect().top) || 0;
      if (scrollTop > scrollTop + about_scrollTop - 84) {
        if (!isSticky) this.$refs.nav.isSticky = true;
      } else {
        if (isSticky) this.$refs.nav.isSticky = false;
      }
    },
  },
  computed: {
    showMenu() {
      return this.$store.state.page.showMenu;
    },
  },
  mounted() {
    window.addEventListener("scroll", this.eventScroll, true);
  },
  unmounted() {
    // 离开该页面需要移除这个监听的事件，不然会报错
    window.removeEventListener("scroll", this.eventScroll);
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
  align-items: center;

  h1 {
    width: 100%;
    text-align: center;
    line-height: 4rem;
    padding: 2rem;
    margin-bottom: 0.5rem;
    font-family: "Microsoft Yahei", PingFangSC-Regular;
    font-size: 4rem;
    font-weight: 400;
    color: #fff;
  }
  h2 {
    font-weight: 400;
  }
  span {
    width: 3rem;
    height: 0.2rem;
    background: #03d300;
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
    &:hover {
      border-color: rgba(255, 255, 255, 1);
    }
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
  // 设置滚动条时，需要用节点自身距离顶部 top - 5rem - 2rem  (84px -> 1rem)
  padding-top: 5rem;
  padding-bottom: 2rem;
  text-align: center;
  transition: 0.3s;
}
</style>
