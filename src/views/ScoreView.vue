<template>
  <p>あなたの得点は{{ totalScore }}</p>
  <RouterLink to="/question?q=1">問題開始</RouterLink>
</template>

<script setup>
  import { RouterLink } from "vue-router";
  import { ref } from "vue";
  const totalScore = ref(0);
</script>