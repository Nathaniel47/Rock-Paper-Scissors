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


const results = document.querySelector('#results');




function playRound(humanChoice){
    humanChoice = humanChoice.toLowerCase();
    let computerChoice = getComputerChoice();

    const commentSpan = document.createElement('span');

    if (humanChoice === computerChoice) {
        
        commentSpan.textContent = "There was a tie! \n ";
        results.appendChild(commentSpan);
        humanScore++;
        computerScore++;
    } 
    else if (humanChoice === "rock" && computerChoice === "paper"){
        commentSpan.textContent = "You lose! Paper beats Rock \n ";
        results.appendChild(commentSpan);
        computerScore++;
    }
    else if (humanChoice === "paper" && computerChoice === "scissors"){
        commentSpan.textContent = "You lose! Scissors beats Paper \n ";
        results.appendChild(commentSpan);
        computerScore++;
    }
    else if (humanChoice === "scissors" && computerChoice === "rock"){
        commentSpan.textContent = "You lose! Rock beats Scissors \n ";
        results.appendChild(commentSpan);
        computerScore++;
    }
    else if (humanChoice === "paper" && computerChoice == "rock"){
        commentSpan.textContent = "You win! Paper beats Rock \n ";
        results.appendChild(commentSpan);
        humanScore++;
    }
     else if (humanChoice === "scissors" && computerChoice === "paper"){
        commentSpan.textContent = "You win! Scissors beats Paper \n ";
        results.appendChild(commentSpan);
        humanScore++;
    }
    else{
        commentSpan.textContent = "You win! Rock beats Scissors \n ";
        results.appendChild(commentSpan);
        humanScore++;
    }

};

const scoreSpan = document.createElement('span');
scoreSpan.style.cssText = 'background-color:green; font-weight: bold; color: white; padding: 10px; margin: 10px; border-radius: 10px; display: block;';

function playGame(){
if (computerScore > humanScore){
    scoreSpan.textContent = ` \n Computer wins with a score of ${computerScore} against ${humanScore}`;

    results.appendChild(scoreSpan);
}
else if (humanScore > computerScore){
    scoreSpan.textContent = `You win with a score of ${humanScore} against ${computerScore}`;

    results.appendChild(scoreSpan);
}
else {
    scoreSpan.textContent = `It's a tie! With a score of ${humanScore}:${computerScore}`;

    results.appendChild(scoreSpan);
}
};



const rockBtn = document.querySelector("#rock");
rockBtn.addEventListener('click',() =>{ 
    playRound('rock');
    if (computerScore === 5 || humanScore === 5){
    playGame();

    setTimeout(() => {results.innerHTML = '';}, 5000);

    computerScore = 0;
    humanScore = 0;
}
});

const paperBtn = document.querySelector("#paper");
paperBtn.addEventListener('click',() =>{ 
    playRound('paper');
    if (computerScore === 5 || humanScore === 5){
    playGame();
    
    setTimeout(() => {results.innerHTML = '';}, 5000);

    computerScore = 0;
    humanScore = 0;

}
});

const scissorsBtn = document.querySelector("#scissors");
scissorsBtn.addEventListener('click',() =>{ 
    playRound('scissors');
    if (computerScore === 5 || humanScore === 5){
    playGame();

    setTimeout(() => {results.innerHTML = '';}, 5000);
        
    computerScore = 0;
    humanScore = 0;

}
});
