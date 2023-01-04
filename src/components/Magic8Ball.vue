<template>
  <div class="magic8ball">
    <h1>Magic 8 Ball</h1>
    <img class="ball-image" src="./../assets/magic-8-ball.png" />
    <button class="startButton">Start</button>
  </div>
</template>

<script>
export default {
  name: "Magic8Ball",
  data() {
    return {
      shake: false,
      defaultImg: "./../assets/magic-8-ball.png",
      srcs: [
        "./../assets/magic-8-ball.png",
        "./../assets/magic-8-ball-tri.png",
      ],
    };
  },
  methods: {},
};
</script>

<style>
.ball-image {
  width: 400px;
  height: 400px;
}

.magic8ball {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
}

.startButton {
  display: block;
}
</style>
