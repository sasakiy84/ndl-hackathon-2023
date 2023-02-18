<script setup>
import { ref } from "vue"
import ParagraphWrapper from "../ParagraphWrapper.vue"

</script>

<template>
  <ParagraphWrapper 
  :isFlex=false
  >
    <div class="jps-article-wrapper">
      <img src="../../assets/japansearch_logo_text.svg" class="jps-logo">
      <article class="explain-jps">
        <h1>ジャパンサーチで歴史マスターになろう</h1>
        <p class="description-text">このゲームはジャパンサーチのデータを使っています。ジャパンサーチは、図書館、博物館、美術館、公文書館、大学などがもっているコンテンツ、国宝や重要文化財の画像などを検索できるしくみ。面白いビジュアルがたくさんかくれているデジタル館です。検索ワードを打ち込むと、いろいろなことを調べられます。きっと見たことのある画像があるはず！</p>
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
  .jps-logo {
    
  }

  a {
    text-decoration: none;
    display: inline-block;
  }

  .description-text {
    font-weight: 400;
    line-height: 1.6;
  }

  .jps-link-button {
    background-color: transparent;
    border: none;
    cursor: pointer;
    outline: none;
    padding: 0;
    appearance: none;
    background: #3c436a;
    display: flex;
    border-radius: 8px;
    color: #ffffff;
    width: 298px;
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