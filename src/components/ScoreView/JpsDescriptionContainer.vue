<script setup>
import { ref } from "vue";
import ParagraphWrapper from "../ParagraphWrapper.vue";
</script>

<template>
  <ParagraphWrapper :isFlex="false">
    <img src="../../assets/japansearch_logo_text.svg" class="jps-logo is-hidden-on-pc-and-tab" />
    <div class="jps-article-wrapper">
      <img src="../../assets/japansearch_logo_text.svg" class="jps-logo is-hidden-on-sp" />
      <article class="explain-jps">
        <h1>ジャパンサーチで歴史マスターになろう</h1>
        <p class="description-text">
          このゲームはジャパンサーチのデータを使っています。<br>
          ジャパンサーチは、日本の図書館、博物館、美術館、大学などがもっているコンテンツをまとめて検索できるしくみ。<br>
          検索ワードを打ち込むと、本の中身を見たり面白いビジュアルを直接見ることができるデジタル館です。知りたいことを探したり、ビジュアルを楽しんだり、自分のノートをつくったりしてみましょう。
        </p>
      </article>
    </div>
    <div class="jps-link-wrapper">
      <a href="https://jpsearch.go.jp/" target="_blank">
        <button class="jps-link-button">ジャパンサーチを見る</button>
      </a>
    </div>
  </ParagraphWrapper>
</template>

<style scoped>
h1 {
  font-size: large;
  font-weight: 500;
}

.jps-logo.is-hidden-on-pc-and-tab {
  margin: 0 auto;
  display: block;
}

a {
  text-decoration: none;
  display: inline-block;
}

.description-text {
  font-weight: 400;
  line-height: 1.6;
  white-space: pre-wrap;
}

.jps-link-button {
  background-color: transparent;
  border: none;
  cursor: pointer;
  outline: none;
  padding: 0 20px;
  appearance: none;
  background: #3c436a;
  display: flex;
  border-radius: 8px;
  color: #ffffff;
  width: 100%;
  max-width: 300px;
  height: 56px;
  justify-content: center;
  align-items: center;
  text-decoration: none;
  margin: 5px auto 0;
  font-weight: 700;
}

.jps-link-wrapper {
  text-align: center;
}

.jps-article-wrapper {
  display: flex;
}
</style>
