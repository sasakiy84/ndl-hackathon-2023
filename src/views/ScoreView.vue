<script setup>
import { RouterLink } from "vue-router";
import { useQuestionStore } from "../stores/question";
import ScoreList from "../components/ScoreView/ScoreList.vue";
import ScoreclassContainer from "../components/ScoreView/ScoreclassContainer.vue";
import JpsDescriptionContainer from "../components/ScoreView/JpsDescriptionContainer.vue";
import JpsHackathonFooter from "../components/JpsHackathonFooter.vue";

const questionStore = useQuestionStore();
const totalScore = questionStore.totalScore;
</script>

<template>
  <div class="body">
    <main>
      <div class="total-score-wrapper">
        <h1 class="total-score-text">あなたの得点は{{ totalScore }}点です！</h1>
      </div>
      <ScoreclassContainer />
      <ScoreList />
      <JpsDescriptionContainer />
      <RouterLink to="/question?q=1" class="question-link" @click="questionStore.$reset()">
        もう一度遊ぶ
      </RouterLink>
    </main>
    <JpsHackathonFooter />
  </div>
</template>

<style scoped>
main {
  max-width: 600px;
  margin: 0 auto 60px;
  padding: 0 10px;
}

h1 {
  /* font-weight: 500; */
  font-size: 24px;
  line-height: 35px;
  font-weight: 700;
  color: #38322c;
}

h1 span {
  margin-right: 15px;
}

button {
  background-color: transparent;
  border: none;
  cursor: pointer;
  outline: none;
  padding: 0;
  appearance: none;
}

.total-score-wrapper {
  margin: 3rem auto;
}

.total-score-text {
  text-align: center;
}

.question-link {
  background: none;
  display: flex;
  border: 2px solid #3c436a;
  border-radius: 8px;
  color: #3c436a;
  width: 298px;
  height: 56px;
  justify-content: center;
  align-items: center;
  text-decoration: none;
  margin: 50px auto 0;
  font-weight: 700;
}
</style>
