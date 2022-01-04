<template>
  <div class="about">
    <div class="head">
      <div class="title">关于我De</div>
      <div class="underscore"></div>
    </div>
    <div class="container">
      <div class="label_list">
        <div
          class="label"
          :class="item.key"
          v-for="(item, index) in labelList"
          :key="index"
          @click="clickLabel(index)"
        >
          {{ item.value }}
        </div>
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
  name: "About",
  data: function () {
    return {
      name: "小秦",
      labelList: [
        {
          value: "00后",
          key: "age",
          path: "",
        },
        {
          value: "NBA小破勇 - Warriors",
          key: "warriors",
          path: "",
        },
        {
          value: "理科生",
          key: "student_type",
          path: "",
        },
      ],
      describe: [
        "是一名平平无奇的前端程序员，更是生活的稻草人",
        "某知名视频站的不知名up主",
        "强迫症、起床困难户",
        "怀念小时候魂斗罗、超级玛丽的游戏控",
        "热衷计算机有关的一切：",
        "编程、黑客、UI设计、剪辑、游戏特效...",
        "白日梦想：",
        "去看一场勇士队的现场比赛",
      ],
    };
  },
  methods: {
    clickLabel(index) {
      this.$loading.target({});
      if (this.labelList[index].path) {
        //
      }
    },
  },
};
</script>
<style lang="less" scoped>
.about {
  min-height: 35rem;
  background-color: @--txt-b-pure;
  padding-top: 5rem;
  padding-bottom: 2rem;
  text-align: center;
}
.head {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  .title {
    font-size: 1.75rem;
    line-height: 1.75rem;
    color: @main-font-color;
  }
  .underscore {
    width: 4rem;
    height: 0.2rem;
    background: @--border-color-text;
    margin: 1rem 0;
  }
}
.container {
  font-size: 1rem;
  line-height: 1rem;
  color: @sub-font-color;
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
      color: @--color-subtopic;
      cursor: pointer;
      background: @--color-warning;
      box-shadow: 5px 5px 0px #b1821b, -5px -5px 0px #fff133;
      transition: all 0.3s;
    }
    .label.warriors:active {
      transform: scale(0.98);
    }
  }
}

@media screen and (max-width: 800px) {
  .head .title {
    font-size: 1.65rem;
    font-size: 1.65rem;
  }
}
@media screen and (max-width: 700px) {
  .head .title {
    font-size: 1.55rem;
    font-size: 1.55rem;
  }
}

@media screen and (max-width: 600px) {
  .head .title {
    font-size: 1.45rem;
    font-size: 1.45rem;
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
  .head .title {
    font-size: 1.35rem;
    font-size: 1.35rem;
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
  .head .title {
    font-size: 1.25rem;
    font-size: 1.25rem;
  }
}
@media screen and (max-width: 300px) {
  .head .title {
    font-size: 1.15rem;
    font-size: 1.15rem;
  }
}
</style>
