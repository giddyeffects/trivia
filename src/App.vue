<template>
  <div id="app" class="body">
    <div class="sky-form" v-for="(quiz, index) in quizes" v-show="index === questionIndex" :key="index">
      <div class="rating">
        <input type="radio" name="stars-rating" id="stars-rating-5" :checked="quiz.difficulty == 'ninja'" disabled>
        <label for="stars-rating-5"><i class="icon-star"></i></label>
        <input type="radio" name="stars-rating" id="stars-rating-4" :checked="quiz.difficulty == 'expert'" disabled>
        <label for="stars-rating-4"><i class="icon-star"></i></label>
        <input type="radio" name="stars-rating" id="stars-rating-3" :checked="quiz.difficulty == 'hard'" disabled>
        <label for="stars-rating-3"><i class="icon-star"></i></label>
        <input type="radio" name="stars-rating" id="stars-rating-2" :checked="quiz.difficulty == 'medium'" disabled>
        <label for="stars-rating-2"><i class="icon-star"></i></label>
        <input type="radio" name="stars-rating" id="stars-rating-1" :checked="quiz.difficulty == 'easy'" disabled>
        <label for="stars-rating-1"><i class="icon-star"></i></label>
			</div>
      <header>{{ quiz.category }}</header>
      <h2 class="input">{{ quiz.question }}</h2>
      <fieldset>
        <section>
          <div class="row">
            <div class="col col-4" v-if="quiz.type == 'multiple'">
              <ol style="text-align:left">
                <li v-for="answer in quiz.incorrect_answers" :key="answer">
                  <label class="radio"><input type="radio" name="answer" v-model="answers[index]" :value="answer"><i></i>{{  answer }}</label>
                </li>
              </ol>
            </div>
            <div class="col" v-else-if="quiz.type == 'checkbox'">
              <span>
                
              </span>
            </div>
            <div class="col col-8" v-else>
              <span style="text-align:left">
                <label class="input"><input :placeholder="quiz.placeholder" type="text" name="answer" v-model="answers[index]"><i></i>{{  answers[index] }}</label>
              </span>
            </div>
          </div>
        </section>
      </fieldset>
      <footer v-if="questionIndex < quizes.length">
        <button class="button" @click="next">next</button>
        <button class="button" v-if="questionIndex > 0 " @click="prev">prev</button>
      </footer>
    </div>
    <div class="sky-form">
      <fieldset>
        <section>
          <span v-if="questionIndex == quizes.length"> Your Total score is {{ score }} / {{ quizes.length }}</span>
        </section>
      </fieldset>
    </div>
  </div>
</template>

<script>
import { quiz_questions, store, questionsRef } from './store.js'

export default {
  name: 'app',
  firebase: {
    quizes: questionsRef.limitToLast(25)
  },
  data: () => {
    return {
      questionIndex: 0,
      //quizes: quiz_questions,
      answers: Array(quiz_questions.length).fill(''),
    }
  },
  created() {
    store.on('data-updated', this.updateQuestions)
  },
  methods: {
    updateQuestions: function (questions) {
      this.quizes = questions
    },
    next: function() {
      this.questionIndex++;
    },
    prev: function() {
      this.questionIndex--;
    }
  },
  computed: {
    score: function() {
      let total = 0;
      for (let i=0; i < this.answers.length; i++) {
        if (this.answers[i] == this.quizes[i].correct_answer) {
          total += 1;
        }
      }
      return total;
    }
  }
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
