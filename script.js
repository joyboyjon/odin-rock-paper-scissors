const rockBtn=document.getElementById("rock");
const paperBtn=document.getElementById("paper");
const scissorsBtn=document.getElementById("scissors");

const humanChoiceDisplay=document.getElementById("humanChoice");
const computerChoiceDisplay=document.getElementById("computerChoice");
const score=document.getElementById("score");

const music= document.getElementById("bg-music");
let toggleMusic=document.getElementById("music-btn");

const gunshot=document.getElementById("gunshot-sound");
let soundEnable=true;
const toggleSound=document.getElementById("sound-btn");

const playerHearts=document.querySelectorAll(".heart-container-player .heart");
let playerHP=5;
const computerHearts=document.querySelectorAll(".heart-container-computer .heart");
let computerHP=5;

const stickmanEnemy=document.querySelector(".stickman-enemy");
const stickmanPlayer=document.querySelector(".stickman-player");

const endScreen=document.getElementById("end-screen");
const endText=document.getElementById("end-text");
const restartBtn=document.getElementById("restart-btn");

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
    if(soundEnable){
        gunshot.currentTime=0;
        gunshot.play();
    }
    const computerChoice=getComputerChoice();
    const result=playRound(humanChoice,computerChoice);
    if (result=="human") {
        humanScore++;
        computerHP--;
        computerHearts[computerHP].src="./images/heart-empty.png";
    }
    if(result=="computer") {
        computerScore++;
        playerHP--;
        playerHearts[playerHP].src="./images/heart-empty.png";
    }

    humanChoiceDisplay.textContent=humanChoice;
    computerChoiceDisplay.textContent=computerChoice;
    score.textContent=`${humanScore} - ${computerScore} `;

    if(humanScore==5) {
        stickmanEnemy.src="./images/enemy-dead.png";
        endGame()
    };

    if(computerScore==5) {
        stickmanPlayer.src="./images/player-dead.png";
        endGame()
    };
    
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
        endText.textContent="YOU WON! :)";
    }
    else endText.textContent="YOU LOST! :(";

    endScreen.classList.remove("hidden");

    rockBtn.disable=true;
    paperBtn.disable=true;
    scissorsBtn.disable=true;
}

toggleMusic.addEventListener("click",()=>{
    if(music.paused){
        music.volume=0.7;
        toggleMusic.style.backgroundImage='url("./images/music-on.png")';
        music.play();
    } else {
        music.pause();
        toggleMusic.style.backgroundImage='url("./images/music-off.png")';
    }
});

toggleSound.addEventListener("click",()=>{
    soundEnable=!soundEnable;
    if(soundEnable){
        toggleSound.style.backgroundImage='url("./images/sound-on.png")';
    }else{
        toggleSound.style.backgroundImage='url("./images/sound-off.png")';
    }
})

document.addEventListener("click",()=>{
    music.volume=0.7;
    music.play();
},{once:true});

restartBtn.addEventListener("click",()=>{
    humanScore=0;
    computerScore=0;
    playerHP=5;
    computerHP=5;
    gameOver=false;

    score.textContent="0 - 0";
    humanChoiceDisplay.textContent="";
    computerChoiceDisplay.textContent="";

    playerHearts.forEach(h=>h.src="./images/heart-full.png");
    computerHearts.forEach(h => h.src = "./images/heart-full.png");

    stickmanPlayer.src = "./images/player.png";
    stickmanEnemy.src = "./images/enemy.png";

    endScreen.classList.add("hidden");
});
