import { defineStore } from "pinia"
import md5 from "blueimp-md5"
import questions from "../mondai.json"
import {shuffleArray} from "../composables/util"

export const useQuestionStore = defineStore({
    id: "question",
    state: () => {
        const shuffledQuestions = shuffleArray(questions).slice(0,10)
        return {
            // 現在の問題番号
            cuestionIndex: 0,
            // 問題ごとに獲得した score を格納する
            scores: [],
            // 現在は固定値だが、そのうちランダムで初期化する
            questionIds: shuffledQuestions.map(q => q.chname)
    }},
    getters: {
        // 現在の総合得点を返す
        totalScore: (state) => {
            return state.scores.reduce((prevScore, currentScore) => {
                return prevScore + currentScore
            }, 0)
        },
        // 現在何問目かを返す
        currentQuestionNum: (state) => {
            return state.cuestionIndex
        },
        // 合計問題数を返す
        totalQuestionNum: (state) => {
            return state.questionIds.length
        },
        // 現在の問題の答えを返す
        currentAnswer: (state) => {
            const questionId = state.questionIds[state.currentQuestionNum]
            const choises = questions.find((q) => q.chname === questionId).choise
            const answer = choises.find(answerCanditate => {
                return md5(answerCanditate) === questionId
            })

            return answer
        },
        // 現在の問題の答えを返す
        previousAnswer: (state) => {
            const questionId = state.questionIds[state.currentQuestionNum - 1]
            const choises = questions.find((q) => q.chname === questionId).choise
            const answer = choises.find(answerCanditate => {
                return md5(answerCanditate) === questionId
            })

            return answer
        },
        /**
         * @param {*} state 
         * @return {string[]}
         */
        getHintImages: (state) => {
            const questionId = state.questionIds[state.currentQuestionNum]
            const hintImages = questions.find((q) => q.chname === questionId).image
            const hintImageURLs = []
            for (const key in hintImages) {
                hintImageURLs.push(hintImages[key])
            }

            return hintImageURLs.slice(0,5)
        },
        /**
         * @param {*} state 
         * @return {string[]}
         */
        getPreviousHintImages: (state) => {
            const questionId = state.questionIds[state.currentQuestionNum - 1]
            const hintImages = questions.find((q) => q.chname === questionId).image
            const hintImageURLs = []
            for (const key in hintImages) {
                hintImageURLs.push(hintImages[key])
            }

            return hintImageURLs.slice(0,5)
        },
        getChoises: (state) => {
            const questionId = state.questionIds[state.currentQuestionNum]
            const choises = questions.find((q) => q.chname === questionId).choise
            const answer = choises.find(answerCanditate => {
                return md5(answerCanditate) === questionId
            })
            const choisesWithoutAnswer = shuffleArray(questions).find((q) => q.chname === questionId).choise.filter((choise) =>
                 md5(choise) !== questionId
            ).slice(0,4)
            const selectedChoises = shuffleArray([answer, ...choisesWithoutAnswer])
            return selectedChoises
        },
        getTextHint: (state) => {
            const questionId = state.questionIds[state.currentQuestionNum]
            const textHints = questions.find((q) => q.chname === questionId).hint
            const selectedTextHint = shuffleArray(textHints)[0]
            return selectedTextHint
        },
        currentQuestionData: (state) => {
            const questionId = state.questionIds[state.currentQuestionNum]
            return questions.find((q) => q.chname === questionId)
        },
        previousQuestionData: (state) => {
            const questionId = state.questionIds[state.currentQuestionNum - 1]
            return questions.find((q) => q.chname === questionId)
        },
        allAnswerName: (state) => {

            const data = state.questionIds.map((questionId) => {

                const choises = questions.find((q) => q.chname === questionId).choise
                const answer = choises.find(answerCanditate => {
                    return md5(answerCanditate) === questionId
                })
                return answer
            })

            return data
        }
    },
    actions: {
        // scoreを追加する
        appendScore(newScore) {
            this.scores.push(newScore)
        },
        // 問題を次に進める処理をする
        nextQuestion() {
            this.cuestionIndex = this.cuestionIndex + 1
        }

    }
})