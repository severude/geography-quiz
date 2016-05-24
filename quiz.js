/*
   Advanced geography challenge
   All rights reserved
*/

// Warn the victim
var numCorrect = 0;
alert('Prepare to be tested with an advanced geography challenge.  You have been warned!');

//question number 1
q1 = prompt("Which is larger: '1' the lower 48 states or '2' Antartica?");
if (parseInt(q1) === 2) {
  document.write('<p>Correct: The lower 48 states are 0.58 times smaller than Antactica</p>');
  numCorrect +=1;
} else {
  document.write('<p>Sorry: The lower 48 states are 0.58 times smaller than Antactica</p>');
}

//question number 2
q2 = prompt("Which is larger: '1' the lower 48 states or '2' Austrialia?");
if (parseInt(q2) === 1) {
  document.write('<p>Correct: The lower 48 states are 1.05 times larger than Austrailia</p>');
  numCorrect +=1;
} else {
  document.write('<p>Sorry: The lower 48 states are 1.05 times larger than Austrailia</p>');
}

//question number 3
q3 = prompt("Which is larger: '1' the lower 48 states or '2' Brazil?");
if (parseInt(q3) === 2) {
  document.write('<p>Correct: The lower 48 states are 0.95 times smaller than Brazil</p>');
  numCorrect +=1;
} else {
  document.write('<p>Sorry: The lower 48 states are 0.95 times smaller than Brazil</p>');
}

//question number 4
q4 = prompt("Which is larger: '1' the lower 48 states or '2' China?");
if (parseInt(q4) === 2) {
  document.write('<p>Correct: The lower 48 states are 0.84 times smaller than China</p>');
  numCorrect +=1;
} else {
  document.write('<p>Sorry: The lower 48 states are 0.84 times smaller than China</p>');
}

//question number 5
q5 = prompt("Which is larger: '1' the lower 48 states or '2' Greenland?");
if (parseInt(q5) === 1) {
  document.write('<p>Correct: The lower 48 states are 3.73 times larger than Greenland</p>');
  numCorrect +=1;
} else {
  document.write('<p>Sorry: The lower 48 states are 3.73 times larger than Greenland</p>');
}

//announce the results
document.write('<h2>You have finished the test with ' + numCorrect + ' correct answers.</h2>');
if (numCorrect === 5) {
  document.write('<h2>You win a Gold Crown!!!</h2>');
} else if (numCorrect === 4 || numCorrect === 3) {
  document.write('<h2>You win a Silver Crown!!</h2>');
} else if (numCorrect === 2 || numCorrect === 1) {
  document.write('<h2>You win a Bronze Crown!</h2>');
} else {
  document.write('<h2>Sorry.  Try again soon.</h2>');
}
