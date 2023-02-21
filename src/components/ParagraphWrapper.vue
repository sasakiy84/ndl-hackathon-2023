<script setup>
const props = defineProps({
  isFlex: {
    type: Boolean,
    default: false,
  },
});
</script>

<template>
  <div class="paragraph-container">
    <div class="paragraph-wrapper" :class="{
      flex: isFlex,
    }">
      <slot></slot>
    </div>
  </div>
</template>

<style scoped>
.paragraph-container {
  background: #f9f7f3;
  border: 1px solid #968d84;
  border-radius: 10px;
  padding: 3rem 0;
  margin-bottom: 1rem;
}

.paragraph-wrapper {
  width: 90%;
  margin: 0 auto;
}

.flex {
  display: flex;
}
</style>
