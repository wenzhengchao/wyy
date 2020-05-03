<template>
  <div id="app">
    <div class="header">
      <div class="title">GGYaoRoll</div>
      <div class="list">
        <i class="mui-icon mui-icon-bars"></i>
      </div>
      <div class="search">
        <i class="mui-icon mui-icon-search"></i>
      </div>
    </div>
    <div class="tab">
      <div class="tabitem" @click="router('recommend')">
        <span :class="routers==='/recommend'?'active':''">推荐</span>
      </div>
      <div class="tabitem" @click="router('rank')">
        <span :class="routers==='/rank'?'active':''">排行</span>
      </div>
      <div class="tabitem" @click="router('singer')">
        <span :class="routers==='/singer'?'active':''">歌手</span>
      </div>
    </div>
    <router-view></router-view>
  </div>
</template>
<script>
export default {
  data() {
    return {
      routers: ''
    }
  },
  created() {
    this.routers = this.$route.path
  },
  methods: {
    router(id) {
      this.$router.push('/' + id)
      this.routers = this.$route.path
    }
  }
}
</script>
<style lang="less" scoped>
.header {
  width: 100%;
  height: 44px;
  position: relative;
  color: #f1f1f1;
  background-color: #d44439;
  text-align: center;
  border-bottom: 1px solid rgba(255, 255, 255, 0.3);
  .title {
    height: 44px;
    font-size: 16px;
    line-height: 44px;
    font-weight: 700;
    letter-spacing: 3px;
  }
  .list {
    position: absolute;
    top: 10px;
    left: 5px;
  }
  .search {
    position: absolute;
    top: 10px;
    right: 5px;
  }
}
.tab {
  display: flex;
  height: 44px;
  width: 100%;
  line-height: 44px;
  background-color: #d44439;
  font-size: 14px;
  .tabitem {
    flex: 1;
    text-align: center;
    color: #e4e4e4;
  }
}
.active {
  font-weight: 700;
  color: #f1f1f1;
  border-bottom: 2px solid #f1f1f1;
}
</style>
