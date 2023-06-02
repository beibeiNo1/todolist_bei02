<template>
  <div class="row">
    <div v-show="info.users.length">
      <div class="card" v-for="user in info.users" :key="user.id">
        <a :href="user.html_url" target="_blank">
          <img :src="user.avatar_url" style='width: 100px' />
        </a>
        <p class="card-text">xxxxxx</p>
      </div>
    </div>
    <div v-if="info.isFirst">
      <h1>欢迎使用！</h1>
    </div>
    <div v-if="info.isLoading">
      <h1>加载中。。。</h1>
    </div>
    <div v-if="info.errMsg">
      <h1>{{ info.errMsg }}</h1>
    </div>
  </div>
</template>

<script>

export default {
  name: 'List',
  data() {
    return {
      info: {
        isFirst: true,
        isLoading: false,
        errMsg: '',
        users: {},
      },
    }
  },
  methods: {

  },
  mounted() {
    // 全局事件总线
    this.$bus.$on('updataUserData', (dataObj) => {
      this.info = { ...this.info, ...dataObj }
    })
  },
}
</script>

<style>
.album {
  min-height: 50rem;
  /* Can be removed; just added for demo purposes */
  padding-top: 3rem;
  padding-bottom: 3rem;
  background-color: #f7f7f7;
}

.card {
  float: left;
  width: 33.333%;
  padding: .75rem;
  margin-bottom: 2rem;
  border: 1px solid #efefef;
  text-align: center;
}

.card>img {
  margin-bottom: .75rem;
  border-radius: 100px;
}

.card-text {
  font-size: 85%;
}
</style>
