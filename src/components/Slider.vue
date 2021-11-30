<template>
  <div id="slider" class="min-h-screen w-full">
    <!-- slide 1 -->
    <div class="min-h-screen w-full flex items-center justify-center" :class="index === 0 ? 'flex' : 'hidden'">
    <div class="flex flex-col">
      <h3 class="text-3xl w-160 px-10 transform translate-x-14 z-50 text-left">" I've been interested in coding for a while but nevertaken the jump, until now. I couldn't recommend this course enough. I'm now in the job of my dreams and so excited about the future. "</h3>
      <p class="text-black font-bold text-left text-lg transform translate-x-14 pl-10 mt-10">Tanya Sinclair <span class="text-gray-400">UX Designer</span></p>
    </div>
    <div class="">
      <img src="../../public/images/slider/image-tanya.jpg" class="object-contain transform -translate-x-14 shadow-2xl" alt="">
      <div class="flex justify-between w-24 px-4 py-2 text-2xl font-bold text-gray-400 items-center rounded-full bg-white transform -translate-y-5 z-20">
        <span class="" :class="index === 0 ? 'pointer-events-none' : 'pointer-events-auto cursor-pointer'" @click="goTo(0)">ᐸ</span>
        <span class="" :class="index === 0 ? 'pointer-events-auto cursor-pointer' : 'pointer-events-none'" @click="goTo(1)">ᐳ</span>
      </div>
    </div>
    </div>
    <!-- Slide 2 -->
    <div class="min-h-screen w-full flex items-center justify-center" :class="index === 1 ? 'flex' : 'hidden'">
    <div class="flex flex-col">
      <h3 class="text-3xl w-160 px-10 transform translate-x-14 z-50 text-left">" If you want to lay the best fundation possible i'd recommend taking this course. The depth the instructor go into is incredible. I now feel so confident about starting up as a professional developer.  "</h3>
      <p class="text-black font-bold text-left text-lg transform translate-x-14 pl-10 mt-10">John Tarkpor <span class="text-gray-400">Junior Front-end Developer</span></p>
    </div>
    <div class="">
      <img src="../../public/images/slider/image-john.jpg" class="object-contain transform -translate-x-14 shadow-2xl" alt="">
      <div class="flex justify-between w-24 px-4 py-2 text-2xl font-bold text-gray-400 items-center rounded-full bg-white transform -translate-y-5 z-20">
        <span class="" :class="index === 1 ? 'pointer-events-auto cursor-pointer' : 'pointer-events-none'" @click="goTo(0)">ᐸ</span>
        <span class="" :class="index === 1 ? 'pointer-events-none' : 'pointer-events-auto'" @click="goTo(1)">ᐳ</span>
      </div>
    </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Slider',
  data: function () {
    return {
      index: 0,
      // slides: [...document.querySelector('#slider').children],
    }
  },
  methods: {
    goTo: function(index) {
      this.index = index;
      this.slides.map((e, i) => {
        if (i === index) {
          e.classList.remove('hidden')
        } else {
          e.classList.add('hidden')
        }
      })
    }
  }
}
</script>

<style>

</style>