<script setup>
import { useQuestionStore } from "../../stores/question";
import ParagraphWrapper from "../ParagraphWrapper.vue";

const questionStore = useQuestionStore();
const totalQuestionNumber = questionStore.totalQuestionNum;
const answers = questionStore.allAnswerName;
const scores = questionStore.scores;
</script>

<template>
  <ParagraphWrapper>
    <div class="scorelist-wrapper">
      <p>わかったのはどの人物？チェックしておこう</p>
      <ul>
        <li v-for="n in totalQuestionNumber">
          <p class="question-number-text">Q.{{ n }}</p>
          <p class="answer-text">{{ answers[n - 1] }}</p>
          <p class="score-text">{{ scores[n - 1] }}点</p>
        </li>
      </ul>
    </div>
  </ParagraphWrapper>
</template>

<style scoped>
.scorelist-wrapper {
  padding: 0 2rem;
}

ul {
  padding-left: 0;
}

li {
  list-style: none;
  display: flex;
  flex-direction: row;
  border-bottom: 0.1rem solid;
}

.question-number-text {
  width: 5rem;
  margin-left: 2rem;
}

.answer-text {
  flex: auto;
}

.score-text {
  width: 4rem;
}
</style>
