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

      <div id="answer-top-container">
        <div id="answer-top-left-container">
          <!--仮で正解のgifを挿入しています-->
          <img id="answer-top-searchkun-logo" src="../assets/jpskun_correct.gif">
        </div>
        <div id="answer-top-center-container">
          <div id="answer-top-center-texts-container">
            <h1 id="answer-top-result-text">{{ isCorrect ? "正解" : "不正解" }}！</h1>
            <p>{{ answer }}でした。</p>
          </div>
        </div>
        <div id="answer-top-right-container">
          <div id="answer-top-totalscore-container">
            <div id="answer-top-totalscore-text-container">
              <p id="answer-top-totalscore-text">現在の得点は</p>
              <p id="answer-top-totalscore-score-text">{{ totalScore }}点</p>
            </div>
          </div>
        </div>
      </div>

      <div id="answer-image-conainer"></div>

      <div id="answer-description-container">
        <h2 id="answer-description-main-text">人物説明（メイン）</h2>
        <p id="answer-description-sub-text">人物説明（サブ）</p>
        <!--リンク張ってないです-->
        <a id="answer-description-gallery-btn">{{ answer }}のギャラリーを見る</a><br>
        <!--未実装-->
        <a id="answer-description-ai-desc-btn">AIが書いた解説を読む</a>
        <h3 id="answer-description-ai-desc-title-text">ChatGPTによる解説</h3>
        <p id="answer-description-ai-desc-main-text">ChatGPTによる解説の本文ChatGPTによる解説の本文ChatGPTによる解説の本文ChatGPTによる解説の本文ChatGPTによる解説の本文</p>
      </div>
      
      <!--次の問題にすすむ-->
      <RouterLink
        to="/question"
        v-if="totalQuestionNumber > currentQuestionNumber"
        id="next-question"
        >次の問題へ進む</RouterLink
      >
      <RouterLink to="/score" v-else>結果を見る</RouterLink>

      <div id="questionimage-infomation-container">
        <h3 id="questionimage-infomation-title-text">画像の情報</h3>
        <ul>
          <li>
            <p class="questionimage_infomation_imagenum_text">1枚目</p>
            <p class="questionimage_infomation_description_text">1枚目の本文</p>
          </li>
          <li>
            <p class="questionimage_infomation_imagenum_text">2枚目</p>
            <p class="questionimage_infomation_description_text">2枚目の本文</p>
          </li>
          <li>
            <p class="questionimage_infomation_imagenum_text">3枚目</p>
            <p class="questionimage_infomation_description_text">3枚目の本文</p>
          </li>
          <li>
            <p class="questionimage_infomation_imagenum_text">4枚目</p>
            <p class="questionimage_infomation_description_text">4枚目の本文</p>
          </li>
          <li>
            <p class="questionimage_infomation_imagenum_text">5枚目</p>
            <p class="questionimage_infomation_description_text">5枚目の本文</p>
          </li>
        </ul>
      </div>

      <!--トップページへ戻る リンク張ってないです-->
      <a id="answerview-toppage-link">トップページへ戻る</a>
      <p id="answerview-footer-text">2023©️Japan Search Hackathon Team-B</p>
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
const answer = questionStore.questionIds[currentQuestionNumber - 1];
const isCorrect = questionStore.scores[currentQuestionNumber - 1] > 0;
</script>

<style scoped>
.body {
  //background: #fbf8f0;
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

#answer-top-container{
  display: flex;
}
#answer-top-left-container,
#answer-top-center-container,
#answer-top-right-container{
  width: 33%;
  height: 123px;
  position: relative;
}
#answer-top-right-container{
  display: flex;
  justify-content: flex-end;
}
#answer-top-center-container{
  text-align: center;
  vertical-align: middle;
  
  display: flex;
  justify-content: center;
  align-items: center;
}
#answer-top-center-texts-container p{
  margin: 7px 0;
}
#answer-top-searchkun-logo{
  width: 126px;
  height: 123px;
  margin-left: 0px;
}
#answer-top-totalscore-container{
  width: 100px;
  height: 100px;
  margin: 0!important;
  position: relative;
}
#answer-top-totalscore-text{
  font-family: 'Zen Maru Gothic';
  font-style: normal;
  font-weight: 400;
  font-size: 10px;
  line-height: 14px;
  color: #38322C;
}

#answer-top-totalscore-container{
  position: relative;
  display: inline-block;
  width: 100px;
  height: 100px;
  border-radius: 50%;
  background: #FFF;
  text-align:center;
  line-height: 80px;
}
#answer-top-totalscore-text-container{
  position: absolute;
  top: 50%;
  left: 50%;
  margin-right: -50%;
  transform: translate(-50%, -50%)
}
#answer-top-totalscore-text{
  margin:0;
  font-family: 'Zen Maru Gothic';
  font-style: normal;
  font-weight: 400;
  font-size: 10px;
  line-height: 14px;
  color: #38322C;
}
#answer-top-totalscore-score-text{
  margin:0;
  font-family: 'Zen Maru Gothic';
  font-style: normal;
  font-weight: 500;
  font-size: 20px;
  line-height: 29px;

  color: #38322C;
}

#answer-image-conainer{
  width: 100%;
  height: 432.64px;
  background-color: #EDEAE2;
}

#answer-description-container{
  padding: 20px 42px;
  box-sizing: border-box;

  margin-top: 20px;
  width: 100%;

  background: #F9F7F3;
  border: 1px solid #968D84;
  border-radius: 12px;
}
#answer-description-main-text{
  font-family: 'Zen Maru Gothic';
  font-style: normal;
  font-weight: 500;
  font-size: 22px;
  line-height: 160%;
  color: #38322C;
}
#answer-description-sub-text{
  margin: 10px 0;
  font-family: 'Zen Maru Gothic';
  font-style: normal;
  font-weight: 400;
  font-size: 16px;
  line-height: 160%;
  color: #38322C;
}
#answer-description-gallery-btn-container, #answer-description-ai-desc-btn-container{
  min-width: 208px;
  height: 23px;
  padding: 10px 15px;
  font-family: 'Zen Maru Gothic';
  font-style: normal;
  font-weight: 500;
  font-size: 16px;
  line-height: 23px;

  color: #38322C;
  flex: none;
  order: 0;
  flex-grow: 0;

}

#answer-description-gallery-btn, #answer-description-ai-desc-btn{
  margin: 7px 0;
  display: block;
  border: 1px solid;
  border-radius: 5px;
  display: inline-block;
  padding: 10px 15px;
  color: #FFF;
  text-decoration: none;
  letter-spacing: .1rem;

  font-family: 'Zen Maru Gothic';
  font-style: normal;
  font-weight: 500;
  font-size: 16px;
  line-height: 23px;

  color: #38322C;

  flex: none;
  order: 0;
  flex-grow: 0;
}

#answer-description-ai-desc-title-text{
  margin-top: 10px!important;
  font-family: 'Zen Maru Gothic';
  font-style: normal;
  font-weight: 500;
  font-size: 22px;
  line-height: 160%;
  color: #38322C;
}

#answer-description-ai-desc-main-text{
  font-family: 'Zen Maru Gothic';
  font-style: normal;
  font-weight: 400;
  font-size: 16px;
  line-height: 160%;
  color: #38322C;
}

#next-question{
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

#questionimage-infomation-title-text{
  font-family: 'Zen Maru Gothic';
  font-style: normal;
  font-weight: 500;
  font-size: 20px;
  line-height: 29px;
  
  color: #38322C;
}
.questionimage_infomation_imagenum_text{
  margin: 0;
  font-family: 'Zen Maru Gothic';
font-style: normal;
font-weight: 500;
font-size: 14px;
line-height: 20px;

color: #38322C;
}
.questionimage_infomation_description_text{
  margin: 0px;
  font-family: 'Zen Maru Gothic';
  font-style: normal;
  font-weight: 400;
  font-size: 12px;
  line-height: 160%;
  color: #38322C;
}
#questionimage-infomation-container{
  padding: 0 30px 30px 30px;
}
#questionimage-infomation-container ul {
  margin-top: 15px;
  list-style: none;
  padding: 0;
  font-family: 'Zen Maru Gothic';
  font-style: normal;
  font-weight: 500;
  font-size: 14px;
  line-height: 20px;
  color: #38322C;
}
#questionimage-infomation-container ul li{
  margin: 15px 0;
  font-family: 'Zen Maru Gothic';
  font-style: normal;
  font-weight: 400;
  font-size: 12px;
  line-height: 160%;
  color: #38322C;
}
#answerview-toppage-link{
  margin: 30px 0;
  font-family: 'Inter';
  font-style: normal;
  font-weight: 400;
  font-size: 16px;
  line-height: 19px;
  text-align: center;
  text-decoration-line: underline;
  color: #1D73F3;
}
#answerview-footer-text{
  margin-top: 60px;
  text-align: center;
  font-family: 'Inter';
  font-style: normal;
  font-weight: 400;
  font-size: 14px;
  line-height: 17px;
  color: #38322C;
}
</style>
