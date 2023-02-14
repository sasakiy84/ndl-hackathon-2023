<script setup>
import { RouterLink } from "vue-router";
import { ref } from "vue";
import { useQuestionStore } from "../stores/question";
import ScoreList from "../components/ScoreList.vue"

const questionStore = useQuestionStore();
const currentQuestionNumber = questionStore.currentQuestionNum;
const totalQuestionNumber = questionStore.totalQuestionNum;
const totalScore = questionStore.totalScore;
const answer = questionStore.questionIds[currentQuestionNumber];
  
</script>

<template>
  <div class="body">
    <main>
      <div class="total-score-wrapper">
        <h1 class="total-score-text">あなたの得点は{{ totalScore }}点です！</h1>
      </div>
      <div class="user-inputs-container">
        <p>レベル</p>
      </div>
      <p>わかったのはどの人物？チェックしておこう</p>
      <ScoreList />
      <div class="user-inputs-container flexbox">
        <img src="../assets/japansearch.gif" class="jps-gif">
        <article class="explain-jps">
          <h2>ジャパンサーチで歴史マスターになろう</h2>
          <p>ジャパンサーチの説明</p>
          <a href="https://jpsearch.go.jp/" target="_blank">ジャパンサーチを見る</a>
        </article>
      </div>
      <RouterLink to="/question?q=1" tag="button" class="show-answer-link">もう一回遊ぶ</RouterLink>
      <RouterLink to="/">トップページに戻る</RouterLink>
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
  
  /* user input */
  .user-inputs-container {
    background: #fdfdfd;
    border: 1px solid #dfd6cd;
    border-radius: 10px;
    padding: 40px 0;
  }
  
  .user-inputs-wrapper {
    width: 400px;
    margin: 0 auto;
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

  .flexbox {
    display: flex;
  }

  .jps-gif {
    width: 15%;
    height: 50%;
    margin: 1rem;
  }

  .total-score-wrapper {
    margin: 3rem auto;
  }

  .total-score-text {
    text-align: center;
  }
  </style>
  