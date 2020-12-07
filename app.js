/**
 * Example store structure
 */
const store = {
  // 5 or more questions are required
  questions: [
    {
      question: 'What date did Disneyland open?',
      answers: [
        'August 21, 1967',
        'June 10, 1958',
        'July 17, 1955 ',
        'February 25, 1960'
      ],
      correctAnswer: 'July 17, 1955'
    },
    {
      question: 'What item is not sold at any Disney park?',
      answers: [
        'shoes',
        'gum',
        'pizza',
        'blankets'
      ],
      correctAnswer: 'gum'
    },
    {
      question: 'How many ghosts live in the Haunted Mansion?',
      answers: [
        '1,000',
        '666',
        '25',
        '999'
      ],
      correctAnswer: '999'
    },
    {
      question: 'Which ride can be found at every Disney Park in the world?',
      answers: [
        'Dumbo',
        "Peter Pan's Flight",
        "It's a Small World",
        'Pirates of The Carribean'
      ],
      correctAnswer: 'Dumbo'
    },
    {
      question: "Where was Walt Disney's apartment located in Disneyland?",
      answers: [
        'Underground',
        'The Castle',
        'Above the Firehouse',
        'In a secret section of the Haunted Mansion'
      ],
      correctAnswer: 'Above the Firehouse'
    }
  ],
  quizStarted: false,
  questionNumber: 0,
  score: 0
};

/**
 * 
 * Technical requirements:
 * 
 * Your app should include a render() function, that regenerates the view each time the store is updated. 
 * See your course material and access support for more details.
 *
 * NO additional HTML elements should be added to the index.html file.
 *
 * You may add attributes (classes, ids, etc) to the existing HTML elements, or link stylesheets or additional scripts if necessary
 *
 * SEE BELOW FOR THE CATEGORIES OF THE TYPES OF FUNCTIONS YOU WILL BE CREATING 👇
 * 
 */

/********** TEMPLATE GENERATION FUNCTIONS **********/

// These functions return HTML templates
//This is the HTML for start page with button to begin quiz
//
function generateStartScreen() {
  return `
    <div class="start-screen">
      <form>
        <p>Test your Disney knowledge with this Disney Parks Quiz!</p>
      <div class="button-container">
        <button type="submit">Let's Play!</button>
      </div>
    </form>
      `;
}

//generates HTML for section to keep track of current question/score
function generateQuestionAndAnswers(){
  return `
    <div class="question-number-score">
      <p>Question ${store.questionNumber + 1} out of ${store.questions.length}</p>
      <p>Score: ${store.score}/${store.questions.length}</p>
    </div>
   `;
}

//generates HTML to display one question
function generateQuestions() {  
    


}

//generates the list of possible answers per question
function generateQuizAnswers() {

}

//check selected answer with correctAnswer and return if the answer is correct or incorrect, add points to score accordingly
function generateAnswerResults() {
  
}

//generates HTML for the results screen
function generateResultsScreen() {

}


/********** RENDER FUNCTION(S) **********/

// This function conditionally replaces the contents of the <main> tag based on the state of the store
function renderMain(){
  if (store.quizStarted === false) {
    $('main').html(generateStartScreen());
    return;
  }

}

/********** EVENT HANDLER FUNCTIONS **********/

// These functions handle events (submit, click, etc)
//handles the click of the start button
function handleStartClick(){

}

//handles click of the next button
function handleNextClick() {

}

//handles submit question answer 
function handleQuestionSubmission(){

}

//handles resetting the Quiz once restart button is clicked
function restartQuiz(){

}

//handles restart Quiz button
function handlesRestartQuizButton(){

}

//runs all functions after page is loaded
function handleQuizApp(){
  renderMain();
  handleStartClick();
  handleNextClick();
  handleQuestionSubmission();
  handlesRestartQuiz();
}