<script setup>
const props = defineProps({
  isFlex: {
    type: Boolean,
    default: false,
  }
})
</script>

<template>
  <div class="paragraph-container">
    <div 
    class="paragraph-wrapper" 
    :class="{
      flex: isFlex  
    }">
      <slot></slot>
    </div>
  </div>
</template>

<style scoped>
  .paragraph-container {
    background: #fdfdfd;
    border: 1px solid #dfd6cd;
    border-radius: 10px;
    padding: 40px 0;
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