<!--  -->
<template>
  <div>
    当前数值之和：{{ sum }}
    <br>
    当前数值之和放大10倍后：{{ bigSum }}
    <br>
    我在{{ school }}，学习{{ subject }}课程
    
    <br>
    <select name="" id="" v-model="n">
      <option :value=1>1</option>
      <option :value=2>2</option>
      <option :value=3>3</option>
    </select>
    <br>
    <button @click="increment">+</button>
    <button @click="decrement">-</button>
    <button @click="incrementOdd">为奇数再加</button>
    <button @click="incrementWait">等一等再加</button>
  </div>
</template>

<script>
import { mapState, mapGetters } from 'vuex';
export default {
name: 'Count',
  data () {
    return {
      n: 1,
    };
  },

  components: {},

  computed: {
    ...mapState({sum:'sum',school:'school',subject:'subject'}),
    ...mapGetters(['bigSum']),
  },

  mounted() {
   
  },
  
  methods: {
    increment(){
      this.$store.commit('JIA',this.n)
    },
    decrement(){
      this.$store.commit('JIAN',this.n)
    },
    incrementOdd(){
      this.$store.dispatch('jiaOdd', this.n)
    },
    incrementWait(){
      this.$store.dispatch('jiaWait', this.n)
    },
  }
}

</script>
<style scoped>
</style>