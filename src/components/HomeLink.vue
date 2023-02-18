<script setup>
import { RouterLink } from "vue-router";
import { useQuestionStore } from "../stores/question";

const questionStore = useQuestionStore();
</script>

<template>
  <div class="home-link">
    <RouterLink to="/" @click="questionStore.$reset()">トップページに戻る</RouterLink>
  </div>
</template>

<style scoped>
  .home-link {
    margin-top: 3rem;
    margin-bottom: 3rem;
  }
</style>