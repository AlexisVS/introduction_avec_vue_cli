<template>
  <div class="w-full px-2 flex flex-col item-center">
    <h2 class="text-6xl font-bold text-left pl-6 mb-24">Our Pricing</h2>
    <div class="w-full lg:w-8/12 flex flex-col justify-center items-center">
    <h2 class="text-6xl font-bold text-left pl-6 mb-24">Our Pricing</h2>
      <div class="flex items-center justify-between w-60">
        <p class="font-semibold text-sm text-gray-400 mr-8">Annually</p>
        <!-- Toggle Button -->
        <div class="flex items-center justify-center w-full">
          <label for="toogleA" class="flex items-center cursor-pointer">
            <!-- toggle -->
            <div class="relative">
              <!-- input -->
              <input id="toogleA" type="checkbox" class="sr-only" />
              <!-- line -->
              <div class="w-14 h-7 bg-indigo-300 rounded-full shadow-inner"></div>
              <!-- dot -->
              <div class=" dot absolute w-6 h-6 bg-white rounded-full shadow left-1 top-0.5 transition"></div>
            </div>
            <!-- label -->
          </label>
        </div>
        <!-- x-x-x-x-x-x-x -->

        <p class="font-semibold text-sm text-gray-400 ml-8">Monthly</p>
      </div>

      <div class="flex items-center justify-center"></div>
    </div>
  </div>
</template>

<script>
export default {};
</script>

<style>
/* Toggle A */
#toogleA:checked ~ .dot {
  transform: translateX(100%);
}
</style>