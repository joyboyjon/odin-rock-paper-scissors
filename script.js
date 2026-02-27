

function getComputerChoice(){
    let choice=Math.floor((Math.random()*3)+1);
    if(choice==1) return "rock";
    else if(choice ==2) return "paper";
    else return "scissors";
}


function getHumanChoice(){
   let choice= prompt("Make your choice: ");
   return choice;
}

function playRound(humanChoice,computerChoice){
    if(humanChoice.toLowerCase()==computerChoice){
        console.log("Equal round!");
        return "tie";
    }
    else if((humanChoice.toLowerCase()=="rock" && computerChoice=="paper") || 
    (humanChoice.toLowerCase()=="paper" && computerChoice=="scissors") ||
    (humanChoice.toLowerCase()=="scissors" && computerChoice=="rock")){
        console.log(`You lose! ${computerChoice.charAt(0).toUpperCase()+computerChoice.slice(1)}`+
         ` beats ${humanChoice.charAt(0).toUpperCase()+humanChoice.slice(1)} :(`);
        return "computer";
    }else {
        console.log(`You win! ${humanChoice.charAt(0).toUpperCase()+humanChoice.slice(1)}`+
         ` beats ${computerChoice.charAt(0).toUpperCase()+computerChoice.slice(1)} :)`);
        return "human";
    }
}

function playGame(){
    let humanScore=0;
    let computerScore=0;

    for(let i=0;i<5;i++){
        const humanChoice=getHumanChoice();
        const computerChoice=getComputerChoice();

        const result=playRound(humanChoice,computerChoice);
        if(result=="human") humanScore++;
        if(result=="computer") computerScore++;
    }

    console.log("Final Score: ");
    console.log("Player: "+humanScore);
    console.log("Computer: "+computerScore);

    if(humanScore>computerScore) console.log("Good job! You WON the game!");
    else if(humanScore<computerScore) console.log("Bad for you! You LOST!");
    else console.log("It's a tie :D");
}

playGame();


