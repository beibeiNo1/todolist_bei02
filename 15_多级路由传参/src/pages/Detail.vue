<!--  -->
<template>
  <div>
    <ul>
        <li>消息编号：{{$route.query.id}}</li>
        <li>消息标题：{{$route.query.name}}</li>
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

  components: {},

  computed: {},

  mounted(){},

  methods: {}
}

</script>
<style lang='stylus' scoped>
</style>