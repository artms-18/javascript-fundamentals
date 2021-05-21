const getUserChoice = userInput => {
  userInput = userInput.toLowerCase()
  if (userInput === 'rock' || userInput === 'paper' || userInput === 'scissors'|| userInput === 'bomb') {
  return userInput;
} else {
  console.log("Error!")
}};

 let choice = getUserChoice("Bomb")
//getUserChoice('apple')

function getComputerChoice() {
  num = Math.floor(Math.random() * 3)
  switch (num) {
    case 0:
      return 'rock';
    case 1:
      return 'paper';
    case 2:
      return 'scissors';
  }
}

let comp_choice = getComputerChoice()

function determineWinner(userChoice, computerChoice) {
  if (userChoice === computerChoice) {
    return "tied"
  } if (userChoice == 'rock') {
    if (computerChoice === 'paper') {
      return 'you lost'
    } else {
      return 'you won'
    }
  } if (userChoice === 'paper') {
    if (computerChoice === 'scissors') {
      return 'you lost'
    } else {
      return 'you won'
    }
  } if (userChoice === 'scissors') {
    if (computerChoice === 'rock') {
      return 'you lost'
    } else {
      return 'you won'
    }
  } if (userChoice === 'bomb') {
    return "you won"
  }
}

//console.log(determineWinner(choice, comp_choice))

function playGame(choice){
  userChoice = getUserChoice(choice)
  computerChoice = getComputerChoice()
  console.log("you played " + userChoice)
  console.log("the computer played " + computerChoice)
  console.log(determineWinner(userChoice, computerChoice))
}

playGame("bomb")
