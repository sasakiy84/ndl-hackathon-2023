<script setup>
import { RouterLink } from "vue-router";

import JpsHackathonFooter from "../components/JpsHackathonFooter.vue"
import ParagraphWrapper from "../components/ParagraphWrapper.vue"

</script>

<template>
  <main>
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
    <div class="home-section-container">
      <p id="game-introduction-text">ジャパンサーチにすむサーチ君が、歴史好きのみなさんに、小学校の教科書にでてくる人物のビジュアルからクイズをつくってくれました。一人の人物にヒントとなる画像は５つ。早くわかると高得点になるので、どんどんチャレンジ解答してください。</p>
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
    <ParagraphWrapper
      :isFlex=true
    >
      <div>
        <img id="japansearch-description-logo" src="../assets/japansearch_logo_text.svg">
      </div>
      <div>
        <h2 id="japansearch-description-title">ジャパンサーチとは？</h2>
        <div id="japansearch-description-text">ジャパンサーチは、図書館、博物館、美術館、公文書館、大学などがもっているコンテンツ、国宝や重要文化財の画像などを検索できるしくみ。面白いビジュアルがたくさんかくれているデジタル館です。検索ワードを打ち込むと、いろいろなことを調べられます。きっと見たことのある画像があるはず！</div>
        <div id="japansearch-description-link"><a href="https://jpsearch.go.jp/">ジャパンサーチを見る</a></div>
      </div>
    </ParagraphWrapper>
  </main>
  <JpsHackathonFooter />
</template>

<style>
main {
  max-width: 834px;
  margin: 0 auto;
  position: relative;
}

h1, h2, h3 {
  margin: 0!important;
}

#top-container{
  /* position: absolute; */
  width: auto;
  height: auto;
  background-image: url('../assets/main.jpg');
  background-size: cover;
  padding: 151px 0 186.12px;
}

.top-title-band{
  background: rgba(0, 0, 0, 0.45);
  width: auto;
  height: auto;
  padding: 0.5rem 0;
}

#top-title-text{
  /* position: absolute; */
  /* width: 329px; */
  /* height: 46px; */
  /* left: 253px; */
  /* top: 82px; */
  font-style: normal;
  font-weight: 700;
  font-size: 32px;
  line-height: 46px;
  text-align: center;
  color: #ffffff;
}

#top-subtitle-text{
  /* position: absolute;
  width: 272px;
  height: 23px;
  left: 281px;
  top: 143px; */
  font-style: normal;
  font-weight: 700;
  font-size: 16px;
  line-height: 23px;
  /* display: flex; */
  align-items: center;
  text-align: center;
  color: #ffffff;
}

.home-section-container{
  padding: 40px 117px;
}

#game-introduction-text{
  margin: 0;
  /* position: absolute; */
  /* width: 600px;
  height: 104px;
  left: 117px;
  top: 420px; */
  font-family: 'Zen Maru Gothic';
  font-style: normal;
  font-weight: 500;
  font-size: 16px;
  line-height: 160%;
  letter-spacing: 0.04em;
  color: #38322C;
}
#rule-container{
  /* position: absolute;
  width: 834px;
  height: 212px;
  left: 0px;
  top: 564px; */
  background: #E2D1BD;
}
#rule-title-text{
  /* position: absolute;
  width: 600px;
  height: 27px;
  left: 117px;
  top: 24px; */
  font-family: 'Zen Maru Gothic';
  font-style: normal;
  font-weight: 500;
  font-size: 20px;
  line-height: 29px;
  color: #38322C;
}
#rule-list-container{
  /* position: absolute;
  width: 600px;
  height: 130px;
  left: 117px;
  top: 58px; */
}
#rule-list{
  padding-left: 25px;
  margin: 0;
  /* position: absolute;
  width: 600px;
  height: 130px;
  left: 0px;
  top: 25px; */
  font-family: 'Zen Maru Gothic';
  font-style: normal;
  font-weight: 400;
  font-size: 16px;
  line-height: 160%;
  letter-spacing: 0.04em;
  color: #38322C;
}
#rule-outline-text{
  /* margin: 0!important; */
  margin: 0.5rem 0 0;
  display: block;
}
#rule-outline-text{
  font-family: 'Zen Maru Gothic';
  font-style: normal;
  font-weight: 400;
  font-size: 16px;
  line-height: 160%;
  letter-spacing: 0.04em;
  color: #38322C;
}

#game-start-btn-inner{
  display: flex;
  flex-direction: row;
  /* align-items: flex-start; */
  gap: 10px;
  /* position: absolute;
  left: 268px;
  top: 816px; */
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
#japansearch-description-container{
  box-sizing: border-box;
  /* position: absolute;
  width: 768px;
  height: 275px;
  left: 33px;
  top: 912px; */
  background: #FDFDFD;
  border: 1px solid #DFD6CD;
  border-radius: 12px;
}
#japansearch-description-logo{
  /* position: absolute;
  width: 200px;
  height: 200px;
  left: 16px;
  top: 38px; */
}
#japansearch-description-title{
  /* position: absolute;
  width: 414px;
  height: 27px;
  left: 216px;
  top: 36px; */
  font-family: 'Zen Maru Gothic';
  font-style: normal;
  font-weight: 500;
  font-size: 18px;
  line-height: 26px;
  color: #38322C;
}
#japansearch-description-text{
  /* position: absolute;
  width: 516px;
  height: 130px;
  left: 216px;
  top: 73px; */
  font-family: 'Zen Maru Gothic';
  font-style: normal;
  font-weight: 400;
  font-size: 16px;
  line-height: 160%;
  letter-spacing: 0.04em;
  color: #38322C;
}
#japansearch-description-link{
  /* position: absolute;
  width: 160px;
  height: 26px;
  left: 216px;
  top: 213px; */
  font-family: 'Inter';
  font-style: normal;
  font-weight: 400;
  font-size: 16px;
  line-height: 160%;
  text-decoration-line: underline;
  color: #1D73F3;
}
</style>
