<template>
  <div class="body">
    <main>
      <progress class="progress-bar" :max="totalQuestionNumber" :value="currentQuestionNumber + 1"></progress>
      <p class="progress-text">
        あと{{ totalQuestionNumber - currentQuestionNumber }}問
      </p>
      <div class="question-title-wrapper is-hidden-on-sp">
        <p class="question-title">
        <h1>
          <span class="question-number">{{ `Q.${currentQuestionNumber + 1}` }}</span>この人物は誰でしょう？
        </h1>
        </p>
        <p class="current-score-text">現在の得点: {{ totalScore }}</p>
      </div>
      <div class="question-title-wrapper is-hidden-on-pc-and-tab">
        <h1>
          <span class="question-number">{{ `Q.${currentQuestionNumber + 1}` }}</span>この人物は誰でしょう？
        </h1>
        <p class="current-score-text">現在の得点: {{ totalScore }}</p>
      </div>
      <img class="jpskun-question" src="../assets/jpskun_question.svg" alt="" />

      <div class="img-container">
        <div class="hint-img-wrapper">
          <img
            v-for="(link, index) in hintImgLinks"
            v-show="index === currentHintImgIndex"
            loading="lazy"
            class="hint-img" :src="link" alt="hint image" />
        </div>
        <div class="upper-stick stick"></div>
        <div class="lower-stick stick"></div>
        <div class="upper-fold-line fold-line"></div>
        <div class="lower-fold-line fold-line"></div>
        <div v-show="isPopupDisplayed" class="deducation-card">
          <p class="minus-score-text">{{ availableScore - 10 }}点</p>
          <p class="available-score-text">獲得できる点数は{{ availableScore }}点です</p>
        </div>
      </div>

      <div class="img-buttons">
        <button v-for="index in hintImgLinks.length" :class="{
          disabled: index === currentHintImgIndex + 1,
        }" @click.prevent="changeHintImg(index - 1)" :disabled="index === currentHintImgIndex + 1"
          class="round-button is-hidden-on-pc-and-tab" :key="index">
          {{ index }}
        </button>
      </div>

      <div class="img-buttons">
        <button class="long-round-button next-button" @click.prevent="changeHintImg(currentHintImgIndex + 1)">
          次の画像を見る
        </button>
        <button v-for="index in hintImgLinks.length" :class="{
          disabled: index === currentHintImgIndex + 1,
        }" @click.prevent="changeHintImg(index - 1)" :disabled="index === currentHintImgIndex + 1"
          class="round-button is-hidden-on-sp" :key="index">
          {{ index }}
        </button>
      </div>
      <ParagraphWrapper>
        <div class="answer-input-wrapper" v-if="!selectBoxDisplayed">
          <input class="answer-input" type="text" v-model="userAnswer" placeholder="人物名を入力する" />
        </div>
        <div class="select-input-wrapper" v-else>
          <p>この中の誰でしょう</p>
          <div class="select-button-wrapper">
            <button class="select-button" v-for="name in pickedChoices" :key="name" @click="userAnswer = name"
              :disabled="userAnswer === name" :class="{
                selected: userAnswer === name,
              }">
              {{ name }}
            </button>
          </div>
        </div>
        <div class="text-hint">
          <button v-if="!textHintDisplayed" class="hint-button" @click="textHintDisplayed = true; displayPopup()">
            ヒントを表示する
          </button>
          <button v-if="textHintDisplayed && !selectBoxDisplayed" class="hint-button"
            @click="selectBoxDisplayed = true; displayPopup()">
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
import { ref, computed } from "vue";
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

const isPopupDisplayed = ref(false);
const timeoutId = ref(-1)
const displayPopup = () => {
  isPopupDisplayed.value = true
  if (timeoutId.value >= 0) clearTimeout(timeoutId.value)
  timeoutId.value = setTimeout(() => {
    isPopupDisplayed.value = false
  },1500)
}

const currentHintImgIndex = ref(0);
const alreadyDisplayedImageIndex = ref(0)
const availableScore = computed(() => {
  const maxScore = 10
  const substractPoint = alreadyDisplayedImageIndex.value + Number(textHintDisplayed.value) * 2 + Number(selectBoxDisplayed.value) * 4
  const score = maxScore - substractPoint
  return score
});

const changeHintImg = (newIndex) => {

  if (alreadyDisplayedImageIndex.value < newIndex) {
    displayPopup()
    alreadyDisplayedImageIndex.value = newIndex
  }

  if (hintImgLinks.length > newIndex) {
    currentHintImgIndex.value = newIndex;
  } else {
    currentHintImgIndex.value = 0
  }
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
  padding: 0 10px;
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

.question-title-wrapper.is-hidden-on-pc-and-tab {
  display: block;
  text-align: center;
  margin-left: unset;
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

.is-hidden-on-pc-and-tab .current-score-text {
  text-align: right;
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
  margin-bottom: 5px;
  font-size: small;
}

.jpskun-question {
  margin-left: 1rem;
  margin-bottom: -3px;
}

.img-container {
  width: calc(100% - 2rem);
  margin: 0 auto;
  padding: 30px 0;
  background: #7D7F78;
  background-image: url('../assets/hintimg_background.svg');
  /* border-radius: 12px; */
  height: 385px;
  position: relative;
}

.hint-img-wrapper {
  width: calc(100% - 1rem);
  margin: 0 auto;
  height: 100%;
  max-width: 100%;
  max-height: 100%;
  background-color: #B1A87C;

}



.hint-img {
  width: 100%;
  height: calc(100% - 1rem);
  object-fit: contain;
  margin: 0.5rem 0;
  background-color: #F3EFD5;
}


.stick {
  background-color: #604825;
  height: 18px;
  width: 100%;
  padding: 0 10px;
  position: absolute;
}

.upper-stick {
  top: 1px;
  left: -10px;
  z-index: -1;
}

.lower-stick {
  bottom: 1px;
  left: -10px;
  z-index: -1;
}

.fold-line {
  width: 100%;
  height: 1px;
  background-color: black;
  opacity: 0.2;
  position: absolute;
}

.upper-fold-line {
  top: 19px;
}

.lower-fold-line {
  bottom: 19px;
}



.deducation-card {
  position: fixed;
  top: 30px;
  right: 30px;
  background: #FBFBFB;
  border: 1px solid #DFD6CD;
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
  border-radius: 20px;
  padding: 25px 66px;
}

.deducation-card .minus-score-text {
  font-weight: 700;
  font-size: 32px;
  line-height: 46px;
  letter-spacing: 0.04em;
  margin: 0;
  text-align: center;
}

.deducation-card .available-score-text {
  font-weight: 400;
  font-size: 16px;
  line-height: 23px;
  letter-spacing: 0.04em;
  margin: 0;
  text-align: center;
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
