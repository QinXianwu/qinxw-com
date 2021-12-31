<template>
  <div class="nav flex" :class="isSticky ? 'sticky' : ''">
    <div class="navLogoBox flex">
      <div class="logo">
        <img :src="require('./image/logo.png')" alt="" />
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
    <span class="btnMenu" id="btnMenu1" @click="openMenu"></span>
  </div>
</template>
<script>
export default {
  name: "Nav",
  props: {},
  data: function () {
    return {
      isSticky: false,
    };
  },
  methods: {
    // 调整滚动条
    navTo(cur) {
      this.$emit("navTo", cur);
    },
    openMenu() {
      this.$store.commit("page/setShowMenu", !this.showMenu);
      this.$mask.target({
        close: () => {
          this.$store.commit("page/setShowMenu", false);
        },
      });
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
  border-radius: 0.8rem;
  align-items: center;
  color: @--txt-b-pure;
  background: @--bg-w-50;
  backdrop-filter: blur(2.1rem) saturate(180%);
  opacity: 0.98;
  margin: 0 0.5%;
  transition: all 0.3s;
}
.nav.sticky {
  z-index: 99;
  position: fixed;
  background-color: @--b-alpha-70;
  box-shadow: 0rem 0.5rem 1.6rem @--w-alpha-15;
  color: @main-font-color;

  .navLinkBox .navLink a {
    color: @main-font-color;
  }

  .btnMenu {
    border-color: @main-font-color;
    background-color: @main-font-color;
  }
}
.nav .navLogoBox {
  position: absolute;
  left: 13rem;
  transition: 0.5s;
  .logo {
    width: 3rem;
    height: 3rem;
    border-radius: 0.88rem;
    box-shadow: 0 0 10rem @--txt-w-pure;
    transition: 0.5s;
    img {
      width: 100%;
      height: 100%;
      border-radius: 0.88rem;
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
  transition: all 0.5s;
  .navLink {
    width: 4rem;
    height: 2.8rem;
    line-height: 2.8rem;
    font-size: 1rem;
    margin: 0 1.7rem;
    text-align: center;
    border-radius: 0.4rem;
    transition: all 0.5s;
    &:hover {
      background: rgba(160, 160, 160, 0.299);
      cursor: pointer; // 鼠标变小手
    }
    a {
      text-decoration: none;
      color: @--txt-b-pure;
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
    transition: all 0.5s;
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
  border-color: @--txt-b-pure;
  background-color: @--txt-b-pure;
  right: 2rem;
  width: 1.6rem;
  height: 0.1rem;
  padding: 0.3rem 0;
  border-top: 0.15rem solid;
  border-bottom: 0.15rem solid;
  box-sizing: unset;
  background-clip: content-box;
  transition: 0.5s;
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
