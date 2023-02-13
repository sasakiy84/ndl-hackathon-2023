<template>
  <main>
    <p>あと{{ totalQuestionNumber - currentQuestionNumber }}問</p>
    <h1>{{ `Q${currentQuestionNumber + 1}` }}; この人物は誰でしょう？</h1>
    <p>現在の得点: {{ totalScore }}</p>
    <div class="img-wrapper">
      <img class="hint-img" :src="hintImgLinks[currentHintImgIndex]" alt="" />
    </div>
    <div class="img-buttons">
      <button
        class="square-button next-button"
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
      >
        {{ index }}
      </button>
    </div>

    <div class="text-hint">
      <button class="square-button">ヒントを見る</button>
    </div>

    <div class="answer-input-wrapper">
      <input
        class="answer-input"
        type="text"
        v-model="userAnswer"
        placeholder="人物名を入力する"
      />
    </div>
    <RouterLink to="/answer">解答を見る</RouterLink>
  </main>
</template>

<script setup>
import { RouterLink } from "vue-router";
import { useQuestionStore } from "../stores/question";
import { ref } from "vue";

const questionStore = useQuestionStore();
const currentQuestionNumber = questionStore.currentQuestionNum;
const totalQuestionNumber = questionStore.totalQuestionNum;
const totalScore = questionStore.totalScore;

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
</script>

<style scoped>
main {
  max-width: 600px;
  margin: 0 auto;
}
.img-wrapper {
  width: 100%;
  height: 385px;
}
.hint-img {
  width: 100%;
  height: 100%;
  object-fit: cover;
}

.answer-input-wrapper {
  margin-top: 40px;
  width: 100%;
  display: flex;
  justify-content: center;
}
.answer-input {
  width: 400px;
  padding: 10px;
  height: 44px;
  border: 1px solid black;
  box-sizing: border-box;
}

.img-buttons {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin: 10px 0 20px;
}

button {
  background-color: transparent;
  border: none;
  cursor: pointer;
  outline: none;
  padding: 0;
  appearance: none;
}

.square-button {
  border: 1px solid black;
  padding: 10px;
}

.round-button {
  border: 1px solid black;
  border-radius: 100%;
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
</style>
