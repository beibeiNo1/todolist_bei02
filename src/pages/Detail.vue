<!--  -->
<template>
  <div>
    <ul>
        <!-- <li>消息编号：{{$route.params.id}}</li> -->
        <li>消息编号：{{id}}</li>
        <li>消息标题：{{name}}</li>
    </ul>
  </div>
</template>

<script>
export default {
name: 'Detail',
  data () {
    return {
    };
  },
  props: ['id','name'],

  components: {},

  computed: {},

  mounted(){},

  methods: {}
}

</script>
<style lang='stylus' scoped>
</style>