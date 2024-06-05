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

let playerScore = 0;
let computerScore = 0;

function incrementPlayerScore() {
  playerScore += 1;
}

function incrementComputerScore() {
  computerScore += 1;
}

function playRound(playerSelection, computerSelection) {
  if (playerSelection === "rock" && computerSelection === "rock") {
    return "It's a tie! Rock is equal to rock."
  } else if (playerSelection === "rock" && computerSelection === "paper") {
    incrementComputerScore();
    return "You lose! Rock loses to paper."
  } else if (playerSelection === "rock" && computerSelection === "scissors") {
    incrementPlayerScore();
    return "You win! Rock beats scissors."
  }

  if (playerSelection === "paper" && computerSelection === "rock") {
    incrementPlayerScore();
    return "You win! Paper beats rock."
  } else if (playerSelection === "paper" && computerSelection === "paper") {
    return "It's a tie! Paper is equal to paper."
  } else if (playerSelection === "paper" && computerSelection === "scissors") {
    incrementComputerScore()
    return "You lose! Paper loses to scissors."
  }

  if (playerSelection === "scissors" && computerSelection === "rock") {
    incrementComputerScore();
    return "You lose! Scissors loses to rock."
  } else if (playerSelection === "scissors" && computerSelection === "paper") {
    incrementPlayerScore();
    return "You win! Scissors beats paper."
  } else if (playerSelection === "scissors" && computerSelection === "scissors") {
    return "It's a tie! Scissors is equal to scissors."
  }
}

const rock = document.querySelector("#rock");
const paper = document.querySelector("#paper");
const scissors = document.querySelector("#scissors");

const youPicked = document.querySelector("#youPicked");
const computerPicked = document.querySelector("#computerPicked");
const result = document.querySelector("#result");
const playerScoreText = document.querySelector("#playerScore");
const computerScoreText = document.querySelector("#computerScore");


// get initial text
const youPickedText = youPicked.textContent;
const computerPickedText = computerPicked.textContent;
const resultText = result.textContent;
const playerScoreInitialText = playerScoreText.textContent;
const computerScoreInitialText = computerScoreText.textContent;

let gameResult;

function resetText() {
  youPicked.textContent = youPickedText;
  computerPicked.textContent = computerPickedText;
  result.textContent = resultText;
  playerScoreText.textContent = playerScoreInitialText;
  computerScoreText.textContent = computerScoreInitialText;
}

function displayResult(playerChoice, computerChoice, gameResult) {
  youPicked.textContent += playerChoice;
  computerPicked.textContent += computerChoice;
  result.textContent += gameResult;
}

updateScore();

rock.addEventListener("click", () => {
  resetText();
  let computerChoice = getComputerChoice();
  gameResult = playRound("rock", computerChoice);
  displayResult("rock", computerChoice, gameResult);
  updateScore();
});

paper.addEventListener("click", () => {
  resetText();
  let computerChoice = getComputerChoice();
  gameResult = playRound("paper", computerChoice);
  displayResult("paper", computerChoice, gameResult);
  updateScore();
});

scissors.addEventListener("click", () => {
  resetText();
  let computerChoice = getComputerChoice();
  gameResult = playRound("scissors", computerChoice);
  displayResult("scissors", computerChoice, gameResult);
  updateScore();
});

const victory = document.querySelector(".victory");

function displayPlayerWin() {
  const winText = document.createElement("p");
  winText.textContent = "You win!!";
  victory.appendChild(winText);
  displayPlayAgain(winText);
}

function displayComputerWin() {
  const winText = document.createElement("p");
  winText.textContent = "The computer wins! :(";
  victory.appendChild(winText);
  displayPlayAgain(winText);
}

function displayPlayAgain(winText) {
  const playAgain = document.createElement("button");
  playAgain.textContent = "Play Again";
  victory.appendChild(playAgain);
  rock.style.visibility = 'hidden';
  paper.style.visibility = 'hidden';
  scissors.style.visibility = 'hidden';
  
  playAgain.addEventListener("click", () => {
    playerScore = 0;
    computerScore = 0;
    resetText();
    updateScore();
    winText.remove();
    playAgain.remove();
    rock.style.visibility = 'visible';
    paper.style.visibility = 'visible';
    scissors.style.visibility = 'visible';
  })
}

function updateScore() {
  playerScoreText.textContent += playerScore;
  computerScoreText.textContent += computerScore;

  if (playerScore >= 5) {
    displayPlayerWin();
  }

  if (computerScore >= 5) {
    displayComputerWin();
  }
}
