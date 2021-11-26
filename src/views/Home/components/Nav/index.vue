<template>
  <div class="nav flex" :class="isSticky ? 'sticky' : ''">
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
      <div class="navLink column" @click="navTo()">
        <a>首页</a>
        <div class="navLink-border"><div class="border-bottom"></div></div>
      </div>
      <div class="navLink column" @click="navTo('about')">
        <a>关于</a>
        <div class="navLink-border"><div class="border-bottom"></div></div>
      </div>
      <div class="navLink column" @click="navTo('work')">
        <a>作品</a>
        <div class="navLink-border"><div class="border-bottom"></div></div>
      </div>
      <div class="navLink column" @click="navTo()">
        <a>练习册</a>
        <div class="navLink-border"><div class="border-bottom"></div></div>
      </div>
    </div>
    <!-- 菜单按钮 -->
    <span
      class="btnMenu"
      id="btnMenu1"
      @click="$store.commit('page/setShowMenu', !showMenu)"
    ></span>
  </div>
</template>
<script>
import logoUrl from "@/assets/image/logo.jpg";
export default {
  name: "",
  props: {},
  data: function () {
    return {
      logoUrl,
      isSticky: false,
    };
  },
  methods: {
    // 调整滚动条
    navTo(cur) {
      this.$emit("navTo", cur);
    },
  },
  computed: {
    showMenu() {
      return this.$store.state.page.showMenu;
    },
  },
};
</script>
<style lang="less" scoped>
.nav {
  width: 99%;
  height: 4rem;
  font-size: 2rem;
  border-radius: 1rem;
  align-items: center;
  color: #fff;
  background: rgba(51, 51, 51, 0.979);
  backdrop-filter: blur(2.1rem) saturate(180%);
  opacity: 0.9;
  margin: 0 0.5%;
}
.nav.sticky {
  z-index: 99;
  position: fixed;
  background-color: rgba(255, 255, 255, 0.693);
  box-shadow: 0rem 0.5rem 1.6rem #36363621;
  color: #333;

  .navLinkBox .navLink a {
    color: #333;
  }

  .btnMenu {
    border-color: #333;
    background-color: #333;
  }
}
.nav .navLogoBox {
  position: absolute;
  left: 13rem;
  transition: 0.3s;
  .logo {
    width: 3rem;
    height: 3rem;
    border-radius: 1.1rem;
    box-shadow: 0 0 10rem #000;
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
  transition: all 0.3s;
  .navLink {
    width: 4rem;
    height: 2.8rem;
    line-height: 2.8rem;
    font-size: 1rem;
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
  transition: 0.3s;
  cursor: pointer;
  display: none;
}

#btnMenu1:hover {
  opacity: 0.5;
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
    left: 5.5rem;
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
</style>
