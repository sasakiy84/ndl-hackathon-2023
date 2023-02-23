<script setup>
import { reactive, inject, onMounted, computed } from 'vue';
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

const credits = reactive([])

const getCredit = (index) => {
  const id = creditIds[index]
  axios.get('https://jpsearch.go.jp/api/item/' + id)
  .then((response) => {
    credits.splice(index, 0, response.data)
    credits.find((q) => q.id === id).japansearchUrl = 'https://jpsearch.go.jp/item/' + id
    credits.find((q) => q.id === id).index = parseInt(index)
    credits.find((q) => q.id === id).contributors = formContributers(response.data.common.contributor)
    getProviderName(response.data.common.provider, id)
    getDatabaseName(response.data.common.database, id)
  }) 
}

const formContributers = (contributors) => {
  const withoutBlankValue = contributors.map((value) => {
    if (value !== "") {
      return value
    }
  }).filter(Boolean)
  return withoutBlankValue.join('、')
}

const getDatabaseName = (databaseId, itemId) => {
  axios.get('https://jpsearch.go.jp/api/database/' + databaseId)
  .then((response) => {
    credits.find((q) => q.id === itemId).databaseName = response.data.name.ja
  })
}

const getProviderName = (itemProvider, itemId) => {
  if (itemProvider === 'MET') {
    credits.find((q) => q.id === itemId).providerName = 'メトロポリタン美術館'
  } else if (!itemProvider.match(/^[a-z]*$/)) {
    credits.find((q) => q.id === itemId).providerName = itemProvider
  } else {
    axios.get('https://jpsearch.go.jp/api/organization/' + itemProvider)
    .then((response) => {
      credits.find((q) => q.id === itemId).providerName = response.data.name.ja
    })
  }
}

onMounted(async () => {
  await Promise.all(creditIds.map(async (n, index) => {
    await getCredit(index)
    return
  }))
})

</script>

<template>
<main>
  <div class="credit-title-wrapper">
    <h1 class="credit-title">トップページに使った画像</h1>
  </div>
  <ParagraphWrapper>
    <article>
      <h2 class="credit-description-title">画像を使うときはクレジットを書こう</h2>
      <p class="credit-description">ジャパンサーチの画像を使うときは、まず自由に使ってもいい画像かどうか、確認しましょう。そして、画像を使う場合は、クレジット（その画像のタイトルや作者、所蔵館の名前などをまとめたもの）を書きましょう。PDM（パブリックドメイン、作者の死後70年が経って著作権が切れたもの）、CC0（著作権はあるけど、作者が自由に使っていいと意思表示して公開しているもの）は、書く決まりはないですが、マナーとして書いておくのがいいでしょう。</p>
    </article>
  </ParagraphWrapper>
  <article>
    <ul class="credit-list">
      <li v-for="item in credits" class="credit-list-contents">
        <span>{{ item.contributors }}</span><span>『{{ item.common.title }}』</span>
        <p>{{ item.providerName }}所蔵</p>
        <p>「{{ item.databaseName }}」 収録</p>
        <a :href="item.japansearchUrl" target="_blank">({{ item.japansearchUrl }})</a>
      </li>
    </ul>
  </article>
  <RouterLink to="/" class="home-link">
    トップページ
  </RouterLink>  
</main>
<JpsHackathonFooter />
</template>

<style scoped>
main {
  max-width: 834px;
  margin: 0 auto 60px;
  padding: 0 10px;
}

.credit-title-wrapper {
  margin: 4rem 0 3rem;
}

.credit-title {
  text-align: center;
  font-weight: 700;
  letter-spacing: 0.1rem;
}

.credit-description-title {
  font-weight: 500;
}

.credit-description {
  line-height: 160%;
  margin-bottom: 0;
}

.credit-list {
  margin-top: 3rem
}

.credit-list-contents {
  list-style: none;
  margin-bottom: 3rem;
}

.home-link {
  background: none;
  display: flex;
  border: 2px solid #3c436a;
  border-radius: 8px;
  color: #3c436a;
  width: 298px;
  height: 56px;
  justify-content: center;
  align-items: center;
  text-decoration: none;
  margin: 50px auto 0;
  font-weight: 700;
}

.home-link-button {
  background: none;
  display: flex;
  border: 2px solid #3c436a;
  border-radius: 8px;
  color: #3c436a;
  width: 298px;
  height: 56px;
  justify-content: center;
  align-items: center;
  text-decoration: none;
  margin: 50px auto 0;
  font-weight: 700;
}
</style>