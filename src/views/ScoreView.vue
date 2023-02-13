<template>
  <div class="body">
    <main>
      <h1>あなたの得点は{{ totalScore }}点です！</h1>
      <div class="user-inputs-container">
        <p>レベル</p>
      </div>
      <p>わかったのはどの人物？チェックしておこう</p>
      <ul>
        <li v-for="question in questions">
          {{ question }}
        </li>
      </ul>
      <div class="user-inputs-container flexbox">
        <img src="../assets/japansearch.gif" class="jps-gif">
        <article class="explain-jps">
          <h2>ジャパンサーチで歴史マスターになろう</h2>
          <p>ジャパンサーチの説明</p>
          <a href="https://jpsearch.go.jp/" target="_blank">ジャパンサーチを見る</a>
        </article>
      </div>
      <RouterLink to="/question?q=1" tag="button" class="show-answer-link">もう一回遊ぶ</RouterLink>
      <RouterLink to="/home">トップページに戻る</RouterLink>
    </main>
    <div style="text-align: center; margin-bottom: 15px">
      2023©Japan Search Hackathon Team-B
    </div>
  </div>
</template>

<script setup>
import { RouterLink } from "vue-router";
import { ref } from "vue";
import { useQuestionStore } from "../stores/question";

const questionStore = useQuestionStore();
const currentQuestionNumber = questionStore.currentQuestionNum;
const totalQuestionNumber = questionStore.totalQuestionNum;
const totalScore = questionStore.totalScore;
const answer = questionStore.questionIds[currentQuestionNumber];
const questions = questionStore.questionIds;
  
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
  
  .img-wrapper {
    width: 100%;
    height: 385px;
    background: #999898;
    border-radius: 12px;
  }
  
  .hint-img {
    width: 100%;
    height: 100%;
    object-fit: contain;
  }
  
  .answer-input-wrapper {
    width: 100%;
    display: flex;
    justify-content: center;
    margin-bottom: 20px;
    margin-top: 20px;
  }
  
  .answer-input {
    width: 100%;
    padding: 10px;
    height: 44px;
    box-sizing: border-box;
    background: #fdfdfd;
    border: 1px solid #aaaaaa;
    border-radius: 6px;
  }
  
  .select-input-wrapper {
    width: 100%;
    margin-bottom: 20px;
    margin-top: 20px;
  }
  
  .select-button-wrapper {
    display: flex;
    justify-content: flex-start;
    flex-wrap: wrap;
  }
  .select-button {
    font-weight: 500;
    font-size: 16px;
    margin-right: 10px;
    height: 47px;
    border: 1px solid #38322c;
    border-radius: 6px;
    padding: 12px 24px;
    width: max-content;
    margin-bottom: 16px;
  }
  
  .select-button.selected {
    background: #38322c;
    color: #ffffff;
    cursor: default;
  }
  
  .img-buttons {
    display: flex;
    justify-content: center;
    align-items: center;
    margin: 10px 30px 20px;
  }
  
  .img-buttons button {
    margin-right: 30px;
  }
  
  .img-buttons button:last-child {
    margin-right: 0;
  }
  
  button {
    background-color: transparent;
    border: none;
    cursor: pointer;
    outline: none;
    padding: 0;
    appearance: none;
  }
  
  .long-round-button {
    background: #fdfdfd;
    border: 1px solid #38322c;
    color: #38322c;
    border-radius: 50px;
    padding: 12px 24px;
  }
  
  .hint-button {
    background: #fdfdfd;
    border: 1px solid #38322c;
    color: #38322c;
    border-radius: 50px;
    padding: 6px 24px;
    font-size: 12px;
  }
  
  .round-button {
    background: #fdfdfd;
    border: 1px solid #38322c;
    color: #38322c;
    border-radius: 50px;
    width: 37px;
    height: 37px;
  }
  
  .round-button.disabled {
    background: #4f4f4f;
    color: #ffffff;
  }
  
  .next-button {
    margin-right: 20px;
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
  
  .text-hint-container {
    background: #f0eeec;
    border-radius: 6px;
    width: 100%;
    padding: 16px 19px;
    margin-top: 20px;
    box-sizing: border-box;
  }
  
  .text-hint-title {
    margin: 0;
    font-style: normal;
    font-weight: 500;
    font-size: 18px;
    line-height: 26px;
    color: #38322c;
  }
  
  .text-hint-text {
    font-weight: 400;
    font-size: 14px;
    line-height: 160%;
    color: #38322c;
  }

  .flexbox {
    display: flex;
  }

  .jps-gif {
    width: 100px;
    height: 100px;
  }
  </style>
  