<script setup>
import { ref, computed, watchEffect } from 'vue'
const props = defineProps({
  debuctionScore: {
    type: Number,
    default: 10
  },
  showPopup: {
    type: Boolean,
    default: false
  }
})

const showPopup = ({
  get() {
    return props.showPopup
  },
  set(newValue) {
    // console.log(newValue)
    return newValue
  }
});

</script>

<template>
  <p>{{ showPopup }}</p>
  <div class="score-container" 
    v-if="showPopup === true"
  >
    <div 
    class="paragraph-wrapper" 
    >
      <p>-{{ debuctionScore }}点</p>
      <p>獲得できる点数は{{ debuctionScore }}点です</p>
    </div>
    <!-- <button @click="showPopup = false">
      close
    </button> -->
  </div>
</template>

<style scoped>
  .score-container {
    background: #F9F7F3;
    /* border: 1px solid #968D84; */
    border-radius: 10px;
    /* padding: 40px 0; */
    margin-bottom: 1rem;
    width: 320px;
    height: 140px;
  }

  .paragraph-wrapper {
    width: 90%;
    margin: 0 auto;
  }

  .flex {
    display: flex;
  }
</style>