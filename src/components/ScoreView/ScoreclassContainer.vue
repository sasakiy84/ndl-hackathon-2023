<script setup>
  import { useQuestionStore } from "../../stores/question";
  
  const questionStore = useQuestionStore();
  const totalScore = questionStore.totalScore;

  const scoreclasses = [
    {
      grade: 5,
      className: 'プラチナマスター',
      description: 'すばらしい！　知識は宝物。どんどんふやそう',
      icon: '../../assets/medal_platinum.svg'
    },
    {
      grade: 4,
      className: 'ゴールドマスター',
      description: 'すごい！　好きな人物がいたら、とことん調べてみよう',
      icon: '../../assets/medal_gold.svg'
    },
    {
      grade: 3,
      className: 'シルバーマスター',
      description: '知識は十分。あと少し学ぶとすぐにゴールドに昇格だ！',
      icon: '../../assets/medal_silver.svg'
    },
    {
      grade: 2,
      className: 'ブロンズマスター',
      description: 'おしい！　歴史の教科書を見たら、もっとわかるかも',
      icon: '../../assets/medal_bronze.svg'
    },
    {
      grade: 1,
      className: 'マスター',
      description: 'まだまだ伸びしろのあるきみ。ゆっくり学んでてっぺんをめざそう！',
      icon: '../../assets/medal_master.svg'
    }
  ]

  const getScoreclass = (score) => {
    if (score <= 10) {
      return scoreclasses.find(({grade}) => grade === 1)
    } else if (score > 10 && score <= 20) {
      return scoreclasses.find(({grade}) => grade === 2)
    } else if (score > 20 && score <= 50) {
      return scoreclasses.find(({grade}) => grade === 3)
    } else if (score > 50 && score <= 75) {
      return scoreclasses.find(({grade}) => grade === 4)
    } else {
      return  scoreclasses.find(({grade}) => grade === 5)
    } 
  }

  const scoreclass = getScoreclass(totalScore)
  const icon = new URL(getScoreclass(totalScore).icon, import.meta.url).href

  </script>
  
  <template>
    <div class="scoreclass-container">
      <div class="scoreclass-wrapper">
        <div class="scoreclass-inner-wrapper">
          <img class="scoreclass-icon" :src="icon"/>
          <div class="scoreclass-text">
            <p class="scoreclass-level">レベル　{{ scoreclass.className }}</p>
            <p class="scoreclass-descripsion">{{ scoreclass.description }}</p>
          </div>
        </div>
      </div>
    </div>
  </template>
  
  <style scoped>
    .scoreclass-container {
      background: #FCFCFC;
      border-radius: 12px;
      padding: 10px 0;
      margin-bottom: 1rem;
    }

    .scoreclass-wrapper {
      width: 90%;
      margin: 0 auto;
    }

    .scoreclass-inner-wrapper {
      display: flex;
      padding: 0 2rem;
    }

    .scoreclass-icon {
      margin-right: 1rem;
    }

    .scoreclass-text {

    }

    .scoreclass-description {

    }
  </style>