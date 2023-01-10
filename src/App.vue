<template>
  <div class="main-container">
    <Magic8Ball />
  </div>
</template>

<script>
import Magic8Ball from "./components/Magic8Ball.vue";

export default {
  name: "App",
  components: {
    Magic8Ball,
  },
};
</script>

<style>
@import url("https://fonts.googleapis.com/css2?family=Roboto:wght@300&display=swap");
* {
  margin: 0px;
  padding: 0px;
  box-sizing: border-box;
}

html {
  width: 100%;
  height: 100%;
  background: url("@/assets/bg.png");
  background-repeat: no-repeat;
  background-position: center center;
  background-attachment: fixed;
  background-size: cover;
}

.main-container {
  min-height: 100%;
}

#app {
  font-family: Roboto, sans-serif;
  padding: 100px;
  text-align: center;
}
</style>
