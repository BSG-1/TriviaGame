//Global Variables
var gameQuestions = ["Who was Luke's Father?", "Han Solo & Leia Skywalker/Organa/Solo had a son. What was his name?", 
					"General Akbar exclaimed which of these?", "Which Sith Lord created the Rule of Two?"];
var t = 30;

//jquery ready
$(document).ready(function(){

	//click start button
	$("#startButton").click(function(){
		$("#startButton").hide();

		//timer function
		function timer(){
			t--
			console.log(t);
			var $time = $("<h2>Time Remaining: " + t + " seconds</h2>")
				$("#questions").html($time);
		};

		setInterval(timer, 1000);
		timer();

	})

})




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
