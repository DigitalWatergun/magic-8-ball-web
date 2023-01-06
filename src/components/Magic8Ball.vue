<template>
  <div class="magic8ball">
    <h1>Magic 8 Ball</h1>
    <img class="ball-image" :src="require('@/assets/' + image)" />
    <p>{{ response }}</p>
    <input
      id="questionbox"
      type="text"
      class="questionbox"
      placeholder="Ask a question..."
    />
    <button class="startbutton" @click="start" :disabled="isShaking">
      {{ buttonText }}
    </button>
  </div>
</template>

<script>
import generateResponse from "../responses/generateResponse";

export default {
  name: "Magic8Ball",
  data() {
    return {
      image: "magic-8-ball.png",
      response: "",
      buttonText: "Shake 8 Ball",
      isShaking: false,
    };
  },
  methods: {
    start() {
      this.isShaking = true;
      document.getElementById("questionbox").disabled = true;
      this.shake8ball();
      setTimeout(() => {
        this.image = "magic-8-ball-tri.png";
        this.isShaking = false;
        document.getElementById("questionbox").disabled = false;
        this.response = generateResponse();
        this.buttonText = "Shake again!";
      }, 3000);
    },
    shake8ball() {
      this.image = "magic-8-ball-up.png";
      setTimeout(() => {
        this.image = "magic-8-ball-down.png";
      }, 1000);
      setTimeout(() => {
        this.image = "magic-8-ball-up.png";
      }, 2000);
    },
  },
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

.questionbox {
  margin-block-end: 1em;
  margin-inline-start: 0px;
  margin-inline-end: 0px;
  width: 200px;
}

.startbutton {
  display: block;
}
</style>
