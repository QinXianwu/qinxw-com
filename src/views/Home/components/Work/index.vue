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
              <img :src="item.logo_url" :title="item.title" />
            </div>
          </div>
        </template>
      </div>
    </div>
  </div>
</template>
<script>
import MeetFood from "@/assets/image/MeetFood-logo.png";
export default {
  data: function () {
    return {
      portfolio: [
        {
          title: "遇见食途小程序",
          logo_url: MeetFood,
          description: "描述",
        },
        {},
        {},
      ],
    };
  },
};
</script>
<style lang="less" scoped>
.work {
  min-height: 30rem;
  background-color: rgb(245, 245, 245);
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

.portfolio {
  display: flex;
  align-items: center;
  justify-content: center;
  // flex-wrap 属性规定flex容器是单行或者多行
  flex-wrap: wrap;
  .p_cell {
    width: 17rem;
    height: 17rem;
    padding: 1rem;
    margin: 1rem;
    background: #fff;
    box-shadow: 0 0.1rem 0.3rem #999;
    transition: all 0.5s;
  }
  .p_cell .logo {
    width: 17rem;
    height: 17rem;
    cursor: pointer;
    display: flex;
    align-items: center;
    justify-content: center;
    background: #ffffff;
    box-shadow: inset 5px 5px 16px #dbdbdb, inset -5px -5px 16px #ffffff;
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
    width: 16rem;
    height: 16rem;
  }
}
@media screen and (max-width: 700px) {
  .portfolio .p_cell,
  .portfolio .p_cell .logo {
    width: 15rem;
    height: 15rem;
  }
}

@media screen and (max-width: 600px) {
  .portfolio .p_cell,
  .portfolio .p_cell .logo {
    width: 14rem;
    height: 14rem;
  }
}
@media screen and (max-width: 500px) {
  .portfolio .p_cell,
  .portfolio .p_cell .logo {
    width: 13rem;
    height: 13rem;
  }
}
@media screen and (max-width: 400px) {
  .portfolio .p_cell,
  .portfolio .p_cell .logo {
    width: 12rem;
    height: 12rem;
  }
}
@media screen and (max-width: 300px) {
  .portfolio .p_cell,
  .portfolio .p_cell .logo {
    width: 11rem;
    height: 11rem;
  }
}
</style>
