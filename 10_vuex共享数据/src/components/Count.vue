<!--  -->
<template>
  <div>
    <h3 style="color:red;">person组件的总人数{{ personList.length }}</h3>
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
  <!-- <button @click="increment(n)">+</button>
      <button @click="decrement(n)">-</button> -->
    <button @click="JIA(n)">+</button>
    <button @click="JIAN(n)">-</button>
    <button @click="incrementOdd(n)">为奇数再加</button>
    <button @click="incrementWait(n)">等一等再加</button>
  </div>
</template>

<script>
import { mapState, mapGetters, mapMutations, mapActions } from 'vuex';
export default {
  name: 'Count',
  data() {
    return {
      n: 1,
    };
  },

  components: {},

  computed: {
    ...mapState({ sum: 'sum', school: 'school', subject: 'subject' , personList: 'personList'}),
    ...mapGetters(['bigSum']),
  },

  mounted() {

  },

  methods: {
    // increment(){
    //   this.$store.commit('JIA',this.n)
    // },
    // decrement(){
    //   this.$store.commit('JIAN',this.n)
    // },
    /*     incrementOdd(){
          this.$store.dispatch('jiaOdd', this.n)
        },
        incrementWait(){
          this.$store.dispatch('jiaWait', this.n)
        },
     */
    // ...mapActions({ increment: 'jiaOdd', decrement: 'jiaWait' }),
    ...mapActions({ incrementOdd: 'jiaOdd', incrementWait: 'jiaWait' }),
    ...mapMutations(['JIA', 'JIAN']),
  },
}

</script>
<style scoped></style>