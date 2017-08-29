//import db config
import config from './config.js'
import { EventEmitter } from 'events'

let firebase = require('firebase/app')
require('firebase/auth')
require('firebase/database')
  
  // Initialize Firebase
 firebase.initializeApp(config);

let db = firebase.database().ref()

const questionsRef = db.child('questions')
const store = new EventEmitter()

let quiz_questions = [] //local copy of the questions

questionsRef.on('value', (snapshot) => {
  if (snapshot.val()) {
    quiz_questions = snapshot.val()
    store.emit('data_updated', quiz_questions)
    // for (var key in quiz_questions) {
    //     if (quiz_questions.hasOwnProperty(key)) {
    //         var element = quiz_questions[key];
    //         console.log(element)
    //     }
    // }
    //console.log("data from the server is "+quiz_questions)
  }
})

store.addQuestion = (question) => {
    questionsRef.update(question)
}

export { quiz_questions, store, questionsRef }