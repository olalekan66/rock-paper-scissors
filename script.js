document.addEventListener('DOMContentLoaded', () => {
  let humanScore = 0;
  let computerScore = 0;
  let roundsPlayed = 0;

  const start = document.querySelector('#start');
  const play = document.querySelector('#play');

  start.addEventListener('click', () => {
    if (start.textContent === 'Restart') {
      resetGame();
    }

    start.textContent = 'Start Game';
    play.innerHTML = '';

    const rock = document.createElement('button');
    const paper = document.createElement('button');
    const scissors = document.createElement('button');

    rock.textContent = 'Rock';
    paper.textContent = 'Paper';
    scissors.textContent = 'Scissors';

    rock.className = 'humanchoice';
    paper.className = 'humanchoice';
    scissors.className = 'humanchoice';
    const buttonwrapper = document.createElement('div');
    buttonwrapper.className = '.wrapper';

    buttonwrapper.appendChild(rock);
    buttonwrapper.appendChild(paper);
    buttonwrapper.appendChild(scissors);

    play.appendChild(buttonwrapper);

    rock.addEventListener('click', () => playRound('rock'));
    paper.addEventListener('click', () => playRound('paper'));
    scissors.addEventListener('click', () => playRound('scissors'));
  });

  function getComputerChoice() {
    const options = ['rock', 'paper', 'scissors'];
    return options[Math.floor(Math.random() * options.length)];
  }

  function playRound(humanChoice) {
    if (roundsPlayed >= 5) {
      displayFinalResult();
      return;
    }

    const computerChoice = getComputerChoice();
    const resultPara = document.createElement('p');
    resultPara.textContent = `You chose ${humanChoice}, Computer chose ${computerChoice}`;
    play.appendChild(resultPara);

    if (humanChoice === computerChoice) {
      resultPara.textContent += " - It's a tie!";
    } else if (
      (humanChoice === 'rock' && computerChoice === 'scissors') ||
      (humanChoice === 'scissors' && computerChoice === 'paper') ||
      (humanChoice === 'paper' && computerChoice === 'rock')
    ) {
      humanScore++;
      resultPara.textContent += " - You win this round!";
    } else {
      computerScore++;
      resultPara.textContent += " - Computer wins this round!";
    }

    roundsPlayed++;
    const scorePara = document.createElement('p');
    scorePara.textContent = `Scores => You: ${humanScore}, Computer: ${computerScore}`;
    play.appendChild(scorePara);

    if (roundsPlayed === 5) {
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
    play.innerHTML = '';
    start.textContent = 'Start Game';
  }
});
