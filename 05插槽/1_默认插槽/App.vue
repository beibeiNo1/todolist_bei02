<template>
  <div class="container">
    <!-- <Category title="美食" :listData="food" />
    <Category title="游戏" :listData="games" />
    <Category title="电影" :listData="films" /> -->
    <Category title="美食">
      <img src="https://www.baidu.com/img/PCtm_d9c8750bed0b3c7d089fa7d55720d6cf.png" alt="">
    </Category>
    <Category title="游戏">
      <ul class="">
        <li v-for="(g, index) in games" :key="index">{{ g }}</li>
      </ul>
    </Category>
    <Category title="电影">
      <video controls src="http://clips.vorwaerts-gmbh.de/big_buck_bunny.mp4"></video>
    </Category>
  </div>
</template>

<script>
import Category from './components/Category.vue'
export default {
  name: 'App',
  data() {
    return {
      food: ['火锅', '烧烤', '小龙虾', '牛排'],
      games: ['火锅', '烧烤', '小龙虾', '牛排111'],
      films: ['火锅', '烧烤', '小龙虾', '牛排222'],
    }
  },
  components: {
    Category,
  },
}
</script>

<style scoped>
.container {
  display: flex;
  justify-content: space-around;
}
img{
  width: 100%;
}
video{
  width: 100%;
}
</style>
