<template>
  <div class="about">
    <div class="head">
      <div class="title">关于我De</div>
      <div class="underscore"></div>
    </div>
    <div class="container">
      <div class="label_list">
        <div class="label">00后</div>
        <div class="label warriors" @click="onWarriors">NBA球迷 - Warriors</div>
        <div class="label">理科生</div>
      </div>
      <div class="name">我是{{ name }}。</div>
      <div class="describe">
        <template v-for="(item, index) in describe" :key="index">
          <p>{{ item }}</p>
        </template>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  data: function () {
    return {
      name: "秦贤武",
      describe: [
        "是一名平平无奇的前端程序员，更是生活的稻草人",
        "某知名视频站的不知名up主",
        "强迫症、起床困难户",
        "怀念小时候的魂斗罗、超级玛丽的游戏控",
        "热衷计算机有关的一切：",
        "编程、黑客、UI设计、剪辑、游戏特效...",
        "白人梦想：",
        "去看一场勇士队的现场比赛",
      ],
    };
  },
  methods: {
    onWarriors() {
      this.$loading({});
    },
  },
};
</script>
<style lang="less" scoped>
.about {
  min-height: 35rem;
  background-color: #fff;
}
.head {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  .title {
    font-size: 1.75rem;
    line-height: 1.75rem;
    color: #282828;
  }
  .underscore {
    width: 4rem;
    height: 0.2rem;
    background: rgba(102, 102, 102, 0.644);
    margin: 1rem 0;
  }
}
.container {
  font-size: 1rem;
  line-height: 1rem;
  color: #666;
  transition: all 0.5s;

  .label_list {
    display: flex;
    justify-content: center;
    margin: 1rem 0 3rem;
    transition: all 0.5s;
    .label {
      padding: 1rem 1.5rem;
      font-weight: bold;
      background: #e9e9e9;
      margin: 0 0.3rem;
      border-radius: 0.3rem;
      transition: all 0.15s;
    }
    .label.warriors {
      color: #1e518c;
      cursor: pointer;
      background: #fdb927;
      box-shadow: 5px 5px 0px #b1821b, -5px -5px 0px #fff133;
    }
  }
}
@media screen and (max-width: 500px) {
  .container {
    font-size: 0.8rem;
    line-height: 0.8rem;
    .label_list .label {
      padding: 0.7rem 1.1rem;
    }
  }
}

@media screen and (max-width: 400px) {
  .container {
    font-size: 0.7rem;
    line-height: 0.7rem;
    .label_list .label {
      padding: 0.8rem 0.9rem;
    }
  }
}
</style>
