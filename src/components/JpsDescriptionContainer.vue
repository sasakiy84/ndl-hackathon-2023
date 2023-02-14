<script setup>

</script>

<template>
  <div class="paragraph-container">
    <div class="paragraph-wrapper flexbox">
      <img src="../assets/japansearch.gif" class="jps-gif">
      <article class="explain-jps">
        <h2>ジャパンサーチで歴史マスターになろう</h2>
        <p>このゲームはジャパンサーチのデータを使っています。ジャパンサーチは、図書館、博物館、美術館、公文書館、大学などがもっているコンテンツ、国宝や重要文化財の画像などを検索できるしくみ。面白いビジュアルがたくさんかくれているデジタル館です。検索ワードを打ち込むと、いろいろなことを調べられます。きっと見たことのある画像があるはず！</p>
        <a href="https://jpsearch.go.jp/" target="_blank">ジャパンサーチを見る</a>
      </article>
    </div>
  </div>
</template>

<style scoped>
  .paragraph-container {
    background: #fdfdfd;
    border: 1px solid #dfd6cd;
    border-radius: 10px;
    padding: 40px 0;
  }

  .paragraph-wrapper {
    width: 90%;
    margin: 0 auto;
  }

  .flexbox {
    display: flex;
  }

  .jps-gif {
    width: 15%;
    height: 50%;
    margin-right: 1rem;
  }
</style>