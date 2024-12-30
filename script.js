let humanScore = 0;
    let computerScore = 0;

    function getComputerChoice(){
      const options = ['rock', 'paper', 'scissors'];
      const choice = options[Math.floor(Math.random() * options.length)];
      console.log(`Computer chose: ${choice}`);
      return choice;
    }

    function getHumanChoice(){
     const Choice = prompt('Type in your choice');
      if (Choice.toLowerCase() === 'rock' || Choice.toLowerCase() === 'paper' || Choice.toLowerCase() === 'scissors'){
        console.log(`You chose: ${Choice}`);
        return Choice.toLowerCase();
      }
      else{
        alert('Invalid choice, pls choose either rock, paper or scissors');
        return null;
      }
    }



    function playRound(humanChoice, computerChoice){
      if (!humanChoice || !computerChoice){
        console.log('Invalid round, no winner.');
        return;
      }
          
      if (humanChoice === computerChoice){
        console.log("it's a tie")
        return null;
      }
      else if (
        (humanChoice === 'rock' && computerChoice === 'scissors') ||
        (humanChoice === 'scissors' && computerChoice === 'paper') ||
        (humanChoice === 'paper' && computerChoice === 'rock')
        ){
          humanScore += 1;
          console.log(`You win, ${humanChoice} beats ${computerChoice}`);
        winner = 'human';
        }
      else {
        computerScore += 1;
        console.log(`You lose, ${computerChoice} beats ${humanChoice}`);
        winner = 'computer';
        }
      console.log(`Scores -> You: ${humanScore}, Computer: ${computerScore}`)
      return winner;
    }

    function playGame(){
      const totalRounds = 5;
      let humanWins = 0;
      let computerWins = 0;
      for (let i = 1; i <= 5; i++){
        console.log(`Playing Round ${i}`);
        const humanSelection = getHumanChoice();
        const computerSelection = getComputerChoice();
        result = playRound(humanSelection, computerSelection);
        if(result === 'human'){
        humanWins += 1;
        }
        else if (result === 'computer'){
        computerWins += 1;
        }
    }
    console.log('Game Over!')
    if (humanWins > computerWins){
      console.log('Congratulations, You won the game!')
    }
    else if(computerWins > humanWins){
      console.log('Computer wins! Try again?')
    }
    else{
      console.log("It's a tie Game")
    }
    }
    playGame();