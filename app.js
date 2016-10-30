/*
   Advanced Geography Challenge
   All rights reserved
*/
var questions = [
  new Question("Which is land mass is larger?", ["The lower 48 contiguous United States", "Antarctica"], "Antarctica", "Antarctica is 1.73 times larger than the lower 48 states"),
  new Question("Which is land mass is larger?", ["The lower 48 contiguous United States", "Australia"], "The lower 48 contiguous United States", "The lower 48 states are 1.05 times larger than Australia"),
  new Question("Which is land mass is larger?", ["The lower 48 contiguous United States", "Brazil"], "Brazil", "Brazil is 1.05 times larger than the lower 48 states"),
  new Question("Which is land mass is larger?", ["The lower 48 contiguous United States", "China"], "China", "China is 1.19 times larger than the lower 48 states"),
  new Question("Which is land mass is larger?", ["The lower 48 contiguous United States", "Greenland"], "The lower 48 contiguous United States", "The lower 48 states are 3.73 times larger than Greenland")
];
var quiz = new Quiz(questions);
var quizUI = new QuizUI();

var button = document.getElementById('btn');
button.onclick = function() {
	document.getElementById('intro').style.display = 'none';
	document.getElementById('quiz').style.display = 'block';
	quizUI.displayNext();
};
