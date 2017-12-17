function playGame() {
	// body...
	let userPts = 0;
	let compPts = 0;

	for (let i = 0; i < 5;i++) {
		let playerChoice = window.prompt("Rock | Paper | Scissors;"); 
		let compChoice = computerPlay();
		roundPlay(playerChoice, compChoice);

	}

	function roundPlay(playerSelection, compSelection) {
		let playerChoice = playerSelection.toLowerCase();
		let result;
		
		if (playerChoice == "rock") {
			if (compChoice == "paper") {
				compPts++;
				console.log("You Loose! Paper beats Rock");

			} else if ( compChoice == "scissors") {
				userPts++;
				console.log("You Win! Rock beats Scissors");
			} else if (compChoice == "rock") {
				console.log("It's a tie"); 
			} else {
				console.log("Invalid Input");
			}
		}		
	}

	function computerPlay() {
		return "rock";
	}	
}


playGame();