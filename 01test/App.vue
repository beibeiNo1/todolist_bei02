<template>
  <div id="app">
    <!-- 子传父 -->
    <!-- 方法一：父传函数给子，子调用函数传参 -->
    <School :getSchoolName="getSchoolName"/>
    <!-- 方法二：子绑定自定义事件 v-on: -->
    <Student v-on:atguigu="getStudentName"/>
    <!-- <Student v-on:atguigu.once="getStudentName"/> -->
    <!-- <Student @atguigu.once="getStudentName"/> -->
    <!-- 方法三：子绑定自定义事件，ref -->
    <Student ref="student"/>
  </div>
</template>

<script>
import School from './components/School.vue'
import Student from './components/Student.vue'

export default {
  name: 'App',
  components: {
    School,
    Student,
  },
  data() {
    return {

    }
  },
  methods: {
    getSchoolName(name){
      console.log('APP接收到学校参数了：',name);
    },
    getStudentName(name){
      console.log('APP接收到学生参数了：',name);
    },
  },
  mounted(){
    setTimeout(()=>{
        // this.$refs.student.$on('atguigu',this.getStudentName);
        this.$refs.student.$once('atguigu',this.getStudentName);
    },1000)
    // this.$refs.student.$on('atguigu',this.getStudentName);
  },
}
</script>

<style>

</style>
