<template>
  <div>

    <Count/>
    <hr>
    <Persons/>
  </div>
</template>

<script>
import Count from './components/Count.vue'
import Persons from './components/Persons.vue'
export default {
  name: 'App',
  data() {
    return {

    }
  },
  components: {
    Count,
    Persons,
  },
}
</script>

<style >
</style>
