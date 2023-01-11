<template>
  <div class="magic8ball">
    <h1>MAGIC <span>8</span> BALL</h1>
    <div class="ball-image-container">
      <img class="ball-image" :src="require('@/assets/' + image)" />
      <div class="ball-text">{{ response }}</div>
    </div>
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
      this.response = "";
      this.isShaking = true;
      document.getElementById("questionbox").disabled = true;
      this.shake8ball();
      setTimeout(() => {
        this.image = "magic-8-ball-answer.png";
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
h1 {
  color: white;
  font-size: 50pt;
}

h1 span {
  color: #075e93;
}

.ball-image {
  width: 400px;
  height: 400px;
}

.ball-image-container {
  padding-top: 40px;
  padding-bottom: 40px;
  position: relative;
  text-align: center;
  color: white;
}

.ball-text {
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  width: 100px;
  height: 100px;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 20px;
}

.magic8ball {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
}

.questionbox {
  margin-top: 30px;
  margin-block-end: 1em;
  margin-inline-start: 0px;
  margin-inline-end: 0px;
  width: 200px;
}

.startbutton {
  display: block;
}
</style>

<!-- 075E93
0D2A55 -->
