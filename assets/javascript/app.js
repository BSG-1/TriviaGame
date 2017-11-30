//Global Variables
var questions = ["Who was Luke Skywalker's Father?", 
					"Han Solo & Leia Skywalker had a son. What was his name?", 
					"General Akbar famously exclaimed which of these?", 
					"Which Sith Lord created the Rule of Two?"
				];

var gameAnswers = [["A: Assaj Ventress ",
					" B: Darth Vader",
					" C: Lando Calrissian",
					" D: Obi-Wan Kenobi"], 
				   ["A: General Akbar",
				   	" B: Count Duku",
				   	" C: Darth Maul",
				   	" D: Jacen"], 
				   ["A: Its a trap!",
				    " B: The war is lost, go home.",
				    " C: Anakin is pissed.",
				    " D: I am General Akbar."], 
				   ["A: Darth Bane",
				    " B: Star Killer",
				    " C: Darth Revan",
				    " D: Darth Malgus"]];

var correctAnswers = ["B: Darth Vader", "D: Jacen", "A: Its a trap!", "A: Darth Bane"];
var current = 0;
var questionCounter = 0;
var selectAnswer = 0;
var correctTally = 0;
var incorrectTally = 0;
var unansweredTally = 0;

//jQuery ready
$(document).ready(function(){

	//Click start button to begin game
	$("#startButton").click(function(){
		$("#startButton").hide();

		//Asking the first question
		function askQuestion(){
			var $question = $("<h4>" + questions[current] + "</h4>");
			if (questions[current]){
				$("#questions").html($question);
				$("#answers").html(gameAnswers[0]);
				var choicesArr = [questions][gameAnswers];
				var buttonsArr = [];			
				
				for (var i = 0; i < choicesArr; i++) {
					var button = $('<button>');
					button.text(choicesArr);
					button.attr('data-id', i);
					button.attr('class', 'hvr-radial-out');
					$("#answers").append(button);
				};
			}
		};
		askQuestion();
		console.log(askQuestion);

		//timer function & run out of time
		var time = 30;
		var timer = setInterval(function(){
			time--;
			var $time = $("<h4>Time Remaining: " + time + "</h4>")
			$("#timer").html($time);	
			if (time <= 0){
				clearInterval(timer);
				/*if answer is correct then congratulations, 
				add tally to correct count, run nextQuestion() */
				if (selectAnswer === "B: Darth Vader" || selectAnswer === "D: Jacen"|| selectAnswer === "A: Its a trap!" || selectAnswer === "A: Darth Bane"){
					$("#answers").html('Congratulations! That is the correct answer!');
					correctTally++;
					setTimeOut(function(){
						nextQuestion();
					});
				} 

 				/*if answer is correct then sorry, 
				add tally to incorrect count, run nextQuestion()*/
				else {
					$("#answers").html('Incorrect, young apprentice.');
					incorrectTally++;
					setTimeOut(function(){
						nextQuestion();
					});
				};
			}
		}, 1000);
		console.log(time);
	
	});
});




//Old Thoughts that didn't quite work out :)
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
