$(document).ready(function(){
	// Global Variables will be set here
	var choices = ["Rock", "Paper", "Scissors"];
	var userScore = 0;
	var compScore = 0;
	var tie = 0;
	var roundCount = 0;

	// Generate a random number using the Math.floor, Math.random function, still a global variable.
	var compChoice = Math.floor(Math.random() * choices.length);

	//Use if, else statement to assign a value using the randomly generated number to computer choices rock, paper, scissors. (On click function begin)
	
	$(document).on("click", "#rock, #paper, #scissors", function(){
		if (compChoice === 1) {
			compChoice = "Rock";
		}	else if (compChoice === 2) {
			compChoice = "Paper";
		}	else {
			compChoice = "Scissors";
		}; 

		//Function to compare user choice and comp choice
		var userChoice = $(this).data("choice")
		compare(userChoice, compChoice);
		$("#userChoice").html("userChoice");
		$("#compChoice").html("compChoice");
		roundCount++;
		$("#roundCount").html(roundCount);



	}); //On click rps function end
}); //Global variables end