<template>
  <!-- <img alt="Vue logo" src="./assets/logo.png" />
  <HelloWorld msg="Welcome to Your Vue.js App" /> -->
  <Magic8Ball />
</template>

<script>
// import HelloWorld from "./components/HelloWorld.vue";
import Magic8Ball from "./components/Magic8Ball.vue";

export default {
  name: "App",
  components: {
    // HelloWorld,
    Magic8Ball,
  },
};
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
