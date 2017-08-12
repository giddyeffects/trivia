<template>
  <div id="app" class="body">
    <div class="sky-form" v-for="(quiz, index) in quizes" v-show="index === questionIndex">
      <header>{{ quiz.category }}</header>
      <h2 class="input">{{ quiz.question }}</h2>
      <fieldset>
        <section>
          <div class="row">
            <div class="col col-4">
              <ol style="text-align:left">
                <li v-for="answer in quiz.incorrect_answers">
                  <label class="radio"><input type="radio" name="answer" v-model="answers[index]" :value="answer"><i></i>{{  answer }}</label>
                </li>
              </ol>
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
let quiz_questions = [
  {
    "category": "Entertainment: Film",
    "type": "multiple",
    "difficulty": "easy",
    "question": "Who directed \'E.T. the Extra-Terrestial' (1982)?",
    "correct_answer": "Steven Spielberg",
    "incorrect_answers": [
      "Steven Spielberg",
      "Stanley Johns",
      "Tim Burton",
      "James Cameroon"
    ]
  },
  {
    "category": "Science & Nature",
    "type": "multiple",
    "difficulty": "easy",
    "question": "What is the hottest planet in the Solar System?",
    "correct_answer": "Venus",
    "incorrect_answers": [
      "Venus",
      "Mars",
      "Mercury",
      "Jupiter"
    ]
  },
]

export default {
  name: 'app',
  data: () => {
    return {
      questionIndex: 0,
      quizes: quiz_questions,
      answers: Array(quiz_questions.length).fill(''),
    }
  },
  methods: {
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
