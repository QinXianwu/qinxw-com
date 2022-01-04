<template>
  <div class="work">
    <div class="head">
      <div class="title">我的作品</div>
      <div class="underscore"></div>
    </div>
    <div class="container">
      <div class="portfolio">
        <template v-if="portfolio">
          <div class="p_cell" v-for="(item, index) in portfolio" :key="index">
            <div class="logo">
              <img :src="item.url" :title="item.title" />
            </div>
          </div>
        </template>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  name: "Work",
  data: function () {
    return {
      portfolio: [
        {
          title: "遇见食途小程序",
          url: require("./image/MeetFood-logo.png"),
          description: "描述",
        },
        {
          url: require("./image/Avatar-logo.png"),
        },
        {},
      ],
    };
  },
};
</script>
<style lang="less" scoped>
.work {
  min-height: 30rem;
  background-color: @--color-primary;
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

.portfolio {
  display: flex;
  align-items: center;
  justify-content: center;
  // flex-wrap 属性规定flex容器是单行或者多行
  flex-wrap: wrap;
  .p_cell {
    width: 15rem;
    height: 15rem;
    padding: 1rem;
    margin: 1rem;
    background: @--txt-b-pure;
    box-shadow: 0 0.1rem 0.3rem #999;
    transition: all 0.5s;
  }
  .p_cell .logo {
    width: 15rem;
    height: 15rem;
    cursor: pointer;
    display: flex;
    align-items: center;
    justify-content: center;
    background: @--txt-b-pure;
    box-shadow: inset 5px 5px 16px #dbdbdb, inset -5px -5px 16px @--txt-b-pure;
    transition: all 0.5s;

    img {
      width: 95%;
      height: 95%;
    }
  }
}
@media screen and (max-width: 800px) {
  .portfolio .p_cell,
  .portfolio .p_cell .logo {
    width: 14rem;
    height: 14rem;
  }
  .head .title {
    font-size: 1.65rem;
    font-size: 1.65rem;
  }
}
@media screen and (max-width: 700px) {
  .portfolio .p_cell,
  .portfolio .p_cell .logo {
    width: 13rem;
    height: 13rem;
  }
  .head .title {
    font-size: 1.55rem;
    font-size: 1.55rem;
  }
}

@media screen and (max-width: 600px) {
  .portfolio .p_cell,
  .portfolio .p_cell .logo {
    width: 12rem;
    height: 12rem;
  }
  .head .title {
    font-size: 1.45rem;
    font-size: 1.45rem;
  }
}
@media screen and (max-width: 500px) {
  .portfolio .p_cell,
  .portfolio .p_cell .logo {
    width: 13rem;
    height: 13rem;
  }
  .head .title {
    font-size: 1.35rem;
    font-size: 1.35rem;
  }
}
@media screen and (max-width: 400px) {
  .portfolio .p_cell,
  .portfolio .p_cell .logo {
    width: 12rem;
    height: 12rem;
  }
  .head .title {
    font-size: 1.25rem;
    font-size: 1.25rem;
  }
}
@media screen and (max-width: 300px) {
  .portfolio .p_cell,
  .portfolio .p_cell .logo {
    width: 11rem;
    height: 11rem;
  }
  .head .title {
    font-size: 1.15rem;
    font-size: 1.15rem;
  }
}
</style>
