<template>
  <div id="app">
    <h3>学生名字：{{ student.name }}</h3>
    <h3>学生年龄：{{ student.age }}</h3>
    <!-- 方法二 -->
    <button @click="sendStudentName">打印学生名称</button>
  </div>
</template>

<script>
import pubsub from 'pubsub-js';
export default {
  name: 'StudentVue',
  data() {
    return {
      student: {
        name: '张三',
        age: 18,
        grade: '三年级'
      },
    }
  },
  methods: {
    sendStudentName(){
      // this.$emit('atguigu',this.student.name);
      pubsub.publish('hello',this.student.name);
    },
  },
}
</script>

<style>

</style>
