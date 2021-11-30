<template>
  <div id="app">
    <!-- Card -->
    <section class="min-h-screen flex flex-col justify-center items-center">
      <Card />
    </section>

    <!-- Pricing Component -->
    <section class="min-h-screen flex flex-col justify-center items-center">
      <Pricing />
    </section>

    <!-- Signup Form Component -->
    <section class="min-h-screen flex flex-col justify-center items-center">
      <SignupForm />
    </section>

    <!-- Signup Form Component -->
    <section class="min-h-screen flex flex-col justify-center items-center">
      <Slider />
    </section>
    
  </div>
</template>

<script>
import Card from "./components/Card.vue";
import Pricing from "./components/Pricing.vue";
import SignupForm from "./components/SignupForm.vue";
import Slider from './components/Slider.vue'

export default {
  name: "App",
  components: {
    Card,
    Pricing,
    SignupForm,
    Slider,
  },
};
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
