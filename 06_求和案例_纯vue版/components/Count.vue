<!--  -->
<template>
  <div>
    当前数值之和：{{ sum }}
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
      sum: 0,
    };
  },

  components: {},

  computed: {},

  mounted(){},
  
  methods: {
    increment(){
      this.sum += this.n;
    },
    decrement(){
      this.sum -= this.n;
    },
    incrementOdd(){
      if(this.sum % 2){
        this.sum += this.n;
      }
    },
    incrementWait(){
      setTimeout(()=>{
        this.sum += this.n;
      },500)
    },
  }
}

</script>
<style scoped>
</style>