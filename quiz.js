function Question(text, choices, answer, writeup) {
  this.text = text;
  this.choices = choices;
  this.answer = answer;
  this.writeup = writeup;
}
Question.prototype.isCorrectAnswer = function(choice) {
  return this.answer === choice;
}

function Quiz(questions) {
  this.score = 0;
  this.questions = questions;
  this.currentQuestionIndex = 0;
}
Quiz.prototype.guess = function(answer) {
  if (this.getCurrentQuestion().isCorrectAnswer(answer)) {
    this.score++;
  }
  this.currentQuestionIndex++;
}
Quiz.prototype.getCurrentQuestion = function() {
  return this.questions[this.currentQuestionIndex];
}
Quiz.prototype.hasEnded = function() {
  return this.currentQuestionIndex >= this.questions.length;
}

function QuizUI() {
	this.resultsHTML = "";
	this.score = 0;
}
QuizUI.prototype.displayNext = function() {
   if (quiz.hasEnded()) {
     this.displayScore();
   } else {
     this.displayQuestion();
     this.displayChoices();
     this.displayProgress();
   }
}
QuizUI.prototype.populateIdWithHTML = function(id, text) {
    var element = document.getElementById(id);
    element.innerHTML = text;
}
QuizUI.prototype.guessHandler = function(id, guess) {
    var button = document.getElementById(id);
    button.onclick = function() {
      quiz.guess(guess);
      quizUI.checkResult();
      quizUI.displayNext();
    }
}
QuizUI.prototype.displayScore = function() {
	var numCorrect = this.score;
	var numTotal = quiz.currentQuestionIndex;
    this.resultsHTML += "<h1>Game Over</h1>";
	this.resultsHTML += '<h2>You have finished the test with ' + numCorrect + ' out of ' +  numTotal + ' correct answers.</h2>';
	if (numCorrect === 5) {
	  this.resultsHTML += '<h2>You win a Gold Crown!!!</h2>';
	} else if (numCorrect === 4 || numCorrect === 3) {
	  this.resultsHTML += '<h2>You win a Silver Crown!!</h2>';
	} else if (numCorrect === 2 || numCorrect === 1) {
	  this.resultsHTML += '<h2>You win a Bronze Crown!</h2>';
	} else {
	  this.resultsHTML += '<h2>Sorry.  Try again soon.</h2>';
	}
    this.populateIdWithHTML("quiz", this.resultsHTML);
}
QuizUI.prototype.displayQuestion = function() {
    this.populateIdWithHTML("question", quiz.getCurrentQuestion().text);
}
QuizUI.prototype.displayChoices = function() {
    var choices = quiz.getCurrentQuestion().choices;
    for(var i = 0; i < choices.length; i++) {
      this.populateIdWithHTML("choice" + i, choices[i]);
      this.guessHandler("guess" + i, choices[i]);
    }
 }
QuizUI.prototype.displayProgress = function() {
    var currentQuestionNumber = quiz.currentQuestionIndex + 1;
    this.populateIdWithHTML("progress", "Question " + currentQuestionNumber + " of " + quiz.questions.length);
}
QuizUI.prototype.checkResult = function() {	
	if(this.score === quiz.score) {
		this.resultsHTML += '<p>Sorry: ';
	} else {
		this.resultsHTML += '<p>Correct: ';
		this.score++;
	}
	var writeup = 	quiz.questions[quiz.currentQuestionIndex-1].writeup;
	this.resultsHTML += writeup + '</p>';
}
