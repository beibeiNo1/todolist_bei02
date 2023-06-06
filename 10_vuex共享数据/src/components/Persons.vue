<!--  -->
<template>
  <div>
    <h3 style="color:red;">count组件的和为{{ this.$store.state.sum }}</h3>
    <input type="text" v-model="name">
    <button @click="addPerson">添加</button>
    <ul>
      <li v-for="p in personList" :key="p.id">{{ p.name }}</li>
    </ul>
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
      return this.$store.state.personList
    }
  },

  methods: {
    addPerson(){
      const personObj={id: nanoid(), name: this.name}
      this.$store.commit('addPerson',personObj)
      this.name=''
    },
  },
}

</script>
<style scoped></style>