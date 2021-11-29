<template>
  <div id="app">

    <!-- Card -->
    <section class="min-h-screen flex flex-col justify-center items-center">
    <Card/>
    </section>

    <!-- Pricing Component -->
    <section class="min-h-screen flex flex-col justify-center items-center">
    <Pricing/>
    </section>


  </div>
</template>

<script>
import Card from "./components/Card.vue"
import Pricing from './components/Pricing.vue'

export default {
  name: 'App',
  components: {
    Card,
    Pricing,
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  min-height: 100vh;
  background-color: #edf2f8;
}
</style>
