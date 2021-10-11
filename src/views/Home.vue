<template>
  <div class="home">
    <div class="nav flex">
      <div class="navLogoBox flex">
        <div class="logo">
          <img :src="logoUrl" alt="" />
        </div>
        <div class="text column">
          <span>Qin</span>
          <span>Xianwu</span>
        </div>
      </div>
      <div class="navLinkBox flex">
        <div class="navLink column">
          <a href="#home">首页</a>
          <div class="navLink-border"><div class="border-bottom"></div></div>
        </div>
        <div class="navLink column">
          <a href="#about">关于</a>
          <div class="navLink-border"><div class="border-bottom"></div></div>
        </div>
        <div class="navLink column">
          <a href="#work">作品</a>
          <div class="navLink-border"><div class="border-bottom"></div></div>
        </div>
        <div
          class="navLink column"
          id="navLinkSwitchTheme"
          :title="`${'主题：' + themeTitle}`"
          @click="onSwitchTheme"
        >
          <div class="switchTheme-icon" :class="switchTheme ? 'Light' : 'Dark'">
            <img :src="switchThemeUrl" alt="" />
          </div>
          <div class="navLink-border"><div class="border-bottom"></div></div>
        </div>
      </div>
      <span class="btnMenu" id="btnMenu1" @click="showMenu = !showMenu"></span>
    </div>
    <div
      class="mask"
      :class="showMenu ? 'maskShow' : ''"
      id="navMenuMask"
      @click="showMenu = !showMenu"
    ></div>
    <div>
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
    <div id="home">home</div>
    <div id="about">about</div>
    <div id="work">work</div>
  </div>
</template>

<script>
import logoUrl from "../assets/image/logo.jpg";
import switchThemeUrl from "../assets/image/switchTheme-Light.png";
import switchTheme_DarkUrl from "../assets/image/switchTheme-Dark.png";

export default {
  name: "Home",
  components: {},
  data() {
    return {
      logoUrl,
      switchThemeUrl, // 切换主题图标
      AdaptationState: "0", // 四个阶段做适配 小于760(3)、900(2)、1230(1)、大于1230(0)
      themeTitle: "浅色", // 深色 | 浅色(默认)
      screenWidth: "", // 可视宽度
      screenHeight: "", // 可视高度
      switchTheme: true, // 浅色
      showMenu: false,
    };
  },
  created() {
    // console.log("页面宽度", window.innerWidth);
    this.screenWidth = document.body.clientWidth;
    this.screenHeight = document.body.clientHeight;
    this.AdaptationState_Width(this.screenWidth);
    window.onresize = () => {
      return (() => {
        this.screenWidth = document.body.clientWidth;
        this.screenHeight = document.body.clientHeight;
        this.AdaptationState_Width(this.screenWidth);
      })();
    };
  },
  computed: {},
  methods: {
    AdaptationState_Width(width) {
      let autoWidth = width;
      if (autoWidth < 1230 && autoWidth > 900) {
        this.AdaptationState = "1";
      } else if (autoWidth < 900 && autoWidth > 760) {
        this.AdaptationState = "2";
      } else if (autoWidth < 760) {
        this.AdaptationState = "3";
      } else {
        this.AdaptationState = "0";
      }
    },
    onSwitchTheme() {
      this.switchTheme = !this.switchTheme;
      this.themeTitle = this.switchTheme ? "浅色" : "深色";
      this.switchThemeUrl = this.switchTheme
        ? switchThemeUrl
        : switchTheme_DarkUrl;
    },
  },
};
</script>
<style lang="less" scoped>
.nav {
  width: 100%;
  height: 6rem;
  font-size: 2rem;
  align-items: center;
  color: #fff;
}
.nav .navLogoBox {
  position: absolute;
  left: 13rem;
  transition: 0.3s;
  .logo {
    width: 3rem;
    height: 3rem;
    border-radius: 1.1rem;
    transition: 0.3s;
    img {
      width: 100%;
      height: 100%;
      border-radius: 1.1rem;
    }
  }
  .text {
    font-size: 1.5rem;
    line-height: 1.5rem;
    margin: 0 1rem;
    font-family: "Segoe UI", Tahoma, Geneva, Verdana, sans-serif;
  }
}

.navLinkBox {
  position: absolute;
  right: 10rem;
  font-size: 1rem;
  transition: all 0.3s;
  .navLink {
    width: 4rem;
    height: 2.8rem;
    line-height: 2.8rem;
    margin: 0 1.7rem;
    text-align: center;
    border-radius: 0.4rem;
    transition: all 0.3s;
    &:hover {
      background: rgba(160, 160, 160, 0.299);
      cursor: pointer; // 鼠标变小手
    }
    a {
      text-decoration: none;
      color: #fff;
      margin: 0 0.3rem;
    }
  }
}

.navLinkBox .navLink .navLink-border {
  display: flex;
  justify-content: center;
  .border-bottom {
    width: 0rem;
    border-top: 0.3rem solid #03d300;
    position: relative;
    top: -0.3rem;
    transition: all 0.3s;
    &:active {
      content: "";
    }
  }
}

.navLinkBox .navLink:hover .border-bottom {
  width: 1.5rem;
}

#navLinkSwitchTheme {
  justify-content: center;
  align-items: center;
  .switchTheme-icon {
    width: 1.5rem;
    height: 1.5rem;
    margin: 0.75rem 0;
    border-radius: 50%;
    line-height: 2rem;
    transition: all 0.3s;
    img {
      width: 75%;
      height: 75%;
    }
  }
  .Light {
    background: #fff;
  }
  .Dark {
    background-color: #402a2e;
  }
}
#navLinkSwitchTheme:hover .switchTheme-icon {
  background: none;
}

.btnMenu {
  position: absolute;
  z-index: 999;
  border-color: #fff;
  background-color: #fff;
  right: 2rem;
  width: 1.6rem;
  height: 0.1rem;
  padding: 0.3rem 0;
  border-top: 0.15rem solid;
  border-bottom: 0.15rem solid;
  box-sizing: unset;
  background-clip: content-box;
  transition: 0.25s;
  cursor: pointer;
  display: none;
}

@media screen and (max-width: 1300px) {
  .nav .navLogoBox {
    left: 10.5rem;
  }
  .navLinkBox {
    right: 8rem;
    .navLink {
      margin: 0 1rem;
    }
  }
}

@media screen and (max-width: 900px) {
  .nav .navLogoBox {
    left: 6.5rem;
  }
  .navLinkBox {
    right: 5rem;
    .navLink {
      margin: 0 0.6rem;
    }
  }
}

@media screen and (max-width: 760px) {
  // logo宽度距离左边屏幕缩小
  .nav .navLogoBox {
    left: 1.5rem;
  }
  // 导航栏隐藏
  .navLinkBox {
    .navLink {
      display: none;
    }
  }
  // 菜单按钮显示
  .btnMenu {
    display: block;
  }
}

#bgDarkMask,
.mask {
  z-index: -99;
  position: fixed;
  left: 0;
  top: 0;
  width: 100%;
  height: 100%;
  transition: 0.3s;
}

.maskShow {
  z-index: 888;
  background-color: rgba(0, 0, 0, 0.3);
}
</style>
