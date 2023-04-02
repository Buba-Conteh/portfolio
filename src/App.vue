<template>
  <!-- <img alt="Vue logo" src="./assets/logo.png" /> -->
  <div>
    <MainSection />
    <div
      class="absolute top-2 right-2 bg-red-500 w-20 h-auto flex justify-evenly shadow-md shadow-gray-500"
    >
      <div
        class="w-6/12 bg-white h-auto cursor-pointer"
        @click="actvateLightMode"
      >
        <font-awesome-icon icon="fa-solid fa-sun" class="text-black p-2" />
      </div>
      <div
        class="w-6/12 bg-black h-auto cursor-pointer"
        @click="actvateDarkMode"
      >
        <font-awesome-icon icon="fa-solid fa-moon" class="text-white p-2" />
      </div>
    </div>
  </div>
</template>

<script>
// import HeroSection from "./components/HeroSection.vue";
import MainSection from "./components/MainSection.vue";

import "./assets/tailwind.css";

export default {
  name: "App",
  components: {
    MainSection,
  },

  methods: {
    actvateDarkMode() {
      let main = document.getElementById("app");

      main.className = "text-white";
      main.classList.add("dark-mode-bg");
      console.log(main);
    },
    actvateLightMode() {
      let main = document.getElementById("app");

      main.className = "light-mode-bg";
      // main.classList.add("light-mode-bg");
      console.log(main);
    },
  },
};
</script>

<style>
:root {
  --dark-mode-bg: rgba(17, 16, 16, 0.63);
  --dark-mode-text: rgb(241, 236, 236);

  --light-mode-text: #2c3e50;
  --light-mode-bg: rgba(178, 178, 230, 0.699);
}
* {
  box-sizing: border-box;
}
.dark-mode-bg {
  background-color: var(--dark-mode-bg) !important;
  color: var(--dark-mode-text) !important;
}
.light-mode-bg {
  background-color: none;
  color: var(--light-mode-text) !important;
}
/* body {
  background-size: cover;
  background-repeat: no-repeat;
  background-position: center;
  background-image: url("./assets/Hexagon-2.svg") !important;
  overflow: hidden;
} */
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  /* margin-top: 60px; */
  /* background-color: var(--dark-mode-bg); */
  /* background-color: rgba(178, 178, 230, 0.699); */
  background-size: cover;
  background-repeat: no-repeat;
  background-position: center;
  background-image: url("./assets/Hexagon-2.svg") !important;
  overflow: hidden;
  position: relative;
  /* overflow: hidden; */
}
</style>
