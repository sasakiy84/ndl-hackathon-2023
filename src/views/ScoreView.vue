<script setup>
import { RouterLink } from "vue-router";
import { ref } from "vue";
import { useQuestionStore } from "../stores/question";
import ScoreList from "../components/ScoreView/ScoreList.vue"
import ScoreclassContainer from "../components/ScoreView/ScoreclassContainer.vue"
import JpsDescriptionContainer from "../components/ScoreView/JpsDescriptionContainer.vue"

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
      <p>わかったのはどの人物？チェックしておこう</p>
      <ScoreList />
      <JpsDescriptionContainer />
      <RouterLink 
        to="/question?q=1" 
        tag="button" 
        class="show-answer-link"
        @click="questionStore.$reset()"
      >
        もう一回遊ぶ
      </RouterLink>
      <div class="home-link">
        <RouterLink to="/">トップページに戻る</RouterLink>
      </div>
    </main>
    <div style="text-align: center; margin-bottom: 15px">
      2023©Japan Search Hackathon Team-B
    </div>
  </div>
</template>


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
  
  button {
    background-color: transparent;
    border: none;
    cursor: pointer;
    outline: none;
    padding: 0;
    appearance: none;
  }
  
  .show-answer-link {
    background: #3c436a;
    display: flex;
    border-radius: 8px;
    color: #ffffff;
    width: 298px;
    height: 56px;
    justify-content: center;
    align-items: center;
    text-decoration: none;
    margin: 50px auto 0;
  }

  .total-score-wrapper {
    margin: 3rem auto;
  }

  .total-score-text {
    text-align: center;
  }

  .home-link {
    margin-top: 3rem;
  }
  </style>
  