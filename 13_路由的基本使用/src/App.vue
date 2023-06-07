<template>
  <div>
    <div class="row">
      <div class="col-xs-offset-2 col-xs-8">
        <banner/>
      </div>
    </div>
    <div class="row">
      <div class="col-xs-2 col-xs-offset-2">
        <div class="list-group">
          <router-link class="list-group-item" active-class="active" to="/home">Home</router-link>
          <router-link class="list-group-item" active-class="active" to="/about">About</router-link>
        </div>
      </div>
      <div class="col-xs-6">
        <div class="panel">
          <div class="panel-body">
            <router-view></router-view>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import About from './pages/About.vue'
import Home from './pages/Home.vue'
import Banner from './components/Banner.vue'
export default {
  name: 'App',
  data() {
    return {

    }
  },
  components: {
    About,
    Home,
    Banner,
  },
}
</script>

<style ></style>
