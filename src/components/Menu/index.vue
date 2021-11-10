<template>
  <div id="navMenu" :class="showMenu ? 'showNavMenu' : ''">
    <!-- 菜单按钮 -->
    <span
      class="btnMenu"
      id="btnMenu2"
      @click="$store.commit('page/setShowMenu', !showMenu)"
    ></span>
    <a class="navLink" @click="navTo(0)">首页</a>
    <a class="navLink" @click="navTo(1)">关于</a>
    <a class="navLink" @click="navTo(2)">作品</a>
    <span class="dividingLine"></span>
    <a class="navLink" id="navMenuLinkSwitchTheme" @click="onSwitchTheme"
      >主题 <span id="navLinkTextCurrentTheme">{{ themeTitle }}</span></a
    >
  </div>
</template>
<script>
export default {
  name: "Menu",
  props: {},
  data: function () {
    return {};
  },
  computed: {
    showMenu() {
      return this.$store.state.page.showMenu;
    },
    themeTitle() {
      return this.$store.state.page.themeTitle;
    },
    switchTheme() {
      return this.$store.state.page.switchTheme;
    },
  },
  methods: {
    onSwitchTheme() {
      this.$store.commit("page/setSwitchTheme", !this.switchTheme);
      this.$store.commit(
        "page/setThemeTitle",
        this.switchTheme ? "浅色" : "深色"
      );
      this.$store.commit("page/setSwitchThemeUrl");
    },
    // 调整滚动条
    navTo(cur) {
      this.$emit("navTo", cur);
    },
  },
};
</script>
<style lang="less" scoped>
#navMenu {
  position: fixed;
  z-index: 1000;
  top: 0;
  right: -15rem;
  width: 15rem;
  height: 100%;
  padding: 5rem 0.6rem;
  background-color: rgba(255, 255, 255, 0.693);
  backdrop-filter: blur(2.1rem) saturate(180%);
  box-shadow: rgb(0 0 0 / 10%) 0 0 2.1rem;
  font-size: 0;
  transition: 0.3s;
  opacity: 0;
  border-radius: 1rem;

  .navLink {
    display: block;
    padding: 1rem 30px;
    border-radius: 5px;
    color: rgba(29, 29, 29, 0.8);
    font-size: 0.9rem;
    text-decoration: none;
    height: 1rem;
    position: fixed;
    z-index: 1000;
    position: relative;
    cursor: pointer;
    transition: 0.3s;
    &:hover {
      background: rgba(0, 0, 0, 0.095);
    }
    span {
      float: right;
      color: rgba(0, 0, 0, 0.5);
      transition: 0.25s;
    }
  }
  .dividingLine {
    display: inline-block;
    width: calc(100% - 4rem);
    height: 0.05rem;
    margin: 0.1rem 2rem;
    background-color: rgba(0, 0, 0, 0.1);
  }
}

#navMenu.showNavMenu {
  right: 0;
  opacity: 1;
}

#btnMenu2:hover {
  border-color: rgba(0, 0, 0, 0.802);
  background-color: rgba(0, 0, 0, 0.802);
  color: rgba(0, 0, 0, 0.802);
}

.btnMenu {
  position: absolute;
  z-index: 999;
  border-color: rgba(0, 0, 0, 0.6);
  background-color: rgba(0, 0, 0, 0.6);
  color: rgba(0, 0, 0, 0.6);
  top: 1rem;
  right: 2rem;
  width: 1.6rem;
  height: 0.13rem;
  padding: 0.3rem 0;
  margin: 0.5rem 0 0;
  border-top: 0.15rem solid;
  border-bottom: 0.15rem solid;
  box-sizing: unset;
  background-clip: content-box;
  cursor: pointer;
  display: block;
  transition: all 0.3s;
}
</style>
