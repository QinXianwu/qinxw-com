<template>
  <div class="navMenu" :class="showMenu ? 'showNavMenu' : ''">
    <!-- 菜单按钮 -->
    <span class="btnMenu btnMenu2" @click="closeMenu"></span>
    <a class="navLink" @click="navTo()">首页</a>
    <a class="navLink" @click="navTo('about')">关于</a>
    <a class="navLink" @click="navTo('work')">作品</a>
    <span class="dividingLine"></span>
    <a class="navLink" @click="navTo()">练习册</a>
  </div>
</template>
<script>
export default {
  name: "Menu",
  data: function () {
    return {};
  },
  computed: {
    showMenu() {
      return this.$store.state.page.showMenu;
    },
  },
  mounted() {
    window.addEventListener("resize", () => {
      return (() => {
        if (this.showMenu && document.body.clientWidth > 760) this.closeMenu();
      })();
    });
  },
  methods: {
    // 调整滚动条
    navTo(cur) {
      this.$emit("navTo", cur);
    },
    closeMenu() {
      this.$store.commit("page/setShowMenu", !this.showMenu);
      this.$mask.hiedMask();
    },
  },
};
</script>
<style lang="less" scoped>
.navMenu {
  position: fixed;
  z-index: 1000;
  top: 0;
  right: -15rem;
  width: 15rem;
  height: 100%;
  padding: 5rem 0.6rem;
  background-color: @--b-alpha-70;
  backdrop-filter: blur(2.1rem) saturate(180%);
  box-shadow: rgb(0 0 0 / 10%) 0 0 2.1rem;
  font-size: 0;
  opacity: 0;
  border-radius: 1rem;
  transition: all 0.5s;

  webkit-transform: translateZ(0);
  -moz-transform: translateZ(0);
  -ms-transform: translateZ(0);
  -o-transform: translateZ(0);
  transform: translateZ(0);

  .navLink {
    display: block;
    padding: 1rem 30px;
    border-radius: 5px;
    color: @--w-alpha-80;
    font-size: 0.9rem;
    text-decoration: none;
    height: 1rem;
    position: fixed;
    z-index: 1000;
    position: relative;
    cursor: pointer;
    transition: 0.5s;
    &:hover {
      background: @--w-alpha-15;
    }
    span {
      float: right;
      color: @--w-alpha-50;
      transition: 0.25s;
    }
  }
  .dividingLine {
    display: inline-block;
    width: calc(100% - 4rem);
    height: 0.05rem;
    margin: 0.1rem 2rem;
    background-color: @--w-alpha-10;
  }
}

.navMenu.showNavMenu {
  // right: 0;
  // 解决移动端菜单显隐卡顿bug
  transform: translateX(-15rem);
  opacity: 1;
}

.btnMenu2:hover {
  border-color: @--w-alpha-90;
  background-color: @--w-alpha-90;
  color: @--w-alpha-90;
}

.btnMenu {
  position: absolute;
  z-index: 999;
  border-color: @--w-alpha-60;
  background-color: @--w-alpha-60;
  color: @--w-alpha-60;
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
  transition: all 0.5s;
}
</style>
