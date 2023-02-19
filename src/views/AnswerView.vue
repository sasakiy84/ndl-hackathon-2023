<template>
  <div class="body">
    <main>
      <progress
        class="progress-bar"
        :max="totalQuestionNumber"
        :value="currentQuestionNumber"
      ></progress>
      <p class="progress-text">
        あと{{ totalQuestionNumber - currentQuestionNumber }}問
      </p>

      <h1>{{ isCorrect ? "正解" : "不正解" }}</h1>
      <p>正解は、{{ answer }}</p>
      <p>現在の得点は {{ totalScore }}</p>
      <RouterLink
        to="/question"
        v-if="totalQuestionNumber > currentQuestionNumber"
        >次の問題</RouterLink
      >
      <RouterLink to="/score" v-else>結果を見る</RouterLink>
    </main>
  </div>
</template>

<script setup>
import { useQuestionStore } from "../stores/question";
import { RouterLink } from "vue-router";

const questionStore = useQuestionStore();
const currentQuestionNumber = questionStore.currentQuestionNum;
const totalQuestionNumber = questionStore.totalQuestionNum;
const totalScore = questionStore.totalScore;
const answer = questionStore.previousAnswer;
const isCorrect = questionStore.scores[currentQuestionNumber - 1] > 0;
</script>

<style scoped>
.body {
  background: #fbf8f0;
}

main {
  max-width: 600px;
  margin: 0 auto 70px;
}

h1 {
  font-weight: 500;
  font-size: 24px;
  line-height: 35px;
  font-weight: 900;
  color: #38322c;
}

h1 span {
  margin-right: 15px;
}

.progress-bar {
  width: 100%;
  height: 6px;
  border-radius: 10px;
  appearance: none;
}
.progress-bar::-webkit-progress-bar {
  background-color: #ece2b0;
  border-radius: 6px;
}
.progress-bar::-webkit-progress-value {
  background-color: #e6c620;
  border-radius: 6px;
}
.progress-bar::-moz-progress-bar {
  background-color: #ece2b0;
  border-radius: 6px;
}

.progress-text {
  margin-top: 10px;
}
</style>
