<template>
  <div
    class="flex flex-col w-80 items-center justify-center bg-white rounded-lg px-8 py-7 shadow-card-white"
  >
    <p class="font-bold mb-2">{{card.name}}</p>
    <p class="text-6xl font-black flex items-center my-4">
      <span class="text-4xl font-semiBold">$</span>
      {{ currentPrice.cardBasicPrice }}
    </p>
    <hr class="w-full my-4" />
    <p class="text-sm font-bold text-gray-600">{{card.storage}}</p>
    <hr class="w-full my-4" />
    <p class="text-sm font-bold text-gray-600">{{card.users}}</p>
    <hr class="w-full my-4" />
    <p class="text-sm font-bold text-gray-600">{{card.stockage}}</p>
    <hr class="w-full my-4" />
    <button
      class="border border-1 border-black w-full rounded-md py-2.5 mt-3 transition text-indigo-500 text-sm tracking-widest font-semibold hover:text-white hover:border-white hover:bg-gradient-to-r hover:from-indigo-400 hover:to-indigo-600"
    >LEARN MORE</button>
  </div>
</template>

<script>
export default {
  props: ['card', 'currentPrice'],
}
</script>

<style>
</style>