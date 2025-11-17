let humanScore = 0;
let computerScore = 0;

function getComputerChoice (){
    //put (Math.random *10) into a variable
    let number =  Math.round (Math.random() * 10);
    //if the number is divisible by 2 , print "rock"
    if (number % 2 == 0 && number % 3 == 0){
        return ("rock")
    }
    //if the number is divisible by 3, print "paper"
    else if (number % 2 == 0){
        return ("paper")
    }
    //else print "scissors"
    else{
        return ("scissors")
    }
}



function getHumanChoice(){
    //use prompt to get user input
    let choice = prompt("Input your choice")
    return choice
}



function playRound(humanChoice, computerChoice){
    humanChoice = humanChoice.toLowerCase();

    if (humanChoice === computerChoice) {
        console.log("There was a tie!")
        humanScore++;
        computerScore++;
    } 
    else if (humanChoice === "rock" && computerChoice === "paper"){
        console.log("You lose! Paper beats Rock")
        computerScore++;
    }
    else if (humanChoice === "paper" && computerChoice === "scissors"){
        console.log("You lose! Scissors beats Paper")
        computerScore++;
    }
    else if (humanChoice === "scissors" && computerChoice === "rock"){
        console.log("You lose! Rock beats Scissors")
        computerScore++;
    }
    else if (humanChoice === "paper" && computerChoice == "rock"){
        console.log("You win! Paper beats Rock")
        humanScore++;
    }
     else if (humanChoice === "scissors" && computerChoice === "paper"){
        console.log("You win! Scissors beats Paper")
        humanScore++;
    }
    else{
        console.log("You win! Rock beats Scissors")
        humanScore++;
    }

}




function playGame(){
for (let i = 1; i <= 5; i++) {
let humanChoice = getHumanChoice();
let computerChoice = getComputerChoice();

playRound(humanChoice, computerChoice);
}

if (computerScore > humanScore){
    alert(`Computer wins with a score of ${computerScore} against ${humanScore}`)
}
else if (humanScore > computerScore){
    alert(`You win with a score of ${humanScore} against ${computerScore}`)
}
else {
    alert(`Both wins with a score of ${humanScore}:${computerScore}`)
}
}

playGame();