<!--  -->
<template>
  <div class="category">
    <h3 class="">{{ title }}</h3>
    <slot :games="games"></slot>
  </div>
</template>

<script>
export default {
name: 'Category',
  data () {
    return {
      games: ['火锅', '烧烤', '小龙虾', '牛排111'],
    };
  },
  props: ['title'],

  components: {},

  computed: {},

  mounted(){},
  
  methods: {}
}

</script>
<style scoped>
.category{
  background-color: skyblue;
  width: 200px;
  height: 300px;
}
.category h3{
    background-color: orange;
    text-align: center;
}
.category ul li{

}
</style>