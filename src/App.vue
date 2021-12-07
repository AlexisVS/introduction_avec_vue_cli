<template>
  <div id="app">
    <!-- <div id="nav">
      <router-link to="/about">About</router-link>
    </div> -->
    <div class="w-full bg-gray-900 py-4">
      <div class="w-lg mx-auto flex items-center justify-evenly font-bold uppercase  text-gray-400">
        

      <router-link class="hover:text-white transition duration-700" to="/">Card</router-link>
      <router-link class="hover:text-white transition duration-700" to="/signup-form">signup-form</router-link>
      <router-link class="hover:text-white transition duration-700" to="/pricing">pricing</router-link>
      <router-link class="hover:text-white transition duration-700" to="/slider">slider</router-link>
      <router-link class="hover:text-white transition duration-700" to="/pierre-papier-ciseaux">pierre-papier-ciseaux</router-link>
      </div>
    </div>
    <router-view/>
  </div>
</template>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

#nav {
  padding: 30px;
}

#nav a {
  font-weight: bold;
  color: #2c3e50;
}

#nav a.router-link-exact-active {
  color: #42b983;
}
</style>
