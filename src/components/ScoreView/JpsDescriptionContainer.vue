<script setup>
import { ref } from "vue"
import ParagraphWrapper from "../ParagraphWrapper.vue"

</script>

<template>
  <ParagraphWrapper 
  :isFlex=true
  >
    <img src="../../assets/japansearch_logo_text.svg" class="jps-logo">
      <article class="explain-jps">
        <h1>ジャパンサーチで歴史マスターになろう</h1>
        <p>このゲームはジャパンサーチのデータを使っています。ジャパンサーチは、図書館、博物館、美術館、公文書館、大学などがもっているコンテンツ、国宝や重要文化財の画像などを検索できるしくみ。面白いビジュアルがたくさんかくれているデジタル館です。検索ワードを打ち込むと、いろいろなことを調べられます。きっと見たことのある画像があるはず！</p>
        <a href="https://jpsearch.go.jp/" target="_blank">ジャパンサーチを見る</a>
      </article>
  </ParagraphWrapper>
</template>

<style scoped>
  h1 {
    font-size: large;
  }
  .jps-logo {
    /* width: 15%; */
    /* height: 50%; */
    /* margin-right: 1rem; */
  }
</style>