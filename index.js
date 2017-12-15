        function game() {
            let playerScore = 0;
            let computerScore = 0;
            for (i = 0; i < 5; i++) {
                let userChoice = prompt("Rock | Paper | Scissor?");
                let compChoice = computer_play();
                let result = rps(userChoice, compChoice);
                console.log(result);

                
                if (i == 4 && (playerScore > computerScore)) {
                    console.log("FINAL RESULT: You have beaten the computer. Congratulations!");
                } else if (i == 4 && (computerScore > playerScore)) {
                    console.log("FINAL RESULT: The computer have beaten you. Try again next time :)");
                }
                function rps(playerSelection, computerSelection) {
                    let userChoice = playerSelection.toLowerCase();
                    if (userChoice == "rock") {
                        if (computerSelection == "paper") {
                            computerScore++;
                            return "You lose! Paper beats Rock.";
                        } else if (computerSelection == "scissor") {
                            playerScore++;
                            return "You win! Rock beats Scissor.";
                        } else {
                            return "Draw!";
                        }
                    } else if (userChoice == "paper") {
                        if (computerSelection == "rock") {
                            playerScore++;
                            return "You win! Paper beats Rock.";
                        } else if (computerSelection == "scissor") {
                            computerScore++;
                            return "You lose! Scissor beats Paper.";
                        } else {
                            return "Draw!";
                        }
                    } else if (userChoice == "scissor") {
                        if (computerSelection == "rock") {
                            computerScore++;
                            return "You lose! Rock beats Scissor.";
                        } else if (computerSelection == "paper") {
                            playerScore++;
                            return "You win! Scissor beats Paper.";
                        } else {
                            return "Draw!";
                        }
                    } else {
                        return "Invalid input.";
                    }
                }
            }
        }
        //Use Math.random() to calculate computer's action
        function computer_play() {
            let rand = Math.random();
            if (rand <= 0.33) {
                return "rock";
            } else if (rand <= 0.66) {
                return "paper";
            } else if (rand <= 1) {
                return "scissor";
            }
        }

game();