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
      <div class="question-title-wrapper">
        <p class="question-title">
          <h1>
            <span class="question-number">{{ `Q.${currentQuestionNumber + 1}` }}</span>この人物は誰でしょう？
          </h1>
        </p>
        <p class="current-score-text">現在の得点: {{ totalScore }}</p>
      </div>
      <img class="jpskun-question" src="../assets/jpskun_question.svg" alt="" />
      
      <div class="img-wrapper">
        <!-- <div class="img-background"> -->
          <img class="hint-img" :src="hintImgLinks[currentHintImgIndex]" alt="" />
        <!-- </div> -->
      </div>
      <div class="img-buttons">
        <button
          class="long-round-button next-button"
          @click.prevent="changeHintImg(currentHintImgIndex + 1)"
        >
          次の画像を見る
        </button>
        <button
          v-for="index in hintImgLinks.length"
          :class="{
            disabled: index === currentHintImgIndex + 1,
          }"
          @click.prevent="changeHintImg(index - 1)"
          :disabled="index === currentHintImgIndex + 1"
          class="round-button"
          :key="index"
        >
          {{ index }}
        </button>
      </div>
      <ParagraphWrapper>
        <div class="answer-input-wrapper" v-if="!selectBoxDisplayed">
          <input
            class="answer-input"
            type="text"
            v-model="userAnswer"
            placeholder="人物名を入力する"
          />
        </div>
        <div class="select-input-wrapper" v-else>
          <p>この中の誰でしょう</p>
          <div class="select-button-wrapper">
            <button
              class="select-button"
              v-for="name in pickedChoices"
              :key="name"
              @click="userAnswer = name"
              :disabled="userAnswer === name"
              :class="{
                selected: userAnswer === name,
              }"
            >
              {{ name }}
            </button>
          </div>
        </div>
        <div class="text-hint">
          <button
            v-if="!textHintDisplayed"
            class="hint-button"
            @click="textHintDisplayed = true"
          >
            ヒントを表示する
          </button>
          <button
            v-if="textHintDisplayed && !selectBoxDisplayed"
            class="hint-button"
            @click="selectBoxDisplayed = true"
          >
            もっとヒントを表示する
          </button>
        </div>

        <div class="text-hint-container" v-if="textHintDisplayed">
          <p class="text-hint-title">ヒント</p>
          <p class="text-hint-text">{{ selectedHint }}</p>
        </div>
        <p class="show-answer-text">\\ 答えを見て次の問題へGO！ //</p>
        <button @click="submitAnswer" class="show-answer-link">
          回答する
        </button>
      </ParagraphWrapper>
      <HomeLink />
    </main>
    <JpsHackathonFooter />
  </div>
</template>

<script setup>
import { useQuestionStore } from "../stores/question";
import { ref } from "vue";
import { useRouter } from "vue-router";

import HomeLink from "../components/HomeLink.vue"
import JpsHackathonFooter from "../components/JpsHackathonFooter.vue"
import ParagraphWrapper from "../components/ParagraphWrapper.vue"

const questionStore = useQuestionStore();
const currentQuestionNumber = questionStore.currentQuestionNum;
const totalQuestionNumber = questionStore.totalQuestionNum;
const totalScore = questionStore.totalScore;
const answer = questionStore.currentAnswer;


const hintImgLinks = questionStore.getHintImages;
const selectedHint = questionStore.getTextHint
const pickedChoices = questionStore.getChoises

const currentHintImgIndex = ref(0);
const availableScore = ref(10);
const changeHintImg = (newIndex) => {
  currentHintImgIndex.value = newIndex;
};

const userAnswer = ref("");
const textHintDisplayed = ref(false);
const selectBoxDisplayed = ref(false);


const router = useRouter();
const submitAnswer = async () => {
  if (userAnswer.value === answer) {
    questionStore.appendScore(availableScore.value);
  } else {
    questionStore.appendScore(0);
  }

  questionStore.nextQuestion()

  await router.push("/answer");
};
</script>

<style scoped>
main {
  max-width: 600px;
  margin: 0 auto 60px;
}

h1 {
  font-weight: 500;
  font-size: 24px;
  line-height: 35px;
  color: #38322c;
}

h1 span {
  margin-right: 15px;
}

.question-title-wrapper {
  margin-left: 3rem;
  display: flex;
  align-items: flex-end;
}

.question-title {
  flex: auto;
}

.question-number {
  font-weight: 900;
}

.current-score-text {
  flex: initial;
  
}

.progress-bar {
  width: 100%;
  height: 6px;
  border-radius: 10px;
  appearance: none;
}
.progress-bar::-webkit-progress-bar {
  background-color: #F9F7F3;
  border-radius: 6px;
}
.progress-bar::-webkit-progress-value {
  background-color: #C23C11;
  border-radius: 6px;
}
.progress-bar::-moz-progress-bar {
  background-color: #F9F7F3;
  border-radius: 6px;
}

.progress-text {
  margin-top: 10px;
  font-size: small;
}

.jpskun-question {
  margin-left: 3rem;
}

.img-wrapper {
  width: 98%;
  padding: 3rem 0;
  background: #7D7F78;
  background-image: url('../assets/hintimg_background.svg');
  /* border-radius: 12px; */
  height: 385px;
}

.img-background {
  height: 385px;
  background-image: url('../assets/hintimg_side.svg');
  background-repeat: repeat;
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
  background: #F9F7F3;
  border: 1px solid #38322c;
  color: #38322c;
  border-radius: 50px;
  padding: 12px 24px;
}

.hint-button {
  background: #F9F7F3;
  border: 1px solid #38322c;
  color: #38322c;
  border-radius: 50px;
  padding: 6px 24px;
  font-size: 12px;
}

.round-button {
  background: #F9F7F3;
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
  margin: 20px auto 0;
}

.show-answer-text {
  margin-top: 30px;
  text-align: center;
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
</style>
