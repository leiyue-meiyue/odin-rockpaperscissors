function getComputerChoice() {
  // randomly return either rock paper or scissors
  let computerChoice;
  let randomNumber = Math.floor(Math.random() * 3 + 1);
    
  // pick a number between 1 and 3, use that to determine choice
  switch (randomNumber) {
    case 1:
      computerChoice = "rock";
      break;

    case 2:
      computerChoice = "paper";
      break;

    case 3:
      computerChoice = "scissors";
      break;
  }

  return computerChoice;
}

function getPlayerChoice() {
  let playerChoice = prompt("Enter rock, paper, or scissors").toLowerCase();
  return playerChoice;   
}

function playRound(playerSelection, computerSelection) {
  console.log(playerSelection);
  console.log(computerSelection);
  if (playerSelection === "rock" && computerSelection === "rock") {
    return "It's a tie! Rock is equal to rock."
  } else if (playerSelection === "rock" && computerSelection === "paper") {
    return "You lose! Rock loses to paper."
  } else if (playerSelection === "rock" && computerSelection === "scissors") {
    return "You win! Rock beats scissors."
  }

  if (playerSelection === "paper" && computerSelection === "rock") {
    return "You win! Paper beats rock."
  } else if (playerSelection === "paper" && computerSelection === "paper") {
    return "It's a tie! Paper is equal to paper."
  } else if (playerSelection === "paper" && computerSelection === "scissors") {
    return "You lose! Paper loses to scissors."
  }

  if (playerSelection === "scissors" && computerSelection === "rock") {
    return "You lose! Scissors loses to rock."
  } else if (playerSelection === "scissors" && computerSelection === "paper") {
    return "You win! Scissors beats paper."
  } else if (playerSelection === "scissors" && computerSelection === "scissors") {
    return "It's a tie! Scissors is equal to scissors."
  }
}

function playGame() {
  let keepGoingCounter = 0;
  while (keepGoingCounter < 5) {
    const playerSelection = getPlayerChoice();
    const computerSelection = getComputerChoice();
    console.log(playRound(playerSelection, computerSelection));
    keepGoingCounter += 1;
  }
}

playGame();