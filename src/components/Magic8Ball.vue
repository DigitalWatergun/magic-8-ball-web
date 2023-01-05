<template>
  <div class="magic8ball">
    <h1>Magic 8 Ball</h1>
    <img
      class="ball-image"
      src="./../assets/magic-8-ball.png"
      v-on:click="changePicture()"
    />
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
      defaultImg: "/src/assets/magic-8-ball.png",
      images: [
        "./../assets/magic-8-ball.png",
        "./../assets/magic-8-ball-tri.png",
      ],
      response: "",
      buttonText: "Shake 8 Ball",
      isShaking: false,
      index: 0,
    };
  },
  methods: {
    start() {
      this.isShaking = true;
      document.getElementById("questionbox").disabled = true;
      setTimeout(() => {
        this.isShaking = false;
        document.getElementById("questionbox").disabled = false;
        this.response = generateResponse();
        this.buttonText = "Shake again!";
      }, 3000);
    },
    changeImage() {
      this.index = ++this.index % this.images.length;
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
