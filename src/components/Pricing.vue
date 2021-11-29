<template>
  <div class="w-full min-h-screen px-2 flex flex-col item-center bg-blue-50">
    <h2 class="text-6xl font-bold text-left pl-6 mt-14 mb-28">
      Pricing Component
    </h2>
    <div class="w-full flex flex-col justify-center items-center">
      <h2 class="text-4xl font-bold text-left mb-10">Our Pricing</h2>
      <div class="flex items-center justify-between w-60">
        <p class="font-semibold text-sm text-gray-400 mr-8">Annually</p>
        <!-- Toggle Button -->
        <div class="flex items-center justify-center w-full">
          <label for="toogleA" class="flex items-center cursor-pointer">
            <!-- toggle -->
            <div class="relative">
              <!-- input -->
              <input
                id="toogleA"
                type="checkbox"
                v-bind:value="toggleButtonState"
                @click="
                  toggleToggleButton();"
                class="sr-only"
              />
              <!-- line -->
              <div
                class="w-14 h-7 bg-indigo-300 rounded-full shadow-inner"
              ></div>
              <!-- dot -->
              <div
                class="
                  dot
                  absolute
                  w-6
                  h-6
                  bg-white
                  rounded-full
                  shadow
                  left-1
                  top-0.5
                  transition
                "
              ></div>
            </div>
            <!-- label -->
          </label>
        </div>
        <!-- x-x-x-x-x-x-x -->
        <p class="font-semibold text-sm text-gray-400 ml-8">Monthly</p>
      </div>

      <div class="flex items-center justify-center my-8">
        <!-- White Card -->
        <div
          class="
            flex flex-col
            w-80
            items-center
            justify-center
            bg-white
            rounded-lg
            px-8
            py-7
            shadow-card-white
          "
        >
          <p class="font-bold mb-2">Basic</p>
          <p class="text-6xl font-black flex items-center my-4">
            <span class="text-4xl font-semiBold">$</span>
              {{ currentPrice.cardBasicPrice }}
          </p>
          <hr class="w-full my-4" />
          <p class="text-sm font-bold text-gray-600">500 GB Storage</p>
          <hr class="w-full my-4" />
          <p class="text-sm font-bold text-gray-600">2 Users Allowed</p>
          <hr class="w-full my-4" />
          <p class="text-sm font-bold text-gray-600">Send up to 3 GB</p>
          <hr class="w-full my-4" />
          <button
            class="
              border border-1 border-black
              w-full
              rounded-md
              py-2.5
              mt-3
              transition
              text-indigo-500 text-sm
              tracking-widest
              font-semibold
              hover:text-white
              hover:border-white
              hover:bg-gradient-to-r
              hover:from-indigo-400
              hover:to-indigo-600
            "
          >
            LEARN MORE
          </button>
        </div>
        <!-- x-x-x-x-x-x-x -->
        <!-- Indigo Card -->
        <div
          class="
            flex flex-col
            w-80
            items-center
            justify-center
            bg-indigo-500
            rounded-lg
            px-8
            py-12
            text-white
          "
        >
          <p class="font-bold mb-2">Professional</p>
          <p class="text-6xl font-black flex items-center my-4">
            <span class="text-4xl font-semiBold">$</span>
              {{ currentPrice.cardProfessionalPrice }}
          </p>
          <hr class="w-full my-4 bg-white" />
          <p class="text-sm font-bold">500 GB Storage</p>
          <hr class="w-full my-4 bg-white" />
          <p class="text-sm font-bold">2 Users Allowed</p>
          <hr class="w-full my-4 bg-white" />
          <p class="text-sm font-bold">Send up to 3 GB</p>
          <hr class="w-full my-4 bg-white" />
          <button
            class="
              border border-1 border-white
              w-full
              rounded-md
              py-2.5
              mt-3
              transition
              text-white text-sm
              tracking-widest
              font-semibold
              hover:text-indigo-500 hover:border-white
              bg-indigo-500
              hover:bg-indigo-50
            "
          >
            LEARN MORE
          </button>
        </div>
        <!-- x-x-x-x-x-x-x -->
        <!-- White Card -->
        <div
          class="
            flex flex-col
            w-80
            items-center
            justify-center
            bg-white
            rounded-lg
            px-8
            py-7
            shadow-card-white
          "
        >
          <p class="font-bold mb-2">Master</p>
          <p class="text-6xl font-black flex items-center my-4">
            <span class="text-4xl font-semiBold">$</span>
              {{ currentPrice.cardMasterPrice }}
          </p>
          <hr class="w-full my-4" />
          <p class="text-sm font-bold text-gray-600">500 GB Storage</p>
          <hr class="w-full my-4" />
          <p class="text-sm font-bold text-gray-600">2 Users Allowed</p>
          <hr class="w-full my-4" />
          <p class="text-sm font-bold text-gray-600">Send up to 3 GB</p>
          <hr class="w-full my-4" />
          <button
            class="
              border border-1 border-black
              w-full
              rounded-md
              py-2.5
              mt-3
              transition
              text-indigo-500 text-sm
              tracking-widest
              font-semibold
              hover:text-white
              hover:border-white
              hover:bg-gradient-to-r
              hover:from-indigo-400
              hover:to-indigo-600
            "
          >
            LEARN MORE
          </button>
        </div>
        <!-- x-x-x-x-x-x-x -->
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "Pricing",
  data: function () {
    return {
      toggleButtonState: false,
      currentPrice: {
        cardBasicPrice: "19.99",
        cardProfessionalPrice: "19.99",
        cardMasterPrice: "19.99",
      },
      monthly: {
        cardBasic: {
          price: "19.99",
        },
        cardProfessional: {
          price: "24.99",
        },
        cardMaster: {
          price: "39.99",
        },
      },
      anually: {
        cardBasic: {
          price: "199.99",
        },
        cardProfessional: {
          price: "249.99",
        },
        cardMaster: {
          price: "399.99",
        },
      },
    };
  },
  methods: {
    toggleToggleButton: function () {
      this.toggleButtonState = !this.toggleButtonState;
      this.changePrice();
    },
    changePrice: function () {
      if (this.toggleButtonState === true) {
        this.currentPrice.cardBasicPrice = this.anually.cardBasic.price;
        this.currentPrice.cardProfessionalPrice = this.anually.cardProfessional.price;
        this.currentPrice.cardMasterPrice = this.anually.cardMaster.price;
      } else {
        this.currentPrice.cardBasicPrice = this.monthly.cardBasic.price;
        this.currentPrice.cardProfessionalPrice = this.monthly.cardProfessional.price;
        this.currentPrice.cardMasterPrice = this.monthly.cardMaster.price;
      }
    },
  },
};
</script>

<style scoped>
/* Toggle A */
#toogleA:checked ~ .dot {
  transform: translateX(100%);
}

.shadow-card-white {
  box-shadow: 0 0 20px 0 rgba(149, 124, 211, 0.165);
}
</style>