<template>
  <div class="w-full min-h-screen px-2 flex flex-col item-center bg-blue-50">
    <h2 class="text-6xl font-bold text-left pl-6 mt-14 mb-28">Pricing Component</h2>
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
              <div class="w-14 h-7 bg-indigo-300 rounded-full shadow-inner"></div>
              <!-- dot -->
              <div
                class="dot absolute w-6 h-6 bg-white rounded-full shadow left-1 top-0.5 transition"
              ></div>
            </div>
            <!-- label -->
          </label>
        </div>
        <!-- x-x-x-x-x-x-x -->
        <p class="font-semibold text-sm text-gray-400 ml-8">Monthly</p>
      </div>

      <div class="flex items-center justify-center my-8">
        <WhiteCard :card="card[0]" :currentPrice="currentPrice" :key="first" />
        <IndigoCard :card="card[1]" :currentPrice="currentPrice" />
        <WhiteCard :card="card[2]" :currentPrice="currentPrice" :key="second" />
      </div>
    </div>
  </div>
</template>

<script>
import WhiteCard from "./WhiteCard.vue";
import IndigoCard from "./IndigoCard.vue";
export default {
    name: "Pricing",
    components: {
    WhiteCard,
    IndigoCard,
},
    data: function () {
        return {
            toggleButtonState: false,
            currentPrice: {
                cardBasicPrice: "19.99",
                cardProfessionalPrice: "24.99",
                cardMasterPrice: "39.99",
            },
            card: [
                {
                    name: "Basic",
                    storage: "500 GB Storage",
                    users: "2 Users Allowed",
                    stockage: "Send up to 3 GB",
                },
                {
                    name: "Professional",
                    storage: "1 TB Storage",
                    users: "5 Users Allowed",
                    stockage: "Send up to 10 GB",
                },
                {
                    name: "Master",
                    storage: "2 Tb Storage",
                    users: "10 Users Allowed",
                    stockage: "Send up to 20 GB",
                },
            ],
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
            }
            else {
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