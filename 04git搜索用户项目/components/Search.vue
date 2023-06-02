<template>
  <section class="jumbotron">
    <h3 class="jumbotron-heading">Search Github Users</h3>
    <div>
      <input type="text" placeholder="enter the name you search" v-model="keyWord" />&nbsp;<button
        @click="searchUsers(keyWord)">Search</button>
    </div>
  </section>
</template>

<script>
import axios from 'axios'
export default {
  name: 'Search',
  data() {
    return {
      keyWord: '',
    }
  },
  methods: {
    searchUsers() {
      // console.log(this);
      this.$bus.$emit('updataUserData', { isFirst: false, isLoading: true, errMsg: '', users: [] })
      // this.$http.get(`https://api.github.com/search/users?q=${this.keyWord}`).then(
      axios.get(`https://api.github.com/search/users?q=${this.keyWord}`).then(
        response => {
          console.log('接收成功：', response.data);
          this.$bus.$emit('updataUserData', { isLoading: false, errMsg: '', users: response.data.items })
        },
        error => {
          console.log('接收失败：', error.message);
          this.$bus.$emit('updataUserData', { isLoading: false, errMsg: error.message, users: [] })
        }
      )
    },
  },

}
</script>
