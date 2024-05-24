<template>
  <div id="app">
    <NavBar />
    <router-view></router-view>
  </div>
</template>

<script>
import NavBar from './components/nav-bar'

export default {
  name: 'app',
  components: {
    NavBar
  }
}

</script>

<style>

</style>