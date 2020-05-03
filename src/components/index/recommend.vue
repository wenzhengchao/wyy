<template>
  <div class="container">
    <div class="bj"></div>
    <div class="banner">
      <mt-swipe :auto="4000">
        <mt-swipe-item v-for="item in banner" :key="item.picUrl">
          <img :src="item.picUrl" />
        </mt-swipe-item>
      </mt-swipe>
    </div>
    <div class="recommend">
      <h1 class="title">推荐歌单</h1>
      <ul>
        <li v-for="item in recommends" :key="item.id">
          <img :src="item.album.blurPicUrl" alt />
          <span>{{item.name}}</span>
          <span></span>
        </li>
      </ul>
    </div>
  </div>
</template>
<script>
export default {
  data() {
    return {
      banner: [],
      recommends: []
    }
  },
  created() {
    this.login()
    this.img()
    this.recommend()
  },
  methods: {
    async login() {
      const { data: res } = await this.$http.post(
        '/login/cellphone?phone=13588851354&password=980501..'
      )
      console.log(res)
    },
    async img() {
      const { data: res } = await this.$http.get('/banner?type=0')
      this.banner = res.banners
    },
    async recommend() {
      const { data: res } = await this.$http.get('/recommend/songs')
      this.recommends = res.recommend
      console.log(this.recommends)
    }
  }
}
</script>
<style lang="less" scoped>
.container {
  width: 100%;
  .bj {
    position: absolute;
    z-index: -10;
    background-color: #d44439;
    width: 100%;
    height: 220px;
    top: 0;
    left: 0;
  }
}
.banner {
  width: 100%;
  display: flex;
  justify-content: center;
  .mint-swipe {
    height: 140px;
    width: 95%;
    .mint-swipe-item {
      height: 140px;
      width: 100%;
      img {
        width: 100%;
      }
    }
  }
}
.recommend {
  .title {
    height: 55px;
    line-height: 55px;
    color: #2e3030;
    font-weight: 700;
    font-size: 14px;
    padding-left: 10px;
  }
  ul {
    display: flex;
    flex-wrap: wrap;
    padding: 15px;
    li {
      flex: 33.3333%;
      img {
        width: 95%;
      }
    }
  }
}
</style>
