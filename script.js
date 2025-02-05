document.addEventListener('DOMContentLoaded', () => {
  let humanScore = 0;
  let computerScore = 0;
  let roundsPlayed = 0;

  const start = document.querySelector('#start');
  const play = document.querySelector('#play');
  // Define these outside so they're accessible in all functions
  const resultPara = document.querySelector('.result');
  const scorePara = document.querySelector('.score');
  
  // Grab the buttons once
  const rock = document.querySelector('#rock');
  const paper = document.querySelector('#paper');
  const scissors = document.querySelector('#scissors');

  // Add event listeners to the game buttons only once
  rock.addEventListener('click', () => handleChoice('rock'));
  paper.addEventListener('click', () => handleChoice('paper'));
  scissors.addEventListener('click', () => handleChoice('scissors'));

  start.addEventListener('click', () => {
    if (start.textContent === 'Restart') {
      resetGame();
    }
    // Clear previous results instead of wiping out the whole container
    resultPara.textContent = '';
    scorePara.textContent = '';
  });

  function handleChoice(humanChoice) {
    if (roundsPlayed >= 5) {
      resetGame();
      return;
    }
    playRound(humanChoice);
  }

  function getComputerChoice() {
    const options = ['rock', 'paper', 'scissors'];
    return options[Math.floor(Math.random() * options.length)];
  }

  function playRound(humanChoice) {
    const computerChoice = getComputerChoice();
    let roundResult = '';

    if (humanChoice === computerChoice) {
      roundResult = "It's a tie, play again!";
    } else if (
      (humanChoice === 'rock' && computerChoice === 'scissors') ||
      (humanChoice === 'scissors' && computerChoice === 'paper') ||
      (humanChoice === 'paper' && computerChoice === 'rock')
    ) {
      humanScore++;
      roundResult = `You win, ${humanChoice} beats ${computerChoice}`;
    } else {
      computerScore++;
      roundResult = `You lost, ${humanChoice} is beaten by ${computerChoice}`;
    }

    roundsPlayed++;
    resultPara.textContent = roundResult;
    scorePara.textContent = `Scores - You: ${humanScore}, Computer: ${computerScore}`;

    if (roundsPlayed === 5) {
      displayFinalResult();
      start.textContent = 'Restart';
    }
  }

  function displayFinalResult() {
    const finalPara = document.createElement('p');
    if (humanScore > computerScore) {
      finalPara.textContent = 'Congratulations! You won the game!';
    } else if (computerScore > humanScore) {
      finalPara.textContent = 'Sorry, you lost the game. Better luck next time!';
    } else {
      finalPara.textContent = "It's a tie game!";
    }
    play.appendChild(finalPara);
  }

  function resetGame() {
    humanScore = 0;
    computerScore = 0;
    roundsPlayed = 0;
    resultPara.textContent = '';
    scorePara.textContent = '';
    // Remove the final result paragraph if it exists.
    const finalPara = play.querySelector('p:last-child');
    if (finalPara) {
      play.removeChild(finalPara);
    }
    start.textContent = 'Start Game';
  }
});
