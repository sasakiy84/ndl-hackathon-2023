<script setup>
  const props = defineProps({
    debuctionScore: {
      type: BigInt,
      default: 10
    },
    show: {
      type: Boolean,
      default: false
    }
  })

  const show = ref(props.show);
  // const showFlash = () => {
    
  // }

  // export default {
  //   methods: {
  //     showFlash(){
  //       this.show = true;
  //       setTimeout(() => {

  //       })
  //     // setTimeoutで3000ms後にshowをfalseにする
  //       setTimeout(() => {
  //         this.show = false}
  //         ,3000
  //       )
  //     }
  //   }
  // }
  </script>
  
  <template>
    <div class="score-container" v-if="show">
      <div 
      class="paragraph-wrapper" 
      >
        <p>-{{ debuctionScore }}点</p>
        <p>獲得できる点数は{{ debuctionScore }}点です</p>
      </div>
    </div>
  </template>
  
  <style scoped>
    .score-container {
      background: #F9F7F3;
      border: 1px solid #968D84;
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