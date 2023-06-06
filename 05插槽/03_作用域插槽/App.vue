<template>
  <div class="container">
    <Category title="美食">
      <template  scope="{games}">
        <ul>
          <li v-for="(item, index) in games" :key="index">{{ item }}</li>
        </ul>
        </template>
    </Category>
  </div>
</template>

<script>
import Category from './components/Category.vue'
export default {
  name: 'App',
  data() {
    return {
    }
  },
  components: {
    Category,
  },
}
</script>

<style >
.container,
.foot {
  display: flex;
  justify-content: space-around;
}

img {
  width: 100%;
}

video {
  width: 100%;
}
</style>
