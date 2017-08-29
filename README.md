# QuizzesApp - Using Electron, VueJS and Firebase

> Different general knowledge quizzes to exercise your brain. This simple desktop app is done using Electron, VueJS and Firebase realtime database

## Download
``` bash
# Clone the git repository to your folder
git clone https://github.com/giddyeffects/trivia <your-folder>

cd <your-folder>
```

## Build Setup

``` bash
# install dependencies
npm install

# serve with hot reload at localhost:8080
npm run dev

# build for production with minification
npm run build

# build for production and view the bundle analyzer report
npm run build --report
```
## Database 
### Setup
Create a new [firebase](https://firebase.google.com/) database if you've not done so already.

### Config
``` bash
# create a file in src folder called config.js
touch src/config.js
```
``` javascript
/**
* Copy paste this content into the created config.js file
* replace relevant firebase db details
* and save the file
*/
  let config = {
    apiKey: "<YOUR-APIKEY>",
    authDomain: "<PROJECT_ID>.firebaseapp.com",
    databaseURL: "https://<PROJECT_ID>.firebaseio.com",
    projectId: "<PROJECT_ID>",
    storageBucket: "<PROJECT_ID>.appspot.com",
    messagingSenderId: "<MESSAGING_SENDER_ID>"
  };
  
  export default config
  ```
### Upload Samples
Upload the **samples.json** file into your firebase database. You can then add/modify the questions and the updates appear on the client in realtime.
For now this trivia app supports multiple choice and single text based questions. I plan to add multiple checkboxes and a rating system for the total score.
Use the same JSON file to update the DB with your questions, editing as necessary.

### Help
Please check the official [firebase docs](https://firebase.google.com/docs/database/web/start) for help on using firebase.

## Run
``` bash
# in the root folder execute the command below to run the app
electron .
```

## What else can we do?
You can modify the app for:
1. General knowledge questions
2. Aptitude tests
3. Job interview screening questions
4. Quiz games with levels etc
