<script setup>
  import { useQuestionStore } from "../../stores/question";
  
  const questionStore = useQuestionStore();
  const totalScore = questionStore.totalScore;

  const scoreclasses = [
    {
      grade: 5,
      className: 'プラチナマスター',
      description: 'すばらしい！　知識は宝物。どんどんふやそう'
    },
    {
      grade: 4,
      className: 'ゴールドマスター',
      description: 'すごい！　好きな人物がいたら、とことん調べてみよう'
    },
    {
      grade: 3,
      className: 'シルバーマスター',
      description: '知識は十分。あと少し学ぶとすぐにゴールドに昇格だ！'
    },
    {
      grade: 2,
      className: 'ブロンズマスター',
      description: 'おしい！　歴史の教科書を見たら、もっとわかるかも'
    },
    {
      grade: 1,
      className: 'マスター',
      description: 'まだまだ伸びしろのあるきみ。ゆっくり学んでてっぺんをめざそう！'
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

  </script>
  
  <template>
    <div class="scoreclass-container">
      <div class="scoreclass-wrapper">
        <img class="scoreclass-icon" src="../../assets/japansearch_logo_text.svg"/>
        <div class="scoreclass-text">
          <p class="level">レベル　{{ scoreclass.className }}</p>
          <p class="descripsion">{{ scoreclass.description }}</p>
        </div>
      </div>
    </div>
  </template>
  
  <style scoped>
    .scoreclass-container {
      background: #FCFCFC;
      border-radius: 12px;
      padding: 10px 0;
    }

    .scoreclass-wrapper {
      width: 90%;
      margin: 0 auto;
      display: flex;
    }

    .scoreclass-icon {

    }

    .scoreclass-text {

    }
  </style>