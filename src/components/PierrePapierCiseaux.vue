<template>
  <div class="min-h-screen w-full flex flex-col items-center justify-center PierrePapierCiseaux">
    <!-- <img src="../../public/images/pierre_papier_ciseaux/bg-pentagon.svg" alt=""> -->
    <!-- <img src="../../public/images/pierre_papier_ciseaux/bg-triangle.svg" alt=""> -->
    <!-- <img src="../../public/images/pierre_papier_ciseaux/icon-close.svg" alt=""> -->
    <!-- <img src="../../public/images/pierre_papier_ciseaux/icon-lizard.svg" alt=""> -->
    <!-- <img src="../../public/images/pierre_papier_ciseaux/icon-spock.svg" alt=""> -->
    <!-- <img src="../../public/images/pierre_papier_ciseaux/image-rules-bonus.svg" alt=""> -->

    <!-- <img src="../../public/images/pierre_papier_ciseaux/logo-bonus.svg" alt=""> -->
    <div class="h-160 w-full">
      <div class="w-full h-full flex flex-col justify-between items-center mt-14">
        <!-- /* -------------------------------------------------------------------------- */
      /*                                  Controls                                  */
        /* -------------------------------------------------------------------------- */-->
        <!-- Score Board -->
        <div
          v-show="showRules == false"
          class="w-160 flex justify-between items-center border-gray-200 border-2 rounded-lg p-6"
        >
          <img src="../assets/images/pierre_papier_ciseaux/logo.svg" alt />
          <div class="bg-white flex flex-col justify-center px-10 py-5 rounded-lg">
            <span class="text-sm text-blue-600 font-semibold tracking-wider uppercase">score</span>
            <span id="scoreDisplay" class="text-5xl font-semibold text-gray-700">{{ score }}</span>
          </div>
        </div>

        <!-- Mise View -->
        <div
          v-show="showRules == false"
          class="flex items-center justify-around px-6 w-160"
          v-if="userSelected === null && robotSelected === null"
        >
          <img
            v-for="mise in mises"
            :key="mise.id"
            :src="mise.filePath"
            @click="userSelectMise(mise.id)"
            alt
            class="flex items-center justify-center bg-white w-28 h-28 p-5 rounded-full bg-opacity-80 fill-current hover:text-gray-200 hover:bg-indigo-300"
          />
        </div>

        <!-- Mise Users selected View -->
        <div
          class="flex items-center justify-between px-6 w-160"
          v-show="userSelected !== null && showRules == false"
        >
          <img
            :src="userSelectedFilePath"
            alt
            :class="userSelected !== Number ? 'fill-current hover:text-gray-200 hover:bg-indigo-300' : ''"
            class="flex items-center justify-center bg-white w-56 h-56 p-5 rounded-full bg-opacity-80"
          />

          <!-- Restart Panel -->
          <div v-show="launchRestartPanel && showRules == false">
            <p>{{ winner == "robot" ? "You lose" : (winner === "" ? "Equality" : "You win") }}</p>
            <button @click="resetSettings()" class="border px-2 py-1 rounded-md">play again</button>
          </div>

          <img
            :src="robotSelectedFilePath"
            alt
            @click="robotDisableClick && robotSelectMise()"
            :class="robotSelected !== Number ? 'fill-current hover:text-gray-200 hover:bg-indigo-300' : '' && winner == 'robot' ? 'bg-green-400' : null"
            class="flex items-center justify-center bg-white w-56 h-56 p-5 rounded-full bg-opacity-80"
          />
        </div>

        <!-- Rules -->
        <div v-show="showRules === true">
          <p class="text-center">RULES</p>
          <img :src="rulesImg" alt />
        </div>
        <!-- Button RUles -->
        <button
          @click="displayRules()"
          class="px-7 w-max uppercase text-sm py-2 font-bold tracking-wider border rounded-lg self-end mr-9 mb-8"
        >Rules</button>
      </div>
    </div>
  </div>
</template>

<script>
import papier from "../assets/images/pierre_papier_ciseaux/icon-paper.svg";
import pierre from "../assets/images/pierre_papier_ciseaux/icon-rock.svg";
import ciseaux from "../assets/images/pierre_papier_ciseaux/icon-scissors.svg";
import rules from "../assets/images/pierre_papier_ciseaux/image-rules.svg";

export default {
  data: function () {
    return {
      score: 0,
      userSelected: null,
      robotSelected: null,
      robotDisableClick: true,
      launchRestartPanel: null,
      winner: null,
      showRules: false,
      rulesImg: rules,
      mises: [
        {
          id: 1,
          name: "pierre",
          filePath: pierre,
        },
        {
          id: 2,
          name: "papier",
          filePath: papier,
        },
        {
          id: 3,
          name: "ciseaux",
          filePath: ciseaux,
        },
      ]
    }
  },
  methods: {
    userSelectMise: function (miseId) {
      return this.userSelected = miseId;
    },
    robotSelectMise: function () {
      this.robotDisableClick = false;
      this.robotSelected = Math.floor(Math.random() * 3) + 1;
      // Egalité
      if ((this.userSelected == this.robotSelected)
        || (this.userSelected == this.robotSelected)
        || (this.userSelected == this.robotSelected)) {
        this.launchRestartPanel = true;
        this.winner = "";
      }
      // Win
      else if (this.userSelected == 1 && this.robotSelected == 3
        || this.userSelected == 2 && this.robotSelected == 1
        || this.userSelected == 3 && this.robotSelected == 2) {
        this.launchRestartPanel = true;
        this.winner = "user";
        this.score++;
      }
      // Loose
      else if (this.userSelected == 1 && this.robotSelected == 2
        || this.userSelected == 2 && this.robotSelected == 3
        || this.userSelected == 3 && this.robotSelected == 1) {
        this.launchRestartPanel = true;
        this.winner = "robot"
        this.score--;
      }
    },
    resetSettings: function () {
      this.userSelected = null;
      this.robotSelected = null;
      this.robotDisableClick = true;
      this.launchRestartPanel = null;
      this.winner = null;
    },
    displayRules: function () {
      this.showRules = !this.showRules;
    },
  },
  computed: {
    userSelectedFilePath: function () { return this.userSelected !== null && this.mises[this.userSelected - 1].filePath },
    robotSelectedFilePath: function () { return this.robotSelected !== null && this.mises[this.robotSelected - 1].filePath },
  }
};
</script>

<style scoped>
.PierrePapierCiseaux,
.PierrePapierCiseaux > *|* {
  background-color: #14173a;
  color: white;
  fill: white;
  border-color: white;
}
</style>
