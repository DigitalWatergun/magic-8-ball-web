<template>
  <div class="magic-8-ball">
    <h1>MAGIC <span>8</span> BALL</h1>
    <div class="ball-image-container">
      <img class="ball-image" :src="require('@/assets/' + image)" />
      <div class="ball-text">{{ response }}</div>
    </div>
    <input
      id="question-box"
      placeholder="Type your question here..."
      type="text"
      v-on:keyup.enter="start"
    />
    <button class="start-button" @click="start" :disabled="isShaking">
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
      document.getElementById("question-box").disabled = true;
      this.shake8ball();
      setTimeout(() => {
        this.image = "magic-8-ball-answer.png";
        this.isShaking = false;
        document.getElementById("question-box").disabled = false;
        this.buttonText = "Shake again!";
        this.response = generateResponse();
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

.magic-8-ball {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
}

.start-button {
  display: block;
  margin-top: 40px;
  border-radius: 5px;
  color: #0d2a55;
  background-color: white;
  font-size: large;
  padding: 10px 15px;
}

.start-button:disabled {
  background-color: rgb(255, 255, 255, 0.3);
}

#question-box {
  font-size: 1rem;
  outline: none;
  border: 0px;
  border-bottom: 2px solid;
  border-bottom-color: white;
  padding: 1rem 0.1rem;
  color: white;
  transition: 0.1s ease-out;
  background-color: transparent;
  width: 300px;
}

#question-box:disabled {
  border: 0px;
  border-bottom: 2px solid;
  border-bottom-color: gray;
  color: gray;
}
</style>

<!-- 075E93
0D2A55 -->
