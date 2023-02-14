<script setup>
import { useQuestionStore } from "../stores/question";

const questionStore = useQuestionStore();
const totalQuestionNumber = questionStore.totalQuestionNum;
const answers = questionStore.questionIds;
const scores = questionStore.scores;

</script>

<template>
  <ul>
    <li v-for="n in totalQuestionNumber">
      <p class="question-number-text">Q.{{ n }}</p>
      <p class="answer-text">{{ answers[n - 1] }}</p>
      <p class="score-text">{{ scores[n - 1] }}点</p>
    </li>
  </ul>
</template>

<style scoped>
  ul {
    padding-left: 0;
  }

  li {
    list-style: none;
    display: flex;
    border-bottom: 0.1rem solid;
  }

  .question-number-text {
    width: 5rem;
    margin-left: 2rem;
  }

  .answer-text {
    width: 20rem;
  }

  .score-text {
    width: 5rem;
  }
</style>