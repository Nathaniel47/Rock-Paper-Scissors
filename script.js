function getComputerChoice (){
    //put (Math.random *10) into a variable
    let number =  Math.floor (Math.random() * 10);
    //if the number is divisible by 2 , print "rock"
    if (number % 2 == 0){
        console.log("rock")
    }
    //if the number is divisible by 3, print "paper"
    else if (number % 3 == 0){
        console.log("paper")
    }
    //else print "scissors"
    else{
        console.log("scissors")
    }
}

getComputerChoice()



function getHumanChoice(){
    //use prompt to get user input
    let choice = parseInt(prompt("Enter a number between 0 and 10"))
 //if the number is divisible by 2 , print "rock"
    if (choice % 2 == 0){
        console.log("roc")
    }
    //if the number is divisible by 3, print "paper"
    else if (choice % 3 == 0){
        console.log("pape")
    }
    //else print "scissors"
    else{
        console.log("sciss")
    }
    
}

getHumanChoice()