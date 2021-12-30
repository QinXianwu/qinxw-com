<template>
  <div id="_404_">
    <div class="fof">
      <h1>Error 404</h1>
    </div>
  </div>
</template>
<script>
export default {
  data() {
    return {};
  },
  methods: {},
};
</script>
<style lang="less" scoped>
#_404_ {
  display: table;
  width: 100%;
  height: 100vh;
  text-align: center;
  transition: all 0.6s;
  font-family: "Lato", sans-serif;
  color: #888;
  margin: 0;
  background: #fff;
}

.fof {
  display: table-cell;
  vertical-align: middle;
  position: relative;
  top: -2rem;
}

.fof h1 {
  font-size: 4rem;
  display: inline-block;
  padding-right: 1rem;
  line-height: 4rem;
  transition: all 0.5s;
  animation: type 0.5s alternate infinite;
}

@keyframes type {
  from {
    box-shadow: inset -3px 0px 0px #888;
  }
  to {
    box-shadow: inset -3px 0px 0px transparent;
  }
}

@media screen and (max-width: 500px) {
  .fof h1 {
    font-size: 3.5rem;
    line-height: 3.5rem;
  }
}
@media screen and (max-width: 400px) {
  .fof h1 {
    font-size: 3rem;
    line-height: 3rem;
  }
}
@media screen and (max-width: 300px) {
  .fof h1 {
    font-size: 2.5rem;
    line-height: 2.5rem;
  }
}
</style>
