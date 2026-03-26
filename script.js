const rockBtn=document.getElementById("rock");
const paperBtn=document.getElementById("paper");
const scissorsBtn=document.getElementById("scissors");

const humanChoiceDisplay=document.getElementById("humanChoice");
const computerChoiceDisplay=document.getElementById("computerChoice");
const score=document.getElementById("score");

humanScore=0;
computerScore=0;
gameOver=false;

function getComputerChoice(){
    let choice=Math.floor((Math.random()*3)+1);
    if(choice==1) return "rock";
    else if(choice ==2) return "paper";
    else return "scissors";
}

function handleClick( humanChoice){
    if(gameOver) return;
    const computerChoice=getComputerChoice();
    const result=playRound(humanChoice,computerChoice);
    if (result=="human") humanScore++
    if(result=="computer") computerScore++;

    humanChoiceDisplay.textContent=humanChoice;
    computerChoiceDisplay.textContent=computerChoice;
    score.textContent=`${humanScore} - ${computerScore} `;

    if(humanScore==5 || computerScore==5) endGame();

    
}

rockBtn.addEventListener("click", ()=>{
    handleClick("rock");
})
paperBtn.addEventListener("click", ()=>{
    handleClick("paper");
})
scissorsBtn.addEventListener("click", ()=>{
    handleClick("scissors");
})

function playRound(humanChoice,computerChoice){
    if((humanChoice=="rock"&&computerChoice=="scissors")||
(humanChoice=="paper"&&computerChoice=="rock")||(humanChoice=="scissors"&&computerChoice=="paper"))
    return "human";
else if((humanChoice=="scissors"&&computerChoice=="rock")||
(humanChoice=="rock"&&computerChoice=="paper")||(humanChoice=="paper"&&computerChoice=="scissors"))
    return "computer";
    else return "tie";
}

function endGame(){
    gameOver=true;
    if(humanScore==5){
        alert("You won the game! :)");
    }
    else alert("You lost:(");

    rockBtn.disable=true;
    paperBtn.disable=true;
    scissorsBtn.disable=true;
}



