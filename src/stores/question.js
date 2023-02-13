import { defineStore } from "pinia"

export const useQuestionStore = defineStore({
    id: "question",
    state: () => ({
        // 問題ごとに獲得した score を格納する
        scores: [],
        // 問題に使う人物名を格納する
        // 現在は固定値だが、そのうちランダムで初期化する
        questionIds: [
            "徳川家康",
            "聖徳太子",
            "天智天皇",
            "鑑真",
            "行基",
            "藤原鎌足",
            "清少納言",
            "紫式部",
            "藤原道長",
            "源頼朝"
        ]
    }),
    getters: {
        // 現在の総合得点を返す
        totalScore: (state) => {
            return state.scores.reduce((prevScore, currentScore) => {
                return prevScore + currentScore
            }, 0)
        },
        // 現在何問目かを返す
        currentQuestionNum: (state) => {
            return state.scores.length
        },
        // 合計問題数を返す
        totalQuestionNum: (state) => {
            return state.questionIds.length
        },
    },
    actions: {
        // scoreを追加する
        appendScore(newScore) {
            this.scores.push(newScore)
        },
    }
})