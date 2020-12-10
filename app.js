
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
        'July 17, 1955',
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
      <div class="start-text">
        <p>Test your Disney knowledge with this Disney Parks Quiz!</p>
      <div class="button-container">
        <button id="startQuiz" type="button">Let's Play!</button>
      </div>
    </form>
      `;
}

//generates HTML for section to keep track of current question/score
function generateQuestionAndAnswers(questionNumber){
  $('main').html(`<div class="question-number-score">
      <form id="mainForm">
        <p>${store.questions[questionNumber].question}</p>
        <div class="flex-container">
        <div>
        <ol type="A">
          ${generateQuizAnswers(questionNumber)}
        </ol>
        </div>
        </div>
        
        <div class="submit-btn">
        <button id="submit" class="submit">Submit</button>
        </div>

      </form> 
      <div class="tracker-flex"> 
        <div class="tracker"> 
        <div>
          <p>Question ${store.questionNumber}/${store.questions.length} 
        </div>
        <div>Score: ${store.score}/${store.questions.length}</p></div>
        </div>
      </div>
      `);
   //console.log(store.questionNumber);
}

//generates the list of possible answers per question
function generateQuizAnswers(questionNumber) {
  let answers = '';
  for (i = 0; i < store.questions[questionNumber].answers.length; i++) {
    answers += `
    <div id="answer-container">
      <input type="radio" id="answer-rad${i}" name="answer-rad" value="${store.questions[questionNumber].answers[i]}" required>
      <label for="${i}">${store.questions[questionNumber].answers[i]}</label>
        <br>
    </div>`;
     } 
   return answers;
}

//check selected answer with correctAnswer and return if the answer is correct or incorrect, add points to score accordingly
function generateAnswerResults(answer) {
    let correctAnswer = store.questions[store.questionNumber].correctAnswer;

    if ($('input[name="answer-rad"]:checked', '#mainForm').val() === correctAnswer) {
    
     $('main').html(`
      <div class="correct-screen">
      <form>
        <p>You Were Correct!</p>
      <div class="next-btn">
        <button id="next-question" class="next-question">Next</button> 
        </div>
    </form>
      `);
      store.questionNumber++;
      store.score++;
   }
   else if ($('input[name="radios"]:checked', '#mainForm').val() != correctAnswer){
     
     $('main').html(`
     <div class="incorrect-screen">
      <form>
        <p>Wrong Answer!</p> 
        <p>The correct answer is ${correctAnswer}.</p>
        <div class="next-btn">
        <button id="next-question" class="next-question">Next</button> 
        </div>
      </form>
     `);
     
     store.questionNumber++;
   }
 }
 


//generates HTML for the results screen
function generateResultsPage() {
  return `
    <div class="results-page">
      <form id="restart-quiz">
      <p>You got ${store.score} out of ${store.questions.length} correct!<p>
      <p>Want to try again?</p>
      <div class="restart-btn">
        <button type="button" id="restartQuiz" class="restartQuiz">Restart Quiz</button> 
      </form>
     </div>   
    </div>
  `;
}


/********** RENDER FUNCTION(S) **********/

// This function conditionally replaces the contents of the <main> tag based on the state of the store
function renderMain(){
  console.log('renderMain');
  console.log(`store.quizStarted: ${store.quizStarted}`);
  console.log(`store.questionNumber: ${store.questionNumber}`)

    if (store.quizStarted === false) {
     $('main').html(generateStartScreen());
      return;
    }
    else if (store.questionNumber >= 0 && store.questionNumber < store.questions.length) {
    $('main').html(generateQuestionAndAnswers(store.questionNumber));
   }
  else {
  $('main').html(generateResultsPage());
  }
}

/********** EVENT HANDLER FUNCTIONS **********/

// These functions handle events (submit, click, etc)
//handles the click of the start button
function handleStartClick(){
  
  $('main').on('click', '#startQuiz', (event) => {
    event.preventDefault();
    store.quizStarted = true;
    renderMain();
    console.log('start button pressed'); //way to start the count
  });
  

}

//handles click of the next button
function handleNextClick() {
  $('.next-btn > button').on('click', (event) =>{
      console.log('next button pressed');
      event.preventDefault();
      renderMain();
  });
}

//handles submit question answer 
function handleQuestionSubmission(){
  // $('.submit-btn > .submit').on('click', (event) => {
  $('main').on('click','#submit',function(){    
    event.preventDefault();
    console.log('submit button pressed');
    if (store.questionNumber <= 5) {
    generateAnswerResults();
    handleNextClick();
    }
  });
}

function restartQuiz(){
  store.quizStarted = false;
  store.questionNumber = 0;
  store.score = 0;
}

//handles restart Quiz button
function handleRestartQuiz(){
  $('main').on('click', '#restartQuiz', (event) =>{
    event.preventDefault();
    console.log('handleRestart');
    if (store.questionNumber >= store.questions.length) {
    console.log("handleRestartQuiz clicked");
    restartQuiz();
    renderMain();
    } 
  });

}

//runs all functions after page is loaded
function handleQuizApp(){
  renderMain();
  handleStartClick();
  handleQuestionSubmission();
  handleRestartQuiz();
  
}

handleQuizApp();