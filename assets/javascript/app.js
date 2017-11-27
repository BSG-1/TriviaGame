//Questions Array
var gameQuestions = {
		question1: "Who was Luke's Father?",
		answers1: {
			a: "Darth Vader", 
			b: "Darth Plageuis", 
			c: "The Force",
			d: "General Akbar"
		},
		correctAnswer1: 'a',

		question2: "Han Solo & Leia Skywalker/Organa/Solo had a son. What was his name?",
		answers2: {
			a: "Kylo Ren", 
			b: "Sheev Paplatine", 
			c: "Jacen Solo",
			d: "General Akbar"
		},
		correctAnswer2: 'c',	

		question3: "General Akbar exclaimed which of these?",
		answers3: {
			a: "Run for your lives!", 
			b: "It's a trap!", 
			c: "Sucks to suck, huh?",
			d: "You can't sit with us."
		},
		correctAnswer3: 'b',

		question4: "Who was the Rule of Two created by?",
		answers4: {
			a: "Darth Bane", 
			b: "Anakin Skywalker", 
			c: "Emperor Palpatine",
			d: "Darth Jar-Jar"
		},
		correctAnswer4: 'a',
	}

//showQuestion will hold the setInterval when we start the game
var showQuestion;

//questionCount keeps track of the index of the currently displaying question
var questionCount = 0; 

//run startGame function when we click start button
$("#start").click(startGame);

//function to display every question
function displayQuestion(){
	for (var i = 0; i < gameQuestions.question.length; i++) {
		$("#questions").text(gameQuestions.question);
	}
	
};

//function to display every answer


//function to go to the next question
function nextQuestion(){
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
displayQuestion();