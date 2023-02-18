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
      <h1>
        <span class="question-number">{{ `Q.${currentQuestionNumber + 1}` }}</span
        >この人物は誰でしょう？
      </h1>
      <p>現在の得点: {{ totalScore }}</p>
      <div class="img-wrapper">
        <img class="hint-img" :src="hintImgLinks[currentHintImgIndex]" alt="" />
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

      <div class="user-inputs-container">
        <div class="user-inputs-wrapper">
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
              もっとヒントを見る
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
        </div>
      </div>
    </main>
    <HomeLink />
    <JpsHackathonFooter />
  </div>
</template>

<script setup>
import { useQuestionStore } from "../stores/question";
import { ref, computed } from "vue";
import { shuffleArray } from "../composables/util";
import { useRouter } from "vue-router";

import HomeLink from "../components/HomeLink.vue"
import JpsHackathonFooter from "../components/JpsHackathonFooter.vue"

const questionStore = useQuestionStore();
const currentQuestionNumber = questionStore.currentQuestionNum;
const totalQuestionNumber = questionStore.totalQuestionNum;
const totalScore = questionStore.totalScore;
const answer = questionStore.questionIds[currentQuestionNumber];

const availableScore = ref(10);

const currentHintImgIndex = ref(0);
const hintImgLinks = [
  "https://archive.library.metro.tokyo.lg.jp/da/download/?id=0000000003-00012400&size=listThumb&type=image&file=2421-K001.jpg",
  "https://archive.wul.waseda.ac.jp/kosho/bunko10/bunko10_08306/bunko10_08306_p0001.jpg",
  "https://colbase.nich.go.jp/media/tnm/F-20102/image/slideshow_s/F-20102_C0006042.jpg",
  "https://museumcollection.tokyo/wp-content/uploads/2021/10/12833-L.jpg",
  "https://www.iiif.ku-orcas.kansai-u.ac.jp/iiif/2/002720914%2F002720914-0001.tif/full/110,/0/default.jpg",
];

const changeHintImg = (newIndex) => {
  currentHintImgIndex.value = newIndex;
};

const userAnswer = ref("");
const textHintDisplayed = ref(false);
const selectBoxDisplayed = ref(false);
const textHints = ref([
  "1542-1616, 戦国時代～安土桃山時代の武将、戦国大名、江戸幕府初代将軍。",
  "岡崎城主・松平広忠の子。",
  "幼名は竹千代。",
  "初名は元信、元康。",
  "法号は安国院。",
]);
const selectedHint =
  textHints.value[Math.floor(Math.random() * textHints.value.length)];

const choices = ref([
  "徳川家康",
  "徳川秀忠",
  "徳川家光",
  "徳川家綱",
  "徳川綱吉",
  "徳川家宣",
  "徳川家継",
  "徳川吉宗",
  "徳川家重",
  "徳川家治",
  "徳川家斉",
  "徳川家慶",
  "徳川家定",
  "徳川家茂",
  "徳川慶喜",
]);
const pickedChoices = computed(() => {
  const dummyChoices = shuffleArray(choices.value)
    .filter((name) => {
      return name !== answer;
    })
    .slice(0, 4);

  const allCanditates = [answer, ...dummyChoices];

  return shuffleArray(allCanditates);
});

const router = useRouter();
const submitAnswer = async () => {
  if (userAnswer.value === answer) {
    questionStore.appendScore(availableScore.value);
  } else {
    questionStore.appendScore(0);
  }

  await router.push("/answer");
};
</script>

<style scoped>
.body {
  background: #fbf8f0;
}

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

.question-number {
  font-weight: 900;
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
