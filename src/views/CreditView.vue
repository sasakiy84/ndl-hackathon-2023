<script setup>
import { ref, inject, onMounted } from 'vue';
import { RouterLink } from "vue-router";
import JpsHackathonFooter from "../components/JpsHackathonFooter.vue"
import ParagraphWrapper from "../components/ParagraphWrapper.vue";

const creditIds = [
  "arc_nishikie-2421_K001", 
  "cobas-46577", 
  "cobas-38471", 
  "cobas-46621", 
  "keioobjecthub-5904", 
  "cobas-49388", 
  "arc_nishikie-MET_DP147660", 
  "arc_nishikie-T_ASAHI_49703311_01", 
  "arc_nishikie-0872_C028Nr020a", 
  "cobas-81539", 
  "arc_nishikie-280_K012", 
  "tokyo-R100000086_I000036740_00", 
  "cobas-48164", 
  "arc_books-NDL_1312533", 
  "dignl-1287858", 
  "ukansai-R100000114_I000001041_00", 
  "cobas-46533", 
  "dignl-1920856", 
  "dignl-2592631" 
]

const axios = inject('axios')

const credits = ref([])

const getCredit = (id) => {
  axios.get('https://jpsearch.go.jp/api/item/' + id)
  .then((response) => {
    credits.value.push(response.data)
    credits.value.find((q) => q.id === id).japansearchUrl = 'https://jpsearch.go.jp/item/' + id
    getProviderName(response.data.common.provider, id)
    getDatabaseName(response.data.common.database, id)
  }) 
}

const getDatabaseName = (databaseId, itemId) => {
  axios.get('https://jpsearch.go.jp/api/database/' + databaseId)
  .then((response) => {
    credits.value.find((q) => q.id === itemId).databaseName = response.data.name.ja
  })
}

const getProviderName = (itemProvider, itemId) => {
  if (itemProvider === 'MET') {
    credits.value.find((q) => q.id === itemId).providerName = 'メトロポリタン美術館'
  } else if (!itemProvider.match(/^[a-z]*$/)) {
    credits.value.find((q) => q.id === itemId).providerName = itemProvider
  } else {
    axios.get('https://jpsearch.go.jp/api/organization/' + itemProvider)
    .then((response) => {
      credits.value.find((q) => q.id === itemId).providerName = response.data.name.ja
    })
  }
}

onMounted(() => {
  for(let id of creditIds) {
    getCredit(id)
  }
})

</script>

<template>
<main>
  <h1>トップページに使った画像</h1>
  <ParagraphWrapper>
    <article>
      <h2>画像を使うときはクレジットを書こう</h2>
      <p>ジャパンサーチの画像を使うときは、まず自由に使ってもいい画像かどうか、確認しましょう。そして、画像を使う場合は、クレジット（その画像のタイトルや作者、所蔵館の名前などをまとめたもの）を書きましょう。PDM（パブリックドメイン、作者の死後70年が経って著作権が切れたもの）、CC0（著作権はあるけど、作者が自由に使っていいと意思表示して公開しているもの）は、書く決まりはないですが、マナーとして書いておくのがいいでしょう。</p>
    </article>
  </ParagraphWrapper>
  <article>
    <ul>
      <li v-for="item in credits">
        <p v-for="contributor in item.common.contributor">{{ contributor }}</p>
        <p>{{ item.providerName }}所蔵</p>
        <p>「{{ item.databaseName }}」 収録</p>
        <a :href="item.japansearchUrl" target="_blank">({{ item.japansearchUrl }})</a>
      </li>
    </ul>
  </article>
  <RouterLink to="/">トップページ</RouterLink>  
</main>
<JpsHackathonFooter />
</template>

<style scoped>
main {
  max-width: 600px;
  margin: 0 auto 60px;
  padding: 0 10px;
}
</style>