<template>
  <div id="app">
    <button @click="getStudentData">获取学生数据</button>
    <button @click="getCarsData">获取汽车数据</button>
  </div>
</template>

<script>
import axios from 'axios'
export default {
  name: 'SchoolVue',
  data() {
    return {
    }
  },
  methods: {
    getStudentData(){
      axios.get('http://localhost:8081/atguigu/students').then(
        response => {
          console.log('请求成功', response.data);
        },
        error => {
          console.log('请求失败', error.message);
        }
      )
    },
    getCarsData(){
      axios.get('http://localhost:8081/demo/cars').then(
        response => {
          console.log('请求成功', response.data);
        },
        error => {
          console.log('请求失败', error.message);
        }
      )
    },
  },
}
</script>

<style scoped>
h1 {
  background-color: orange;
}
</style>
