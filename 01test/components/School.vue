<template>
  <div id="app">
    <h1>学校名称： {{ name }}</h1>
    <h2>学生名称：{{ studentName }}</h2>
</div>
</template>

<script>
import pubsub from 'pubsub-js'
export default {
  name: 'SchoolVue',
  data() {
    return {
      name: '尚硅谷',
      studentName: '',
    }
  },
  props: ['getSchoolName'],
  methods: {
  },
  mounted(){
    this.helloId = pubsub.subscribe('hello',(msgName,data)=>{
      this.studentName = data;
      console.log('school订阅消息',data);
    })
  },
  beforeDestroy(){
    pubsub.unsubscribe(this.helloId)
  },
}
</script>

<style>

</style>
