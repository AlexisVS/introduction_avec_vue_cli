<template>
  <div
    class="min-h-screen w-full"
    style="background-image: url('./images/signupForm/bg-intro-desktop.png')"
  >
    <div
      class="
        min-h-screen
        w-full
        bg-red-600 bg-opacity-60
        flex
        items-center
        justify-center
      "
    >
      <div class="min-h-screen w-8/12 flex items-center">
        <!-- text -->
        <div class="w-1/2 flex flex-col justify-center text-white">
          <h2 class="text-5xl font-bold text-left">
            Learn to code by watching others
          </h2>
          <p class="mt-4 text-left">
            See how experienced developers solve problems in real-time. Watching
            scripted tutorials is great, but understanding how developers think
            is invaluable.
          </p>
        </div>

        <!-- Form -->
        <div class="w-1/2 flex flex-col justify-center">
          <p
            class="
              text-white
              w-full
              py-4
              bg-purple-600
              rounded-lg
              shadow-2xl
              hover:bg-white hover:text-purple-600
              mb-6
            "
          >
            <span class="font-bold">Try it free 7 days</span>
            then $20/mo. thereafter
          </p>

          <ul>
            <li v-for="(error, index) in errors" v-bind:key="error+index">{{error}}</li>
          </ul>

          <form
            class="bg-white p-10 rounded-lg"
            v-on:submit.prevent="submitForm"
          >
            <input
              type="text"
              placeholder="Name"
              v-model="form.name"
              name="name"
              class="w-full border-black border-2 rounded-md"
            />
            <input
              type="text"
              placeholder="Last name"
              v-model="form.lastName"
              name="lastName"
              class="w-full border-black border-2 rounded-md"
            />
            <input
              type="text"
              placeholder="Email"
              v-model="form.email"
              name="email"
              class="w-full border-black border-2 rounded-md"
            />
            <input
              type="text"
              placeholder="Password"
              v-model="form.password"
              name="password"
              class="w-full border-black border-2 rounded-md"
            />
            <input type="submit" value="save" />
          </form>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "signupForm",
  data: function () {
    return {
      errors: {},
      form: {
        name: null,
        lastName: null,
        email: null,
        password: null,
      },
    };
  },
  methods: {
    submitForm: function () {
      this.errors = {};

      if (!this.form.name) {
        this.errors.name ='Name required.';
      }
      if (!this.form.lastName) {
        this.errors.lastName = 'Last Name required.';
      }
      if (!this.form.email) {
        this.errors.email = 'Email required.';
      }
      if (!this.form.password) {
        this.errors.password = 'Password required.';
      }
    },
  },
};
</script>

<style>
</style>