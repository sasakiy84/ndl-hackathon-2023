<script setup>
import { RouterLink } from "vue-router";

import JpsHackathonFooter from "../components/JpsHackathonFooter.vue"
import ParagraphWrapper from "../components/ParagraphWrapper.vue"

</script>

<template>
  <div id="top-container">
    <div class="top-title-band">
      <p>
        <h1 id="top-title-text">クイズ この人はだれ？</h1>
      </p>
      <p>
        <h3 id="top-subtitle-text">小学教科書にでてくる歴史人物３９人</h3>
      </p>
    </div>
  </div>
  <main>
    <div class="home-section-container">
      <p id="game-introduction-text">
        ジャパンサーチにすむサーチ君が、歴史好きのみなさんに、小学校の教科書にでてくる人物のビジュアルからクイズをつくってくれました。一人の人物にヒントとなる画像は５つ。早くわかると高得点になるので、どんどんチャレンジ解答してください。
      </p>
    </div>
    <div id="rule-container">
      <div class="home-section-container">
        <h2 id="rule-title-text">ゲームのルール</h2>
        <div id="rule-list-container">
          <p id="rule-outline-text">少ないヒントで答えた方が、得点がアップします。</p>
          <ol id="rule-list">
            <li>画像は5枚あります。見た枚数が少ないほど高得点！</li>
            <li>分からなかったら、ヒントを表示できます。</li>
            <li>テキスト入力で答えられるとGOOD！難しかったら5つの選択肢の中から答えてみましょう。</li>
          </ol>
        </div>
      </div>
    </div>
    <RouterLink to="/question?q=1" id="game-start-btn-inner">ゲームを始める</RouterLink>
    <div class="credit-link">
      <RouterLink to="/credit">トップページに使った画像のクレジット</RouterLink>
    </div>
    <ParagraphWrapper :isFlex=false>
      <div class="img-center is-hidden-on-pc-and-tab">
        <img id="japansearch-description-logo" src="../assets/japansearch_logo_text.svg">
      </div>
      <div class="jp-description-title-wrapper">
        <div class="is-hidden-on-sp">
          <img id="japansearch-description-logo" src="../assets/japansearch_logo_text.svg">
        </div>

        <div>
          <h2 id="japansearch-description-title">ジャパンサーチとは？</h2>
          <div id="japansearch-description-text">
            ジャパンサーチは、図書館、博物館、美術館、公文書館、大学などがもっているコンテンツ、国宝や重要文化財の画像などを検索できるしくみ。面白いビジュアルがたくさんかくれているデジタル館です。検索ワードを打ち込むと、いろいろなことを調べられます。きっと見たことのある画像があるはず！
          </div>
          <div id="japansearch-description-link"><a target="_blank" href="https://jpsearch.go.jp/">ジャパンサーチを見る</a></div>
        </div>
      </div>
    </ParagraphWrapper>
  </main>
  <JpsHackathonFooter />
</template>

<style>
main {
  max-width: 834px;
  margin: 0 auto 60px;
  padding: 0 10px;
}

h1,
h2,
h3 {
  margin: 0 !important;
}

#top-container {
  width: auto;
  height: auto;
  margin: 0 auto;
  max-width: 834px;
  background-image: url('../assets/main.jpg');
  background-position: 50% 50%;
  background-size: cover;
  padding: 151px 0 186.12px;
}

.top-title-band {
  background: rgba(0, 0, 0, 0.45);
  width: auto;
  height: auto;
  padding: 0.5rem 0;
}

#top-title-text {
  font-weight: 700;
  font-size: 32px;
  line-height: 46px;
  text-align: center;
  color: #ffffff;
}

#top-subtitle-text {
  font-weight: 700;
  font-size: 16px;
  line-height: 23px;
  align-items: center;
  text-align: center;
  color: #ffffff;
}

.home-section-container {
  max-width: 600px;
  margin: 0 auto;
  padding: 30px;
}

#game-introduction-text {
  margin: 0;
  font-style: normal;
  font-weight: 500;
  font-size: 16px;
  line-height: 160%;
  letter-spacing: 0.04em;
  color: #38322C;
}

#rule-container {
  background: #E2D1BD;
}

#rule-title-text {
  font-style: normal;
  font-weight: 500;
  font-size: 20px;
  line-height: 29px;
  color: #38322C;
}

#rule-list {
  padding-left: 25px;
  margin: 0;
  font-weight: 400;
  font-size: 16px;
  line-height: 160%;
  letter-spacing: 0.04em;
  color: #38322C;
}

#rule-outline-text {
  margin: 0.5rem 0 0;
  display: block;
}

#rule-outline-text {
  font-weight: 400;
  font-size: 16px;
  line-height: 160%;
  letter-spacing: 0.04em;
  color: #38322C;
}

#game-start-btn-inner {
  display: flex;
  flex-direction: row;
  gap: 10px;

  display: flex;
  border-radius: 8px;
  color: #ffffff;
  width: 298px;
  height: 56px;
  justify-content: center;
  align-items: center;
  text-decoration: none;
  background: #3c436a;
  margin: 40px auto;
}

#japansearch-description-container {
  box-sizing: border-box;
  background: #FDFDFD;
  border: 1px solid #DFD6CD;
  border-radius: 12px;
}

.jp-description-title-wrapper {
  display: flex;
  align-items: center;
}

.img-center {
  display: flex;
  justify-content: center;
}

#japansearch-description-title {
  font-weight: 500;
  font-size: 18px;
  line-height: 26px;
  color: #38322C;
}

#japansearch-description-text {
  font-weight: 400;
  font-size: 16px;
  line-height: 160%;
  letter-spacing: 0.04em;
  color: #38322C;
}

#japansearch-description-link {
  font-weight: 400;
  font-size: 16px;
  line-height: 160%;
  text-decoration-line: underline;
  color: #1D73F3;
}

.credit-link {
  margin-bottom: 20px;
}
</style>
