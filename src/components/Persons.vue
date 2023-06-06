<!--  -->
<template>
  <div>
    <h3 style="color:red;">count组件的和为{{ this.$store.state.countAbout.sum }}</h3>
    <input type="text" v-model="name">
    <button @click="addPerson">添加</button>  
    <button @click="addPersonWang">添加一个姓王的人</button>  
    <button @click="addPersonServer">添加一个人，姓名随机</button>  
    <ul>
      <li v-for="p in personList" :key="p.id">{{ p.name }}</li>
    </ul>
    <h3>数组中第一个人的名字：{{ this.$store.getters['personAbout/firstPersonName'] }}</h3>
  </div>
</template>

<script>
import {nanoid} from 'nanoid'
export default {
  name: 'Persons',
  data() {
    return {
      name: '',
    };
  },

  computed: {
    personList(){
      return this.$store.state.personAbout.personList
    },

  },

  methods: {
    addPerson(){
      const personObj={id: nanoid(), name: this.name}
      this.$store.commit('personAbout/addPerson',personObj)
      this.name=''
    },
    addPersonWang(){
      const personObj = { id: nanoid(), name: this.name }
      this.$store.dispatch('personAbout/addPersonWang',personObj)
      this.name = ''
    },
    addPersonServer(){
      this.$store.dispatch('personAbout/addPersonServer')
      this.name = ''
    },
  },
}

</script>
<style scoped></style>