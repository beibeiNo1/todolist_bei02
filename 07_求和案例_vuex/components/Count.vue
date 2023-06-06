<!--  -->
<template>
  <div>
    当前数值之和：{{ $store.state.sum }}
    当前数值之和放大10倍后：{{ $store.getters.bigSum }}
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
export default {
name: 'Count',
  data () {
    return {
      n: 1,
    };
  },

  components: {},

  computed: {},

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