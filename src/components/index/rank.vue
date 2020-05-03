<template>
  <div>
    <ul>
      <li v-for="item in rank" :key="item.id" class="item">
        <img :src="item.coverImgUrl" alt />
      </li>
    </ul>
  </div>
</template>
<script>
export default {
  data() {
    return {
      rank: [],
      content: []
    }
  },
  created() {
    this.getrank()
    this.getcontent()
  },
  methods: {
    async getrank() {
      const { data: res } = await this.$http.get('/toplist')
      this.rank = res.list
    },
    async getcontent() {
      const { data: res } = await this.$http.get('/top/list?idx=6')
      console.log(res)
    }
  }
}
</script>
<style lang="less" scoped>
.item {
  height: 107px;
  margin: 0px 10px;
  padding: 3px 0;
  border-bottom: 1px solid #e4e4e4;
  display: flex;
  img {
    width: 100px;
    height: 100px;
  }
}
</style>
