<template>
  <div class="body">
    <main>
      <progress class="progress-bar" :max="totalQuestionNumber" :value="currentQuestionNumber"></progress>
      <p class="progress-text">
        あと{{ totalQuestionNumber - currentQuestionNumber }}問
      </p>

      <h1 class="text-center">{{ isCorrect ? "正解" : "不正解" }}！</h1>
      <p class="text-center">{{ answer }}でした。</p>
      <p class="text-right">現在の得点は{{ totalScore }}点</p>

      <div id="answer-image-conainer">
        <img v-show="isCorrect" id="answer-top-searchkun-logo" src="../assets/jpskun_correct.gif" />
        <img v-show="!isCorrect" id="answer-top-searchkun-logo" src="../assets/jpskun_incorrect.svg" />

        <img id="answer-img" :src="questionData.garalyimg" alt="answer" />
      </div>

      <div id="answer-description-container">
        <h2 id="answer-description-main-text">人物説明</h2>
        <p id="answer-description-sub-text">
          {{ questionData.hint.join("").replaceAll("****", answer) }}
        </p>
        <a target="_blank" :href="questionData.garalyurl" id="answer-description-gallery-btn">{{ answer }}のギャラリーを見る</a><br />
      </div>

      <RouterLink to="/question" v-if="totalQuestionNumber > currentQuestionNumber" id="next-question">次の問題へ進む
      </RouterLink>
      <RouterLink id="next-question" to="/score" v-else>結果を見る</RouterLink>

      <div id="questionimage-infomation-container">
        <h3 id="questionimage-infomation-title-text">画像の情報</h3>
        <ul>
          <li v-for="(imageUrl, index) in hintImageURLs">
            <p class="questionimage_infomation_imagenum_text">
              {{ index + 1 }}枚目
            </p>
            <a target="_blank" :href="imageUrl" class="questionimage_infomation_description_text">{{ imageUrl }}</a>
          </li>
        </ul>
      </div>
      <HomeLink />
    </main>
    <JpsHackathonFooter />
  </div>
</template>

<script setup>
import { useQuestionStore } from "../stores/question";
import { RouterLink } from "vue-router";
import HomeLink from "../components/HomeLink.vue";
import JpsHackathonFooter from "../components/JpsHackathonFooter.vue";

const questionStore = useQuestionStore();

const currentQuestionNumber = questionStore.currentQuestionNum;
const totalQuestionNumber = questionStore.totalQuestionNum;
const totalScore = questionStore.totalScore;
const answer = questionStore.previousAnswer;
const isCorrect = questionStore.scores[currentQuestionNumber - 1] > 0;

const questionData = questionStore.previousQuestionData;
const hintImageURLs = questionStore.getPreviousHintImages;

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
  background-color: #c23c11;
  border-radius: 6px;
}

.progress-bar::-moz-progress-bar {
  background-color: #ece2b0;
  border-radius: 6px;
}

.progress-text {
  margin-top: 10px;
}

.text-center {
  text-align: center;
}

.text-right {
  text-align: right;
}

#answer-top-searchkun-logo {
  width: 100px;
  height: auto;
  position: absolute;
  top: -95px;
  z-index: -1;
}

#answer-top-totalscore-container {
  width: 100px;
  height: 100px;
  margin: 0 !important;
  position: relative;
}

#answer-top-totalscore-text {
  font-style: normal;
  font-weight: 400;
  font-size: 10px;
  line-height: 14px;
  color: #38322c;
}

#answer-top-totalscore-container {
  position: relative;
  display: inline-block;
  width: 100px;
  height: 100px;
  border-radius: 50%;
  background: #fff;
  text-align: center;
  line-height: 80px;
}

#answer-top-totalscore-text-container {
  position: absolute;
  top: 50%;
  left: 50%;
  margin-right: -50%;
  transform: translate(-50%, -50%);
}

#answer-top-totalscore-text {
  margin: 0;
  font-style: normal;
  font-weight: 400;
  font-size: 10px;
  line-height: 14px;
  color: #38322c;
}

#answer-top-totalscore-score-text {
  margin: 0;
  font-style: normal;
  font-weight: 500;
  font-size: 20px;
  line-height: 29px;

  color: #38322c;
}

#answer-image-conainer {
  width: 100%;
  height: 432.64px;
  background-color: #edeae2;
  border-radius: 12px;
  position: relative;
}

#answer-img {
  width: 100%;
  padding: 3px;
  object-fit: contain;
  height: 100%;
  box-sizing: border-box;
}

#answer-description-container {
  padding: 20px 42px;
  box-sizing: border-box;

  margin-top: 20px;
  width: 100%;

  background: #f9f7f3;
  border: 1px solid #968d84;
  border-radius: 12px;
}

#answer-description-main-text {
  font-style: normal;
  font-weight: 500;
  font-size: 22px;
  line-height: 160%;
  color: #38322c;
}

#answer-description-sub-text {
  margin: 10px 0;
  font-style: normal;
  font-weight: 400;
  font-size: 16px;
  line-height: 160%;
  color: #38322c;
}

#answer-description-gallery-btn-container,
#answer-description-ai-desc-btn-container {
  min-width: 208px;
  height: 23px;
  padding: 10px 15px;
  font-style: normal;
  font-weight: 500;
  font-size: 16px;
  line-height: 23px;

  color: #38322c;
  flex: none;
  order: 0;
  flex-grow: 0;
}

#answer-description-gallery-btn,
#answer-description-ai-desc-btn {
  margin: 7px 0;
  display: block;
  border: 1px solid;
  border-radius: 5px;
  display: inline-block;
  padding: 10px 15px;
  color: #fff;
  text-decoration: none;
  letter-spacing: 0.1rem;

  font-style: normal;
  font-weight: 500;
  font-size: 16px;
  line-height: 23px;

  color: #38322c;

  flex: none;
  order: 0;
  flex-grow: 0;
}

#answer-description-ai-desc-title-text {
  margin-top: 10px !important;
  font-style: normal;
  font-weight: 500;
  font-size: 22px;
  line-height: 160%;
  color: #38322c;
}

#answer-description-ai-desc-main-text {
  font-style: normal;
  font-weight: 400;
  font-size: 16px;
  line-height: 160%;
  color: #38322c;
}

#next-question {
  margin: 30px auto;
  display: flex;
  flex-direction: row;
  align-items: flex-start;
  gap: 10px;
  border-radius: 8px;
  color: #ffffff;
  width: 298px;
  height: 56px;
  justify-content: center;
  align-items: center;
  text-decoration: none;
  background: #3c436a;
}

#questionimage-infomation-title-text {
  font-style: normal;
  font-weight: 500;
  font-size: 20px;
  line-height: 29px;

  color: #38322c;
}

.questionimage_infomation_imagenum_text {
  margin: 0;
  font-style: normal;
  font-weight: 500;
  font-size: 14px;
  line-height: 20px;

  color: #38322c;
}

.questionimage_infomation_description_text {
  margin: 0px;
  font-style: normal;
  font-weight: 400;
  font-size: 12px;
  line-height: 160%;
  color: #38322c;
  word-break: break-all;
}

#questionimage-infomation-container {
  padding: 0 30px 30px 30px;
}

#questionimage-infomation-container ul {
  margin-top: 15px;
  list-style: none;
  padding: 0;
  font-style: normal;
  font-weight: 500;
  font-size: 14px;
  line-height: 20px;
  color: #38322c;
}

#questionimage-infomation-container ul li {
  margin: 15px 0;
  font-style: normal;
  font-weight: 400;
  font-size: 12px;
  line-height: 160%;
  color: #38322c;
}

#answerview-toppage-link {
  margin: 30px 0;
  font-family: "Inter";
  font-style: normal;
  font-weight: 400;
  font-size: 16px;
  line-height: 19px;
  text-align: center;
  text-decoration-line: underline;
  color: #1d73f3;
}

#answerview-footer-text {
  margin-top: 60px;
  text-align: center;
  font-family: "Inter";
  font-style: normal;
  font-weight: 400;
  font-size: 14px;
  line-height: 17px;
  color: #38322c;
}
</style>
