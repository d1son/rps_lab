$(document).ready(function(){
	// Global Variables will be set here
	var choices = ["Rock", "Paper", "Scissors"];
	var userScore = 0;
	var compScore = 0;
	var tie = 0;
	var roundCount = 0;

	//Use if, else statement to assign a value using the randomly generated number to computer choices rock, paper, scissors. (On click function begin)
	
	$(document).on("click", "#rock, #paper, #scissors", function(){
		var compChoice = Math.floor(Math.random() * choices.length);
		if (compChoice ==1) {
			compChoice = "Rock";
		}	else if (compChoice ==2) {
			compChoice = "Paper";
		}	else {
			compChoice = "Scissors";
		}; 

		//Function to compare user choice and comp choice
		var userChoice = $(this).data("choice")
		compareChoice(userChoice, compChoice);
		$("#userChoice").html(userChoice);
		$("#compChoice").html(compChoice);
		roundCount++;
		$("#roundCount").html(roundCount);

		//Start Modal function here

		if(roundCount === 5) {
			if(userScore > compScore) {
				$("#gameEndModal").html("You're the Winner!");
			} else if(userScore < compScore) {
				$("#gameEndModal").html("Computer wins! You're a Loser!");
			}	else {
				$("gameEndModal").html("It's a draw!");
			}
			$("#gameEnd").modal("show");
			$("#gameEnd").on("hide.bs.modal", function() {
				roundCount = 0;
        userScore = 0;
        compScore = 0;
        tie = 0;
        userChoice="";
        compChoice ="";
        rockW = "";
        paperW = "";
        scissorsW = "";
        draw = "";
				$("#roundCount").html(roundCount);
        $(".userScore").html(userScore);
        $(".compScore").html(compScore);
        $("#userChoice").html(userChoice);
        $("#compChoice").html(compChoice);
        $("#resultOfGame").html(rockW);
        $("#resultOfGame").html(paperW);
        $("#resultOfGame").html(scissorsW);
        $("#resultOfGame").html(draw);
			})
		}
	}); //On click rps function end

	var compareChoice = function(userChoice, compChoice) {
		var rockW = "Rock Wins!";
		var paperW = "Paper Wins!";
		var scissorsW = "Scissors Wins!";
		var draw = "It's a draw!";

		if (userChoice === compChoice) {
	      $("#resultOfGame").html(draw);
	      tie++;
	      $("#ties").html(tie); //Make a div with an id of ties to display ties
	      return draw;
    } else if (userChoice === "Rock") {
      if (compChoice === "Scissors") {
        $("#resultOfGame").html(rockW);
        userScore++;
        $(".userScore").html(userScore);
        return rockW;
      } else {
        $("#resultOfGame").html(paperW);
        compScore++;
        $(".compScore").html(compScore);
        return paperW;   
      }
    } else if (userChoice === "Paper") {
      if (compChoice === "Rock") {
        $("#resultOfGame").html(paperW);
        userScore++;
        $(".userScore").html(userScore);
        return paperW; 
      } else {
        $("#resultOfGame").html(scissorsW);
        compScore++;
        $(".compScore").html(compScore);
        return scissorsW;
      }
    } else {
      if (userChoice === "Scissors") {
        if (compChoice === "Paper") {
          $("#resultOfGame").html(scissorsW);
          userScore++;
          $(".userScore").html(userScore);
          return scissorsW;
        } else {
          $("#resultOfGame").html(rockW);
          compScore++;
          $(".compScore").html(compScore);
          return rockW;
        }
	    }
	  } 
	}   
}); //Global variables end













