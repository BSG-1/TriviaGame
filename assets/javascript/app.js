$(document).ready(function(){

var gameQuestions = ["Who was Luke's Father?", "Han Solo & Leia Skywalker/Organa/Solo had a son. What was his name?", 
					"General Akbar exclaimed which of these?", "Which Sith Lord created the Rule of Two?"];
//question objects
/* var q1 = {
	question: "Who was Luke's Father?",
	answers: [
			'a: Darth Vader', 
			'b: Darth Plagueis',
			'c: The Force',
			'd: General Akbar'],
	correctAnswer: 'a: Darth Vader',
};

var q2 = {
	question: "Han Solo & Leia Skywalker/Organa/Solo had a son. What was his name?",
	answers: [
			'a: Kylo Ren',
			'b: Sheev Paplatine',
			'c: Jacen Solo',
			'd: General Akbar'],
	correctAnswer2: 'c: Jacen Solo',
};
			
var q3 = {
	question: "General Akbar exclaimed which of these?",
	answers: [
			'a: Run for your lives!', 
			'b: Its a trap!', 
			'c: Sucks to suck, huh?',
			'd: You cant sit with us.'],
	correctAnswer: 'b: Its a trap!',
};
		
var q4 = {
	question4: "Who was the Rule of Two created by?",
	answers4: [
			'a: Darth Bane', 
			'b: Anakin Skywalker', 
			'c: Emperor Palpatine',
			'd: Darth Jar-Jar'],
	correctAnswer4: 'a: Darth Bane',
};
*/

//showQuestion will hold the setInterval when we start the game
var newQuestion;

//questionCount keeps track of the index of the currently displaying question
var questionCount = 0; 

//run startGame function when we click start button
$("#start").click(startGame);

//function to display every question
function newQuestion(){
	for (var i = 0; i < gameQuestions.length; i++) {
		$("#questions").append(gameQuestions.questions[i]);
	}
	
};

//function to display every answer


//function to go to the next question
function newQuestion(){
	questionCount++;
	
	//show the next question
	$("#answers").html(gameQuestions(answers[questionCount]));

	//setTimeOut to run displayQuestion after 3 seconds
	setTimeOut(displayQuestion, 3000);

	//if questionCount is the same as the length of the gameQuestions array, reset the count to 0
	if (questionCount === gameQuestions.length) {
		questionCount = 0;
	}
}

//function that holds the setInterval to run nextQuestion
function startGame() {
	showQuestion = setInterval(nextQuestion, )
}

//run displayQuestion function
newQuestion();

});



//This one will make sure that every 20 seconds, your questions get "moved on" to the next question. 
//You can do the same with an interval, like so:
setInterval(function(){
  questionCount++;
  newQuestion();
}, 20000);