/*
   Advanced Geography Challenge
   All rights reserved
*/

// Warn the victim
var numCorrect = 0;
var docHTML = "";
alert('Prepare to be tested with an Advanced Geography Challenge.  You have been warned!');

//question number 1
q1 = prompt("Which is larger: '1' the lower 48 contiguous United States or '2' Antartica?");
if (parseInt(q1) === 2) {
  docHTML += '<p>Correct: Antactica is 1.73 times larger than the lower 48 states</p>';
  numCorrect +=1;
} else {
  docHTML += '<p>Sorry: Antactica is 1.73 times larger than the lower 48 states</p>';
}

//question number 2
q2 = prompt("Which is larger: '1' the lower 48 contiguous United States or '2' Austrialia?");
if (parseInt(q2) === 1) {
  docHTML += '<p>Correct: The lower 48 states are 1.05 times larger than Austrailia</p>';
  numCorrect +=1;
} else {
  docHTML += '<p>Sorry: The lower 48 states are 1.05 times larger than Austrailia</p>';
}

//question number 3
q3 = prompt("Which is larger: '1' the lower 48 contiguous United States or '2' Brazil?");
if (parseInt(q3) === 2) {
  docHTML += '<p>Correct: Brazil is 1.05 times larger than the lower 48 states</p>';
  numCorrect +=1;
} else {
  docHTML += '<p>Sorry: Brazil is 1.05 times larger than the lower 48 states</p>';
}

//question number 4
q4 = prompt("Which is larger: '1' the lower 48 contiguous United States or '2' China?");
if (parseInt(q4) === 2) {
  docHTML += '<p>Correct: China is 1.19 times larger than the lower 48 states</p>';
  numCorrect +=1;
} else {
  docHTML += '<p>Sorry: China is 1.19 times larger than the lower 48 states</p>';
}

//question number 5
q5 = prompt("Which is larger: '1' the lower 48 contiguous United States or '2' Greenland?");
if (parseInt(q5) === 1) {
  docHTML += '<p>Correct: The lower 48 states are 3.73 times larger than Greenland</p>';
  numCorrect +=1;
} else {
  docHTML += '<p>Sorry: The lower 48 states are 3.73 times larger than Greenland</p>';
}

//announce the results
docHTML += '<h2>You have finished the test with ' + numCorrect + ' correct answers.</h2>';
if (numCorrect === 5) {
  docHTML += '<h2>You win a Gold Crown!!!</h2>';
} else if (numCorrect === 4 || numCorrect === 3) {
  docHTML += '<h2>You win a Silver Crown!!</h2>';
} else if (numCorrect === 2 || numCorrect === 1) {
  docHTML += '<h2>You win a Bronze Crown!</h2>';
} else {
  docHTML += '<h2>Sorry.  Try again soon.</h2>';
}

document.getElementById('results').innerHTML = docHTML;

