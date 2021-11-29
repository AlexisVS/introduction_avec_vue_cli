<template>
  <div id="app">
    <Card/>
  </div>
</template>

<script>
import Card from "./components/Card.vue"

export default {
  name: 'App',
  components: {
    Card,
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
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: #edf2f8;
}
</style>
