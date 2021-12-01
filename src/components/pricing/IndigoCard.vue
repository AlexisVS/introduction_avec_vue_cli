<template>
  <div
    class="flex flex-col w-80 items-center justify-center bg-indigo-500 rounded-lg px-8 py-12 text-white"
  >
    <p class="font-bold mb-2">{{ card.name }}</p>
    <p class="text-6xl font-black flex items-center my-4">
      <span class="text-4xl font-semiBold">$</span>
      {{ currentPrice.cardProfessionalPrice }}
    </p>
    <hr class="w-full my-4 bg-white" />
    <p class="text-sm font-bold">{{ card.storage }}</p>
    <hr class="w-full my-4 bg-white" />
    <p class="text-sm font-bold">{{ card.users }}</p>
    <hr class="w-full my-4 bg-white" />
    <p class="text-sm font-bold">{{ card.stockage }}</p>
    <hr class="w-full my-4 bg-white" />
    <button
      class="border border-1 border-white w-full rounded-md py-2.5 mt-3 transition text-white text-sm tracking-widest font-semibold hover:text-indigo-500 hover:border-white bg-indigo-500 hover:bg-indigo-50"
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